import { useState, useEffect } from 'react';
import { changeQuantity, deleteItem, getItems } from '../services/API';
import './ListItems.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMinus} from "@fortawesome/free-solid-svg-icons";
// import { faPlus} from "@fortawesome/free-solid-svg-icons";

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
    <>
      <div className="listitems-banner">
        <span className="listitems-title"><span className="white-title">Pantr</span>y Pal</span>
      </div>
      <div className="listitems-container">
        {itemNames.map((item) => {
          return (
            <div className="listitems-display" key={item.id}>
              <button className="decrement display-button" onClick={() => { handleDecrement(item) }}>-</button>
              {/* <FontAwesomeIcon onClick={() => { handleDecrement(item) }} className="decrement" icon={faMinus} size="sm" /> */}
              <span className="quantity-display"> {item.fields.quantity} </span>
              <button className="increment display-button" onClick={() => { handleIncrement(item) }}>+</button>
              {/* <FontAwesomeIcon onClick={() => { handleIncrement(item) }} className="increment" icon={faPlus} size="sm" /> */}
              <span className="uofm-display"> {item.fields.uofm} </span>
              <span className="food-name"> {item.fields.name} </span>
              <span className="location-display"> {item.fields.location} </span>
              <button className="delete-button display-button" onClick={() => handleDelete(item.id)}>x</button>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default ListItems;
