function SearchBar(props) {
  return (
    <>
      <input
        type="search"
        value={props.searchName}
        onChange={(e) => props.setSearchName(e.target.value)}
      />
    </>
  )
}

export default SearchBar;
