import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegisterImg from '../../assets/images/register-img.svg';
import { signUpInitiate } from '../../redux/action/user';
import styles from './register.module.css';

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {token} = useSelector(state => state.userD);

  const registerUser = (token) => {
    if(token){
      navigate('/setpassword')
    }
  }

  // useEffect(() => {
  //   if(token){
  //     navigate('/setpassword')
  //   }

  //   navigate('/')
  // }, [])
  
  // console.log("Register UI ===>", token.token)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email) {
        setError("All fields must be filled!")
    }else if(firstName.length < 6 ||  lastName.length < 6){
      setError("First name or Last name must not be less than 6 letters")
    }else{
      dispatch(signUpInitiate(firstName, lastName, email))
    }
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
        <h4 className={styles.errormessage}>{error}</h4>
        Already have an account? log in
      
          <form onSubmit={handleSubmit}>
          <div className={`${styles.forminput} form-group`}>

            <label htmlFor="exampleInputEmail1">First Name</label> <br/>
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
            <label htmlFor="exampleInputEmail1">Last Name</label> <br/>
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
            <label htmlFor="exampleInputEmail1">Email address</label> <br/>
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
            <label className="form-check-label" htmlFor="exampleCheck1">I agree to Terms and Conditions</label>
          </div>
            <button type="submit" className={`${styles.forminputbtn} btn btn-primary`} onClick={registerUser(token?.token)}>Sign up</button>
          </form>
    </div>
    </div>
    </div>
  )
}

export default Register