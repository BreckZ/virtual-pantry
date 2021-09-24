import { useState } from 'react';
import Switch from 'rc-switch'      // rc-switch is not in package.json!!!
// import 'rc-switch/assets/index.css'
import './Toggle.css'


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
    props.setLocation("fridge")
    setFridge(false)
    setPantry(prevPantry => !prevPantry)
    setFreezer(prevFreezer => !prevFreezer)
  }

  const handleFreezerSwitch = (e) => {
    props.setLocation("freezer")
    setFreezer(false)
    setPantry(prevPantry => !prevPantry)
    setFridge(prevFridge => !prevFridge)
  }

  const handleAdd = (e) => {
    props.handleSubmit(e)

  }


  return (
    <>
      <form className="form-layout" onSubmit={handleAdd}>
        <p className="form-banner">Add an Item to Your List</p>
        <input
          className="qty-input"
          type="number"
          value={props.quantity}
          onChange={(e) => props.setQuantity(e.target.valueAsNumber)}
          placeholder="Qty"
        />
        <input
          className="uofm-input"
          type="text"
          value={props.uofm}
          onChange={(e) => props.setUofM(e.target.value)}
          placeholder="UofM"
        />
        <input
          className="food-input"
          type="text"
          value={props.name}
          onChange={(e) => props.setName(e.target.value)}
          placeholder="Food Name"
        />
        <br />
        <div className="form-buttons">
          <div className="location-toggle">
            <div className="pantry-switch">
              <Switch disabled={pantry} onChange={(pantry) => { setPantry(pantry) }} onClick={(e) => handlePantrySwitch(e)} />pantry
            </div>
            <div className="fridge-switch">
              <Switch disabled={fridge} onChange={(fridge) => { setFridge(fridge) }} onClick={(e) => handleFridgeSwitch(e)} />fridge
            </div>
            <div className="freezer-switch">
              <Switch disabled={freezer} onChange={(freezer) => { setFreezer(freezer) }} onClick={(e) => handleFreezerSwitch(e)} />freezer
            </div>
          </div>
          <button className="create-item">Add</button>
        </div>
      </form>
    </>
  )
}

export default ItemForm
