import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "../../../components1/MDBox";
import MDTypography from "../../../components1/MDTypography";
import MDAlert from "../../../components1/MDAlert";
import MDButton from "../../../components1/MDButton";
import MDSnackbar from "../../../components1/MDSnackbar";
import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
} from "../../../context";

// Material Dashboard 2 React example 
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import Footer from "../../../examples/Footer";

function Projects() {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;






  return (
    <MDBox py={3}>
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    fullWidth
    ><p>Projects</p></MDButton>
    
  <div style={{display: "flex",flexWrap: "wrap",alignItems:"center",justifyContent: "center"}}>
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    style={{width:180,marginLeft:10,marginTop:25}}
    >Year 1</MDButton>
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    style={{width:180,marginLeft:10,marginTop:25}}
    >Year 2</MDButton>
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    style={{width:180,marginLeft:10,marginTop:25}}
    >Year 3</MDButton>
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    style={{width:180,marginLeft:10,marginTop:25}}
    >Year 4</MDButton>
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    style={{width:180,marginLeft:10,marginTop:25}}
    >Year 5</MDButton>
    </div>
    </MDBox>
  );
}

export default Projects;
