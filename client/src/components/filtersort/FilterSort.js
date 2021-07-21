import React, { useEffect, useState } from 'react'
import { sortBreeds, getTemperaments, orderByWeight } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'
import style from './filtersort.module.css'
import { filter } from './../../actions/index'

function FilterSort() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTemperaments())
    // eslint-disable-next-line
  }, [])

  //! Importing temperaments and all breeds to handle filtering
  const temperaments = useSelector((state) => state.temperaments)
  const breeds = useSelector((state) => state.allBreeds)

  let [selectedTemp, setSelectedTemp] = useState('')
  let [tempToFilterBy, setTempToFilterBy] = useState([])

  //! Setting what to do onClick
  function handleClick() {
    let filtered = []
    breeds.forEach((b) => {
      b.temperaments.map((t) =>
        t.name === selectedTemp ? filtered.push(b) : null,
      )
    })
    dispatch(filter(filtered))
  }

  //! Resetting Temperaments sets the filter to empty
  function resetTemps(e) {
    dispatch(filter([]))
  }

  //! Setting what to do in case of temperament selection change
  function handleChangeTemp(e) {
    setSelectedTemp(e.target.value)
  }

  //! Setting what to do on Submit
  function handleSubmit(e) {
    e.preventDefault()
    setTempToFilterBy([...tempToFilterBy, selectedTemp])
  }

  //! Setting what to do if ordering is selected
  function handleOrder(e) {
    dispatch(sortBreeds(e.target.value))
  }

  //! Setting what to do if ordering is selected by weight
  function handleOrderByWeight(e) {
    dispatch(orderByWeight(e.target.value))
  }

  return (
    //! Form to select Temperament al filter by it
    <div className={style.mainContainer}>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <select
          onChange={handleChangeTemp}
          name="temperaments"
          value={selectedTemp}
          className={style.select}
        >
          <option>Filter Temperament</option>
          {temperaments.map((e) => (
            <option value={e.name} key={e.id}>
              {e.name}
            </option>
          ))}
        </select>
        <div className={style.btnContainer}>
          <button onClick={() => handleClick()} className={style.button}>
            Filter
          </button>
          <button onClick={resetTemps} className={style.button}>
            Clear
          </button>
        </div>
      </form>

      <form className={style.formContainer}>
        <p className={style.text}>Order By Weight</p>
        <select onChange={handleOrderByWeight} className={style.select}>
          <option value="">Filter By Weight</option>
          <option value="HL">Heavy to Light</option>
          <option value="LH">Light to Heavy</option>
        </select>
      </form>

      <form className={style.formContainer}>
        <p className={style.text}>Order By Letter</p>
        <select onChange={handleOrder} className={style.select}>
          <option value="">Filter by Letter - AZ</option>
          <option value="AZ">A-Z</option>
          <option value="ZA">Z-A</option>
        </select>
      </form>
      <button
        className={style.clearbutton}
        onClick={() => (window.location.href = '/home')}
      >
        Clear All Filters
      </button>
    </div>
  )
}

export default FilterSort
