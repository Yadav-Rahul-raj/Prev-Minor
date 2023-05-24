import React, { useState } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button, Box, useTheme } from '@mui/material';

const MyForm = () => {
  const theme = useTheme();
  const [hover, setHover] = useState(false);

  const [projectId, setProjectId] = useState('');
  const [projectName, setProjectName] = useState('');
  const [teacherId, setTeacherId] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your code to submit the form goes here
  };

  return (
    <Box sx={{ m: 1 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          margin="normal"
          label="Project ID"
          variant="outlined"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}

        />
        <TextField
          required
          fullWidth
          margin="normal"
          label="Project Name"
          variant="outlined"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          label="Teacher ID"
          variant="outlined"
          value={teacherId}
          onChange={(e) => setTeacherId(e.target.value)}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          label="Teacher Name"
          variant="outlined"
          value={teacherName}
          onChange={(e) => setTeacherName(e.target.value)}
        />
        <FormControl required fullWidth margin="normal" variant="outlined">
          <InputLabel id="type-label">Type</InputLabel>
          <Select
            labelId="type-label"
            value={type}
            onChange={(e) => setType(e.target.value)}
            label="Type"
          >
            <MenuItem value="Minor">Minor</MenuItem>
            <MenuItem value="Major">Major</MenuItem>
          </Select>
        </FormControl>
        <FormControl required fullWidth margin="normal" variant="outlined">
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            label="Status"
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" type="submit" className='createbtn'
                   onMouseEnter={()=>{
        setHover(true);
      }}
      onMouseLeave={()=>{ 
        setHover(false);
      }}
      style={{
        ...(hover ? {background: theme.palette.secondary[400]} : null)
      }}
        sx={{
              backgroundColor: theme.palette.secondary[300],
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default MyForm;
