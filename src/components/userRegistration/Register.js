import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
import Checkbox from '@mui/material/Checkbox';

import RegisterImg from '../../assets/images/register-img.svg';
import styles from './register.module.css';

const Register = () => {
  return (
    <div className={styles.outerwrapper}>
      
    <div className={styles.registercontainer}>
         <div >
            <img 
                src={RegisterImg}
                width={400}
                height={500}
            />
        </div>
        <div className={styles.registerformwrapper}>
        <div>
        <h3>Sign Up</h3>
        <p>Already have an account? log in</p>
      </div>
        <Box
      component="form"
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
      noValidate
      autoComplete="off"
    >
      <div className={styles.innerformwrapper}>
      <TextField 
      id="outlined-basic"
      label="First Name"
      variant="outlined"
      placeholder="John"
      margin="normal"
      />
      <TextField 
      id="outlined-basic" 
      label="Last Name" 
      variant="outlined" 
      placeholder="Doe"
      margin="normal"
      />
      <TextField 
      id="outlined-basic" 
      label="Email" 
      variant="outlined"
      placeholder="example@gmail.com"
      margin="normal"
      />
      </div>
    </Box>

    <div className={styles.checkboswrapper}>
        <Checkbox  defaultChecked />
        <p>I agree to Terms and Conditions</p>
    </div>

    <Button variant="contained">
        Send
      </Button>
    </div>
    </div>
    </div>
  )
}

export default Register