import React from "react";
import {Col, Container, Row} from "reactstrap";
import RhythmSlider from "../components/RhythmSlider"
import RhythmsForm from "../components/RhythmsForm"
import {Link} from "react-router-dom";

const rhythms = [
  {rhythm: {inhale: 1, delay: 0, exhale: 3, pause: 0}, name: 'Clean breath', id: 0},
  {rhythm: {inhale: 1, delay: 0, exhale: 2, pause: 2}, name: 'Relaxation', id: 1},
  {rhythm: {inhale: 1, delay: 2, exhale: 1, pause: 2}, name: 'Calmness', id: 2},
  {rhythm: {inhale: 1, delay: 2, exhale: 2, pause: 0}, name: 'Power', id: 3},
  {rhythm: {inhale: 3, delay: 0, exhale: 2, pause: 0}, name: 'Antistress', id: 4},
]

function BreathingRhythm () {
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
            <input type="radio" name="rhythm" />
            <label>Use the suggested rhythms</label>
          </div>
          <div>
            <RhythmSlider rhythms={rhythms} />
          </div>
        </Col>
        <Col>
          <div>
            <input type="radio" name="rhythm" />
            <label>Set your own rhythm</label>
          </div>
          <div>
            <RhythmsForm rhythms={rhythms} />
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
              <p><span>Inhale:</span> <strong>{rhythms[0].rhythm.inhale} sec</strong></p>
              <p><span>Delay:</span> <strong>{rhythms[0].rhythm.delay} sec</strong></p>
              <p><span>Exhale:</span> <strong>{rhythms[0].rhythm.exhale} sec</strong></p>
              <p><span>Pause:</span> <strong>{rhythms[0].rhythm.pause} sec</strong></p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: 8, offset: 2 }} className="d-flex justify-content-between flex-row">
          <Link to="/" className="btn btn-lg btn-primary">Apply</Link>
          <Link to="/" className="btn btn-lg btn-secondary">Cancel</Link>
        </Col>
      </Row>
    </Container>
  )
}

export default BreathingRhythm
