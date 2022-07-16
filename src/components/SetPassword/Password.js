import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserInitiate, signUpInitiate } from '../../redux/action/user';
import RegisterImg from '../../assets/images/register-img.svg';
import styles from './password.module.css';
import { setPasswordInitiate } from '../../redux/action/password';


const Password = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(state => state.userD.token?.token);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password) {
      setError("Password can not be empty")
    }else if(!confirmPassword ){
      setError("Confirm password can not be empty")

    }else if(password !== confirmPassword){
      setError("Confirm password don't match")
    }
    setError("")
    
     dispatch(setPasswordInitiate(password, confirmPassword, token))
     navigate('/success')

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
        <h4 className={styles.errormessage}>{error}</h4>
        Already have an account? log in

          <form onSubmit={handleSubmit}>
          <div className={`${styles.forminput} form-group`}>
            <label htmlFor="exampleInputEmail1">Password</label> <br/>
            <input 
            type="password"
            className="form-control" 
            aria-describedby="emailHelp" 
            placeholder="password"
            value={password}
            onChange={ (e) => setPassword(e.target.value) }  
            />
            
          </div>
          <div className={`${styles.forminput} form-group`}>
            <label htmlFor="exampleInputEmail1">Confirm Password</label> <br/>
            <input 
            type="password" 
            className="form-control" 
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