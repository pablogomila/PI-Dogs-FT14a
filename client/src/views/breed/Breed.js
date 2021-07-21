import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './breed.module.css'
import { Link } from 'react-router-dom'

export default function Breed(id) {
  const [breed, setBreed] = useState()

  useEffect(() => {
    axios.get(`/dogs/${id.id}`)
    .then((result) => setBreed(result.data))
    // eslint-disable-next-line
  }, [])

  return (
    <div className={style.mainContainer}>
      <div className={style.secondContainer}>
        {breed ? (
          <div className={style.breedContainer}>
            <p className={style.title}>{breed.name}</p>
            <div className={style.imgContainer}>
              <img src={breed.image} className={style.img} alt="dog" />
            </div>
            <div className={style.dataContainer}>
              <p className={style.info}>Weight: {breed.weight} kg</p>
              <p className={style.info}>Height: {breed.height} cm</p>
              <p className={style.info}>Life Span: {breed.life_span}</p>
              {breed.temperaments ? (
                <div className={style.info}>
                  <div className={style.tempButtons}>
                    {breed.temperaments &&
                      breed.temperaments.map((t) => {
                        return <p className={style.temperament}>{t.name}</p>
                      })}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <div>
            <i className="fas fa-spinner fa-spin spinner"></i>
          </div>
        )}
      </div>
      <Link to="/home" className={style.arrow}>
        <span class="fas fa-caret-square-right"></span>
      </Link>
    </div>
  )
}
