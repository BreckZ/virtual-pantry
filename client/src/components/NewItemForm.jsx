import { useState } from "react";
import Switch from "rc-switch"; // rc-switch is not in package.json!!!
// import 'rc-switch/assets/index.css'
import "./Toggle.css";

function NewItemForm(props) {
  const [pantry, setPantry] = useState(false);
  const [fridge, setFridge] = useState(false);
  const [freezer, setFreezer] = useState(false);

  const handlePantrySwitch = (e) => {
    props.setLocation("pantry");
    setPantry(false);
    setFridge((prevFridge) => !prevFridge);
    setFreezer((prevFreezer) => !prevFreezer);
  };

  const handleFridgeSwitch = (e) => {
    props.setLocation("fridge");
    setFridge(false);
    setPantry((prevPantry) => !prevPantry);
    setFreezer((prevFreezer) => !prevFreezer);
  };

  const handleFreezerSwitch = (e) => {
    props.setLocation("freezer");
    setFreezer(false);
    setPantry((prevPantry) => !prevPantry);
    setFridge((prevFridge) => !prevFridge);
  };

  const handleAdd = (e) => {
    props.handleSubmit(e);
  };

  return (
    <>
      <div className="form-component">
        <div className="new-item-form-container">
          <form onSubmit={handleAdd}>
            <h3 className="form-banner">Add an Item to Your List</h3>
            <input
              className="qty-input form-input"
              type="number"
              min="1"
              max="999"
              value={props.quantity}
              onChange={(e) => props.setQuantity(e.target.valueAsNumber)}
              placeholder="Qty"
            />
            <input
              className="uofm-input form-input"
              type="text"
              value={props.uofm}
              onChange={(e) => props.setUofM(e.target.value)}
              placeholder="UofM"
            />
            <input
              className="food-input form-input"
              type="text"
              value={props.name}
              onChange={(e) => props.setName(e.target.value)}
              placeholder="Food Name"
            />
            <div className="pantry-switch">
              <Switch
                {...(pantry ? "checked" : null)}
                disabled={pantry}
                onChange={(pantry) => {
                  setPantry(pantry);
                }}
                onClick={(e) => handlePantrySwitch(e)}
              />
              <span>pantry</span>
            </div>
            <div className="fridge-switch">
              <Switch
                disabled={fridge}
                onChange={(fridge) => {
                  setFridge(fridge);
                }}
                onClick={(e) => handleFridgeSwitch(e)}
              />
              <span>fridge</span>
            </div>
            <div className="freezer-switch">
              <Switch
                disabled={freezer}
                onChange={(freezer) => {
                  setFreezer(freezer);
                }}
                onClick={(e) => handleFreezerSwitch(e)}
              />
              <span>freezer</span>
            </div>
            <button className="add-button">Add</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewItemForm;
