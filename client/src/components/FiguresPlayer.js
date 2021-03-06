import React, {Component} from 'react'
import {FigureOne} from "../figures/FigureOne";
import {FigureTwo} from "../figures/FigureTwo";
import {FigureThree} from "../figures/FigureThree";
import {FigureFour} from "../figures/FigureFour";
import {connect} from "react-redux";

class FiguresPlayer extends Component {

  figures = [FigureOne, FigureTwo, FigureThree, FigureFour]

  componentDidMount() {
    this.figures[this.props.figure](this.scene)
  }

  render() {

    return (
      <>
        <div className="player-container" style={{background: this.props.colour}}>
          <div ref={element => this.scene = element} />
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  figure: state.auth.user.params.figure,
  colour: state.auth.user.params.colour
});

export default connect(mapStateToProps)(FiguresPlayer)