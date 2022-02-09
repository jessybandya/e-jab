import React,{useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { motion } from "framer-motion";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import CommentIcon from '@mui/icons-material/Comment';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import PsychologyIcon from '@mui/icons-material/Psychology';
// import { auth1, db } from '../../../../../components/firebase';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import MDBox from "../../../../../../../components1/MDBox";
import MDInput from "../../../../../../../components1/MDInput";

import MDButton from "../../../../../../../components1/MDButton";

const Input = styled('input')({
    display: 'none',
  });

function AddNotes() {
    const [notesTopic, setNotesTopic] = React.useState('');
    const [notesSubTopic, setSubNotesTopic] = React.useState('');
    const [notesUnit, setNotesUnit] = React.useState('');
    const [description, setDescription] = React.useState('');

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
  
    const [open2, setOpen2] = React.useState(false);
    const [scroll2, setScroll2] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
        setOpen2(false);
      };

    const handleChange1 = (event) => {
        setNotesTopic(event.target.value);
       };
    
       const handleChange3 = (event) => {
        setSubNotesTopic(event.target.value);
       };
       const handleChange4 = (event) => {
        setNotesUnit(event.target.value);
       };

       const handleChange5 = (event) => {
        setDescription(event.target.value);
       };   

  return (
      <div>
          <Box sx={{ minWidth: 120 }}>

      <FormControl fullWidth>
      <InputLabel >Select Unit</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={notesUnit}
        sx={{ height: 40,backgroundColor: "white"}}
        label="Select Unit"
        onChange={handleChange4}
      >
      <MenuItem onClick={handleClickOpen('paper')} value="CCS 001 COMMUNICATION SKILLS">CCS 001 COMMUNICATION SKILLS</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 161 PURE MATHEMATICS">FCE 161 PURE MATHEMATICS</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 101 INTRODUCTION TO CIVIL ENGINEERING">FCE 101 INTRODUCTION TO CIVIL ENGINEERING</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="CCS HIV/AIDS">CCS HIV/AIDS</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 163 ENGINEERING MECHANICS (Statics)">FCE 163 ENGINEERING MECHANICS (Statics)</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 165 COMPUTER SCIENCE">FCE 165 COMPUTER SCIENCE</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 131 PHYSICS">FCE 131 PHYSICS</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 181 CHEMISTRY">FCE 181 CHEMISTRY</MenuItem>
      </Select>
    </FormControl>

    {notesUnit !== "" &&(
      <FormControl sx={{marginTop:2}} fullWidth>
        <InputLabel >Select Topic</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={notesTopic}
          sx={{ height: 40,backgroundColor: "white"}}
          label="Select Topic"
          onChange={handleChange1}
        >
          <MenuItem value="Topic 1">Topic 1</MenuItem>
          <MenuItem  value="Topic 2">Topic 2</MenuItem>
          <MenuItem value="Topic 3">Topic 3</MenuItem>
          <MenuItem value="Topic 4">Topic 4</MenuItem>
          <MenuItem value="Topic 5">Topic 5</MenuItem>
        </Select>
      </FormControl>
    )}



      {notesTopic !== "" &&(
        <FormControl sx={{marginTop:2}} fullWidth>
        <InputLabel >Select Sub Topic</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={notesSubTopic}
          sx={{ height: 40}}
          label="Select Sub Topic"
          onChange={handleChange3}
        >
          <MenuItem value="Topic 1">Topic 1</MenuItem>
          <MenuItem value="Topic 2">Topic 2</MenuItem>
          <MenuItem value="Topic 3">Topic 3</MenuItem>
          <MenuItem value="Topic 4">Topic 4</MenuItem>
          <MenuItem value="Topic 5">Topic 5</MenuItem>
        </Select>
      </FormControl>
      )}

      {notesSubTopic !== "" &&(
        <FormControl sx={{marginTop:2}} fullWidth>
        <MDInput
        id="standard-multiline-flexible"
        label={<div style={{color:"#8C8C8C",marginBottom:10}}>Add Some Descriptions</div>}
        multiline
        maxRows={2}
        onChange={handleChange5}
        variant="standard"
        fullWidth
        style={{backgroundColor:"#D1D1D1",border:"none",color:"black",borderRadius:2,marginRight:1}}
      />  
      </FormControl>
      )}

      {description !== "" &&(
        <center>
        <Stack style={{marginTop:8}}>
        <label htmlFor="contained-button-file">
          <Input  id="contained-button-file" multiple type="file" />
          <Button variant="contained" component="span">
            <MDBox style={{color: "#fff"}}>Upload File</MDBox>
          </Button>
        </label>

      </Stack>   
        </center>

      )}
    </Box>
      </div>
  )
}

export default AddNotes;
