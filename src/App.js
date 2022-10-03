import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Page/Home";
import SignIn from "./Page/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
