import { Routes,Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      {
        // Code here
          <>
          <Navbar />
          <Home />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/login' element={<Login />} />
          </Routes></>
      }
    </div>
  );
}

export default App;
