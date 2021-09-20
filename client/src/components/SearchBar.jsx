function SearchBar(props) {
  return (
    <>
      <input
        type="text"
        value={props.searchName}
        onChange={(e) => props.setSearchName(e.target.value)}
      />
      <button>submit</button>

    </>
  )
}

export default SearchBar;
