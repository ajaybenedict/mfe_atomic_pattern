// import React, { Suspense, useState } from "react";
// import {  Route, Routes } from "react-router-dom";

// import Header from "./Components/Header";
// import Home from "./Components/Home";
// import Loader from "./Components/Loader";
// import NotFound from "./Components/NotFound";

// const RemoteMicrofrontend1App = React.lazy(() => import("microfrontend1/Microfrontend1App"));

// const App = () => {
//   const [ loading, setLoading ] = useState(false);
//   return <div>
//   <Header />
//   <Suspense fallback={<Loader />}>
//       <Routes>
//         <Route path="/" element={<Home loading={loading} setLoading={setLoading}/>}/>
//         <Route path="/microfrontend1/*" element={<RemoteMicrofrontend1App />}/>
//         <Route path="*" element={<NotFound />}/>
//  </Routes>
//  </Suspense>
//  </div>
// };
import React from 'react';
import Header from './atoms/Header';
import Sidebar from './molecules/Sidebar';
import Dashboard from './organisms/Dashboard';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <Dashboard /> {/* Microfrontend1 is rendered inside the dashboard */}
      </div>
    </div>
  );
};

export default App