import 'antd/dist/antd.css'
import { Switch } from 'antd'
import { useState } from 'react';


function ItemForm(props) {
  const [pantry, setPantry] = useState(false)
  const [fridge, setFridge] = useState(false)
  const [freezer, setFreezer] = useState(false)

  const handlePantrySwitch = (e) => {

    props.setLocation("pantry")
    setFridge(false)
    setFreezer(false)
  }

  const handleFridgeSwitch = (e) => {
    // props.setLocation(e.target.value);
    props.setLocation("fridge")
    setPantry(false)
    setFreezer(false)
  }

  const handleFreezerSwitch = (e) => {
    // props.setLocation(e.target.value);
    props.setLocation("freezer")
    setPantry(false)
    setFridge(false)
  }

  const checkIfDisabled = () => {

    return false;
  }

  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="number"
        value={props.quantity}
        onChange={(e) => props.setQuantity(e.target.valueAsNumber)}
        placeholder="Qty"
      />
      <br />
      <input
        type="text"
        value={props.uofm}
        onChange={(e) => props.setUofM(e.target.value)}
        placeholder="UofM"
      />
      <br />
      <input
        type="text"
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
        placeholder="Food Name"
      />
      <br />
      {/* <input
        type="text"
        value={props.location}
        onChange={(e) => props.setLocation(e.target.value)}
        placeholder="Location"
      /> */}
      <div>
        <Switch onChange={(pantry) => { setPantry(pantry) }} onClick={(e) => handlePantrySwitch(e)} />
        pantry
      </div>
      <div>
        <Switch onChange={(fridge) => { setFridge(fridge) }} onClick={(e) => handleFridgeSwitch(e)} />
        fridge
      </div>
      <div>
        <Switch onChange={(freezer) => { setFreezer(freezer) }} onClick={(e) => handleFreezerSwitch(e)} />
        freezer
      </div>
      <button disabled={checkIfDisabled()}>Add</button>
    </form>
  )
}

export default ItemForm
