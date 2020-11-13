import React, { Component } from "react";
import {connect} from 'react-redux'
import Slider from "react-slick";
import {editParams} from "../actions/authActions"
import video1 from '../assets/images/video-2.jpg'
import video2 from '../assets/images/video-3.jpg'
import video3 from '../assets/images/video-4.jpg'
import video4 from '../assets/images/video-5.jpg'
import video5 from '../assets/images/video-1.jpg'


const videosArray = [{id: 0, src: video1}, {id: 1, src: video2}, {id: 2, src: video3}, {id: 3, src: video4}, {id: 4, src: video5}];

class VideoSlider extends Component {
  state = {
    videoStateId: this.props.video
  }

  handleVideo(id) {
    this.setState({videoStateId: id})
    this.props.handleChangeVideo(id)
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: this.state.videoStateId,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: this.state.videoStateId
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: this.state.videoStateId
          }
        }
      ]
    };
    const sliderItems = videosArray.map(({id, src}) =>
      <div
        key={id}
        className={`videos-slider-item ${this.state.videoStateId === id ? 'active': null}`}

      >
        <img className="video" src={src} key={id} onClick={this.handleVideo.bind(this, id)} alt="" />
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