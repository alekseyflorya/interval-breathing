import React from "react";
import {connect} from "react-redux";

function AsideInfoBlock({inhale, delay, exhale, pause, horizontal, useSuggestedRhythms,suggestedRhythm}) {

  const rhythms = [
    {
      id: 0,
      name: 'Clean breath',
      description: 'The specific timer adjusts your breathing rhythm to release anxiety and sets you in a state of creativity and inspiration. It also tackles migraine. Practice it regularly to become focused, organized, and ready for new achievements.'
    },
    {
      id: 1,
      name: 'Relaxation',
      description: 'The specially designated breathing rhythm grants you peace of mind. It helps you get rid of stress and fall asleep faster. This breathing timer removes physical tension as well. Conjure from everyday troubles to the world of relaxation.'
    },
    {
      id: 2,
      name: 'Calmness',
      description: 'This breathing timer aids you to restore harmony with yourself and improves your emotional state. It clears your mind and improves your emotional state. You feel complete and are ready to make balanced decisions. Build stress resistance with regular training.'
    },
    {
      id: 3,
      name: 'Power',
      description: 'The breathing rhythm charges your body and mind. You get physical and spiritual energy for successful solutions. Activate your inner resources and boost your performance with regular practice. Feel refreshed every day.'
    },
    {
      id: 4,
      name: 'Anti-stress',
      description: 'The unique breathing timer releases stress and tension from work and everyday troubles. Follow the rhythm to become focused and activate your intellectual potential. Clear your mind and tune yourself for efficient and productive thinking.'
    },
  ]

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
        <p>
          {useSuggestedRhythms
            ? <><span style={{fontWeight: 'bold'}}>{rhythms[suggestedRhythm].name}</span><br />{rhythms[suggestedRhythm].description}</>
            : 'This is your own rhythm.'
          }
        </p>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  inhale: state.auth.user.params.inhale,
  delay: state.auth.user.params.delay,
  exhale: state.auth.user.params.exhale,
  pause: state.auth.user.params.pause,
  useSuggestedRhythms: state.auth.user.params.useSuggestedRhythms,
  suggestedRhythm: state.auth.user.params.suggestedRhythm
});

export default connect(mapStateToProps)(AsideInfoBlock);