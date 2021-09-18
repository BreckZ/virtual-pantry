import { useState, useEffect } from 'react';
import { getItems } from '../services/API';  // using curly brackets because API is housing multiple exports
import { Link } from 'react-router-dom';

function ListItems() {
  const [itemNames, setItemNames] = useState([]);   // this is in brackets because we are grabbing res.data.records which is an array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await getItems();          // await getRecipes() is calling from the API component
      setItemNames(res);
      console.log("mapping over the api");
      console.log(res);
      setLoading(false);
    }
    fetchItems();                            // calls 
  }, [])

  // You can put in text to check if it is loading
  if (loading) return <div></div>;
  
  // key={item.id} gives each value a unique id and keeps the ugly error from showing up in the console.
  return (
    <div>
      {itemNames.map((item) => {
          return (
            <Link to={`/items/${item.id}`} key={item.id}>
              <button>-</button>
              <span>{item.fields.quantity}</span>
              <button>+</button>
              <span>{item.fields.uofm}</span>
              <span>{item.fields.name}</span>
              <span>{item.fields.location}</span>
            </Link>
          );
        })}
    </div>
  )
}

export default ListItems;