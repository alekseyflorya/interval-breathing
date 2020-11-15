import React from "react";
import {connect} from "react-redux";

function AsideInfoBlock({inhale, delay, exhale, pause, horizontal}) {

  return (
    <div className={`info-block ${horizontal ? 'horizontal' : 'vertical'}`}>
      <div className="info-block-options">
        <p><span className="info-block-param-title">Inhale: </span><strong>{inhale}</strong><span> sec</span> <span style={{display: 'inline-block', float: 'right', width: '18px', height: '18px', background: '#00B0F0'}} /></p>
        <p><span className="info-block-param-title">Delay: </span><strong>{delay}</strong><span> sec</span> <span style={{display: 'inline-block', float: 'right', width: '18px', height: '18px', background: '#ED7D31'}} /></p>
        <p><span className="info-block-param-title">Exhale: </span><strong>{exhale}</strong><span> sec</span> <span style={{display: 'inline-block', float: 'right', width: '18px', height: '18px', background: '#A76FF0'}} /></p>
        <p><span className="info-block-param-title">Pause: </span><strong>{pause}</strong><span>  sec</span> <span style={{display: 'inline-block', float: 'right', width: '18px', height: '18px', background: '#00B050'}} /></p>
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