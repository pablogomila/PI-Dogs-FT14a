import React from 'react'
import style from './pagination.module.css'

const Pagination = ({ breedsPerPage, totalBreeds, onChangePage }) => {
  const pageNumber = []
  for (let i = 1; i <= Math.ceil(totalBreeds / breedsPerPage); i++) {
    pageNumber.push(i)
  }
  return (
    <nav>
      <ul className={style.pagination}>
        {pageNumber.map((num) => (
          <button
            value={num}
            onclick={() => onChangePage(num)}
            className={style.button}
          >
            {num}
          </button>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
