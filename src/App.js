import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Password from './components/SetPassword/Password';
import SuccessPage from './components/successPage/SuccessPage';
import Register from './components/userRegistration/Register';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="setpassword" element={<Password />} />
        <Route path="success" element={<SuccessPage />} />
      </Routes>
  );
}

export default App;
