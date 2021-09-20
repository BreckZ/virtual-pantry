import { useState, useEffect } from 'react';
import { getItems } from '../services/API';
import { Link } from 'react-router-dom';
import Counter from './Counter';

const displayContainer = {
  
  
}

function ListItems() {
  const [itemNames, setItemNames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await getItems();          
      setItemNames(res);
      console.log("mapping over the api");
      console.log(res);
      setLoading(false);
    }
    fetchItems();                            
  }, [])

  if (loading) return <div></div>;

  
  return (
    <div>
      {itemNames.map((item) => {
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
      <Counter />
    </div>
  )
}

export default ListItems;