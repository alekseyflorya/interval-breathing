import React from "react"
import Slider from "react-slick"
import {connect} from 'react-redux'

const audioTracks = [
  {type: 'audio', name: 'Audio', id: 0},
  {type: 'audio', name: 'Audio', id: 1},
  {type: 'audio', name: 'Audio', id: 2},
  {type: 'audio', name: 'Audio', id: 3},
  {type: 'audio', name: 'Audio', id: 4},
  {type: 'music', name: 'Music', id: 0},
  {type: 'music', name: 'Music', id: 1},
  {type: 'music', name: 'Music', id: 2},
  {type: 'music', name: 'Music', id: 3},
  {type: 'music', name: 'Music', id: 4},
  {type: 'binaural', name: 'Binaural', id: 0},
  {type: 'binaural', name: 'Binaural', id: 1},
  {type: 'binaural', name: 'Binaural', id: 2},
  {type: 'binaural', name: 'Binaural', id: 3},
  {type: 'binaural', name: 'Binaural', id: 4}
]


function AudioSlider({type, audio}) {

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

  const tracks = audioTracks.filter(item => item.type === type).map(({type, name, id}) => (
    <div key={id}>
      <h4 style={{fontWeight: `${ audio.type === type && audio.id === id ? 'bold': 'normal' }`}}>{name} {id+1}</h4>
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
  audio: state.params.audio,
});

export default connect(mapStateToProps)(AudioSlider)