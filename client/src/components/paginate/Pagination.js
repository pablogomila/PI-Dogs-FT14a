import React from 'react';
import style from './pagination.module.css';

const Pagination = ({ breedsPerPage, totalBreeds, onChangePage }) => {
  const pageNumber = []

  for (let i = 1; i <= Math.ceil(totalBreeds / breedsPerPage); i++) {
    pageNumber.push(i)
  }
  return (
    <nav>
      <ul className={style.pagination}>
        {pageNumber.map((num) => (
          <ul key={num} className={style.li}>
              <a href="" onclick={(num) => onChangePage(num)} className={style.pagenumber}>
                  {num}
              </a>
          </ul>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;