import "./Search.css"


const Search = ({searchMake, setSearchMake, modelSearch, setModelSearch}) => {
  

  const handleMakeSearch = (event) => {
    setSearchMake(event.target.value);
  }

  const handleModelSearch = (event) => {
   setModelSearch(event.target.value)
 }


  return (
    
      <div className="search">
        <span>
          <label>Search by: </label>
          <label> </label>
          <input type='radio' name="query" value='make' onChange={handleMakeSearch} />
          <label>Make </label>
          <input type='radio' name="query"value='model' onChange={handleMakeSearch}/>
        </span>
        <span>
          <label> Model: </label>
          <input placeholder="search by "  onChange={handleModelSearch}/>
        </span>
      </div>
  )
}

export default Search