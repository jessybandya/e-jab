import React, { forwardRef, useEffect, useState } from "react";
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
import moment from 'moment'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ScrollableFeed from 'react-scrollable-feed'
import swal from "@sweetalert/with-react";
import SendIcon from '@mui/icons-material/Send';
// import CommentReplies from "../CommentsReplies";
import MDBox from "../../../../../../../../../components1/MDBox";
import MDTypography from "../../../../../../../../../components1/MDTypography";
import MDButton from "../../../../../../../../../components1/MDButton";
import Grid from "@mui/material/Grid";
import { auth1, db } from "../../../../../../../../../components/firebase";
import MDInput from "../../../../../../../../../components1/MDInput";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import CommentIcon from '@mui/icons-material/Comment';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { saveAs } from "file-saver";
// Core viewer
import { Viewer } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { DialogActions } from "@mui/material";
import { Button, Modal } from "react-bootstrap";
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  

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

function abbrNum(number, decPlaces) {
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10,decPlaces);

  // Enumerate number abbreviations
  var abbrev = [ "K", "M", "B", "T" ];

  // Go through the array backwards, so we do the largest first
  for (var i=abbrev.length-1; i>=0; i--) {

      // Convert array index to "1000", "1000000", etc
      var size = Math.pow(10,(i+1)*3);

      // If the number is bigger or equal do the abbreviation
      if(size <= number) {
           // Here, we multiply by decPlaces, round, and then divide by decPlaces.
           // This gives us nice rounding to a particular decimal place.
           number = Math.round(number*decPlaces/size)/decPlaces;

           // Add the letter for the abbreviation
           number += abbrev[i];

           // We are done... stop
           break;
      }
  }

  return number;
}


