import React from 'react'
import { Link } from 'react-router-dom'
import style from './nav.module.css'
import SearchBar from './../searchBar/SearchBar'

//! Simple Nav Bar including SearchBar Component
export function Nav({ setInput, input }) {
  return (
    <div className={style.mainContainer}>
      <nav className={style.navContainer}>
        <div className={style.linkContainer}>
          <Link to="/home" className={style.hover}>
            Home
          </Link>
          <Link to="/create" className={style.hover}>
            Create Dog Breed
          </Link>
        </div>
        <SearchBar setInput={setInput} input={input} />
      </nav>
    </div>
  )
}

export default Nav
