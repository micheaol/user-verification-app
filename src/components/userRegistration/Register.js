import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';

import RegisterImg from '../../assets/images/register-img.svg'

const Register = () => {
  return (
    <Grid container spacing={2} columns={16}>
         <Grid item xs={8}>
            <img 
                src={RegisterImg}
                width={500}
                height={500}
            />
        </Grid>
        <Grid item xs={8}>
        
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      id="outlined-basic"
      label="First Name"
      variant="outlined"
      placeholder="John"
      />
      <TextField 
      id="outlined-basic" 
      label="Last Name" 
      variant="outlined" 
      placeholder="Doe"
      />
      <TextField 
      id="outlined-basic" 
      label="Email" 
      variant="outlined"
      placeholder="example@gmail.com"
      />
    </Box>

    <div>
        <Checkbox  defaultChecked />
        <p>I agree to Terms and Conditions</p>
    </div>
        </Grid>
    </Grid>
  )
}

export default Register