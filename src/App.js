
import './App.css';
import { Categories } from './components/categories';
// import Caracteristics from './components/Caracteristics';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Selection } from './components/Selection';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1> B / S / H Select Dish Variants</h1>
        </header>

        <Categories />

        {/* <Caracteristics></Caracteristics> */}
        <Routes>
          <Route path="/categories" component={<Categories />} />
          {/* <Route path="/caracteristics" component={<Caracteristics />} /> */}
          <Route path="/selection" component={<Selection />} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
