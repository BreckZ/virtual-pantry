
function ItemForm(props) {
  const checkIfDisabled = () => {
    return false;
  }

  return (
    <form onSubmit={props.handleSubmit}>
      <label>Qty</label>
      <input
        type="number"
        value={props.quantity}
        onChange={(e) => props.setQuantity(e.target.value)}
      />
      <br />
      <label>UofM</label>
      <input
        type="text"
        value={props.uofm}
        onChange={(e) => props.setUofM(e.target.value)}
      />
      <br />
      <label>Name</label>
      <input
        type="text"
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
      />
      <br />
      <label>Location</label>
      <input
        type="text"
        value={props.location}
        onChange={(e) => props.setLocation(e.target.value)}
      />
      <br />
      <button disabled={checkIfDisabled()}>Add</button>
    </form>
  )
}

export default ItemForm
