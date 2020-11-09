import React from 'react'
import {connect} from 'react-redux'

function IntervalTimer({inhale, delay, exhale, pause}) {

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

  return (
    <div className="interval-timer">
      <div className="interval-timer-item" style={inhaleItemStyle} />
      <div className="interval-timer-item" style={delayItemStyle} />
      <div className="interval-timer-item" style={exhaleItemStyle} />
      <div className="interval-timer-item" style={pauseItemStyle} />
    </div>
  )
}

const mapStateToProps = state => ({
  inhale: state.auth.user.params.inhale,
  delay: state.auth.user.params.delay,
  exhale: state.auth.user.params.exhale,
  pause: state.auth.user.params.pause
})

export default connect(mapStateToProps)(IntervalTimer)