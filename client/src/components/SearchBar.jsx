import './Search.css'

function SearchBar(props) {
  return (
    <div className="search-bar-container">
      <input
        className="search-bar-input"
        type="search"
        placeholder="search item name"
        value={props.searchName}
        onChange={(e) => props.setSearchName(e.target.value)}
      />
    </div>
  )
}

export default SearchBar;
