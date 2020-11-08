import React, { Component } from "react";
import Slider from "react-slick";
import figureOneImg from '../assets/images/figure-1.jpg'
import figureTwoImg from '../assets/images/figure-2.jpg'
import figureThreeImg from '../assets/images/figure-3.jpg'
import figureFourImg from '../assets/images/figure-4.jpg'
import {connect} from 'react-redux'
import {editParams} from "../actions/authActions"

class FiguresSlider extends Component {
  state = {
    figureStateId: this.props.figure
  }
  toggleFigure(id) {
    this.setState({figureStateId: id})
    this.props.editParams({figure: Number(id)})
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0
    };
    return (
      <div className="figures-slider">
        <Slider {...settings}>
          <div className={`figures-slider-item ${ this.props.figure === 0 ? 'active' : null}`} onClick={this.toggleFigure.bind(this, 0)}>
            <img src={figureOneImg} alt="" className="img-fluid" />
          </div>
          <div className={`figures-slider-item ${ this.props.figure === 1 ? 'active' : null}`} onClick={this.toggleFigure.bind(this, 1)}>
            <img src={figureTwoImg} alt="" className="img-fluid" />
          </div>
          <div className={`figures-slider-item ${ this.props.figure === 2 ? 'active' : null}`} onClick={this.toggleFigure.bind(this, 2)}>
            <img src={figureThreeImg} alt="" className="img-fluid" />
          </div>
          <div className={`figures-slider-item ${ this.props.figure === 3 ? 'active' : null}`} onClick={this.toggleFigure.bind(this, 3)}>
            <img src={figureFourImg} alt="" className="img-fluid" />
          </div>
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  figure: state.auth.user.params.figure,
});

export default connect(mapStateToProps, {editParams})(FiguresSlider)