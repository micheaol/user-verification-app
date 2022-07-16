import React, { useState, useEffect} from 'react';

import useDeepCompareEffect from 'use-deep-compare-effect';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SuccessImg from '../../assets/images/success.svg';
import Dashboard from '../../assets/images/dashboard.svg';
import styles from './success.module.css';

import { getUserInitiate } from '../../redux/action/user';

const SuccessPage = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userD?.data);
  const userP = useSelector(state => state.userPass.data?.data?.user);
  const navigate = useNavigate();

  const token = useSelector(state => state.userD.token?.token);

  console.log("From Success page",  userData );


  useEffect(() => {
    if(userP){
      dispatch(getUserInitiate(token))
    }
}, [userP])
  

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
          <ul>
       {userData?.filter((details, index) => index !== 0).map((details) => <span> {details}</span>)
       }
       </ul>
      
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