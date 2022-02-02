// Material Dashboard 2 React layouts
import Dashboard from "./layouts/dashboard";
import Tables from "./layouts/tables";
import Billing from "./layouts/billing";
import Blog from "./layouts/Blog";
import Notifications from "./layouts/notifications";
import Profile from "./layouts/profile";
import SignIn from "./layouts/authentication/sign-in";
import SignUp from "./layouts/authentication/sign-up";
import Home from "./layouts/Home"
import Acadmics from "./layouts/Acadmics"
import People from "./layouts/People";
import Skills from "./layouts/Skills";
import Orientation from "./layouts/Orientation";
import Business from "./layouts/Business";
import Showcase from "./layouts/Showcase";
import Calender from "./layouts/Calender";
import Lecturers from "./layouts/Lecturers";
import Badge from '@mui/material/Badge';
// @mui icons
import Icon from "@mui/material/Icon";
 

const routes = [
  {
    type: "collapse",
    name: "Announcements",
    key: "announcements",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/announcements",
    component: <Home />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Academics",
    key: "academics",
    icon: <Icon fontSize="small">menu_book</Icon>,
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
  //   name: "Notifications",
  //   key: "notifications",
  //   icon:   <Badge badgeContent={12} color="primary"><Icon fontSize="small">notifications</Icon></Badge>,
  //   route: "/notifications",
  //   component: <Notifications />,
  // },
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
    name: "Blog",
    key: "blog",
    icon: <Icon fontSize="small">article</Icon>,
    route: "/blog",
    component: <Blog />,
  },
  {
    type: "collapse",
    name: "Show Case",
    key: "showcase",
    icon: <Icon fontSize="small">library_add</Icon>,
    route: "/showcase",
    component: <Showcase />,
  },
  {
    type: "collapse",
    name: "Essential Skills",
    key: "skills",
    icon: <Icon fontSize="small">work</Icon>,
    route: "/skills",
    component: <Skills />,
  },
  {
    type: "collapse",
    name: "Orientation",
    key: "orientation",
    icon: <Icon fontSize="small">navigation</Icon>,
    route: "/orientation",
    component: <Orientation />,
  },
  {
    type: "collapse",
    name: "Lecturers",
    key: "lecturers",
    icon: <Icon fontSize="small">local_library</Icon>,
    route: "/lecturers",
    component: <Lecturers />,
  },
  {
    type: "collapse",
    name: "Calender",
    key: "calender",
    icon: <Icon fontSize="small">visibility</Icon>,
    route: "/calender",
    component: <Calender />,
  },
  {
    type: "collapse",
    name: "Business",
    key: "business",
    icon: <Icon fontSize="small">business</Icon>,
    route: "/business",
    component: <Business />,
  }
];

export default routes;
