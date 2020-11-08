import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { findDOMNode } from 'react-dom'
import screenfull from 'screenfull'
import {PlayFill, PauseFill, Fullscreen, VolumeOffFill, VolumeMuteFill } from 'react-bootstrap-icons'
import FiguresPlayer from "./FiguresPlayer";
import {connect} from "react-redux";

import video1 from '../assets/videos/V-ID-1.mp4'
import video2 from '../assets/videos/V-ID-2.mp4'
import video3 from '../assets/videos/V-ID-3.mp4'
import video4 from '../assets/videos/V-ID-4.mp4'
import video5 from '../assets/videos/V-ID-5.mp4'

const videosArray = [{id: 0, src: video1}, {id: 1, src: video2}, {id: 2, src: video3}, {id: 3, src: video4}, {id: 4, src: video5}];

class Player extends Component {

  state = {
    url: videosArray[this.props.video].src,
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: true,
  }

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false
    })
  }

  handleVolumeChange = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }

  handleToggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }

  handlePlay = () => {
    console.log('onPlay')
    this.setState({ playing: true })
  }

  handleEnablePIP = () => {
    console.log('onEnablePIP')
    this.setState({ pip: true })
  }

  handleDisablePIP = () => {
    console.log('onDisablePIP')
    this.setState({ pip: false })
  }

  handlePause = () => {
    console.log('onPause')
    this.setState({ playing: false })
  }

  handleProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  handleEnded = () => {
    console.log('onEnded')
    this.setState({ playing: this.state.loop })
  }

  handleDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration })
  }

  handleClickFullscreen = () => {
    screenfull.request(findDOMNode(this.player))
  }

  ref = player => {
    this.player = player
  }

  render() {
    const { url, playing, controls, light, volume, muted, loop, playbackRate, pip } = this.state

    return (
      <>
        {this.props.isVideo ? (
          <div className="player-container">
            <ReactPlayer
              ref={this.ref}
              className='react-player'
              width='100%'
              height='100%'
              url={url}
              pip={pip}
              playing={playing}
              controls={controls}
              light={light}
              loop={loop}
              playbackRate={playbackRate}
              volume={volume}
              muted={muted}
              onReady={() => console.log('onReady')}
              onStart={() => console.log('onStart')}
              onPlay={this.handlePlay}
              onEnablePIP={this.handleEnablePIP}
              onDisablePIP={this.handleDisablePIP}
              onPause={this.handlePause}
              onBuffer={() => console.log('onBuffer')}
              onSeek={e => console.log('onSeek', e)}
              onEnded={this.handleEnded}
              onError={e => console.log('onError', e)}
              onProgress={this.handleProgress}
              onDuration={this.handleDuration}
            />
          </div>
        ) : (
          <FiguresPlayer />
        )}

        <div className="player-controls-container">
          <button className="play-btn" onClick={this.handlePlay}>
            <PlayFill />
          </button>
          <button className="pause-btn" onClick={this.handlePause}>
            <PauseFill />
          </button>
          <button className="fullscreen-btn float-right" onClick={this.handleClickFullscreen}>
            <Fullscreen />
          </button>
          <input id='muted' className="float-right d-none" type='checkbox' checked={muted} onChange={this.handleToggleMuted} />
          <input className="custom-range volume-range float-right" type='range' min={0} max={1} step='any' value={volume} onChange={this.handleVolumeChange} />

          <label htmlFor='muted' className="muted-label float-right">
            {muted ? (<VolumeMuteFill />) : (<VolumeOffFill />)}
          </label>
        </div>
      </>
    );
  };
}

const mapStateToProps = state => ({
  video: state.auth.user.params.video,
  colour: state.auth.user.params.colour,
  figure: state.auth.user.params.figure,
  isVideo: state.auth.user.params.isVideo,
});

export default connect(mapStateToProps)(Player)