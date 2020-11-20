import React from "react"
import {connect} from 'react-redux'
import {Col, Container, Row} from "reactstrap"
import RhythmSlider from "../components/RhythmSlider"
import {Link} from "react-router-dom"
import {editParams} from "../actions/authActions"

const rhythms = [
  {
    id: 0,
    inhale: 3,
    delay: 0,
    exhale: 9,
    pause: 0,
    name: 'Clean breath',
    description: 'The specific timer adjusts your breathing rhythm to release anxiety and sets you in a state of creativity and inspiration. It also tackles migraine. Practice it regularly to become focused, organized, and ready for new achievements.'
  },
  {
    id: 1,
    inhale: 3,
    delay: 0,
    exhale: 6,
    pause: 6,
    name: 'Relaxation',
    description: 'The specially designated breathing rhythm grants you peace of mind. It helps you get rid of stress and fall asleep faster. This breathing timer removes physical tension as well. Conjure from everyday troubles to the world of relaxation.'
  },
  {
    id: 2,
    inhale: 3,
    delay: 6,
    exhale: 3,
    pause: 6,
    name: 'Calmness',
    description: 'This breathing timer aids you to restore harmony with yourself and improves your emotional state. It clears your mind and improves your emotional state. You feel complete and are ready to make balanced decisions. Build stress resistance with regular training.'
  },
  {
    id: 3,
    inhale: 3,
    delay: 6,
    exhale: 6,
    pause: 0,
    name: 'Power',
    description: 'The breathing rhythm charges your body and mind. You get physical and spiritual energy for successful solutions. Activate your inner resources and boost your performance with regular practice. Feel refreshed every day.'
  },
  {
    id: 4,
    inhale: 6,
    delay: 0,
    exhale: 3,
    pause: 0,
    name: 'Anti-stress',
    description: 'The unique breathing timer releases stress and tension from work and everyday troubles. Follow the rhythm to become focused and activate your intellectual potential. Clear your mind and tune yourself for efficient and productive thinking.'
  },
]

