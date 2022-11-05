import React from "react";
import Home1 from "./pages/Home1";
import {Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'


function App() {
  return (
    <Layout>
      <Routes> 
      <Route path='/Index' element={<Home1/>} ></Route>
       </Routes>
      </Layout>
  );
}
export default App;

