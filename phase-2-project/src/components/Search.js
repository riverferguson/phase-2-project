import { useState } from 'react'

const Search = () => {
  const [enteredSearch, setEnteredSearch] = useState('')

  const searchChangeHandler = (event) => {
    setEnteredSearch(event.target.value);
  }


  return (
    <form>
      <div className="guitarForm">
        <span>
          <label>Name: </label>
          <input type='text' value={enteredSearch} onChange={searchChangeHandler} />
        </span>
      </div>
      <div>
        <button type='submit'>Search</button>
      </div>
    </form>
  )
}

export default Search