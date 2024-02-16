import './profile.css'
import { Link } from 'react-router-dom'
import { IoPerson, IoSearchOutline } from "react-icons/io5";
import { useState } from 'react';
import Navbar from './components/navbar'

function Profile() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    return (
        <>
            {/* <div className="nav">
                <div className="logo"><Link to='/home'><h1>P TELEPORT</h1></Link></div>
                <ul className="menu-bar">
                    <li className='dropdown'>
                        <span><Link to='#'><IoPerson style={{ fontSize: '1.5em' }} /></Link></span>
                        <div className="dropdown-content">
                            <Link to='/'><p>Log out</p></Link>
                        </div>
                    </li>
                </ul>
            </div> */}
            <Navbar/>
            <section className='profile'>
                <div className="profile-container">
                    <img
                        src="http://localhost:5173/src/assets/Profile.jpg"
                        alt="Profile"
                        className="profile-image"
                    />
                    <div className="profile-details">
                        <input type="text" placeholder="Username" className="profile-input" />
                        <input type="email" placeholder="email" className="profile-input" />
                        <input type="text" placeholder="password" className="profile-input" />
                        <input type="text" placeholder="Firstname" className="profile-input" />
                        <input type="text" placeholder="Lastname" className="profile-input" />
                        <textarea placeholder="Address" className="profile-textarea"></textarea>
                        <input type="text" placeholder="Phone" className="profile-input" />
                    </div>
                </div>
                < div className="save">
                    <button>Save</button>
                </div>
            </section>
        </>
    );
}

export default Profile;