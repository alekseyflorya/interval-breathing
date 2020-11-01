import React, { Component } from 'react'

const colorsArray = ['#ff6d69', '#fecc50', '#0be7fb', '#010b8b', '#1e0521', '#fa448c', '#fec859', '#43b5a0', '#491d88', '#331a38', '#490009', '#ac0e28', '#bc4558', '#013766', '#010a1c'];

export default class ColorsBox extends Component {

  colorsBox = colorsArray.map(item => <div key={item} className="colors-box-item active" style={{backgroundColor: item}}></div>)

  render() {
    return (
      <div className="colors-box">
        <div className="colors-box-container">
          {this.colorsBox}
        </div>
      </div>

    )
  }
}