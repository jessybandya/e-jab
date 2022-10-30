/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React, { useState, useEffect } from "react";
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';
// react-router components
import { useLocation, Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "../../../components1/MDBox";
import MDInput from "../../../components1/MDInput";

// Material Dashboard 2 React example components
import Breadcrumbs from "../../../examples/Breadcrumbs";
import NotificationItem from "../../../examples/Items/NotificationItem";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from "./styles";

// Material Dashboard 2 PRO React context
import {
  useMaterialUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "../../../context";
import { auth1 } from "../../../components/firebase"
import MDTypography from "../../../components1/MDTypography";
function DashboardNavbar({ absolute, light, isMini }) {
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem icon={<Icon>account_circle</Icon>} title="Jessy Bandya commented on your post" />
      <NotificationItem icon={<Icon>account_circle</Icon>} title="Odero Phelix Replied to your comment" />
      <NotificationItem icon={<Icon>account_circle</Icon>} title="Arnold liked your post" />
      <NotificationItem icon={<Icon>account_circle</Icon>} title="Jessy Bandya commented on your post" />
      <NotificationItem icon={<Icon>account_circle</Icon>} title="Odero Phelix Replied to your comment" />
      <NotificationItem icon={<Icon>account_circle</Icon>} title="Arnold liked your post" />
      <NotificationItem icon={<Icon>account_circle</Icon>} title="Jessy Bandya commented on your post" />
      <NotificationItem icon={<Icon>account_circle</Icon>} title="Odero Phelix Replied to your comment" />
      <NotificationItem icon={<Icon>account_circle</Icon>} title="Arnold liked your post" />
      <NotificationItem icon={<Icon>account_circle</Icon>} title="Jessy Bandya commented on your post" />
      <NotificationItem icon={<Icon>account_circle</Icon>} title="Odero Phelix Replied to your comment" />
      <NotificationItem icon={<Icon>account_circle</Icon>} title="Arnold liked your post" />
      <NotificationItem icon={<Icon>account_circle</Icon>} title="Jessy Bandya commented on your post" />
      <NotificationItem icon={<Icon>account_circle</Icon>} title="Odero Phelix Replied to your comment" />
      <NotificationItem icon={<Icon>account_circle</Icon>} title="Arnold liked your post" />
      <NotificationItem icon={<Icon>account_circle</Icon>} title="Jessy Bandya commented on your post" />
      <NotificationItem icon={<Icon>account_circle</Icon>} title="Odero Phelix Replied to your comment" />
      <NotificationItem icon={<Icon>account_circle</Icon>} title="Arnold liked your post" />
      <NotificationItem icon={<Icon>account_circle</Icon>} title="Jessy Bandya commented on your post" />
      <NotificationItem icon={<Icon>account_circle</Icon>} title="Odero Phelix Replied to your comment" />
      <NotificationItem icon={<Icon>account_circle</Icon>} title="Arnold liked your post" />
    </Menu>
  );

  // Styles for the navbar icons
  const iconsStyle = ({ palette: { dark, white, text }, functions: { rgba } }) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;

      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }

      return colorValue;
    },
  });

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      style={{zIndex:1000}}
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light, darkMode })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <MDBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light} />
        </MDBox>
        {isMini ? null : (
          <MDBox sx={(theme) => navbarRow(theme, { isMini })}>
            <MDBox color={light ? "white" : "inherit"}>

         <div style={{display:'flex',alignItems:'center'}}>
         <div style={{marginLeft:6}}>
         <Link to="/about-us">
         <MDTypography style={{marginTop:8}}>
         <span>AboutUs</span>
      </MDTypography>
         </Link>

      </div>
      <div style={{marginLeft:6}}>
      <Link to="/contact-us">
      <MDTypography style={{marginTop:8}}>
      <span>ContactUs</span>
   </MDTypography>
      </Link>

   </div>
         </div>



        <div>
        {!auth1?.currentUser?.uid ?(
             <div style={{display:"flex",alignItems:'center'}}>
               <div>
                 <Link to="/authentication/sign-in">
                 <MDTypography style={{marginTop:6,marginLeft:15}}>
                 <Icon fontSize="small">login</Icon>
               </MDTypography>
                 </Link>

               </div>
                <div style={{marginLeft:6}}>
                  <Link to="/authentication/sign-up">
                  <MDTypography style={{marginTop:8}}>
                  <Icon fontSize="small">assignment</Icon>
               </MDTypography>
                  </Link>

               </div>
               
               <div>
              <IconButton
              size="small"
              disableRipple
              color="inherit"
              sx={navbarIconButton}
              onClick={handleConfiguratorOpen}
            >
              <Icon sx={iconsStyle}>settings</Icon>
            </IconButton>
            </div>
                <div>
                {renderMenu()}
                <IconButton
                size="small"
                disableRipple
                color="inherit"
                onClick={handleMiniSidenav}
              >
                <Icon sx={iconsStyle} fontSize="medium">
                  {miniSidenav ? "menu_open" : "menu"}
                </Icon>
              </IconButton>
                </div>
                
             </div>
              ):(
                <>
              {renderMenu()}
                <div style={{display:"flex",alignItems:'center'}}>

                <div>
              <IconButton
              size="small"
              disableRipple
              color="inherit"
              sx={navbarIconButton}
              onClick={handleConfiguratorOpen}
            >
              <Icon sx={iconsStyle}>settings</Icon>
            </IconButton>
            </div>
            {/* <div>
                <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarIconButton}
                aria-controls="notification-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleOpenMenu}
              >
              <Badge badgeContent={20} color="primary">
              <Icon sx={iconsStyle}>notifications</Icon>
            </Badge>
              </IconButton>
              
              </div> */}
              <div>
                <IconButton
                size="small"
                disableRipple
                color="inherit"
                onClick={handleMiniSidenav}
              >
                <Icon sx={iconsStyle} fontSize="medium">
                  {miniSidenav ? "menu_open" : "menu"}
                </Icon>
              </IconButton>
                </div>
                </div>

                </>
              )}




        </div>

            </MDBox>
          </MDBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
