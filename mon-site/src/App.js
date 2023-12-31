import "./App.css";
import NavBar from "./NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./content/Home";
import Footer from "./content/Footer";
import Projects from "./content/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
