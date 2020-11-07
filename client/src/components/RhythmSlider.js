import React from "react"
import Slider from "react-slick"
import {connect} from 'react-redux'

function RhythmSlider({rhythms}) {

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);},
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };

  const tracks = rhythms.map(({name, id}) => (
    <div key={id}>
      <h4>{name}</h4>
    </div>
  ))

  return (
    <>
      <div className="audio-slider-container col-sm-6">
        <Slider {...settings}>
          {tracks}
        </Slider>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  audio: state.auth.user.params.audio,
});

export default connect(mapStateToProps)(RhythmSlider)