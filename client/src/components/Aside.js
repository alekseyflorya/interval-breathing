import React from 'react'
import {Link} from 'react-router-dom'
import backgroundBtnImg from '../assets/images/background-btn.png'
import breathingBhythmBtnImg from '../assets/images/breathing-rhythm-btn.png'
import AsideInfoBlock from './AsideInfoBlock'

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