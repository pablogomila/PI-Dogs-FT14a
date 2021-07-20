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

  const temperaments = useSelector((state) => state.temperaments)
  const breeds = useSelector((state) => state.allBreeds)

  let [selectedTemp, setSelectedTemp] = useState('')
  let [tempToFilterBy, setTempToFilterBy] = useState([])

  function handleClick() {
    let filtered = []
    breeds.forEach((b) => {
      b.temperaments.map((t) =>
        t.name === selectedTemp ? filtered.push(b) : null,
      )
    })
    dispatch(filter(filtered))
  }

  function resetTemps(e) {
    dispatch(filter([]))
  }

  function handleChangeTemp(e) {
    setSelectedTemp(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setTempToFilterBy([...tempToFilterBy, selectedTemp])
  }

  function handleOrder(e) {
    dispatch(sortBreeds(e.target.value))
  }

  function handleOrderByWeight(e) {
    dispatch(orderByWeight(e.target.value))
  }

  return (
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
          <button onClick={resetTemps} className={style.button}>
            Clear
          </button>
          <button onClick={() => handleClick()} className={style.button}>
            Filter
          </button>
        </div>
      </form>

      <form className={style.formContainer}>
        <p className={style.text}>Order By Weight</p>
        <select onChange={handleOrderByWeight} className={style.select}>
          <option value="">Options</option>
          <option value="MINMAX">Heavy to Light</option>
          <option value="MAXMIN">Light to Heavy</option>
        </select>
      </form>

      <form className={style.formContainer}>
        <p className={style.text}>Order By Letter</p>
        <select onChange={handleOrder} className={style.select}>
          <option value="">Options</option>
          <option value="ASC">A-Z</option>
          <option value="DESC">Z-A</option>
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
