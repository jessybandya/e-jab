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
import Pastpapers from "./Pastpapers"

import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
} from "../../context";

function Acadmics() {
  const [notes, setNotes] = useState(false)
  const [pastpapers, setPastpapers] = useState(false)
   const [controller, dispatch] = useMaterialUIController();
   const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;




const showNotes = () =>{
  setNotes(true)
  setPastpapers(false)
}
const showPastpaers = () =>{
  setNotes(false)
  setPastpapers(true)
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
>Academic Notes</MDButton>
<MDButton
rel="noreferrer"
variant="gradient"
color={sidenavColor}
style={{marginLeft:10}}
onClick={showPastpaers}    
>Past Papers</MDButton>
</div>

{notes ?(
  <Notes />
): pastpapers ?(
  <Pastpapers/>
):(
<></>
)}
  </MDBox>
  <Footer />
</DashboardLayout>
  </div>;

}

export default Acadmics;



