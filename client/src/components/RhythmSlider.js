import React from "react"
import Slider from "react-slick"
import {connect} from 'react-redux'
import {editParams} from "../actions/authActions"

function RhythmSlider({rhythm, editParams, suggestedRhythm}) {

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

  const rhythmHandler = (e) => {
    console.log(e.target.id)
    editParams({suggestedRhythm: Number(e.target.id)})
  }

  const tracks = rhythm.map(({name, id}) => (
    <div key={id}>
      <h4 className={suggestedRhythm === id ? 'active' : null} id={id} onClick={rhythmHandler}>{name}</h4>
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
  suggestedRhythm: state.auth.user.params.suggestedRhythm,
});

export default connect(mapStateToProps, {editParams})(RhythmSlider)