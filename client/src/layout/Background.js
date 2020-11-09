import React from 'react'
import {Col, Container, Row} from "reactstrap"
import {Link} from 'react-router-dom'
// import ColorsBox from '../components/ColorsBox'
import VideoSlider from '../components/VideoSlider'
// import FiguresSlider from '../components/FiguresSlider'
import AudioSlider from '../components/AudioSlider'
import {Aside} from '../components/Aside'
// import Preview from '../components/Preview'
// import {connect} from 'react-redux'
// import {editParams} from "../actions/authActions"

function Background() {

  // const [checkedVideo, setCheckedVideo] = React.useState(isVideo)

  // const handleChange = () => {
  //   setCheckedVideo(!checkedVideo)
  //   editParams({isVideo: !checkedVideo})
  // }

  const audioSliders = [
      {name:'3D audio',type:'audio'},
      {name:'Music',type:'music'},
      {name:'Binaural',type:'binaural'}
    ]
    .map(({name, type}) => (
      <Col key={type} sm="3">
        <div>
          <h3 className="text-center slider-title">{name}</h3>
        </div>
        <AudioSlider type={type} />
      </Col>
    ))

  return (
    <Container>
      <h2 className="headding-title text-center">Background</h2>
      <Row>
        <Col sm="10">
          {/*<Row>*/}
          {/*  <Col sm="2">*/}
          {/*    <input*/}
          {/*      type="radio"*/}
          {/*      name="checkedVideo"*/}
          {/*      checked={!checkedVideo}*/}
          {/*      onChange={handleChange}*/}
          {/*    />*/}
          {/*    <h3>Colour</h3>*/}
          {/*  </Col>*/}
          {/*  <Col sm="9">*/}
          {/*    <ColorsBox />*/}
          {/*  </Col>*/}
          {/*</Row>*/}
          {/*<Row>*/}
          {/*  <Col sm="11">*/}
          {/*    <h3>Figure</h3>*/}
          {/*    <FiguresSlider />*/}
          {/*  </Col>*/}
          {/*</Row>*/}
          <Row style={{marginBottom: '10px'}}>
            <Col sm="12">
              {/*<input*/}
              {/*  type="radio"*/}
              {/*  name="checkedVideo"*/}
              {/*  checked={checkedVideo}*/}
              {/*  onChange={handleChange}*/}
              {/*/>*/}
              <h3 className="slider-title">Video</h3>
              <VideoSlider />
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <Row>
                {audioSliders}
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
          {/*<div className="preview-box">*/}
          {/*  <Preview />*/}
          {/*</div>*/}
          <Aside />
        </Col>
      </Row>
    </Container>
  )
}

// const mapStateToProps = state => ({
//   isVideo: state.auth.user.params.isVideo,
// })
//
// export default connect(mapStateToProps, {editParams})(Background)

export default Background