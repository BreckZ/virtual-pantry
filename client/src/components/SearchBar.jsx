function SearchBar(props) {
  return (
    <>
      <input
        type="text"
        value={props.searchName}
        onChange={(e) => props.setSearchName(e.target.value)}
      />
      <button>search</button>

    </>
  )
}

export default SearchBar;
