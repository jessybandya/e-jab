import { useState } from "react";

// Material Dashboard 2 React components
import MDBox from "../../../components1/MDBox";
import MDButton from "../../../components1/MDButton";
import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
} from "../../../context";
import Year1 from "./Years/Year1"
import Year2 from "./Years/Year2"


function Notes() {
  const [controller, dispatch] = useMaterialUIController();
  const [year1, setYear1] = useState(false)
  const [year2, setYear2] = useState(false)
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

  const showYear1 = () =>{
    setYear1(true)
    setYear2(false)
  }

  const showYear2 = () =>{
    setYear2(true)
    setYear1(false)
  }





  return (
    <MDBox py={3}>
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    fullWidth
    ><p>Academic Notes</p></MDButton>
    
  <div style={{display: "flex",flexWrap: "wrap",alignItems:"center",justifyContent: "center"}}>
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    style={{width:180,marginLeft:10,marginTop:25}}
    onClick={showYear1}
    >Year 1</MDButton>
    <MDButton
    rel="noreferrer"
    variant="gradient"
    color={sidenavColor}
    style={{width:180,marginLeft:10,marginTop:25}}
    onClick={showYear2}
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


    <div>
    {year1 ?(
      <Year1 />
    ): year2 ?(
      <Year2/>
    ):(
    <></>
    )}
    </div>
    </MDBox>
  );
}

export default Notes;
