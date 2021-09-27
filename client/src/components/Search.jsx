import { useState, useEffect } from "react";
import { getItems, changeQuantity, deleteItem } from "../services/API";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { HiOutlineMinusCircle } from "react-icons/hi";
import { HiOutlineXCircle } from "react-icons/hi";
import SearchBar from "./SearchBar";
import "./Search.css";

function Search(props) {
  const [searchName, setSearchName] = useState("");
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
      item.fields.name?.includes(searchName)
    );
    if (searchName.length === 0) {
      setFilterItems([]);
    } else {
      setFilterItems(filter);
    }
  }, [searchName, items]);

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
      <div className="search-bar-banner">
        <span className="search-bar-title">Pantr<span className="white-title">y Pal</span></span>
      </div>
      <div className="search-bar'container">
        <SearchBar searchName={searchName} setSearchName={setSearchName} />
      </div>
      <div className="search-results-container">
        <div className="search-results">
          {filterItems.map((item) => {
            return (
              <div className="listitems-display" key={item.id}>
                <HiOutlineMinusCircle
                  className="display-button decrement"
                  onClick={() => {
                    handleDecrement(item);
                  }}
                />

                <span className="quantity-display">
                  {" "}
                  {item.fields.quantity}{" "}
                </span>

                <HiOutlinePlusCircle
                  className="display-button increment"
                  onClick={() => {
                    handleIncrement(item);
                  }}
                />
                <span className="uofm-display"> {item.fields.uofm} </span>
                <span className="food-name"> {item.fields.name} </span>
                <span className="location-display">
                  {" "}
                  {item.fields.location}{" "}
                </span>
                <HiOutlineXCircle
                  className="display-button delete"
                  onClick={() => handleDelete(item.id)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Search;
