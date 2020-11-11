import React from "react";
import {connect} from "react-redux";

function AsideInfoBlock({inhale, delay, exhale, pause}) {

  return (
    <div className="info-block">
      <div className="info-block-options">
        <p><span>Inhale:</span> <strong>{inhale} sec</strong> <span style={{display: 'inline-block', float: 'right', width: '18px', height: '18px', background: '#00B0F0'}}></span></p>
        <p><span>Delay:</span> <strong>{delay} sec</strong> <span style={{display: 'inline-block', float: 'right', width: '18px', height: '18px', background: '#ED7D31'}}></span></p>
        <p><span>Exhale:</span> <strong>{exhale} sec</strong> <span style={{display: 'inline-block', float: 'right', width: '18px', height: '18px', background: '#A76FF0'}}></span></p>
        <p><span>Pause:</span> <strong>{pause} sec</strong> <span style={{display: 'inline-block', float: 'right', width: '18px', height: '18px', background: '#00B050'}}></span></p>
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