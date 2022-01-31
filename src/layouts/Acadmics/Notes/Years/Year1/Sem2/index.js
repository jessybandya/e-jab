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


function Sem2({ sem2 }) {
  return <div style={{color: "#fff",backgroundColor: "#344767"}}>Selected Course: {sem2}</div>;
}

export default Sem2;
