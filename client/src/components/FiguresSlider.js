import React, { Component } from "react";
import Slider from "react-slick";
import figureOneImg from '../assets/images/figure-1.jpg'
import figureTwoImg from '../assets/images/figure-2.jpg'
import figureThreeImg from '../assets/images/figure-3.jpg'
import figureFourImg from '../assets/images/figure-4.jpg'

export default class FiguresSlider extends Component {
  state = {
    active1: false,
    active2: false,
    active3: false,
    active4: false
  }

  toggleFigure1(){
    this.setState({active1: !this.state.active1, active2: false, active3: false, active4: false})
  }
  toggleFigure2(){
    this.setState({active1: false, active2: !this.state.active2, active3: false, active4: false})
  }
  toggleFigure3(){
    this.setState({active1: false, active2: false, active3: !this.state.active3, active4: false})
  }
  toggleFigure4(){
    this.setState({active1: false, active2: false, active3: false, active4: !this.state.active4})
  }

  render() {
    const settings = {
      //dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0
    };
    return (
      <div className="figures-slider">
        <Slider {...settings}>
          <div className={`figures-slider-item ${ this.state.active1 ? 'active' : null}`} onClick={this.toggleFigure1.bind(this)}>
            <img src={figureOneImg} alt="" className="img-fluid" />
          </div>
          <div className={`figures-slider-item ${ this.state.active2 ? 'active' : null}`} onClick={this.toggleFigure2.bind(this)}>
            <img src={figureTwoImg} alt="" className="img-fluid" />
          </div>
          <div className={`figures-slider-item ${ this.state.active3 ? 'active' : null}`} onClick={this.toggleFigure3.bind(this)}>
            <img src={figureThreeImg} alt="" className="img-fluid" />
          </div>
          <div className={`figures-slider-item ${ this.state.active4 ? 'active' : null}`} onClick={this.toggleFigure4.bind(this)}>
            <img src={figureFourImg} alt="" className="img-fluid" />
          </div>
        </Slider>
      </div>
    );
  }
}