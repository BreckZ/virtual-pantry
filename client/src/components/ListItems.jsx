import { useState, useEffect } from "react";
import { changeQuantity, deleteItem, getItems } from "../services/API";
import { HiOutlinePlusCircle } from 'react-icons/hi';
import { HiOutlineMinusCircle } from 'react-icons/hi';
import { HiOutlineXCircle } from 'react-icons/hi';
import "./ListItems.css";

function ListItems(props) {
  const [itemNames, setItemNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await getItems();
      setItemNames(res);
      setLoading(false);
    };
    fetchItems();
  }, [toggleFetch, props.name]);

  if (loading) return <div></div>;

  const handleDecrement = async (item) => {
    const fields = {
      quantity: item.fields.quantity - 1,
    };
    await changeQuantity(fields, item.id);
    if (item.fields.quantity < 2) {
      await deleteItem(item.id);
      setToggleFetch((prevState) => !prevState);
    }
    setToggleFetch((prevState) => !prevState);
  };

  const handleIncrement = async (item) => {
    const fields = {
      quantity: item.fields.quantity + 1,
    };
    await changeQuantity(fields, item.id);
    setToggleFetch((prevState) => !prevState);
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    setToggleFetch((prevState) => !prevState);
  };

  return (
    <>
      <div className="listitems-banner">
        <span className="listitems-title"><span className="white-title">Pantr</span>y Pal</span>
      </div>
      <div className="listitems-center">
      <div className="listitems-container">
        {itemNames.map((item) => {
          return (
            <div className="listitems-display" key={item.id}>
              <HiOutlineMinusCircle className="display-button decrement" onClick={() => {
                  handleDecrement(item);
                }}/>
              
              <span className="quantity-display"> {item.fields.quantity} </span>
              
                
                <HiOutlinePlusCircle
                  className="display-button increment"
                  onClick={() => {
                    handleIncrement(item);
                  }}
                />
              <span className="uofm-display"> {item.fields.uofm} </span>
              <span className="food-name"> {item.fields.name} </span>
              <span className="location-display"> {item.fields.location} </span>
              <HiOutlineXCircle className="display-button delete" onClick={() => handleDelete(item.id)}/>
              
            </div>
          );
        })}
        </div>
        </div>
    </>
  );
}

export default ListItems;
