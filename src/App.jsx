import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./components/background";
import Home from "./pages/home";
import CV from "./pages/cv";
import Formation from "./pages/formation";
import Experiance from "./pages/experiance";
import ContactMe from "./pages/contactme";
// import test from "./pages/test";
import NavBar from './components/navbar';
// import { Switch } from 'chakra-ui';

function App() {
  return (
    <div className="App" >
      <Router>
        <Background />
        <NavBar />
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/cv" element={<CV />} />
          <Route path="/portfolio/formation" element={<Formation />} />
          <Route path="/portfolio/experiance" element={<Experiance />} />
          <Route path="/portfolio/contact" element={<ContactMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
