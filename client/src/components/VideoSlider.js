import React, { Component } from "react";
import {connect} from 'react-redux'
import Slider from "react-slick";
import {editParams} from "../actions/authActions"
import video1 from '../assets/videos/V-ID-1.mp4'
import video2 from '../assets/videos/V-ID-2.mp4'
import video3 from '../assets/videos/V-ID-3.mp4'
import video4 from '../assets/videos/V-ID-4.mp4'
import video5 from '../assets/videos/V-ID-5.mp4'


const videosArray = [{id: 0, src: video1}, {id: 1, src: video2}, {id: 2, src: video3}, {id: 3, src: video4}, {id: 4, src: video5}];

class VideoSlider extends Component {
  state = {
    videoStateId: this.props.video
  }

  handleVideo(id) {
    this.setState({videoStateId: id})
    this.props.editParams({video: Number(id)})
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0
    };
    const sliderItems = videosArray.map(({id, src}) =>
      <div
        key={id}
        className={`videos-slider-item ${this.props.video === id ? 'active': null}`}

      >
        <video src={src} key={id} onClick={this.handleVideo.bind(this, id)} />
      </div>
    )

    return (
      <>
        <div className="videos-slider">
          <Slider {...settings}>
            {sliderItems}
          </Slider>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  video: state.auth.user.params.video,
  isVideo: state.auth.user.params.isVideo
});

export default connect(mapStateToProps, {editParams})(VideoSlider)