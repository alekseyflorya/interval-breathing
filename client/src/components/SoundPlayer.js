import React from 'react'
import ReactPlayer from 'react-player'

function SoundPlayer({playing, audioTick, muted, volume}) {
  return (
    <ReactPlayer
      url={audioTick}
      volume={volume}
      muted={muted}
      loop={false}
      playing={playing}
      width="0"
      height="0"
      playsinline={true}
    />
  )
}

export default SoundPlayer