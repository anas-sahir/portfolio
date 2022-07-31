import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./components/particles";
import NavBar from './components/navbar';
import Home from "./pages/home";
import CV from "./pages/cv";
import Formation from "./pages/formation";
import Experience from "./pages/experience";
import ContactMe from "./pages/contactme";
import FeedBack from "./pages/feedback";
import Test from './pages/test';
import routes from './settings/routes';
import { Box } from '@chakra-ui/react';
import './assets/style/css/App.css';
import navbarSettings from "./components/navbar/conf";

function App() {
  return (
    <div className="App" >
      <Router>
        <Background />
        <NavBar />
        <Box zIndex={5} pl={{
          md: navbarSettings.conf.width,
          sm: "0px"
        }}
          pt={{
            md: "0px",
            sm: navbarSettings.conf.height
          }}
        >
          <Routes >
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.cv} element={<CV />} />
            <Route path={routes.formation} element={<Formation />} />
            <Route path={routes.experience} element={<Experience />} />
            <Route path={routes.contact} element={<ContactMe />} />
            <Route path={routes.feedback} element={<FeedBack />} />
            <Route path={routes.test} element={<Test />} />
          </Routes>
        </Box>
      </Router>
    </div>
  );
}

export default App;
