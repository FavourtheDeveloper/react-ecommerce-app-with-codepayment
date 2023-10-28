import Sidebar from "./component/Sidebar/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css'
import Shop from "./pages/Shop";
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="App">
      <Router>
      <div className="sidebar">
      <Sidebar/>
      </div>
      <div className="main">
      <Routes>
        <Route path="/" exact Component={Shop} />
        <Route path="/about" exact Component={About} />
        <Route path="/contact" exact Component={Contact} />
      </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
