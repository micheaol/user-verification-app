import React, { useState, useEffect} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import SuccessImg from '../../assets/images/success.svg';
import Dashboard from '../../assets/images/dashboard.svg';
import styles from './success.module.css';

import { getUserInitiate } from '../../redux/action/user';

const SuccessPage = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, email} = useSelector(state => state.user)

  const token = useSelector(state => state.user.token?.token);

  console.log("From Success page",  firstName, lastName, email );


  useEffect(() => {
    dispatch(getUserInitiate(token))
  }, [])
  
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
       
        <h1>Name :  Michael Oladele</h1>
        <h2>Email :  micheaol80@gmail.com</h2>
        <h3>Registration completed successfully</h3>
      
        <img 
                src={Dashboard}
                width={100}
                height={50}
            />
    </div>
    </div>
    </div>
  )
}

export default SuccessPage