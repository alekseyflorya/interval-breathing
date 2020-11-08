import React from 'react'
import {connect} from 'react-redux'
import video1 from '../assets/videos/V-ID-1.mp4'
import video2 from '../assets/videos/V-ID-2.mp4'
import video3 from '../assets/videos/V-ID-3.mp4'
import video4 from '../assets/videos/V-ID-4.mp4'
import video5 from '../assets/videos/V-ID-5.mp4'
import FiguresPlayer from "./FiguresPlayer";

const videosArray = [{id: 0, src: video1}, {id: 1, src: video2}, {id: 2, src: video3}, {id: 3, src: video4}, {id: 4, src: video5}];

function Preview({video, figure, colour, isVideo}) {
  const videoItem = videosArray.filter(({id}) => id === video)[0]

  return (
    <>
      {isVideo && (
          <div className="preview-item">
            <video src={videoItem.src} />
          </div>
      )}
      {!isVideo &&(
          <div className="preview-item" style={{background: colour}}>
            <FiguresPlayer selectedFigure={figure} />
          </div>
        )}
    </>
  )
}

const mapStateToProps = state => ({
  figure: state.auth.user.params.figure,
  colour: state.auth.user.params.colour,
  video: state.auth.user.params.video,
  isVideo: state.auth.user.params.isVideo
});

export default connect(mapStateToProps)(Preview)