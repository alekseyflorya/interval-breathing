import React from 'react'
import {connect} from 'react-redux'

const colorsArray = ['#ff6d69', '#fecc50', '#0be7fb', '#010b8b', '#1e0521', '#fa448c', '#fec859', '#43b5a0', '#491d88', '#331a38', '#490009', '#ac0e28', '#bc4558', '#013766', '#010a1c'];

function ColorsBox({colour}) {

  const colorsBox = colorsArray.map(item => {
    return <div key={item} className={`colors-box-item ${colour === item ? 'active' : null}`} style={{backgroundColor: item}} />
  })

  return (
    <div className="colors-box">
      <div className="colors-box-container">
        {colorsBox}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  colour: state.auth.user.params.colour
});

export default connect(mapStateToProps)(ColorsBox)