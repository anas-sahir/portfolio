import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./components/background";
import Home from "./pages/home";
import CV from "./pages/cv";
import Formation from "./pages/formation";
import Experiance from "./pages/experiance";
import ContactMe from "./pages/contactme";
import FeedBack from "./pages/feedback";
import NavBar from './components/navbar';
import routes from './configs/routes';
import Footer from './components/footer';

function App() {
  return (
    <div className="App" >
      <Router>
        {/* <Background /> */}
        <NavBar />
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.cv} element={<CV />} />
          <Route path={routes.formation} element={<Formation />} />
          <Route path={routes.experiance} element={<Experiance />} />
          <Route path={routes.contact} element={<ContactMe />} />
          <Route path={routes.feedback} element={<FeedBack />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
