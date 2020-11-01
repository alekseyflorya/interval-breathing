import React from 'react'
import {Link} from 'react-router-dom'
import backgroundBtnImg from '../assets/images/background-btn.png'
import breathingBhythmBtnImg from '../assets/images/breathing-rhythm-btn.png'

export function Aside({buttons}) {
  return (
    <>
      {buttons && <AsideButtonsBlock />}
      <AsideInfoBlock />
    </>
  )
}

export function AsideButtonsBlock() {
  return (
    <div className="buttons-block">
      <Link
        to="/background"
        className="navlink-btn background-btn"
      >
        <img src={backgroundBtnImg} alt=""/>
        <span>Background</span>
      </Link>
      <Link
        to="/rhythm"
        className="navlink-btn rhythm-btn"
      >
        <img src={breathingBhythmBtnImg} alt=""/>
        <span>Breathing rhythm</span>
      </Link>
    </div>
  )
}

export function AsideInfoBlock() {
  return (
    <div className="info-block">
      <div className="info-block-options">
        <p><span>Inhale:</span> <strong>2 sec</strong></p>
        <p><span>Delay:</span> <strong>2 sec</strong></p>
        <p><span>Exhale:</span> <strong>2 sec</strong></p>
        <p><span>Pause:</span> <strong>5 sec</strong></p>
        <p><span>Inhalation per minute:</span> <strong>19 cycles</strong></p>
      </div>
      <div className="info-block-description">
        <p>The descriptive part: what is achieved by a given breathing rhythm.</p>
      </div>
    </div>
  )
}