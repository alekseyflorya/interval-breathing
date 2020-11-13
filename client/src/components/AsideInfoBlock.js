import React from "react";
import {connect} from "react-redux";

function AsideInfoBlock({inhale, delay, exhale, pause}) {

  return (
    <div className="info-block">
      <div className="info-block-options">
        <p><span>Inhale: <strong>{inhale}</strong> sec</span> <span style={{display: 'inline-block', float: 'right', width: '18px', height: '18px', background: '#00B0F0'}} /></p>
        <p><span>Delay: <strong>{delay}</strong> sec</span> <span style={{display: 'inline-block', float: 'right', width: '18px', height: '18px', background: '#ED7D31'}} /></p>
        <p><span>Exhale: <strong>{exhale}</strong> sec</span> <span style={{display: 'inline-block', float: 'right', width: '18px', height: '18px', background: '#A76FF0'}} /></p>
        <p><span>Pause: <strong>{pause}</strong>  sec</span> <span style={{display: 'inline-block', float: 'right', width: '18px', height: '18px', background: '#00B050'}} /></p>
        <p><span>Inhalation per minute: <strong>{Math.floor( 60 / (Number(inhale) + Number(delay) + Number(exhale) + Number(pause)))}</strong> cycles</span></p>
      </div>
      <div className="info-block-description">
        <p>The descriptive part: what is achieved by a given breathing rhythm.</p>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  inhale: state.auth.user.params.inhale,
  delay: state.auth.user.params.delay,
  exhale: state.auth.user.params.exhale,
  pause: state.auth.user.params.pause
});

export default connect(mapStateToProps)(AsideInfoBlock);