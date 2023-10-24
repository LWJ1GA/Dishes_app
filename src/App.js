
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Selection } from './components/Selection';
import {Dish } from './components/Dish';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1> B / S / H Select Dish Variants</h1>
        </header>


        {/* <Caracteristics></Caracteristics> */}
        <Switch>
          <Route exact path="/">
            <Dish/>
          </Route>
          <Route exact path="/selection">
            <Selection/>
          </Route>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
