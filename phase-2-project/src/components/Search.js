import "./Search.css"


const Search = ({ setSearchMake, setModelSearch}) => {
  

  const handleMakeSearch = (event) => {
    setSearchMake(event.target.value);
  }

  const handleModelSearch = (event) => {
   setModelSearch(event.target.value)
 }


  return (
    
      <div className="search">
        <span>
          <label>Search by: Make or Model </label>
          <label> </label>
          {/* <input type='text' name="query" value='make' onChange={handleMakeSearch} />
          <label>Make </label>
          <input type='text' name="query"value='model' onChange={handleMakeSearch}/> */}
        </span>
        <span>
          <input placeholder=" search "  onChange={handleModelSearch}/>
        </span>
      </div>
  )
}

export default Search