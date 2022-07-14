import React, { useState} from 'react';

import RegisterImg from '../../assets/images/register-img.svg';
import styles from './password.module.css';

const Password = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password)
    console.log(confirmPassword)
  }
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
       
        <h1>Create Password</h1>
        Already have an account? log in
      
          <form onSubmit={handleSubmit}>
          <div className={`${styles.forminput} form-group`}>
            <label for="exampleInputEmail1">Password</label> <br/>
            <input 
            type="password"
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            placeholder="password"
            value={password}
            onChange={ (e) => setPassword(e.target.value) }  
            />
            
          </div>
          <div className={`${styles.forminput} form-group`}>
            <label for="exampleInputEmail1">Confirm Password</label> <br/>
            <input 
            type="password" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            placeholder="confirm password"
            value={confirmPassword}
            onChange={ (e) => setConfirmPassword(e.target.value) } 
            />
            
          </div>
            <button type="submit" className={`${styles.forminputbtn} btn btn-primary`}>Sign up</button>
          </form>
    </div>
    </div>
    </div>
  )
}

export default Password