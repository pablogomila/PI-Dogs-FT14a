import React from 'react'
import style from './card.module.css'
import { Link } from 'react-router-dom'

//! Simple Card Component to show Breeds on Home Page
function Card({ id, name, img }) {
  return (
    <div className={style.card}>
      <p className={style.title}>{name}</p>
      <div className={style.imgContainer}>
        <img src={img} className={style.cardImg} alt="dog" />
      </div>
      <Link to={`/detail/${id}`}>
        <button className={style.button}>More Info</button>
      </Link>
    </div>
  )
}

export default Card
