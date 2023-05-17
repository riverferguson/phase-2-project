import "./Search.css"


const Search = ({searchType, setSearchType, modelSearch, setModelSearch}) => {
  

  const handleMakeSearch = (event) => {
    debugger
    setSearchType(event.target.value);
  }

  const handleModelSearch = (event) => {
   setModelSearch(event.target.value)
 }


  return (
    
      <div className="search">
        <span>
          <label>Search by: </label>
          <label>Make </label>
          <input type='radio' name="query" value='make' onChange={handleMakeSearch} />
          <label>Model </label>
          <input type='radio' name="query"value='model' onChange={handleMakeSearch}/>
        </span>
        <span>
          <label>Search by Model: </label>
          <input placeholder="search by " value={modelSearch} onChange={handleModelSearch}/>
        </span>
      </div>
  )
}

export default Search