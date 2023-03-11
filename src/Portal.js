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
           
            
            <div class="container-fluid pt-5">
            <Dashboard/>
            </div>
          
          
         
            
   
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portal;