import axios from "axios";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/items`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

//To retrieve all items from the API
export const getItems = async () => {
  const res = await axios.get(URL, config);
  return res.data.records;
}

export const getLocation = async () => {
  const res = await axios.get(URL, config);
  return res.data.records;
}

export const addItem = async (fields) => {
  const res = await axios.post(URL, { fields }, config);
  return res.data;
};

// not in use yet
export const changeQuantity = async (field, id) => {
  const res = await axios.patch(`${URL}/${id}`, { fields: field }, config);
  return res.data;
};

export const deleteItem = async (id) => {
  const res = await axios.delete(`${URL}/${id}`, config);
  return res.data;
};

