import React, {useState} from 'react'
import ReactPlayer from 'react-player'
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import SoundPlayer from "./SoundPlayer";
import audioTick1 from '../assets/audio/cycle/inhale-timer.mp3'
import audioTick2 from '../assets/audio/cycle/delay-pause.mp3'
import audioTick3 from '../assets/audio/cycle/exhale-timer.mp3'
import audioTick4 from '../assets/audio/cycle/stop.mp3'

function IntervalTimer({inhale, exhale, delay, pause, playing, muted, volume, mutedSound}) {
  const [steps, setSteps] = useState({inhale: true, delay: false, exhale: false, pause: false, duration: inhale, color: '#00B0F0', audioTick: audioTick1})
  const [key, setKey] = useState(0)

  const changeStep = () => {
    if(steps.inhale) setSteps(() => ({inhale: false, delay: true, exhale: false, pause: false, duration: delay, color: '#ED7D31', audioTick: audioTick4}))
    if(steps.delay) setSteps(() => ({inhale: false, delay: false, exhale: true, pause: false, duration: exhale, color: '#A76FF0', audioTick: audioTick3}))
    if(steps.exhale) setSteps(() => ({inhale: false, delay: false, exhale: false, pause: true, duration: pause, color: '#00B050', audioTick: audioTick4}))
    if(steps.pause) setSteps(() => ({inhale: true, delay: false, exhale: false, pause: false, duration: inhale, color: '#00B0F0', audioTick: audioTick1}))
    setKey(prevKey => prevKey + 1)
  }

  return(
    <>
      <div className="interval-timer">
        <CountdownCircleTimer
          key={key}
          size={80}
          isPlaying={playing}
          duration={steps.duration}
          colors={steps.color}
          onComplete={changeStep}
        />
      </div>
      <SoundPlayer
        playing={playing}
        done={playing}
        mutedSound={mutedSound}
        audioTick={steps.audioTick}
      />
      <ReactPlayer
        url={audioTick2}
        volume={volume}
        muted={muted}
        loop={true}
        playing={playing && (steps.delay || steps.pause)}
        width="0"
        height="0"
        playsinline={true}
      />
    </>
  )
}

export default IntervalTimer