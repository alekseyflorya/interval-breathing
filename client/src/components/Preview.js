import React from 'react'
import {connect} from 'react-redux'

function Preview({figure, colour}) {
  return (
    <div className="preview-item" style={{background: colour}}>Preview</div>
  )
}

const mapStateToProps = state => ({
  figure: state.params.figure,
  colour: state.params.colour
});

export default connect(mapStateToProps)(Preview)