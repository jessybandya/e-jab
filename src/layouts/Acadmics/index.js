import React,{useState, useEffect} from 'react';
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "../../components1/MDBox";
import MDButton from "../../components1/MDButton";


// Material Dashboard 2 React example components
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";
import Notes from "./Notes"
import Projects from "./Projects"

import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
} from "../../context";

function Acadmics() {
  const [notes, setNotes] = useState(false)
  const [Projects, setProjects] = useState(false)
   const [controller, dispatch] = useMaterialUIController();
   const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;




const showNotes = () =>{
  setNotes(true)
  setProjects(false)
}
const showPastpaers = () =>{
  setNotes(false)
  setProjects(true)
}
  return <div>
  <DashboardLayout>
  <DashboardNavbar />
  <MDBox py={3}>

  <div style={{display: "flex",flexWrap: "wrap",alignItems:"center",justifyContent: "center"}}>
<MDButton
rel="noreferrer"
variant="gradient"
color={sidenavColor}
onClick={showNotes}
>Past Papers</MDButton>
<MDButton
rel="noreferrer"
variant="gradient"
color={sidenavColor}
style={{marginLeft:10}}
onClick={showPastpaers}    
>Projects</MDButton>
</div>

{notes ?(
  <Notes />
): Projects ?(
  <Projects/>
):(
<></>
)}
  </MDBox>
  <Footer />
</DashboardLayout>
  </div>;

}

export default Acadmics;



