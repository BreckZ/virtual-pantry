import { useState, useEffect } from "react";
import { getItems, changeQuantity, deleteItem } from "../services/API";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { HiOutlineMinusCircle } from "react-icons/hi";
import { HiOutlineXCircle } from "react-icons/hi";
import "./Home.css";

function Home(props) {
  const [location, setLocation] = useState("");
  const [items, setItems] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(
    () => {
      const fetchItems = async () => {
        const res = await getItems();
        setItems(res);
        setLoading(false);
      };
      fetchItems();
    },
    [toggleFetch],
    props.name
  );

  useEffect(() => {
    const filter = items.filter((item) =>
      item.fields.location?.includes(location)
    );
    if (location.length === 0) {
      setFilterItems([]);
    } else {
      setFilterItems(filter);
    }
  }, [location, items]);

  const handlePantryClick = () => {
    setLocation("pantry");
  };

  const handleFridgeClick = () => {
    setLocation("fridge");
  };

  const handleFreezerClick = () => {
    setLocation("freezer");
  };

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
    console.log(item);
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
      <div className="homepage-banner">
        <span className="homepage-title">Pantry Pal</span>
      </div>
      <div className="filter-bar">
        <button
          className="filter-button"
          onClick={(e) => {
            handlePantryClick();
          }}
        >
          pantry
        </button>
        <button
          className="filter-button"
          onClick={(e) => {
            handleFridgeClick();
          }}
        >
          fridge
        </button>
        <button
          className="filter-button"
          onClick={(e) => {
            handleFreezerClick();
          }}
        >
          freezer
        </button>
      </div>
      <div className="filter-results-container">
        <div className="filter-results">
          {filterItems.map((item) => {
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

export default Home;
