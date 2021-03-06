import { useState } from 'react';
import { useHistory } from 'react-router';
import { addItem } from '../services/API';
import NewItemForm from './NewItemForm';
import './NewItemForm.css'

function NewItem(props) {
  // const [name, setName] = useState('');
  const { name, setName } = props;
  const [quantity, setQuantity] = useState('');
  const [uofm, setUofM] = useState('');
  const [location, setLocation] = useState('');

  const history = useHistory('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      quantity,
      uofm,
      location,
    }

    await addItem(fields);

    history.push(`/pantry`);
    setName('')
    setQuantity('')
    setUofM('')
    setLocation('')
  };

  return (
    // <div className="form-container">
      <NewItemForm
        handleSubmit={handleSubmit}
        name={name} setName={setName}
        quantity={quantity} setQuantity={setQuantity}
        uofm={uofm} setUofM={setUofM}
        location={location} setLocation={setLocation}
      />
    // </div>

  )
}

export default NewItem;
