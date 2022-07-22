// NORMAL
// import './App.css';

// BOOTSTRAP 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// NavBars
// import NavBar1 from './Components/NavBars/NavBar1'

// Pages
import Home from './Pages/HomePage'
import About from './Pages/AboutPage'
import Contact from './Pages/ContactPage'
import Products from './Pages/ProductsPage'
import Extra from './Pages/ExtraPage'
import Extra2 from './Pages/Extra2Page'
import Error from './Pages/ErrorPage'
import Login from './Pages/LoginPage'


function App() {
  return (
    <Router>
      {/* <NavBar1 /> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/extra" element={<Extra />}/>
        <Route path="/extra2" element={<Extra2 />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </Router>
  )
}

export default App;
