import React,{useState, useEffect} from 'react';
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "../../../../../../components1/MDBox";
import MDTypography from "../../../../../../components1/MDTypography";

import MDButton from "../../../../../../components1/MDButton";


// Material Dashboard 2 React example components
import DashboardLayout from "../../../../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../../../../examples/Navbars/DashboardNavbar";
import Footer from "../../../../../../examples/Footer";


import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
} from "../../../../../../context";

import Maths1 from "./Units/Maths1"
import Phy1 from "./Units/Phy1"


function Sem1({ sem1 }) {
  return(
        <div>
           {sem1 === "FCE 201 Phyics" &&(
              <Phy1 />
           )}
           {sem1 === "FCE 112 Mathematics" &&(
            <Maths1 />
         )}
        </div>
        );
      }

export default Sem1;
