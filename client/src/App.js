//Built-In Imports (i.e. React from 'react'; dependencies?)
import { Route } from 'react-router-dom';
import { useState } from 'react';
//External Imports (i.e.)

//Internal Imports (i.e.)
import Navbar from './components/Navbar';
import ListItems from './components/ListItems';
import NewItem from './components/NewItem';
import Search from './components/Search';
import './App.css';


function App() {
  const [name, setName] = useState('');
  return (
    <div className="App">
      <Navbar />
      <br />
      <Route path="/search">  
        <Search />
      </Route>

      <Route exact path="/pantry">
        <NewItem name={name} setName={setName}/>
        <ListItems name={name}/>
        <br />
      </Route>

    </div>
  );
}

export default App;
