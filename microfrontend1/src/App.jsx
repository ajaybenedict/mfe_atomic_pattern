import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Microfrontend1 from './Microfrontend1';


const App = () => {
  return <div className="border-4  border-blue-700">
  <Routes>
   <Route path="/" element={<Microfrontend1 />} /> 
 </Routes>
 </div>
};

export default App;