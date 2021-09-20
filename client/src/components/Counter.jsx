import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  )
}

export default Counter


// import { useState, useEffect } from "react";
// import { useParams } from "react-router";
// import { useHistory } from "react-router";
// import Form from "./Form";
// import axios from "axios";

// const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
// const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
// const URL = `https://api.airtable.com/v0/${airtableBase}/Teams`;

// const config = {
//   headers: {
//     Authorization: `Bearer ${airtableKey}`,
//   },
// };

// export default function EditTeam() {
//   const [name, setName] = useState("");
//   const [coach, setCoach] = useState("");
//   const [location, setLocation] = useState("");
//   const [logo, setLogo] = useState("");
//   const [mascot, setMascot] = useState("");
//   const [roster, setRoster] = useState("");

//   const { id } = useParams();
//   const history = useHistory();

//   useEffect(() => {
//     const fetchTeam = async () => {
//       const res = await axios.get(`${URL}/${id}`, config);
//       const { fields } = res.data;
//       setName(fields.name);
//       setCoach(fields.coach);
//       setLocation(fields.location);
//       setMascot(fields.mascot);
//       setLogo(fields.logo);
//       setRoster(fields.roster);
//     };

//     fetchTeam();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const fields = {
//       name,
//       coach,
//       location,
//       logo,
//       mascot,
//       roster,
//     };

//     const res = await axios.put(`${URL}/${id}`, { fields }, config);
//     toast("Updated Team");
//     history.push(`/teams/${res.data.id}`);
//   };

//   return (
//     <div>
//       <h3>Edit team </h3>
//       <Form
//         name={name}
//         setName={setName}
//         coach={coach}
//         setCoach={setCoach}
//         location={location}
//         setLocation={setLocation}
//         logo={logo}
//         setLogo={setLogo}
//         mascot={mascot}
//         setMascot={setMascot}
//         roster={roster}
//         setRoster={setRoster}
//         handleSubmit={handleSubmit}
//         type={"Edit"}
//       />
//     </div>
//   );
// }