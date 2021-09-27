import { useState } from "react";
// import Switch from "rc-switch"; // rc-switch is not in package.json!!!
import "./Toggle.css";


function NewItemForm(props) {
  const [pantry, setPantry] = useState(false);
  const [fridge, setFridge] = useState(false);
  const [freezer, setFreezer] = useState(false);
  
  const handlePantrySwitch = (e) => {
    props.setLocation("pantry");
    // setPantry(false);
    // setFridge((prevFridge) => !prevFridge);
    // setFreezer((prevFreezer) => !prevFreezer);
  };

  const handleFridgeSwitch = (e) => {
    props.setLocation("fridge");
    // setFridge(false);
    // setPantry((prevPantry) => !prevPantry);
    // setFreezer((prevFreezer) => !prevFreezer);
  };

  const handleFreezerSwitch = (e) => {
    props.setLocation("freezer");
    // setFreezer(false);
    // setPantry((prevPantry) => !prevPantry);
    // setFridge((prevFridge) => !prevFridge);
  };

  const handleAdd = (e) => {
    props.handleSubmit(e);
    setPantry(pantry)
    setFridge(fridge)
    setFreezer(freezer)
    window.location.reload(true);
  };

  return (
    <>
      <div className="form-component">
        <div className="new-item-form-container">
          <form onSubmit={handleAdd}>
            <h3 className="form-banner">Add an Item to Your List</h3>
            <div className="form-input-container">
              <input
                className="qty-input form-input"
                type="number"
                min="1"
                max="99"
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
            </div>
            <div className="form-switch-container">

              <input
                className="location-dial"
                type="radio"
                value="pantry"
                // checked={pantry === true}
                name="location"
                onChange={
                  (e) => { handlePantrySwitch(e) } }
              />
              <label className="location-label">Pantry</label>

              <input
                className="location-dial"
                type="radio"
                value="fridge"
                // checked={fridge === false}
                name="location"
                onChange={
                  (e) => { handleFridgeSwitch(e) } }
              />
              <label className="location-label">Fridge</label>

              <input
                className="location-dial"
                type="radio"
                value="freezer"
                // checked={freezer === false}
                name="location"
                onChange={
                  (e) => { handleFreezerSwitch(e) } }
              />
              <label className="location-label">Freezer</label>


              <div className="pantry-switch">
                {/* <Switch
                  disabled={pantry}
                  onChange={(pantry) => {
                    setPantry(pantry);
                  }}
                  onClick={(e) => handlePantrySwitch(e)}
                />
                <span>pantry</span> */}
              </div>
              <div className="fridge-switch">
                {/* <Switch
                  disabled={fridge}
                  onChange={(fridge) => {
                    setFridge(fridge);
                  }}
                  onClick={(e) => handleFridgeSwitch(e)}
                />
                <span>fridge</span> */}
              </div>
              <div className="freezer-switch">
                {/* <Switch
                  disabled={freezer}
                  onChange={(freezer) => {
                    setFreezer(freezer);
                  }}
                  onClick={(e) => handleFreezerSwitch(e)}
                />
                <span>freezer</span> */}
              </div>
            </div>
            <div className="add-button-container">
              <button className="add-button">Add</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewItemForm;
