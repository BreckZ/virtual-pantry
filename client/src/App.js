//Built-In Imports (i.e. React from 'react'; dependencies?)
import { Route } from 'react-router-dom';
//External Imports (i.e.)

//Internal Imports (i.e.)
import Navbar from './components/Navbar';
import ListItems from './components/ListItems';
import NewItem from './components/NewItem';
import './App.css';



function App() {
  return (
    <div className="App">

      <Navbar />

      <Route path="/search">
      </Route>

      <Route exact path="/pantry">
        <NewItem />
        <ListItems />
      </Route>


    </div>
  );
}

export default App;
