import React from 'react'
import style from './searchbar.module.css'

    //! SearchBar input and Clear button
function SearchBar({ input, setInput }) {
  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={style.formContainer}
      >
        <div className={style.search}>
          <i class="fas fa-paw"></i>
        </div>
        <div className={style.searchBarContainer}>
          <input
            type="text"
            value={input}
            placeholder="Search Dog Breed"
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
          ></input>
          <button
            className={style.button}
            onClick={() => (window.location.href = '/home')}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
