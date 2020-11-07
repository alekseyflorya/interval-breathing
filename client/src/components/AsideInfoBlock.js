import React from "react";
import {connect} from "react-redux";

function AsideInfoBlock({inhale, delay, exhale, pause, inhalePerMin}) {
  return (
    <div className="info-block">
      <div className="info-block-options">
        <p><span>Inhale:</span> <strong>{inhale} sec</strong></p>
        <p><span>Delay:</span> <strong>{delay} sec</strong></p>
        <p><span>Exhale:</span> <strong>{exhale} sec</strong></p>
        <p><span>Pause:</span> <strong>{pause} sec</strong></p>
        <p><span>Inhalation per minute:</span> <strong>{inhalePerMin} cycles</strong></p>
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
  pause: state.auth.user.params.pause,
  inhalePerMin: state.auth.user.params.inhalePerMin
});

export default connect(mapStateToProps)(AsideInfoBlock);