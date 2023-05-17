const Search = ({search, setSearch}) => {
  
  const handleMakeSearch = (event) => {
    setSearch(event.target.value);
  }

  return (
    <form>
      <div className="guitarForm">
        <span>
          <label>Search by Make: </label>
          <input type='text' value={search} onChange={handleMakeSearch} />
        </span>
      </div>
      <div>
      </div>
    </form>
  )
}

export default Search