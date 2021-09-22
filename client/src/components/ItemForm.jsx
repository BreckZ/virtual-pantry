import { useState } from 'react';
import Switch from 'rc-switch'
import 'rc-switch/assets/index.css'

function ItemForm(props) {
  const [pantry, setPantry] = useState(false)
  const [fridge, setFridge] = useState(false)
  const [freezer, setFreezer] = useState(false)


  const handlePantrySwitch = (e) => {

    props.setLocation("pantry")
    setPantry(false)
    setFridge(prevFridge => !prevFridge)
    setFreezer(prevFreezer => !prevFreezer)


  }

  const handleFridgeSwitch = (e) => {
    // props.setLocation(e.target.value);
    props.setLocation("fridge")
    setFridge(false)
    setPantry(prevPantry => !prevPantry)
    setFreezer(prevFreezer => !prevFreezer)

  }

  const handleFreezerSwitch = (e) => {
    // props.setLocation(e.target.value);
    props.setLocation("freezer")
    setFreezer(false)
    setPantry(prevPantry => !prevPantry)
    setFridge(prevFridge => !prevFridge)

  }

  const handleAdd = (e) => {
    props.handleSubmit(e)

  }

  const checkIfDisabled = () => {

    return false;
  }

  return (
    <form onSubmit={handleAdd}>
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
        <Switch disabled={pantry} onChange={(pantry) => { setPantry(pantry) }} onClick={(e) => handlePantrySwitch(e)} />pantry
      </div>
      <div>
        <Switch disabled={fridge} onChange={(fridge) => { setFridge(fridge) }} onClick={(e) => handleFridgeSwitch(e)} />fridge
      </div>
      <div>
        <Switch disabled={freezer} onChange={(freezer) => { setFreezer(freezer) }} onClick={(e) => handleFreezerSwitch(e)} />freezer
      </div>

      <button disabled={checkIfDisabled()}>Add</button>
    </form>
  )
}

export default ItemForm
