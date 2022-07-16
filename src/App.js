import React, { useState} from 'react';

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useSelector } from 'react-redux';
import Password from './components/SetPassword/Password';
import SuccessPage from './components/successPage/SuccessPage';
import Register from './components/userRegistration/Register';
import PrivateRoutes from './auth/privateRoutes';

function App() {
  // const [isAuth, setIsAuth] = useState(true);
  // let auth = useSelector(state => state.userD.token?.token);


  return (

      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="setpassword" element={<Password />} />
          <Route path="success" element={<SuccessPage />} />
        </Route>
        <Route exact path="/" element={<Register />} />
        
      </Routes>
  );
}

export default App;
