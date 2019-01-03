import React from 'react'
import ReactDOM from 'react-dom'
import Axios from 'axios';

class TestRender extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            list: [],
            svg: ''
        }
    }

    componentDidMount() {
        Axios.get('https://www.easy-mock.com/mock/5c1e6795e8bfa547414a5341/ajax/render').then(res => {
            console.log(res.data)    
            this.setState({
                    list: res.data.data.result.map(item => item)
                })
            const el = document.querySelectorAll('.test')
            for(let i = 0; i < el.length; i++) {
                el[i].addEventListener('click', function() {
                    console.log(i)
                })
            }    
        })
        Axios.get('mock/svg.json').then(res => {
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
                <p>测试加载顺序</p>
                {
                    this.state.list.length ? this.state.list.map((item) => {
                        return (
                            <button className = "test" key = {item}>{item}</button>
                        )
                        }) : null
                }
                <div>
                    {
                        this.state.svg ? <div className = "svg-box" ref = {
                            (r) => {
                                if(r) {
                                    r.innerHTML = this.state.svg
                                }
                            } 
                        } /> : null 
                    }
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <TestRender />,
    document.getElementById('root')
)