import React from "react"
import {connect} from 'react-redux'
import {Col, Container, Row} from "reactstrap"
import RhythmSlider from "../components/RhythmSlider"
import {Link} from "react-router-dom"
import {editParams} from "../actions/authActions"
import { useHistory } from "react-router-dom"

const rhythms = [
  {inhale: 1, delay: 0, exhale: 3, pause: 0, name: 'Clean breath', id: 0},
  {inhale: 1, delay: 0, exhale: 2, pause: 2, name: 'Relaxation', id: 1},
  {inhale: 1, delay: 2, exhale: 1, pause: 2, name: 'Calmness', id: 2},
  {inhale: 1, delay: 2, exhale: 2, pause: 0, name: 'Power', id: 3},
  {inhale: 3, delay: 0, exhale: 2, pause: 0, name: 'Antistress', id: 4},
]

const inputStyle = {
  maxWidth: '50px',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '0px 10px',
  border: 'none',
  backgroundColor: 'rgba( 255, 255, 255, 0.3 )',
  boxShadow: 'rgba(0, 0, 0, 0.6) -2px 1px 4px, rgba(255, 255, 255, 0.6) 2px -1px 1px',
  borderRadius: '4px'
}

function BreathingRhythm ({inhale, delay, exhale, pause, useSuggestedRhythms, suggestedRhythm, editParams}) {
  let history = useHistory();

  const [isSuggestedRhythms, setIsSuggestedRhythms] = React.useState(useSuggestedRhythms)

  const rhythmsState = useSuggestedRhythms ? {
    inhale: rhythms[suggestedRhythm].inhale,
    delay: rhythms[suggestedRhythm].delay,
    exhale: rhythms[suggestedRhythm].exhale,
    pause: rhythms[suggestedRhythm].pause
  } : {
    inhale: inhale,
    delay: delay,
    exhale: exhale,
    pause: pause
  }

  const [userRhythm, setUserRhythm] = React.useState(rhythmsState)

  React.useEffect(() => {
    if (useSuggestedRhythms) {
      setUserRhythm({
        inhale: rhythms[suggestedRhythm].inhale,
        delay: rhythms[suggestedRhythm].delay,
        exhale: rhythms[suggestedRhythm].exhale,
        pause: rhythms[suggestedRhythm].pause
      })
    }
  },[suggestedRhythm])

  const handleChange = (e) => {
    setUserRhythm({...userRhythm, [e.target.name]: e.target.value})
  }

  const changeSuggestedRhythms = () => {
    setIsSuggestedRhythms(!isSuggestedRhythms)
    editParams({...userRhythm, useSuggestedRhythms: !useSuggestedRhythms})
    if (useSuggestedRhythms || isSuggestedRhythms ) {
      setUserRhythm({
        inhale: rhythms[suggestedRhythm].inhale,
        delay: rhythms[suggestedRhythm].delay,
        exhale: rhythms[suggestedRhythm].exhale,
        pause: rhythms[suggestedRhythm].pause
      })
    } else {
      setUserRhythm({
        inhale: inhale,
        delay: delay,
        exhale: exhale,
        pause: pause
      })
    }
  }

  const onSubmit = () => {
    editParams({...userRhythm})
    alert(`Params was changed!`)
    history.push("/");
  }

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="headding-title text-center">Breathing Rhythm</h2>
        </Col>
      </Row>
      <Row style={{marginBottom: '50px'}}>
        <Col>
          <div>
            <input type="radio" name="rhythm" checked={isSuggestedRhythms} onChange={changeSuggestedRhythms} />
            <label>Use the suggested rhythms</label>
          </div>
          <div>
            <RhythmSlider rhythm={rhythms} />
          </div>
        </Col>
        <Col>
          <div>
            <input type="radio" name="rhythm" checked={!isSuggestedRhythms} onChange={changeSuggestedRhythms} />
            <label>Set your own rhythm</label>
          </div>
          <div>
            <Row>
              <Col sm={6} style={{marginBottom: '30px', fontSize: '1.5rem'}}>
                <span style={{display: 'inline-block', minWidth: '4.5rem'}}>Inhale </span>
                <input style={inputStyle} type="text" name="inhale" value={userRhythm.inhale} onChange={handleChange} />
                <span style={{marginLeft: '10px'}}> sec</span>
              </Col>
              <Col sm={6} style={{marginBottom: '30px', fontSize: '1.5rem'}}>
                <span style={{display: 'inline-block', minWidth: '4.5rem'}}>Delay </span>
                <input style={inputStyle} type="text" name="delay" value={userRhythm.delay} onChange={handleChange} />
                <span style={{marginLeft: '10px'}}> sec</span>
              </Col>
              <Col sm={6} style={{marginBottom: '30px', fontSize: '1.5rem'}}>
                <span style={{display: 'inline-block', minWidth: '4.5rem'}}>Exhale </span>
                <input style={inputStyle} type="text" name="exhale" value={userRhythm.exhale} onChange={handleChange} />
                <span style={{marginLeft: '10px'}}> sec</span>
              </Col>
              <Col sm={6} style={{marginBottom: '30px', fontSize: '1.5rem'}}>
                <span style={{display: 'inline-block', minWidth: '4.5rem'}}>Pause </span>
                <input style={inputStyle} type="text" name="pause" value={userRhythm.pause} onChange={handleChange} />
                <span style={{marginLeft: '10px'}}> sec</span>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: 8, offset: 2 }}>
          <div className="info-block d-flex mb-5">
            <div className="info-block-description col-sm-8">
              <p>The descriptive part: what is achieved by a given breathing rhythm. The controlled breathing technique helps to slow down breathing</p>
            </div>
            <div className="info-block-options col-sm-4">
              <p>
                <span>Inhale:</span> <strong>{useSuggestedRhythms ? rhythms[suggestedRhythm].inhale : userRhythm.inhale} sec</strong>
              </p>
              <p>
                <span>Delay:</span> <strong>{useSuggestedRhythms ? rhythms[suggestedRhythm].delay : userRhythm.delay} sec</strong>
              </p>
              <p>
                <span>Exhale:</span> <strong>{useSuggestedRhythms ? rhythms[suggestedRhythm].exhale : userRhythm.exhale} sec</strong>
              </p>
              <p>
                <span>Pause:</span> <strong>{useSuggestedRhythms ? rhythms[suggestedRhythm].pause : userRhythm.pause} sec</strong>
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: 8, offset: 2 }} className="rhythm-buttons d-flex justify-content-between flex-row">
          <button className="btn btn-lg btn-primary" onClick={onSubmit}>Apply</button>
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
