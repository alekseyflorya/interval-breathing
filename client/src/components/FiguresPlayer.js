import React, {Component} from 'react'
import {FigureOne} from "../figures/FigureOne";
import {FigureTwo} from "../figures/FigureTwo";
import {FigureThree} from "../figures/FigureThree";
import {FigureFour} from "../figures/FigureFour";

export class FiguresPlayer extends Component {
  state = {
    selectedFigure: 3,
    figures: [FigureOne, FigureTwo, FigureThree, FigureFour]
  }

  componentDidMount() {
    this.state.figures[this.state.selectedFigure](this.scene)
  }

  render() {

    return (
      <>
        <div className="player-container">
          <div ref={element => this.scene = element} />
        </div>
      </>
    )
  }
}