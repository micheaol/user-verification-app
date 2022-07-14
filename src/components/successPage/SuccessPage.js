import React, { useState} from 'react';

import SuccessImg from '../../assets/images/success.svg';
import Dashboard from '../../assets/images/dashboard.svg';
import styles from './success.module.css';

const SuccessPage = () => {
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
                src={SuccessImg}
                width={353}
                height={500}
            />
        </div>
        <div className={styles.registerformwrapper}>
       
        <h1>Sign Up</h1>
        Already have an account? log in
      
        <img 
                src={Dashboard}
                width={100}
                height={100}
            />
    </div>
    </div>
    </div>
  )
}

export default SuccessPage