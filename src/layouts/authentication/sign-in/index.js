import React, { useState, useEffect } from "react";

// react-router-dom components
import { Link, Navigate, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "../../../components1/MDBox";
import MDTypography from "../../../components1/MDTypography";
import MDInput from "../../../components1/MDInput";
import MDButton from "../../../components1/MDButton";
import { auth1 } from "../../../components/firebase"
// Authentication layout components
import BasicLayout from "../components/BasicLayout";
import { ToastContainer, toast } from 'react-toastify';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { motion } from "framer-motion"

// Images
import bgImage from "../../../assets/images/bg-sign-in-basic.jpeg";

const buttonVariants = {


  hidden:{
    opacity:0,
     x: '-100vw',
   },
   visible:{
     opacity:1,
     x: 0,
     transition: {
       type: 'spring',
       delay: 0.5
     }
   },
   exit:{
     x: '-100vw',
     transition:{
       ease: 'easeOut'
     }
   }
}

const containerVariants={
  hidden:{
    opacity: 0,
  },
  visible:{
    opacity:1,
    transition:{
      delay: 1.5,
      duration: 1.5
    }
  },
  exit:{
    x: '-100vw',
    transition:{
      ease: 'easeOut'
    }
  }
}

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const history = useNavigate('');

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const [open2, setOpen2] = React.useState(true);
  const [user, setUser ] = useState(null)
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleToggle = () => {
    setOpen2(true);
  };

  const login = (e)=> {
      e.preventDefault();
     setLoading(true)
      auth1.signInWithEmailAndPassword(email,password)
      .then((auth) =>{
        setLoading(false)
        history('/announcements');
      })
      .catch((e) =>{
              toast.error(e.message)      
            setLoading(false)     
      })
  }

  return (
    <BasicLayout image={bgImage}>
    <ToastContainer />
    {loading ?(
      <>
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open2}
      onClick={handleClose2}
    >
      <CircularProgress color="inherit" />
      
    </Backdrop>

    <Card>
    <MDBox
      variant="gradient"
      bgColor="info"
      borderRadius="lg"
      coloredShadow="info"
      mx={2}
      mt={-3}
      p={2}
      mb={1}
      textAlign="center"
    >

      <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>

      <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
        Sign In
      </MDTypography>

      </Grid>
    </MDBox>
    <MDBox pt={4} pb={3} px={3}>
      <MDBox component="form" role="form">
        <MDBox mb={2}>
          <MDInput type="email" label="Email" onChange={(e) => setEmail(e.target.value)} fullWidth />
        </MDBox>
        <MDBox mb={2}>
          <MDInput type="password" label="Password" onChange={(e) => setPassword(e.target.value)} fullWidth />
        </MDBox>

        <MDBox mt={4} mb={1}>
          <MDButton variant="gradient" color="info" onClick={login} fullWidth>
            sign in
          </MDButton>
        </MDBox>
        
        <MDBox mt={3} mb={1} textAlign="center">
          <MDTypography variant="button" color="text">
            Don&apos;t have an account?{" "}
            <MDTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </MDTypography>
            <span style={{cursor: "pointer"}}>
            <MDTypography
            variant="button"
            fontWeight="bold"
            color="info"
            textGradient
            onClick={()=> toast.warn("!oops, we're still working on this...")}
          >
            Forgotten your password?
          </MDTypography>        
            </span>

          </MDTypography>
        </MDBox>
      </MDBox>
    </MDBox>
  </Card>
      </>
    ):(
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >

          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>

          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign In
          </MDTypography>

          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email" label="Email" onChange={(e) => setEmail(e.target.value)} fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" onChange={(e) => setPassword(e.target.value)} fullWidth />
            </MDBox>

            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" onClick={login} fullWidth>
                sign in
              </MDButton>
            </MDBox>
            
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
                <span style={{cursor: "pointer"}}>
                <MDTypography
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
                onClick={()=> toast.warn("!oops, we're still working on this...")}
              >
                Forgotten your password?
              </MDTypography>        
                </span>

              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    )}
      
    </BasicLayout>
  );
}

export default Basic;
