//Built-In Imports (i.e. React from 'react'; dependencies?)
import { Route } from 'react-router-dom';
import { useState } from 'react';
//External Imports (i.e.)

//Internal Imports (i.e.)
import Navbar from './components/Navbar';
import Home from './components/Home';
import Search from './components/Search';
import ListItems from './components/ListItems';
import NewItem from './components/NewItem';
import NavbarFooter from './components/NavbarFooter';
import './App.css';


function App() {
  const [name, setName] = useState('');
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Home/>
      </Route>

      <Route path="/search">
        <Search />
      </Route>

      <Route exact path="/pantry">
        <ListItems name={name} />
        <NewItem name={name} setName={setName} />
      </Route>
      <NavbarFooter />
    </div>
  );
}

export default App;
