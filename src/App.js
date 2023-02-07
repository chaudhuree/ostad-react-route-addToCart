
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from "./components/Home"
import Products from "./components/Products";
import LoadCountries from "./components/LoadCountries";
import NotFound from "./components/NotFound";
import Header from './components/Header';
import Footer from './components/Footer';
import Cosmetics from './components/Cosmetics';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>       
        <Route path="/countries" element={<LoadCountries></LoadCountries>}></Route>  
        <Route path="/cosmetics" element ={<Cosmetics></Cosmetics>}></Route>
        <Route path="*" element ={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
     

    </div>
  );
}

export default App;
