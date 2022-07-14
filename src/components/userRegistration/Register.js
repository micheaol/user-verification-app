import React, { useState} from 'react';

import RegisterImg from '../../assets/images/register-img.svg';
import styles from './register.module.css';

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName)
    console.log(lastName)
    console.log(email)
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
       
        <h1>Sign Up</h1>
        Already have an account? log in
      
          <form onSubmit={handleSubmit}>
          <div className={`${styles.forminput} form-group`}>
            <label for="exampleInputEmail1">First Name</label> <br/>
            <input 
            type="text"
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            placeholder="First Name"
            value={firstName}
            onChange={ (e) => setFirstName(e.target.value) }  
            />
            
          </div>
          <div className={`${styles.forminput} form-group`}>
            <label for="exampleInputEmail1">Last Name</label> <br/>
            <input 
            type="text" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            placeholder="Last Name"
            value={lastName}
            onChange={ (e) => setLastName(e.target.value) } 
            />
            
          </div>
          <div className={`${styles.forminput} form-group`}>
            <label for="exampleInputEmail1">Email address</label> <br/>
            <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            placeholder="Enter email"
            value={email}
            onChange={ (e) => setEmail(e.target.value) } 
            />
            
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