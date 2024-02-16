import './App.css';
import Template from './assets/login-pet.png';
import { BsFillPersonFill } from 'react-icons/bs';
import { CgLock } from 'react-icons/cg';
import Google from './assets/google.svg';
import Facebook from './assets/facebook.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react'; // Removed unused import
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

function App() {
  // const [userName, setUserName] = useState('');
  // const [password, setPassword] = useState('');
  const [errorUserName, setErrorUserName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [userNameColor, setUserNameColor] = useState('');

  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: ''
  });


  const handleChange = e => {
    const { name, value } = e.target; // ดึงค่า name และ value จากอิเวนต์
    setFormData({ ...formData, [name]: value }); // ใช้ name เป็น key เพื่อเปลี่ยนค่าใน state ของ formData
  };

  const login = async (e, formData) => {
    e.preventDefault(); // ป้องกันการโหลดหน้าใหม่

    // if (formData.userName.length >= 3) {
    //   setErrorUserName('');
    //   setUserNameColor('green');
    // } else {
    //   setErrorUserName('Please enter a valid username');
    //   setUserNameColor('red');
    // }

    // if (formData.password.length > 8) {
    //   setErrorPassword('');
    // } else {
    //   setErrorPassword('Passwords must have at least 8 characters');
    // }
    try {
      const response = await axios.post('http://localhost:2000/auth/login', formData);
      const { access_token } = response.data;

      // เก็บ token ไว้ใน localStorage เพื่อใช้ในการร้องขอทรัพยากรต่อไป
      localStorage.setItem('access_token', access_token);
      console.log(access_token);
      // หลังจากเก็บ token แล้ว คุณสามารถทำอะไรต่อได้ตามต้องการ เช่น นำผู้ใช้ไปยังหน้าหลักของแอพพลิเคชัน
      return <Link to="/home" />;
    } catch (error) {
      console.error('Login failed', error);
    }
  }


  return (
    <>
      <div className="wrapper">
        <div className="container">
          <form className="login-form" onSubmit={(e) => login(e, formData)}>
            <h1 className="login-title">LOGIN</h1>
            <div className="form-control">
              <i>
                <BsFillPersonFill />
              </i>
              <input
                type="text"
                placeholder="username"
                name="usernameOrEmail"
                value={formData.usernameOrEmail}
                onChange={handleChange}
              />
              <small style={{ color: userNameColor }}>{errorUserName}</small>
            </div>
            <div className="form-control">
              <i>
                <CgLock />
              </i>
              <input
                type="password"
                placeholder="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <small style={{ color: 'red' }}>{errorPassword}</small>
            </div>
            <div className="btn-login">
              <button type="submit">
                <Link to="/home">Login Now</Link>
              </button>
              <button type="button">
                <Link to="/register">Register</Link>
              </button>
            </div>
            <p className="tag-social">Login with others</p>
            <div className="form-social">
              <Link to="">
                <img src={Google} alt="Google" />
                <p>Login with Google</p>
              </Link>
            </div>
            <div className="form-social">
              <Link to="">
                <img src={Facebook} alt="Facebook" />
                <p>Login with Facebook</p>
              </Link>
            </div>
          </form>
          <div className="template">
            <img src={Template} style={{ width: 387, height: 709 }} alt="template" />
          </div>
        </div>
      </div>
    </>
  );
}


export default App
