import { useState, useEffect } from 'react';
import { getItems } from '../services/API';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const displayContainer = {
  
}

function Search() {
  const [searchName, setSearchName] = useState('');
  const [items, setItems] = useState([]);
  const [filterItems,setFilterItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await getItems();          
      setItems(res);
      setLoading(false);
    }
    fetchItems();                            
  }, [])
  
  
  useEffect(() => {
    const filter = items.filter((item) => item.fields.name.includes(searchName));
    setFilterItems(filter);
  },[searchName])
  
  if (loading) return <div></div>;


  return (
    <div>
      <SearchBar searchName={searchName} setSearchName={setSearchName}/>
      {filterItems.map((item) => {
        return (
          <Link to={`/items/${item.id}`} key={item.id}>
            <div style={displayContainer}>
              <button>-</button>
              <span>{item.fields.quantity}</span>
              <button>+</button>
              <span>{item.fields.uofm}</span>
              <span>{item.fields.name}</span>
              <span>{item.fields.location}</span>
            </div>
          </Link>
        );
      })}
    </div>
  )
}

export default Search;