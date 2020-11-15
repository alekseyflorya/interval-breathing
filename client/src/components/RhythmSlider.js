import React from "react"
import Slider from "react-slick"

function RhythmSlider({rhythms, selectedSuggestedRhythm, changeSuggestedRhythm}) {

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

  const rhythmHandler = (e) => {
    changeSuggestedRhythm(Number(e.target.id))
  }

  const tracks = rhythms.map(({name, id}) => (
    <div key={id}>
      <h4 className={selectedSuggestedRhythm === id ? 'text-center selected' : 'text-center'} id={id} onClick={rhythmHandler}>{name}</h4>
    </div>
  ))

  return (
    <>
      <div className="audio-slider-container col-sm-12 col-md-11 col-lg-9">
        <Slider {...settings}>
          {tracks}
        </Slider>
      </div>
    </>
  );
}

export default RhythmSlider