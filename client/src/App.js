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
import Wallets from './Pages/WalletsPage'
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
        <Route path="/wallets" element={<Wallets />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </Router>
  )
}

export default App;
