import React from 'react'
import Axios from 'axios'

class TestSVG extends React.Component {

    state = {
        svg: ''
    }
    componentDidMount() {
        Axios.get('/svg').then(res => {
            this.setState({
                svg: res.data
            })

            let transform = {
                svgScale: 0.5, // svg 默认缩放
                scale: 1, // svg-box 缩放
                maxScale: 7, // svg-box 最大缩放
                minScale: 1,  // svg-box 最小缩放
                translateX: 0, // svg X轴偏移
                translateY: 0, // svg Y轴偏移
                minX: 0, // svg 最小X轴偏移
                maxX: 0, // svg 最大X轴偏移
                minY: 0, // svg 最小Y轴偏移
                maxY: 0  // svg 最大Y轴偏移
              }
              document.querySelector('.svg-box').addEventListener('click', selectSeat)
              initMapAction()
              // svg 点击事件 选座
              function selectSeat (e) {
                if (e.target.tagName !== 'circle') return false
                e.target.style.fill = e.target.style.fill === 'red' ? '#ccc' : 'red'
                // do something...
              }
              // 初始化
              function initMapAction () {
                let svgTarget = document.querySelector('svg')
                let svgBox = document.querySelector('.svg-box')
                transform.translateX = Math.round((svgBox.clientWidth - svgTarget.clientWidth) / 2)
                transform.translateY = Math.round((svgBox.clientHeight - svgTarget.clientHeight) / 2)
                transform.minX = transform.translateX - svgBox.clientWidth / 4
                transform.maxX = transform.translateX + svgBox.clientWidth / 4
                transform.minY = transform.translateY - svgBox.clientHeight / 2.5
                transform.maxY = transform.translateY + svgBox.clientHeight / 2.5
                let defaultTransform = `translate(${transform.translateX}px, ${transform.translateY}px) scale(${transform.svgScale})`
                svgTarget.style.transform = defaultTransform
                let svgHam = new window.Hammer(svgBox)
                svgHam.get('pinch').set({ enable: true })
                // svgHam.add(new Hammer.Pinch({ threshold: 0 }))
                // svgHam.add(new Hammer.Pan({ threshold: 0, pointers: 0 }))
                svgHam.get('pan').set({ direction: window.Hammer.DIRECTION_ALL })
                svgHam.on('pinchstart pinchmove', (e) => {
                  let { scale, maxScale, minScale } = transform
                  scale *= e.scale
                  scale = scale >= maxScale ? maxScale : scale
                  scale = scale <= minScale ? minScale : scale
                  transform.scale = scale
                  svgBox.style.transform = `scale(${scale})`
                })
                function checkXY(x, y) {
                  let { minX, minY, maxX, maxY } = transform
                  x = x > maxX ? maxX : x
                  x = x < minX ? minX : x
                  y = y > maxY ? maxY : y
                  y = y < minY ? minY : y
                  return {
                    x,
                    y
                  }
                }
                svgHam.on('panstart panmove', (e) => {
                  let { scale, translateX, translateY, svgScale } = transform
                  let y = translateY + e.deltaY / scale
                  let x = translateX + e.deltaX / scale
                  let validXY = checkXY(x, y)
                  svgTarget.style.transform = `translate(${validXY.x}px, ${validXY.y}px) scale(${svgScale})`
                })
                svgHam.on('panend', (e) => {
                  let { scale, translateX, translateY} = transform
                  let y = translateY + e.deltaY / scale
                  let x = translateX + e.deltaX / scale
                  let validXY = checkXY(x, y)
                  transform.translateY = validXY.y
                  transform.translateX = validXY.x
                  console.log(e.deltaY, e.deltaX, transform.translateX, transform.translateY)
                })
              }

        })
    }
    render() {
        return (
            <div>
                werwrwer
                <div className="ticket-map">
                    <div className="svg-box"
                            ref = {(r) => {
                                if(r) {
                                    r.innerHTML = this.state.svg
                                }
                            }}
                        >
                    </div>
                </div>
            </div>
        )
    }
}

export default TestSVG