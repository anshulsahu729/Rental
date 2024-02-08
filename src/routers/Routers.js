import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Aboute from '../pages/About';
import BlogDetails from '../pages/BlogDetails';
import Blog from '../pages/Blog';
import EquipmentDetails from '../pages/EquipmentDetails'; 
//import EquipmentList from '../pages/EquipmentList';
import NotFound from '../pages/NotFound';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/aboute" element={<Aboute />} />
      {/* <Route path="/equipments" element={<EquipmentList />} /> */}
      <Route path="/equipment/:slug" element={<EquipmentDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
