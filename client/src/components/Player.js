import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { findDOMNode } from 'react-dom'
import screenfull from 'screenfull'
import {PlayFill, PauseFill, Fullscreen, VolumeOffFill, VolumeMuteFill } from 'react-bootstrap-icons'
import FiguresPlayer from "./FiguresPlayer"
import {connect} from "react-redux"
import IntervalTimer from "./IntervalTimer"

import video1 from '../assets/videos/V-ID-1.mp4'
import video2 from '../assets/videos/V-ID-2.mp4'
import video3 from '../assets/videos/V-ID-3.mp4'
import video4 from '../assets/videos/V-ID-4.mp4'
import video5 from '../assets/videos/V-ID-5.mp4'

import audio11 from '../assets/audio/3d-audio/Heilung Musik fr Krper und Seele - Natrliche Hypnose.mp3'
import audio12 from '../assets/audio/3d-audio/Nature Sound Series Аюрведа - Японская музыка.mp3'
import audio13 from '../assets/audio/3d-audio/Nature Sounds - Nature Sounds for Studying Working  Concentration Forest ambience noise 11.mp3'
import audio14 from '../assets/audio/3d-audio/Nature Sounds - Seaside.mp3'
import audio15 from '../assets/audio/3d-audio/Rain Sounds Rain for Deep Sleep BodyHI - Звуки дождя для сна.mp3'

import audio21 from '../assets/audio/cycle/ring1-1.mp3'
import audio22 from '../assets/audio/cycle/ring1-2.mp3'
import audio23 from '../assets/audio/cycle/ring2-1.mp3'
import audio24 from '../assets/audio/cycle/ring2-2.mp3'

import audio31 from '../assets/audio/music/15 Тихое фортепиано - Держите ваше внимание высоким.mp3'
import audio32 from '../assets/audio/music/Relaxation Meditation Songs Divine - Свтло на вод.mp3'
import audio33 from '../assets/audio/music/Академия глубокой релаксации - горный поток.mp3'
import audio34 from '../assets/audio/music/Инструментальная Зона Отдыха - Физическое восстановление.mp3'
import audio35 from '../assets/audio/music/Оазис глубокой сна - Быстрый сон с фортепиано.mp3'


const videosArray = [{id: 0, src: video1}, {id: 1, src: video2}, {id: 2, src: video3}, {id: 3, src: video4}, {id: 4, src: video5}];
const audioArray = [
  {type: 'audio', name: 'Audio', id: 0, src: audio11},
  {type: 'audio', name: 'Audio', id: 1, src: audio12},
  {type: 'audio', name: 'Audio', id: 2, src: audio13},
  {type: 'audio', name: 'Audio', id: 3, src: audio14},
  {type: 'audio', name: 'Audio', id: 4, src: audio15},
  {type: 'music', name: 'Music', id: 5, src: audio21},
  {type: 'music', name: 'Music', id: 6, src: audio22},
  {type: 'music', name: 'Music', id: 7, src: audio23},
  {type: 'music', name: 'Music', id: 8, src: audio24},
  {type: 'binaural', name: 'Binaural', id: 9, src: audio31},
  {type: 'binaural', name: 'Binaural', id: 10, src: audio32},
  {type: 'binaural', name: 'Binaural', id: 11, src: audio33},
  {type: 'binaural', name: 'Binaural', id: 12, src: audio34},
  {type: 'binaural', name: 'Binaural', id: 13, src: audio35}
]

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
    inhale: this.props.inhale,
    delay: this.props.delay,
    exhale: this.props.exhale,
    pause: this.props.pause,

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
    screenfull.request(findDOMNode(this.timer))
  }

  ref = player => {
    this.player = player
  }
  timerRef = timer => {
    this.timer = timer
  }
  audioSrc = audioArray.filter(({id}) => id === this.props.audio.trackId)[0]


  render() {
    const { url, playing, controls, light, volume, muted, loop, playbackRate, pip, inhale, exhale, delay, pause} = this.state

    const timerDuration = Number(inhale + exhale + delay + pause)

    console.log('timerDuration ', timerDuration)

    const inhaleItemStyle = {
      border: '3px solid #00B0F0',
      width: 50,
      height: inhale*20 + 'px',
    }

    const delayItemStyle = {
      border: '3px solid #ED7D31',
      width: 50,
      height: delay*20 + 'px',
    }

    const exhaleItemStyle = {
      border: '3px solid #00B0F0',
      width: 50,
      height: exhale*20 + 'px',
    }

    const pauseItemStyle = {
      border: '3px solid #00B050',
      width: 50,
      height: pause*20 + 'px',
    }

    const inhaleItemFill = {
      backgroundColor: '#00B0F0',
      width: '100%',
      height: 0 + '%',
      transition: 'all ' + inhale + 's'
    }

    const delayItemFill = {
      backgroundColor: '#ED7D31',
      width: '100%',
      height: 0 + '%',
      transition: 'all ' + delay + 's'
    }

    const exhaleItemFill = {
      backgroundColor: '#00B0F0',
      width: '100%',
      height: 0 + '%',
      transition: 'all ' + exhale + 's'
    }

    const pauseItemFill = {
      backgroundColor: '#00B050',
      width: '100%',
      height: 0 + '%',
      transition: 'all ' + pause + 's'
    }

    return (
      <>
        {this.props.isVideo ? (
          <div className="player-container" ref={this.timerRef}>
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
            {/*<IntervalTimer />*/}
            <div className="interval-timer">
              <div className="interval-timer-item" style={inhaleItemStyle}><div style={inhaleItemFill} /></div>
              <div className="interval-timer-item" style={delayItemStyle}><div style={delayItemFill} /></div>
              <div className="interval-timer-item" style={exhaleItemStyle}><div style={exhaleItemFill} /></div>
              <div className="interval-timer-item" style={pauseItemStyle}><div style={pauseItemFill} /></div>
            </div>
          </div>
        ) : (
          <FiguresPlayer />
        )}
        <ReactPlayer
          url={this.audioSrc.src}
          volume={volume}
          muted={muted}
          loop={loop}
          playing={playing}
          onPlay={this.handlePlay}
          onPause={this.handlePause}
          width="0"
          height="0"
        />
        <div className="player-controls-container">
          <button className={playing ? 'pause-btn': 'play-btn'} onClick={playing ? this.handlePause : this.handlePlay }>
            {playing ? <PauseFill/> : <PlayFill />}
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
  audio: state.auth.user.params.audio,
  colour: state.auth.user.params.colour,
  figure: state.auth.user.params.figure,
  isVideo: state.auth.user.params.isVideo,
  inhale: state.auth.user.params.inhale,
  delay: state.auth.user.params.delay,
  exhale: state.auth.user.params.exhale,
  pause: state.auth.user.params.pause
});

export default connect(mapStateToProps)(Player)