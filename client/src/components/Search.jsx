import { useState, useEffect } from 'react';
import { getItems, changeQuantity, deleteItem } from '../services/API';
import SearchBar from './SearchBar';
import './Search.css'

function Search(props) {
  const [searchName, setSearchName] = useState('');
  const [items, setItems] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await getItems();
      setItems(res);
      setLoading(false);
    }
    fetchItems();
  }, [toggleFetch], props.name)

  useEffect(() => {
    const filter = items.filter((item) => item.fields.name?.includes(searchName));
    if (searchName.length === 0) {
      setFilterItems([])
    } else {
      setFilterItems(filter);
    }
  }, [searchName, items])

  if (loading) return <div></div>;

  const handleDecrement = async (item) => {
    const fields = {
      quantity: item.fields.quantity - 1
    }
    await changeQuantity(fields, item.id);
    if (item.fields.quantity < 2) {
      await deleteItem(item.id);
      setToggleFetch((prevState) => !prevState);

    }
    setToggleFetch((prevState) => !prevState);
  }

  const handleIncrement = async (item) => {
    console.log(item);
    const fields = {
      quantity: item.fields.quantity + 1
    }
    await changeQuantity(fields, item.id);
    setToggleFetch((prevState) => !prevState);
  }

  const handleDelete = async (id) => {
    await deleteItem(id);
    setToggleFetch((prevState) => !prevState);
  }

  return (
    <>
      <div className="search-bar-banner"></div>
      <div className="search-bar'container">
        <SearchBar searchName={searchName} setSearchName={setSearchName} />
      </div>
      <div className="search-results">
        {filterItems.map((item) => {
          return (
            <div key={item.id}>
              <button onClick={() => { handleDecrement(item) }}>-</button>
              <span> {item.fields.quantity} </span>
              <button onClick={() => { handleIncrement(item) }}>+</button>
              <span> {item.fields.uofm} </span>
              <span> {item.fields.name} </span>
              <span> {item.fields.location} </span>
              <button onClick={() => handleDelete(item.id)}>delete</button>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default Search;