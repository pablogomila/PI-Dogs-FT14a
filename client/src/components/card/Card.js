import React from 'react'
import style from './card.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Card({ id, name, img }) {
  const loading = useSelector((state) => state.loading)

  

  return (
    
    <div className={style.card}>
      {loading ? (
            <i className="fas fa-spinner fa-spin spinner"></i>
          ) : ( <div>
      <p className={style.title}>{name}</p>
      <div className={style.imgContainer}>
        <img src={img} className={style.cardImg} alt="dog" />
      </div> </div>)}
      <Link to={`/detail/${id}`}>
        <button className={style.button}>More Info</button>
      </Link>
    </div>
  )
}

export default Card
