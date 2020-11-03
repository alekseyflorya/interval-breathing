import React from 'react'
import {Col, Container, Row, Input} from "reactstrap"
import {Link} from 'react-router-dom'
import ColorsBox from '../components/ColorsBox'
import VideoSlider from '../components/VideoSlider'
import FiguresSlider from '../components/FiguresSlider'
import AudioSlider from '../components/AudioSlider'
import {Aside} from '../components/Aside'
import Preview from '../components/Preview'
import {connect} from 'react-redux'

function Background({isVideo}) {
  return (
    <Container>
      <h2 className="headding-title text-center">Background</h2>
      <Row>
        <Col sm="10">
          <Row>
            <Col sm="2">
              <Input type="radio" name="radio1" checked={!isVideo} />
              <h3>Colour</h3>
            </Col>
            <Col sm="9">
              <ColorsBox />
            </Col>
          </Row>
          <Row>
            <Col sm="11">
              <h3>Figure</h3>
              <FiguresSlider />
            </Col>
          </Row>
          <Row>
            <Col sm="11">
              <Input type="radio" name="radio1" checked={isVideo} />
              <h3>Video</h3>
              <VideoSlider />
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <Row>
                <Col sm="3">
                  <div style={{display: 'flex'}}>
                    <h3>3D audio</h3>
                    <Input type="radio" name="radio2" style={{position: 'inherit', margin: 'auto auto 17px 10px'}} />
                  </div>
                  <div className="text-center" style={{height: '3rem'}}>
                    <input className="custom-range volume-range" type='range' min={0} max={1} step='any' />
                  </div>
                  <AudioSlider type={'audio'} />
                </Col>
                <Col sm="3">
                  <div style={{display: 'flex'}}>
                    <h3>Music</h3>
                    <Input type="radio" name="radio2" style={{position: 'inherit', margin: 'auto auto 17px 10px'}} />
                  </div>
                  <div className="text-center" style={{height: '3rem'}}>
                    <input className="custom-range volume-range" type='range' min={0} max={1} step='any' />
                  </div>
                  <AudioSlider type={'music'} />
                </Col>
                <Col sm="3">
                  <div style={{display: 'flex'}}>
                    <h3>Binaural</h3>
                    <Input type="radio" name="radio2" style={{position: 'inherit', margin: 'auto auto 17px 10px'}} />
                  </div>
                  <div className="text-center" style={{height: '3rem'}}>
                    <input className="custom-range volume-range" type='range' min={0} max={1} step='any' />
                  </div>
                  <AudioSlider type={'binaural'} />
                </Col>
                <Col sm="3">
                  <div className="submit-buttons-box">
                    <div className="submit-buttons">
                      <Link to="/" className="btn btn-primary">Apply</Link>
                      <Link to="/" className="btn btn-secondary">Cancel</Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col sm="2">
          <div className="preview-box">
            <Preview />
          </div>
          <Aside />
        </Col>
      </Row>
    </Container>
  )
}
const mapStateToProps = state => ({
  isVideo: state.params.isVideo,
});
export default connect(mapStateToProps)(Background)
