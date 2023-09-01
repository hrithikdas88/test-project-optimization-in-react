// import store from "./store/Store";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import InputValuePage from "./pages/second/InputValuePage";

// import { Provider } from "react-redux";




function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route path="/input" element={<InputValuePage/>}/>
    </Routes>

      
        {/* <HomePage /> */}
   
    </BrowserRouter>
  );
}

export default App;
