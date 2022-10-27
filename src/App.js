import Navbar from "./layout/Navbar";
import AddForm from "./pages/AddForm";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/add-detail" element={<AddForm/>}/>
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
