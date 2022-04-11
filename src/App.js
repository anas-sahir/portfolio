import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./components/background";
import Home from "./pages/home";
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
          <Route path="/" element={<Home />} />
          {/* <Route path="/test" element={test} exact /> */}
          {/* <Route /> */}
          {/* <Route />  */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