function Posts({ fromId, commentId, postId, timestamp, comment, descriptions, name, year, unit, file}) {
  const [profileUserData, setProfileUserData] = useState();
  const [addComment, setAddComment] = useState("")
  const [profileUserData1, setProfileUserData1] = useState();
  const [commentReply, setComentReply] = useState(0);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [lgView, setLgView] = useState(false);
  const [lgMore, setLgMore] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const type = 'png'
  const [open, setOpen] = React.useState(false);
  const [comment1, setComment1] = React.useState('');

  const handleChangeComment = (event) => {
    setComment1(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const onError = (e) => {
    alert(e, 'error')
  }
  const saveFile = () => {
    saveAs(
      `${file}`
    );
  };
  useEffect(() => {
    db.collection('users').doc(`${fromId}`).onSnapshot((doc) => {
        setProfileUserData(doc.data());
    });
}, [])
const [expanded, setExpanded] = React.useState(false);


const handleExpandClick = () => {
  setVisible1(true)
};

const commentPost = (event) => {
  event.preventDefault(); 

  if(!addComment){
    swal("🔴 You cannot add an empty comment!")
  }else{
    db.collection("posts").doc(`${postId}`).collection("comments").doc(`${commentId}`).collection("replies").add({
      ownerId: fromId,
      read: false,
      count:false,
      postId:postId,
      comment: addComment,
      fromId:auth1?.currentUser?.uid,
      timestamp: Date.now(),
  }).then(() => setAddComment(""));
  db.collection("notifications").add({
    ownerId: fromId,
    read: false,
    count:false,
    postId,
    comment: addComment,
    type:"replies",
    fromId:auth1?.currentUser?.uid,
    timestamp: Date.now(),
}).then(() => setAddComment(""));
  setAddComment("")
}

setAddComment("")

}
useEffect(() => {
  db.collection('users').doc(`${auth1?.currentUser?.uid}`).onSnapshot((doc) => {
      setProfileUserData1(doc.data());
  });
}, [])

useEffect(() => {
  db.collection('posts').doc(`${postId}`).collection("comments").doc(`${commentId}`).collection("replies").where("count", "==",false)
  .onSnapshot(snapshot => (
  setComentReply(snapshot.docs.length)
  ))
  }, []);


  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const [value1, setValue1] = React.useState(0);
  const handleChange0 = (event, newValue) => {
    setValue1(newValue);
  };
    return (
        <MDBox>


          {unit === name &&(
            <Grid item>
            <Card
            sx={{marginTop:3,margin:1, border:'2px solid #0d6efd'}}
          >

            <MDBox mt={1} mx={0.5} p={1}>
              <MDTypography variant="button" fontWeight="regular" color="text" textTransform="capitalize">
              {year}
              </MDTypography>
              <MDBox mb={1}>
                  <MDTypography
                  color="text"
                    variant="h5"
                    textTransform="capitalize"
                  >
                    {name}
                  </MDTypography>
              </MDBox>
              <MDBox mb={3} lineHeight={0}>
                <MDTypography variant="button" fontWeight="light" color="text">
                {isReadMore ? descriptions?.slice(0, 35) : descriptions}
                <span onClick={toggleReadMore} className="read-or-hide">
                {descriptions?.length > 35 &&(
                  <>
                  {isReadMore ? <span style={{fontWeight: 'bold',cursor:'pointer'}}>...read more</span> : <span style={{fontWeight: 'bold',cursor:'pointer'}}> ...read less</span>}
                  </>
                )}
                </span>
                </MDTypography>
              </MDBox>
              <MDBox display="flex" justifyContent="space-between" alignItems="center">
              <MDButton 
              onClick={() => setLgView(true)}
              variant="outlined"
              color='info'
              ><VisibilityIcon /></MDButton>
                  <MDButton
                  onClick={() => setLgMore(true)}
                    size="small"
                    color='info'
                  >
                    More
                  </MDButton>
                <MDButton 
                
                variant="outlined"
                color='info'
                ><DownloadIcon /></MDButton>
              </MDBox>
            </MDBox>
          </Card>

          <Modal
          size="lg"
          style={{zIndex:2001}}
          show={lgView}
          onHide={() => setLgView(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header style={{backgroundColor:'#1a2035',display: 'block'}}>
 
      <Modal.Title align="right"><CloseIcon fontSize="large" style={{color:'#0d6efd', cursor:'pointer'}} onClick={() => setLgView(false)}/></Modal.Title>
      </Modal.Header>
          <Modal.Body
          style={{
            overflowY: 'auto',
            width: '100%',
            backgroundColor:'#1a2035'
           }}
          >
          <MDTypography>
          View PDF
          </MDTypography>            
          </Modal.Body>
        </Modal>

        <Modal
        size="lg"
        style={{zIndex:2001}}
        show={lgMore}
        onHide={() => setLgMore(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
      <Modal.Header style={{backgroundColor:'#1a2035',display: 'block'}}>
      <AppBar position="static">
      <Tabs
        value={value1}
        onChange={handleChange0}
        indicatorColor="secondary"
        textColor="inherit"
        aria-label="full width tabs example"
      >
        <Tab label="Comments (1.2K)" {...a11yProps(0)} />
        <Tab label="Solutions" {...a11yProps(1)} />
      </Tabs>
    </AppBar>

    <Modal.Title align="right"><CloseIcon fontSize="large" style={{color:'#0d6efd', cursor:'pointer'}} onClick={() => setLgMore(false)}/></Modal.Title>
    </Modal.Header>
    <Modal.Body 
    style={{
      overflowY: 'auto',
      width: '100%',
      backgroundColor:'#1a2035'
     }}
    >
    <Card >
    <MDBox >

    <Box>
    
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value1}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value1} index={0} dir={theme.direction}>
            <MDTypography>
            Comments
            </MDTypography> 
            </TabPanel>
            <TabPanel value={value1} index={1} dir={theme.direction}>
            <MDTypography>
            Solutions
            </MDTypography>              
            </TabPanel>
          </SwipeableViews>
        </Box>
       </MDBox>
    </Card>
    
    
    </Modal.Body>

    {auth1?.currentUser?.uid ?(
      <>
      {value1 === 0 ?(
        <Modal.Footer
        style={{
          backgroundColor:'#1a2035',
          justifyContent: 'space-between',
          display: 'flex',
          alignItems:'center',
          alignContent: 'center',
          flex: 1
         }}
        >
          <div style={{width:'100%',flex:0.9}}>
          <TextField
          id="full-width-text-field"
          label="leave a comment here..."
          placeholder="Jessy, ready for your comment.😊"
          value={comment1}
          onChange={handleChangeComment}
          multiline
          maxRows={2}
          fullWidth     
        />
          </div>
     <div style={{flex:0.1}}>
     {!comment1 ?(
       <>
       <img
       alt="Jessy Bandya"
       src="http://www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg"
       style={{ width: 35, height: 35, borderRadius: 35/2, objectFit:'cover' }}
     />
       </>
     ):(
      <>
      <i style={{color:'#0d6efd',cursor:'pointer'}} class="fa fa-paper-plane" aria-hidden="true"></i>
      </>
     )}
     </div>
     </Modal.Footer>
      ):(
        <Modal.Footer
        style={{
          backgroundColor:'#1a2035',
         }}
        >   
    
        <div align="right"
        >
        
        <MDButton
        color='info'
        style={{marginRight:5}}
      >
      Add Solutions <AddIcon/>
      </MDButton>
        <MDButton
          color='info'
        >
        Download <DownloadIcon/>
        </MDButton>
        </div>
     </Modal.Footer>
      )}

   </>
    ):(
      <Modal.Footer
      style={{
        backgroundColor:'#1a2035',
       }}
      >
  
      <div align="right"
      >
      <MDButton
        color='info'
      >
      Download <DownloadIcon/>
      </MDButton>
      </div>
   </Modal.Footer>
    )}

      </Modal>

            </Grid>

          )}



        </MDBox>
    )
}

export default Posts
