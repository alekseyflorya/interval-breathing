import React from "react"
import Slider from "react-slick"
import {connect} from 'react-redux'

const audioTracks = [
  {type: 'audio', name: 'Audio 1', id: 0},
  {type: 'audio', name: 'Audio 2', id: 1},
  {type: 'audio', name: 'Audio 3', id: 2},
  {type: 'audio', name: 'Audio 4', id: 3},
  {type: 'audio', name: 'Audio 5', id: 4},
  {type: 'music', name: 'Music 1', id: 5},
  {type: 'music', name: 'Music 2', id: 6},
  {type: 'music', name: 'Music 3', id: 7},
  {type: 'music', name: 'Music 4', id: 8},
  {type: 'music', name: 'Music 5', id: 9},
  {type: 'binaural', name: 'Binaural 1', id: 10},
  {type: 'binaural', name: 'Binaural 2', id: 11},
  {type: 'binaural', name: 'Binaural 3', id: 12},
  {type: 'binaural', name: 'Binaural 4', id: 13},
  {type: 'binaural', name: 'Binaural 5', id: 14}
]


function AudioSlider({type, handleChangeAudio, selectedTrack}) {

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);},
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };

  const changeAudioState = (trackId, trackType) => {
    handleChangeAudio({audio: {trackType: trackType, trackId: trackId}})
  }

  const tracks = audioTracks.filter(item => item.type === type).map(({type, name, id}) => (
    <div key={id}>
      <h4
        className={`text-center ${selectedTrack.trackId === id ? 'selected': null }`}
        onClick={changeAudioState.bind(this, id, type)}
      >
        {name}
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

export default AudioSlider