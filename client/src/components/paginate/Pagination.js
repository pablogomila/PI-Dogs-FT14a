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
        {pageNumber.map((sel) => (
          <ul key={sel} className={style.li}>
              <a href="" onclick={(num) => onChangePage(num)} className={style.pagenumber}>
                  {sel}
              </a>
          </ul>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;