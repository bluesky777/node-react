import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

const Login = React.lazy(() => import("./components/Login"));
const Home = React.lazy(() => import("./components/Home"));


function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
