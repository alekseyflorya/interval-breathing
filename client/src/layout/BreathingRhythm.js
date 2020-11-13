import React from "react"
import {connect} from 'react-redux'
import {Col, Container, Row} from "reactstrap"
import RhythmSlider from "../components/RhythmSlider"
import {Link} from "react-router-dom"
import {editParams} from "../actions/authActions"

const rhythms = [
  {inhale: 1, delay: 0, exhale: 3, pause: 0, name: 'Clean breath', id: 0},
  {inhale: 1, delay: 0, exhale: 2, pause: 2, name: 'Relaxation', id: 1},
  {inhale: 1, delay: 2, exhale: 1, pause: 2, name: 'Calmness', id: 2},
  {inhale: 1, delay: 2, exhale: 2, pause: 0, name: 'Power', id: 3},
  {inhale: 3, delay: 0, exhale: 2, pause: 0, name: 'Antistress', id: 4},
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
    setUserRhythm({...userRhythm, [e.target.name]: e.target.value})
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
        <Col xs={12} sm={{size: 4, offset:1 }} md={{size: 6, offset: 0}}>
          <div>
            <input type="radio" name="rhythm" id="rhythm1" checked={isSuggestedRhythms} onChange={changeSuggestedRhythms} />
            <label htmlFor="rhythm1" className="rhythm-label">Use the suggested rhythms</label>
          </div>
          <div className={`suggested-rhythms ${!isSuggestedRhythms && 'disabled'}`}>
            <RhythmSlider rhythms={rhythms} selectedSuggestedRhythm={selectedSuggestedRhythm} changeSuggestedRhythm={changeSuggestedRhythm} />
          </div>
        </Col>
        <Col xs={12} sm={{size: 6, offset: 1}} md={{size: 6, offset: 0}}>
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
                  type="number" min="0" max="60" name="inhale"
                  value={!isSuggestedRhythms && userRhythm.inhale}
                  onChange={changeOwnRhythm}
                />
                <span className="rhythm-subtitle" style={{marginLeft: '5px'}}> sec</span>
              </Col>
              <Col sm={6} xs={6} style={{marginBottom: '30px', fontSize: '1.5rem'}}>
                <span className="rhythm-title" >Delay </span>
                <input
                  disabled={isSuggestedRhythms}
                  className="rhythm-input disabled"
                  type="number" min="0" max="60" name="delay"
                  value={!isSuggestedRhythms && userRhythm.delay}
                  onChange={changeOwnRhythm}
                />
                <span className="rhythm-subtitle" style={{marginLeft: '5px'}}> sec</span>
              </Col>
              <Col sm={6} xs={6} style={{marginBottom: '30px', fontSize: '1.5rem'}}>
                <span className="rhythm-title" >Exhale </span>
                <input
                  disabled={isSuggestedRhythms}
                  className="rhythm-input disabled"
                  type="number" min="0" max="60" name="exhale"
                  value={!isSuggestedRhythms && userRhythm.exhale}
                  onChange={changeOwnRhythm}
                />
                <span className="rhythm-subtitle" style={{marginLeft: '5px'}}> sec</span>
              </Col>
              <Col sm={6} xs={6} style={{marginBottom: '30px', fontSize: '1.5rem'}}>
                <span className="rhythm-title" >Pause </span>
                <input
                  disabled={isSuggestedRhythms}
                  className="rhythm-input disabled"
                  type="number" min="0" max="60" name="pause"
                  name="pause"
                  value={!isSuggestedRhythms && userRhythm.pause}
                  onChange={changeOwnRhythm}
                />
                <span className="rhythm-subtitle" style={{marginLeft: '5px'}}> sec</span>
              </Col>

              <Col xs={12} sm={12}>
                <div className="info-block d-flex mb-5">
                  <div className="info-block-description col-sm-7">
                    <p>The descriptive part: what is achieved by a given breathing rhythm. The controlled breathing technique helps to slow down breathing</p>
                  </div>
                  <div className="info-block-options col-sm-5">
                    <p>
                      <span>Inhale:</span> <strong>{userRhythm.inhale} sec</strong>
                    </p>
                    <p>
                      <span>Delay:</span> <strong>{userRhythm.delay} sec</strong>
                    </p>
                    <p>
                      <span>Exhale:</span> <strong>{userRhythm.exhale} sec</strong>
                    </p>
                    <p>
                      <span>Pause:</span> <strong>{userRhythm.pause} sec</strong>
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