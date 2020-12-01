import React from 'react'
import Sound from "react-sound";

function SoundPlayer({mutedSound, playing, done, audioTick}) {
  return (
    <Sound
      url={audioTick}
      volume={mutedSound}
      playStatus={(playing && done) ? Sound.status.PLAYING : Sound.status.STOPPED}
      onStop={() => console.log('Stopped')}
      loop={false}
    />
  )
}

export default SoundPlayer