function BreathingRhythm ({inhale, delay, exhale, pause, useSuggestedRhythms, suggestedRhythm, editParams}) {

  const [isSuggestedRhythms, setIsSuggestedRhythms] = React.useState(useSuggestedRhythms)
  const [selectedSuggestedRhythm, setSelectedSuggestedRhythm] = React.useState(suggestedRhythm)


  const [userRhythm, setUserRhythm] = React.useState({
    inhale: inhale,
    delay: delay,
    exhale: exhale,
    pause: pause
  })

  const changeOwnRhythm = (e) => {
    let newValue = Number(e.target.value)
    if(newValue > 15) {
      newValue = 15
    } else if(newValue < 0) {
      newValue = 0
    }

    setUserRhythm({...userRhythm, [e.target.name]: newValue })
  }

  const changeSuggestedRhythms = () => {
    setIsSuggestedRhythms(!isSuggestedRhythms)
  }

  const changeSuggestedRhythm = (selectedRhythm) => {
    console.log('changeSuggestedRhythm ', selectedRhythm)
    setSelectedSuggestedRhythm(selectedRhythm)
    setUserRhythm({
      ...userRhythm,
      inhale: rhythms[selectedRhythm].inhale,
      delay: rhythms[selectedRhythm].delay,
      exhale: rhythms[selectedRhythm].exhale,
      pause: rhythms[selectedRhythm].pause
    })
  }

  const calculateInhalePerMin = Math.floor( 60 / (Number(userRhythm.inhale) + Number(userRhythm.delay) + Number(userRhythm.exhale) + Number(userRhythm.pause)))

  const onSubmit = () => {
    editParams({...userRhythm, suggestedRhythm: selectedSuggestedRhythm, useSuggestedRhythms: isSuggestedRhythms})
  }
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="headding-title text-center">Breathing Rhythm</h2>
        </Col>
      </Row>
      <Row style={{marginBottom: '10px'}}>
        <Col xs={12} sm={{size: 6, offset:0 }} md={{size: 5, offset: 0}}>
          <div>
            <input type="radio" name="rhythm" id="rhythm1" checked={isSuggestedRhythms} onChange={changeSuggestedRhythms} />
            <label htmlFor="rhythm1" className="rhythm-label">Use the suggested rhythms</label>
          </div>
          <div className={`suggested-rhythms ${!isSuggestedRhythms && 'disabled'}`}>
            <RhythmSlider rhythms={rhythms} selectedSuggestedRhythm={selectedSuggestedRhythm} changeSuggestedRhythm={changeSuggestedRhythm} />
          </div>
        </Col>
        <Col xs={12} sm={{size: 6, offset: 0}} md={{size: 7, offset: 0}}>
          <div>
            <input type="radio" name="rhythm" id="rhythm2" checked={!isSuggestedRhythms} onChange={changeSuggestedRhythms} />
            <label htmlFor="rhythm2" className="rhythm-label">Set your own rhythm</label>
          </div>
          <div>
            <Row>
              <Col sm={6} xs={6} style={{marginBottom: '30px', fontSize: '1.5rem'}}>
                <span className="rhythm-title" >Inhale </span>
                <input
                  disabled={isSuggestedRhythms}
                  className="rhythm-input disabled"
                  type="number"
                  min="0"
                  max="15"
                  step="1"
                  name="inhale"
                  value={userRhythm.inhale}
                  onChange={changeOwnRhythm}
                />
                <span className="rhythm-subtitle" style={{marginLeft: '5px'}}> sec</span>
              </Col>
              <Col sm={6} xs={6} style={{marginBottom: '30px', fontSize: '1.5rem'}}>
                <span className="rhythm-title" >Delay </span>
                <input
                  disabled={isSuggestedRhythms}
                  className="rhythm-input disabled"
                  type="number"
                  min="0"
                  max="15"
                  step="1"
                  name="delay"
                  value={userRhythm.delay}
                  onChange={changeOwnRhythm}
                />
                <span className="rhythm-subtitle" style={{marginLeft: '5px'}}> sec</span>
              </Col>
              <Col sm={6} xs={6} style={{marginBottom: '30px', fontSize: '1.5rem'}}>
                <span className="rhythm-title" >Exhale </span>
                <input
                  disabled={isSuggestedRhythms}
                  className="rhythm-input disabled"
                  type="number"
                  min="0"
                  max="15"
                  step="1"
                  name="exhale"
                  value={userRhythm.exhale}
                  onChange={changeOwnRhythm}
                />
                <span className="rhythm-subtitle" style={{marginLeft: '5px'}}> sec</span>
              </Col>
              <Col sm={6} xs={6} style={{marginBottom: '30px', fontSize: '1.5rem'}}>
                <span className="rhythm-title" >Pause </span>
                <input
                  disabled={isSuggestedRhythms}
                  className="rhythm-input disabled"
                  type="number"
                  min="0"
                  max="15"
                  step="1"
                  name="pause"
                  value={userRhythm.pause}
                  onChange={changeOwnRhythm}
                />
                <span className="rhythm-subtitle" style={{marginLeft: '5px'}}> sec</span>
              </Col>

              <Col xs={12} sm={12} md={12}>
                <div className="info-block d-flex mb-5">
                  <div className="info-block-description col-sm-12 col-md-12 col-lg-7">
                    {isSuggestedRhythms && <p><strong>{rhythms[selectedSuggestedRhythm].name}</strong></p>}
                    <p>{isSuggestedRhythms ? rhythms[selectedSuggestedRhythm].description : 'This is your own rhythm.'}</p>
                  </div>
                  <div className="info-block-options col-sm-12 col-md-12 col-lg-5">
                    <p>
                      <span className="info-block-params-title">Inhale:</span> <strong>{userRhythm.inhale} sec</strong>
                    </p>
                    <p>
                      <span className="info-block-params-title">Delay:</span> <strong>{userRhythm.delay} sec</strong>
                    </p>
                    <p>
                      <span className="info-block-params-title">Exhale:</span> <strong>{userRhythm.exhale} sec</strong>
                    </p>
                    <p>
                      <span className="info-block-params-title">Pause:</span> <strong>{userRhythm.pause} sec</strong>
                    </p>
                    <p>
                      <span>Inhalation per minute:</span> <strong>{calculateInhalePerMin} cycles</strong>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: 8, offset: 2 }} className="rhythm-buttons d-flex justify-content-between flex-row">
          <Link to="/" className="btn btn-lg btn-primary" onClick={onSubmit}>Apply</Link>
          <Link to="/" className="btn btn-lg btn-secondary">Cancel</Link>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = state => ({
  useSuggestedRhythms: state.auth.user.params.useSuggestedRhythms,
  suggestedRhythm: state.auth.user.params.suggestedRhythm,
  inhale: state.auth.user.params.inhale,
  delay: state.auth.user.params.delay,
  exhale: state.auth.user.params.exhale,
  pause: state.auth.user.params.pause
})

export default connect(mapStateToProps, {editParams})(BreathingRhythm)