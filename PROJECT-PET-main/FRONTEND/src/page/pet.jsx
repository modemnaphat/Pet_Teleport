/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
// import Navbar from './components/navbar'
import './pet.css'
import './components/navbar.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoSearchOutline, IoAddOutline, IoPerson } from "react-icons/io5";
import { BsCaretDownFill } from "react-icons/bs";
import { FaBell } from 'react-icons/fa';
import axios from 'axios';

function pet() {

  const [pets, setPets] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [word, setWord] = useState("")
  const [dataFilter] = useState(["name", "type"])

  const searchPet = (pet) => {
    return pet.filter((item) => {
      return dataFilter.some((filter) => {
        return item[filter].toString().toLowerCase().indexOf(word.toLowerCase())>-1
      })
    })
  }

  useEffect(() => {
    // ทำ GET request เมื่อ component ถูก render
    axios.get('http://localhost:2000/pet')
      .then(response => {
        setPets(response.data); // เก็บข้อมูลที่ได้รับไว้ใน state
        setLoading(false); // ไม่มีการโหลดแล้ว
      })
      .catch(error => {
        setError(error); // เก็บ error ไว้ใน state
        setLoading(false); // ไม่มีการโหลดแล้ว
      });
  }, []); // อย่าลืมใส่ dependencies array เป็น []

  if (loading) {
    return <div>กำลังโหลดข้อมูล...</div>;
  }

  if (error) {
    return <div>เกิดข้อผิดพลาด: {error.message}</div>;
  }

  const deletePet = async (petsId) => {
    try {
      await axios.delete(`http://localhost:2000/pet/${petsId}`);
      // หลังจากลบสำเร็จ โหลดข้อมูลสินค้าใหม่
      await loadPets();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Function สำหรับโหลดรายการสินค้า
  const loadPets = async () => {
    try {
      const response = await axios.get('http://localhost:2000/pet');
      setPets(response.data);
    } catch (error) {
      console.error('Error loading pets:', error);
    }
  };

  const renderPetList = (pets) => {
    return (
      <button onClick={() => deletePet(pets.id)}>Delete</button>
    );
  };

  function alertDeleteClick() {
    alert("Delete Success!");
  }

  return (
    <>
    <div className="nav">
      <div className="logo"><Link to='/home'><h1>น้องโมเด็มสุดหล่อ</h1></Link></div>
      <div className="search-box">
        <form className='search'>
          <Link to=''><i><IoSearchOutline /></i></Link>
          <input type='text' placeholder='Search'></input>
        </form>
      </div>
      <ul className="menu-bar">
        <li className="dropdown">
          <span><Link to='#'>SERVICE<BsCaretDownFill /></Link></span>
          <div className="dropdown-content">
            <Link to='/pet'><p>Pet</p></Link>
            <Link to='/status'><p>Status</p></Link>
          </div>

        </li>
        <li className='dropdown'>
          <span><Link to='/status'><FaBell style={{ fontSize: '1.5em' }} /></Link></span>
          <div className="dropdown-content">
            <Link to='/order'><p>Notification</p></Link>
          </div>
        </li>

        <li className='dropdown'>
          <span><Link to='#'><IoPerson style={{ fontSize: '1.5em' }} /></Link></span>
          <div className="dropdown-content profile-dropdown">
            <Link to='/profile'>
              <img
                src="http://localhost:5173/src/assets/Profile.jpg"
                alt="Profile"
                className="profile-image"
              />
            </Link>
            <div>
              <Link to='/profile'><p>Edit Profile</p></Link>

              <Link to='/'><p>Log out</p></Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
      {/* </div>
      <div className="search-box">
        <form className='search'>
          <Link to=''><i><IoSearchOutline /></i></Link>
          <input type='text' placeholder='Search' value={word} onChange={(e) => setWord(e.target.value)}></input>
        </form>
      </div> */}

      <div className='pet-content'>
        <div className="btn-post">
        <Link to='/post'><IoAddOutline style={{ fontSize: '1.5em' }} />Add new pet</Link>
        </div>
        <ul className='listpet-row'>
          {searchPet(pets).map(pet => (
            <li key={pet.id}>
              <div className='pet-card'>
                {/* <img src='#' alt={pet.id} /> */} <p style={{margin:10}}>{pet.id}</p>
                <div className='pet-title'>
                  <h2>{pet.name} ({pet.type})</h2>
                </div>
                <div className="pet-body">
                  <div className="pet-description">
                    <h3>Price: {pet.price} $</h3>
                    <h3>Status: {pet.status}</h3>
                    <ol className='pet-list'>
                      <li><div className="orderbtn">
                        <button type='submit' >Click to Order</button>
                      </div></li>
                      <li><div className="deletebtn" onClick={alertDeleteClick} >
                        {renderPetList(pet)}
                      </div></li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default pet