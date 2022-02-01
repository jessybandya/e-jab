import React, {useState, useEffect} from 'react';
import Topic1 from "./Topic1"
import Topic2 from "./Topic2"
import Topic3 from "./Topic3"
import Topic4 from "./Topic4"
import Topic5 from "./Topic5"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AddIcon from '@mui/icons-material/Add';
import MDButton from "../../../../../../../components1/MDButton";
import {
    useMaterialUIController,
    setMiniSidenav,
    setTransparentSidenav,
    setWhiteSidenav,
  } from "../../../../../../../context";
  


function Maths1() {
    const [controller, dispatch] = useMaterialUIController();
    const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
    const [topic1, setTopic1] = useState(false)
    const [topic2, setTopic2] = useState(false)
    const [topic3, setTopic3] = useState(false)
    const [topic4, setTopic4] = useState(false)
    const [topic5, setTopic5] = useState(false)
    
    const showTopic1 = () =>{
        setTopic1(true)
        setTopic2(false)
        setTopic3(false)
        setTopic4(false)
        setTopic5(false)
      }
    
      const showTopic2 = () =>{
        setTopic2(true)
        setTopic1(false)
        setTopic3(false)
        setTopic4(false)
        setTopic5(false)
      }

      const showTopic3 = () =>{
        setTopic3(true)
        setTopic2(false)
        setTopic1(false)
        setTopic4(false)
        setTopic5(false)
      }

      const showTopic4 = () =>{
        setTopic4(true)
        setTopic2(false)
        setTopic3(false)
        setTopic1(false)
        setTopic5(false)
      }

      const showTopic5 = () =>{
        setTopic5(true)
        setTopic2(false)
        setTopic3(false)
        setTopic4(false)
        setTopic1(false)
      }
    return(
        <>
    <div>
       {topic1 ?(
           <div>
           <div style={{display: "flex", justifyContent: "space-between",alignItems: "center"}}>
            <div><ArrowBackIosNewIcon fontSize="medium" style={{cursor: "pointer"}} onClick={() => setTopic1(false)}/></div><div>
            <MDButton
            rel="noreferrer"
            variant="gradient"
            color={sidenavColor}
            style={{marginBottom:10}}
            >Topic 1</MDButton>
            </div><div></div>
           </div>
           <hr />
           <Topic1 />
           </div>
       ): topic2 ?(
        <div>
        <div style={{display: "flex", justifyContent: "space-between",alignItems: "center"}}>
         <div><ArrowBackIosNewIcon fontSize="medium" style={{cursor: "pointer"}} onClick={() => setTopic2(false)}/></div><div>
         <MDButton
         rel="noreferrer"
         variant="gradient"
         color={sidenavColor}
         style={{marginBottom:10}}
         >Topic 2</MDButton>
         </div><div></div>
        </div>
        <hr />
        <Topic2 />
        </div>
       ): topic3 ?(
        <div>
        <div style={{display: "flex", justifyContent: "space-between",alignItems: "center"}}>
         <div><ArrowBackIosNewIcon fontSize="medium" style={{cursor: "pointer"}} onClick={() => setTopic3(false)}/></div><div>
         <MDButton
         rel="noreferrer"
         variant="gradient"
         color={sidenavColor}
         style={{marginBottom:10}}
         >Topic 3</MDButton>
         </div><div></div>
        </div>
        <hr />
        <Topic3 />
        </div>
       ): topic4 ?(
        <div>
        <div style={{display: "flex", justifyContent: "space-between",alignItems: "center"}}>
         <div><ArrowBackIosNewIcon fontSize="medium" style={{cursor: "pointer"}} onClick={() => setTopic4(false)}/></div><div>
         <MDButton
         rel="noreferrer"
         variant="gradient"
         color={sidenavColor}
         style={{marginBottom:10}}
         >Topic 4</MDButton>
         </div><div></div>
        </div>
        <hr />
        <Topic4 />
        </div>
       ): topic5 ?(
        <div>
        <div style={{display: "flex", justifyContent: "space-between",alignItems: "center"}}>
         <div><ArrowBackIosNewIcon fontSize="medium" style={{cursor: "pointer"}} onClick={() => setTopic5(false)}/></div><div>
         <MDButton
         rel="noreferrer"
         variant="gradient"
         color={sidenavColor}
         style={{marginBottom:10}}
         >Topic 5</MDButton>
         </div><div></div>
        </div>
        <hr />
        <Topic5 />
        </div>
       ):(
        <div>

        <div style={{cursor: "pointer"}} onClick={showTopic1}>
        <hr/>
         <center><b><h2>Topic 1</h2></b></center>
         <hr/>
         <p>Sub Topic 1</p>
         <p>Sub Topic 2</p>
         <p>Sub Topic 3</p>
         <p>Sub Topic 4</p>
         <p>Sub Topic 5</p>
        </div>
        
        <div style={{cursor: "pointer"}} onClick={showTopic2}>
        
        <hr/>
         <center><b><h2>Topic 2</h2></b></center>
         <hr/>
         <p>Sub Topic 1</p>
         <p>Sub Topic 2</p>
         <p>Sub Topic 3</p>
         <p>Sub Topic 4</p>
         <p>Sub Topic 5</p>
        </div>
        
        <div style={{cursor: "pointer"}} onClick={showTopic3}>
        <hr/>
         <center><b><h2>Topic 3</h2></b></center>
         <hr/>
         <p>Sub Topic 1</p>
         <p>Sub Topic 2</p>
         <p>Sub Topic 3</p>
         <p>Sub Topic 4</p>
         <p>Sub Topic 5</p>
        </div>
        <hr/>
        <div style={{cursor: "pointer"}} onClick={showTopic4}>
         <center><b><h2>Topic 4</h2></b></center>
         <hr/>
         <p>Sub Topic 1</p>
         <p>Sub Topic 2</p>
         <p>Sub Topic 3</p>
         <p>Sub Topic 4</p>
         <p>Sub Topic 5</p>
        </div>
        
        <div style={{cursor: "pointer"}} onClick={showTopic5}>
        <hr/>
         <center><b><h2>Topic 5</h2></b></center>
         <hr/>
         <p>Sub Topic 1</p>
         <p>Sub Topic 2</p>
         <p>Sub Topic 3</p>
         <p>Sub Topic 4</p>
         <p>Sub Topic 5</p>
        </div>
        <hr/>
        </div>
        
       )}
    </div>

    </>
    )
}

export default Maths1;



