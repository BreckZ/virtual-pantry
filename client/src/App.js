//Built-In Imports (i.e. React from 'react'; dependencies?)
import { Route } from 'react-router-dom';
//External Imports (i.e.)

//Internal Imports (i.e.)
import Navbar from './components/Navbar';
import ListItems from './components/ListItems';
import NewItem from './components/NewItem';
import Counter from './components/Counter';
import Search from './components/Search';

import './App.css';



function App() {
  return (
    <div className="App">

      <Navbar />

      <Route path="/search">        
        <Search />
      </Route>

      <Route exact path="/pantry">
        <NewItem />
        <ListItems />
        <br />
        <Counter />
      </Route>


    </div>
  );
}

export default App;
