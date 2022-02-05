import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';
import { auth1 } from "../../../firebase"
import TypeWriter from "react-typewriter";
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Features from "../Features/Features"
import { Content } from '../Content/Content';
import Carousel from '../Carousel/Carousel';
import { heroOne, heroTwo, heroThree } from '../../data/HeroData';




const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
  });


  

const Hero = () => {
	const [resumeData, setResumeData] = useState({});

	useEffect(() => {
	  fetch("/resumeData.json")
		.then((res) => res.json())
		.then((data) => {
		  setResumeData(data);
		});
	}, []);
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
	  setOpen(true);
	};
  
	const handleClose = () => {
	  setOpen(false);
	};
	return (
		<>
		<HeroSection style={{marginTop:-190,marginLeft:-30}}>
			<HeroVideo src="./assets/test.mp4" autoPlay muted  loop/>
			<Container>
			<MainHeading><TypeWriter typing={0.5}>UoN ACES </TypeWriter><p><TypeWriter typing={0.5}> <span style={{fontSize:20}}>MOTIVATE || INSPIRE || INNOVATE</span></TypeWriter></p></MainHeading>
				
			<TypeWriter typing={1.0}>
			<HeroText>
					<i>We provide the best civil engineering direction skills in and out of academic field</i>
				</HeroText>	
			</TypeWriter>


				<ButtonWrapper>
					{!auth1?.currentUser?.uid &&(
					<Link to="/authentication/sign-up">
					<Button>Get Started</Button>
				</Link>
					)}
					<HeroButton onClick={handleClickOpen}>Find More</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
		<Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
			Blog Page
            </Typography>

          </Toolbar>
        </AppBar>
        <List>
         <Features />
		 <Content {...heroOne} />
		 <Content {...heroTwo} />
		 <Content {...heroThree} />
		 <Carousel />
        </List>
      </Dialog>
		</>
	);
};

export default Hero;
