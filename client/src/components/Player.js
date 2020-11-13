import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { findDOMNode } from 'react-dom'
import screenfull from 'screenfull'
import {PlayFill, PauseFill, Fullscreen, VolumeOffFill, VolumeMuteFill } from 'react-bootstrap-icons'
// import FiguresPlayer from "./FiguresPlayer"
import {connect} from "react-redux"
import { CountdownCircleTimer } from "react-countdown-circle-timer";

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

import audio21 from '../assets/audio/cycle/Meditation Music Zone - Успокойся.mp3'
import audio22 from '../assets/audio/cycle/Meditation Music Zone - Флейта музыка.mp3'
import audio23 from '../assets/audio/cycle/Relaxation Meditation Songs Divine - Вдчуваю любов.mp3'
import audio24 from '../assets/audio/cycle/Relaxation Meditation Songs Divine - Кольоров метелики.mp3'
import audio25 from '../assets/audio/cycle/Relaxation Meditation Songs Divine - Над пррвою.mp3'

import audio31 from '../assets/audio/music/15 Тихое фортепиано - Держите ваше внимание высоким.mp3'
import audio32 from '../assets/audio/music/Relaxation Meditation Songs Divine - Свтло на вод.mp3'
import audio33 from '../assets/audio/music/Академия глубокой релаксации - горный поток.mp3'
import audio34 from '../assets/audio/music/Инструментальная Зона Отдыха - Физическое восстановление.mp3'
import audio35 from '../assets/audio/music/Оазис глубокой сна - Быстрый сон с фортепиано.mp3'

import audioTick from '../assets/audio/cycle/ring1-1.mp3'

const videosArray = [{id: 0, src: video1}, {id: 1, src: video2}, {id: 2, src: video3}, {id: 3, src: video4}, {id: 4, src: video5}];
const audioArray = [
  {type: 'audio', name: 'Audio 1', id: 0, src: audio11},
  {type: 'audio', name: 'Audio 2', id: 1, src: audio12},
  {type: 'audio', name: 'Audio 3', id: 2, src: audio13},
  {type: 'audio', name: 'Audio 4', id: 3, src: audio14},
  {type: 'audio', name: 'Audio 5', id: 4, src: audio15},
  {type: 'music', name: 'Music 1', id: 5, src: audio21},
  {type: 'music', name: 'Music 2', id: 6, src: audio22},
  {type: 'music', name: 'Music 3', id: 7, src: audio23},
  {type: 'music', name: 'Music 4', id: 8, src: audio24},
  {type: 'music', name: 'Music 5', id: 9, src: audio25},
  {type: 'binaural', name: 'Binaural 1', id: 10, src: audio31},
  {type: 'binaural', name: 'Binaural 2', id: 11, src: audio32},
  {type: 'binaural', name: 'Binaural 3', id: 12, src: audio33},
  {type: 'binaural', name: 'Binaural 4', id: 13, src: audio34},
  {type: 'binaural', name: 'Binaural 5', id: 14, src: audio35}
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
    inhale: Number(this.props.inhale),
    delay: Number(this.props.delay),
    exhale: Number(this.props.exhale),
    pause: Number(this.props.pause),
    playedSeconds: 0,
    inhaleDone: true,
    delayDone: false,
    exhaleDone: false,
    pauseDone: false,
    fullscreen: false
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
    this.setState({ playing: true})
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
    this.setState({playing: false})
  }

  handleProgress = state => {
    // console.log('onProgress', state)

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

  handleTogglePlay = () => {
    this.setState({playing: !this.state.playing})
  }

  ref = player => {
    this.player = player
  }
  timerRef = timer => {
    this.timer = timer
  }
  componentDidMount() {
    screenfull.on('change', () => {
      this.setState({fullscreen: screenfull.isFullscreen})
    });
  }

  audioSrc = audioArray.filter(({id}) => id === this.props.audio.trackId)[0]

  render() {
    const {
      url, playing, controls, light, volume, muted, loop, playbackRate, pip,
      inhale, exhale, delay, pause, fullscreen,
      inhaleDone, delayDone, exhaleDone, pauseDone} = this.state

    return (
      <>
        {this.props.isVideo ? (
          <div
            className="player-container"
            ref={this.timerRef}
            style={{borderRadius: fullscreen ? '0' : '50px'}}
          >
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
              onClick={this.handleTogglePlay}
            />
            <div className="interval-timer">
              {inhaleDone && (<CountdownCircleTimer
                size={80}
                isPlaying={playing}
                duration={inhale}
                colors={"#00B0F0"}
                onComplete={() => playing && this.setState({inhaleDone: false, delayDone: true})}
              >
                <ReactPlayer
                  url={audioTick}
                  volume={volume}
                  loop={false}
                  playing={playing && inhaleDone}
                  width="0"
                  height="0"
                />
              </CountdownCircleTimer>)}
              {delayDone && (<CountdownCircleTimer
                size={80}
                isPlaying={playing}
                duration={delay}
                colors={"#ED7D31"}
                onComplete={() => playing && this.setState({delayDone: false, exhaleDone: true})}
              >
                <ReactPlayer
                  url={audioTick}
                  volume={volume}
                  loop={false}
                  playing={delayDone}
                  width="0"
                  height="0"
                />
              </CountdownCircleTimer>)}
              {exhaleDone && (<CountdownCircleTimer
                size={80}
                isPlaying={playing}
                duration={exhale}
                colors={"#A76FF0"}
                onComplete={() => playing && this.setState({exhaleDone: false, pauseDone: true})}
              >
                <ReactPlayer
                  url={audioTick}
                  volume={volume}
                  loop={false}
                  playing={exhaleDone}
                  width="0"
                  height="0"
                />
              </CountdownCircleTimer>)}
              {pauseDone && (<CountdownCircleTimer
                size={80}
                isPlaying={playing}
                duration={pause}
                colors={"#00B050"}
                onComplete={() => playing && this.setState({pauseDone: false, inhaleDone: true})}
              >
                <ReactPlayer
                  url={audioTick}
                  volume={volume}
                  loop={false}
                  playing={pauseDone}
                  width="0"
                  height="0"
                />
              </CountdownCircleTimer>)}
            </div>
          </div>
        ) : (
          <></>
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
  isVideo: state.auth.user.params.isVideo,
  inhale: state.auth.user.params.inhale,
  delay: state.auth.user.params.delay,
  exhale: state.auth.user.params.exhale,
  pause: state.auth.user.params.pause
});

export default connect(mapStateToProps)(Player)