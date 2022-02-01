import React,{useState, useEffect} from 'react';
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "../../../../../../../../../components1/MDBox";
import MDTypography from "../../../../../../../../../components1/MDTypography";
import MDButton from "../../../../../../../../../components1/MDButton";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
} from "../../../../../../../../../context";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function SubTopic1() {
  const [expanded, setExpanded] = React.useState(false);
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <a href='https://laughing-darwin-c668f3.netlify.app'
      alt="Click to view file"
      target="_blank"
      >

      <Card sx={{ marginLeft:1, width: 300, backgroundColor: "#055C9D", border: `1px solid #fff`,cursor: "pointer" }} 
      
      >

    <CardHeader

    action={
      <IconButton aria-label="settings">
        <MoreVertIcon style={{color: "#fff"}}/>
      </IconButton>
    }
    title="Jessy Bandya"
    subheader={<div style={{color: "#fff",fontSize:14}}>Added on <i>2nd Feb, 2022</i></div>}
  />

  <CardContent>

  <MDTypography variant="body2" >
       <MDBox style={{color: "#fff"}}>Small Description About the Doc</MDBox>

  </MDTypography>

</CardContent>

    </Card>
      
      </a>
    
  );
}
