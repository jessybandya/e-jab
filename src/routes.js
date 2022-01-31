// Material Dashboard 2 React layouts
import Dashboard from "./layouts/dashboard";
import Tables from "./layouts/tables";
import Billing from "./layouts/billing";
import RTL from "./layouts/rtl";
import Notifications from "./layouts/notifications";
import Profile from "./layouts/profile";
import SignIn from "./layouts/authentication/sign-in";
import SignUp from "./layouts/authentication/sign-up";
import Home from "./layouts/Home"
import Acadmics from "./layouts/Acadmics"
import People from "./layouts/People";
import Badge from '@mui/material/Badge';
// @mui icons
import Icon from "@mui/material/Icon";
 

const routes = [
  // {
  //   type: "collapse",
  //   name: "Dashboard",
  //   key: "dashboard",
  //   icon: <Icon fontSize="small">dashboard</Icon>,
  //   route: "/dashboard",
  //   component: <Dashboard />,
  // },
  {
    type: "collapse",
    name: "Home",
    key: "home",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/home",
    component: <Home />,
  },
  {
    type: "collapse",
    name: "People",
    key: "people",
    icon: <Icon fontSize="small">people</Icon>,
    route: "/people",
    component: <People />,
  },
  {
    type: "collapse",
    name: "Academics",
    key: "academics",
    icon: <Icon fontSize="small">local_library</Icon>,
    route: "/academics",
    component: <Acadmics />,
  },
  {
    type: "collapse",
    name: "Messages",
    key: "mainmessages",
    icon: <Icon fontSize="small">mail_outline</Icon>,
    route: "/mainmessages",
    component: <Billing />,
  },
  // {
  //   type: "collapse",
  //   name: "Manage Posts",
  //   key: "rtl",
  //   icon: <Icon fontSize="small">library_add</Icon>,
  //   route: "/rtl",
  //   component: <RTL />,
  // },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon:   <Badge badgeContent={12} color="primary"><Icon fontSize="small">notifications</Icon></Badge>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  }
];

export default routes;
