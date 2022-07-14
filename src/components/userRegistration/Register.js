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
         <div className={styles.imagewrapper}>
            <img 
                src={RegisterImg}
                width={353}
                height={500}
            />
        </div>
        <div className={styles.registerformwrapper}>
       
        <h1>Sign Up</h1>
        Already have an account? log in
      
          <form>
          <div className={`${styles.forminput} form-group`}>
            <label for="exampleInputEmail1">First Name</label> <br/>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name"/>
            
          </div>
          <div className={`${styles.forminput} form-group`}>
            <label for="exampleInputEmail1">Last Name</label> <br/>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name"/>
            
          </div>
          <div className={`${styles.forminput} form-group`}>
            <label for="exampleInputEmail1">Email address</label> <br/>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            
          </div>
          <div className={`${styles.forminputcheck} form-check`}>
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">I agree to Terms and Conditions</label>
          </div>
            <button type="submit" className={`${styles.forminputbtn} btn btn-primary`}>Sign up</button>
          </form>
    </div>
    </div>
    </div>
  )
}

export default Register