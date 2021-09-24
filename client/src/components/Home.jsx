import { useState, useEffect } from 'react';
import { getItems, changeQuantity, deleteItem } from '../services/API';
import './Home.css'

function Home(props) {
  const [location, setLocation] = useState('');
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
    const filter = items.filter((item) => item.fields.location?.includes(location));
    if (location.length === 0) {
      setFilterItems([])
    } else {
      setFilterItems(filter);
    }
  }, [location, items])

  const handleAllClick = () => {
    setLocation(location)
  }

  const handlePantryClick = () => {
    setLocation('pantry')
  }

  const handleFridgeClick = () => {
    setLocation('fridge')
  }

  const handleFreezerClick = () => {
    setLocation('freezer')
  }

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
      <div className="homepage-banner"></div>
      <div className="filter-bar">
        <button onClick={(e) => { handleAllClick() }}>all</button>
        <button onClick={(e) => { handlePantryClick() }}>pantry</button>
        <button onClick={(e) => { handleFridgeClick() }}>fridge</button>
        <button onClick={(e) => { handleFreezerClick() }}>freezer</button>
      </div>
      <div className="filter-results">
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

export default Home;