import React from 'react'
import {Col, Row} from "reactstrap"

function RhythmsForm({rhythms}) {
  const {inhale, delay, exhale, pause} = rhythms[0].rhythm
  return (
    <Row>
      <Col sm={6} style={{marginBottom: '30px'}}>
        <span style={{marginRight: '10px'}}>Inhale </span>
        <input style={{maxWidth: '30px', padding: '5px 10px', border: 'none', backgroundColor: 'rgba( 255, 255, 255, 0.3 )', boxShadow: '0 8px 16px rgba(0,0,0,.3)'}} type="text" value={inhale} />
        <span style={{marginLeft: '10px'}}> sec</span>
      </Col>
      <Col sm={6} style={{marginBottom: '30px'}}>
        <span style={{marginRight: '10px'}}>Delay </span>
        <input style={{maxWidth: '30px', padding: '5px 10px', border: 'none', backgroundColor: 'rgba( 255, 255, 255, 0.3 )', boxShadow: '0 8px 16px rgba(0,0,0,.3)'}} type="text" value={delay} />
        <span style={{marginLeft: '10px'}}> sec</span>
      </Col>
      <Col sm={6} style={{marginBottom: '30px'}}>
        <span style={{marginRight: '10px'}}>Exhale </span>
        <input style={{maxWidth: '30px', padding: '5px 10px', border: 'none', backgroundColor: 'rgba( 255, 255, 255, 0.3 )', boxShadow: '0 8px 16px rgba(0,0,0,.3)'}} type="text" value={exhale} />
        <span style={{marginLeft: '10px'}}> sec</span>
      </Col>
      <Col sm={6} style={{marginBottom: '30px'}}>
        <span style={{marginRight: '10px'}}>Pause </span>
        <input style={{maxWidth: '30px', padding: '5px 10px', border: 'none', backgroundColor: 'rgba( 255, 255, 255, 0.3 )', boxShadow: '0 8px 16px rgba(0,0,0,.3)'}} type="text" value={pause} />
        <span style={{marginLeft: '10px'}}> sec</span>
      </Col>
    </Row>
  )
}

export default RhythmsForm