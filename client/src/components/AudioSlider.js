import React from "react"
import Slider from "react-slick"
import {connect} from 'react-redux'
import {editParams} from "../actions/authActions"

const audioTracks = [
  {type: 'audio', name: 'Audio', id: 0},
  {type: 'audio', name: 'Audio', id: 1},
  {type: 'audio', name: 'Audio', id: 2},
  {type: 'audio', name: 'Audio', id: 3},
  {type: 'audio', name: 'Audio', id: 4},
  {type: 'music', name: 'Music', id: 5},
  {type: 'music', name: 'Music', id: 6},
  {type: 'music', name: 'Music', id: 7},
  {type: 'music', name: 'Music', id: 8},
  {type: 'binaural', name: 'Binaural', id: 9},
  {type: 'binaural', name: 'Binaural', id: 10},
  {type: 'binaural', name: 'Binaural', id: 11},
  {type: 'binaural', name: 'Binaural', id: 12},
  {type: 'binaural', name: 'Binaural', id: 13}
]


function AudioSlider({type, audio, editParams}) {

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

  const handleClick = (e) => {
    editParams({audio: {trackType: e.target.title, trackId: Number(e.target.id)}})
  }

  const tracks = audioTracks.filter(item => item.type === type).map(({type, name, id}) => (
    <div key={id}>
      <h4
        className={`${audio.trackId === id ? 'active': null }`}
        style={{fontWeight: `${audio.trackId === id ? 'bold': 'normal' }`}}
        id={id}
        title={type}
        onClick={handleClick}
      >
        {name} {id+1}
      </h4>
    </div>
  ))

  return (
    <>
      <div className="audio-slider-container">
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

export default connect(mapStateToProps, {editParams})(AudioSlider)