
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Categories } from './components/categories';
import { Caracteristics } from './components/Caracteristics';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Selection } from './components/Selection';


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
            <Categories />
           {/* <Caracteristics/>*/}
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
