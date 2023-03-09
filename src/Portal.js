import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

// Admin Portal
function Portal() {
  return (
    <div id="page-top">
      <div id="wrapper">
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar/> 
            {/* <Dashboard/> */}
            
            <Outlet/>  
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portal;