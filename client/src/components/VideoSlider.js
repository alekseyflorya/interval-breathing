import React, { Component } from "react";
import Slider from "react-slick";
import video1 from '../assets/videos/V-ID-1.mp4'
import video2 from '../assets/videos/V-ID-2.mp4'
import video3 from '../assets/videos/V-ID-3.mp4'
import video4 from '../assets/videos/V-ID-4.mp4'
import video5 from '../assets/videos/V-ID-5.mp4'


const videosArray = [video1, video2, video3, video4, video5];

export default class VideoSlider extends Component {

  render() {
    console.log(videosArray);
    const settings = {
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0
    };
    const sliderItems = videosArray.map((item, index) =>
      <div className="videos-slider-item">
        <video src={item} key={index} />
      </div>
    )
    return (
      <div className="videos-slider">
        <Slider {...settings}>
          {sliderItems}
        </Slider>
      </div>
    );
  }
}