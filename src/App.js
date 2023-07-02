// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';
import View from './components/View';
import Details from './components/Details';
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Routes
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/create" element={<Create/>}></Route>
      <Route exact path="/update/:GS_NO" element={<Update/>}></Route>
      <Route exact path="/show/" element={<View/>}></Route>
      <Route exact path="/details/:GS_NO" element={<Details/>}></Route>
    </Routes>
 
    </Router>
    </>
  );
}

export default App;
