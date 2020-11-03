import React from "react";
import {connect} from "react-redux";

function AsideInfoBlock({params}) {
  const {inhale, delay, exhale, pause, inhalePerMin} = params;
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
  params: state.params,
});

export default connect(mapStateToProps)(AsideInfoBlock);