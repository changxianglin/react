import React, { Component } from 'react'
import Slider from 'react-slick'

export default class Category extends Component {
  render() {
      const settings = {
          dots: true,
          arrow: false,
          slidesToShow: 1,
          swiperToslide: true,
          autoplay: true
      }
    return (
      <div>
        <Slider {...settings}>
            {
                dataSource.map((section, index) => {
                    return 
                })
            }
        </Slider>
      </div>
    )
  }
}
