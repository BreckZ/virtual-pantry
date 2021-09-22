import { useState, useEffect } from 'react';
import { changeQuantity, deleteItem, getItems } from '../services/API';

const displayContainer = {

}

function ListItems(props) {
  const [itemNames, setItemNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggleFetch, setToggleFetch] = useState(false);


  useEffect(() => {
    const fetchItems = async () => {
      const res = await getItems();
      setItemNames(res);
      setLoading(false);
    }
    fetchItems();
  }, [toggleFetch, props.name])


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
    <div>

      <br />
      <button>Pantry</button>
      <button>Fridge</button>
      <button>Freezer</button>
      <br />
      <br />
      {itemNames.map((item) => {
        return (
          <div style={displayContainer} key={item.id}>
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
  )
}

export default ListItems;
