
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

function register() {

  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    address: '',
    phone: '',
    is_admin: 'no',
    roles: 'user'
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2000/User', userData);
      console.log(response.data); // ตัวอย่างการใช้งาน response หลังจากส่งข้อมูลลงทะเบียนสำเร็จ
      setUserData({
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        address: '',
        phone: '',
        email: '',
        is_admin: 'no',
        roles: 'user'
      });
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการลงทะเบียน:', error);
      // สามารถเพิ่มโค้ดเพื่อจัดการกับข้อผิดพลาด เช่น แสดงข้อความผิดพลาดหรือทำการจัดการอื่นๆ ตามที่ต้องการ
    }
  };

  function alertSignUp() {
    alert("Sign up Success!");
  }


  return (
    <>
      <div className="wrapper">
        <div className="container">

          <form className='login-form' onSubmit={handleSubmit}>

            <h1 className='login-title'>SIGN UP</h1>

            <div className="form-control">
              <input type="text" placeholder='Enter your First name' name="first_name" value={userData.first_name} onChange={handleChange} />
              <small></small>
            </div>
            <div className="form-control">
              <input type="text" placeholder='Enter your Last name' name="last_name" value={userData.last_name} onChange={handleChange} />
              <small></small>
            </div>
            <div className="form-control">
              <input type="text" placeholder='Enter your Username' name="username" value={userData.username} onChange={handleChange} />
              <small></small>
            </div>
            <div className="form-control">
              <input type="password" placeholder='Enter your Password' name="password" value={userData.password} onChange={handleChange} />
              <small></small>
            </div>
            <div className="form-control">
              <input type="text" placeholder='Enter your Address' name="address" value={userData.address} onChange={handleChange} />
              <small></small>
            </div>
            <div className="form-control">
              <input type="tel" placeholder='Enter your Phone' name="phone" value={userData.phone} onChange={handleChange} />
              <small></small>
            </div>
            <div className="form-control">
              <input type="email" placeholder='Enter your E-mail' name="email" value={userData.email} onChange={handleChange} />
              <small></small>
            </div>

            {/* <div className="form-control">
                            <input type="text" placeholder='Are you admin??' name="is_admin" value={userData.is_admin} onChange={handleChange} />
                            <label htmlFor="is_admin" >Are you admin??</label>
                            <small></small>
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder='Roles' name="roles" value={userData.roles} onChange={handleChange} />
                            <small></small>
                        </div> */}

            <div className="btn-login">
              <button type="submit" onClick={alertSignUp} style={{color:"#fff"}}>Sign up</button>
            </div>
            <div className="btn-login">
              <button type="submit"  style={{color:"#fff"}}><Link to='/'>Login</Link></button>
            </div>


          </form>

          <div className="template">
            <img src='http://localhost:5173/src/assets/login-pet.png' style={{ width: 387, height: 709 }} alt='template' />
          </div>
        </div>
      </div>
    </>
  )
}

export default register

// import React, { useState } from 'react';
// import axios from 'axios';

// function register() {
//   const [formData, setFormData] = useState({
//     first_name: '',
//     last_name: '',
//     username: '',
//     address: '',
//     password: '',
//     phone: '',
//     roles: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:2000/user', formData);
//       console.log('Registration successful:', response.data);
//       // ทำการ redirect หรือทำอย่างอื่นตามที่ต้องการหลังจากลงทะเบียนเสร็จ
//     } catch (error) {
//       console.error('Registration failed:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="first_name"
//         placeholder="first_name"
//         value={formData.first_name}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="last_name"
//         placeholder="last_name"
//         value={formData.last_name}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="username"
//         placeholder="username"
//         value={formData.username}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="address"
//         placeholder="address"
//         value={formData.address}
//         onChange={handleChange}
//       />
//       <input
//         type="tel"
//         name="phone"
//         placeholder="phone"
//         value={formData.phone}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="roles"
//         placeholder="roles"
//         value={formData.roles}
//         onChange={handleChange}
//       />
//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default register;