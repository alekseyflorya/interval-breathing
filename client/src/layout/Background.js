import React from 'react'
import {Col, Container, Row} from "reactstrap"
import {Link} from 'react-router-dom'
import VideoSlider from '../components/VideoSlider'
import AudioSlider from '../components/AudioSlider'
import {Aside} from '../components/Aside'
import {connect} from 'react-redux'
import {editParams} from "../actions/authActions"

function Background({editParams, video, audio}) {

  const [paramsToChange, setParamsToChange] = React.useState({video: video, audio: audio})

  const handleChangeVideo = (id) => {
    setParamsToChange({...paramsToChange, video: id})
  }

  const handleChangeAudio = (newAudio) => {
    setParamsToChange({...paramsToChange, audio: {trackType: newAudio.audio.trackType, trackId: newAudio.audio.trackId}})
  }

  const handleEditParams = () => {
    editParams(paramsToChange)
  }

  return (
    <Container>
      <h2 className="headding-title text-center">Background</h2>
      <Row>
        <Col sm="10">
          <Row style={{marginBottom: '10px'}}>
            <Col sm="12">
              <h3 className="slider-title">Video</h3>
              <VideoSlider handleChangeVideo={handleChangeVideo} />
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <Row>
                <Col sm="3">
                  <div>
                    <h3 className="text-center slider-title">3D audio</h3>
                  </div>
                  <AudioSlider type="audio" selectedTrack={paramsToChange.audio} handleChangeAudio={handleChangeAudio} />
                </Col>
                <Col sm="3">
                  <div>
                    <h3 className="text-center slider-title">Music</h3>
                  </div>
                  <AudioSlider type="music" selectedTrack={paramsToChange.audio} handleChangeAudio={handleChangeAudio} />
                </Col>
                <Col sm="3">
                  <div>
                    <h3 className="text-center slider-title">Binaural</h3>
                  </div>
                  <AudioSlider type="binaural" selectedTrack={paramsToChange.audio} handleChangeAudio={handleChangeAudio} />
                </Col>
                <Col sm="3">
                  <div className="submit-buttons-box">
                    <div className="submit-buttons">
                      <Link to="/" className="btn btn-primary" onClick={handleEditParams}>Apply</Link>
                      <Link to="/" className="btn btn-secondary">Cancel</Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col sm="2">
          <Aside />
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = state => ({
  isVideo: state.auth.user.params.isVideo,
  video: state.auth.user.params.video,
  audio: state.auth.user.params.audio
})

export default connect(mapStateToProps, {editParams})(Background)