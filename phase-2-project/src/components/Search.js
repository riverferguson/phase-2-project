import "./Search.css"


const Search = ({setModelSearch}) => {
  

  const handleModelSearch = (event) => {
   setModelSearch(event.target.value)
 }


  return (
    
      <div className="search">
        <span>
          <label>Search by: Make or Model </label>
        </span>
        <span>
          <input className="search-input" placeholder=" search "  onChange={handleModelSearch}/>
        </span>
      </div>
  )
}

export default Search