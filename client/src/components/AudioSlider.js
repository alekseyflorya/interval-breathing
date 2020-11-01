import React, { Component } from "react";
import Slider from "react-slick";
import audio from '../assets/audio/background-sound-low-gain.mp3'

export default class AudioSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    };
    return (
      <>
      <div className="audio-slider-container">
        <Slider {...settings}>
          <div>
            <h3>Track 1</h3>
          </div>
          <div>
            <h3>Track 2</h3>
          </div>
          <div>
            <h3>Track 3</h3>
          </div>
          <div>
            <h3>Track 4</h3>
          </div>
          <div>
            <h3>Track 5</h3>
          </div>
        </Slider>
      </div>
      </>
    );
  }
}