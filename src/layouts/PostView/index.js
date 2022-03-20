import React from 'react';
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "../../components1/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";

function PostView() {
  return <div>
  <DashboardLayout>
  <DashboardNavbar />
  <MDBox py={3}>
  <h1>Post View Page</h1>
  </MDBox>
  <Footer />
</DashboardLayout>
  </div>;

}

export default PostView;
