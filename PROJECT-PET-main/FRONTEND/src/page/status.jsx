/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react"
import axios from 'axios'
import './components/sidebar.css'
import './status.css'
import Navbar from "./components/navbar"
import { Link } from 'react-router-dom'
import { FaAngleRight, FaClipboardList, FaPlane, FaAngleLeft,FaRegWindowClose } from 'react-icons/fa';

function status() {

  // const [pets, setPets] = useState([]);
  const [purchaseorder, setPurchaseOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showMenu,setShowMenu] = useState(false)
  const toggleMenu = ()=>setShowMenu(!showMenu)

  const [showStatus, setShowStatus] = useState(false)
  const toggleStatus = () => setShowStatus(!showStatus)

  const [showOrder,setShowOrder] = useState(false)
  const toggleOrder = ()=>setShowOrder(!showOrder)

  const [showYES, setShowYES] = useState(false)
  const toggleYES = () => setShowYES(!showYES)

  const [showNO, setShowNO] = useState(false)
  const toggleNO = () => setShowNO(!showNO)

  // useEffect(() => {
  //   // ทำ GET request เมื่อ component ถูก render
  //   axios.get('http://localhost:2000/pet')
  //     .then(response => {
  //       setPets(response.data); // เก็บข้อมูลที่ได้รับไว้ใน state
  //     })
  //     .catch(error => {
  //       setError(error); // เก็บ error ไว้ใน state
  //       setLoading(false); // ไม่มีการโหลดแล้ว
  //     });
  // }, []); // อย่าลืมใส่ dependencies array เป็น []

  useEffect(() => {
    // ทำ GET request เมื่อ component ถูก render
    axios.get('http://localhost:2000/purchaseorder')
      .then(response => {
        setPurchaseOrder(response.data); // เก็บข้อมูลที่ได้รับไว้ใน state
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

  return (
    <>
      <Navbar />
      <aside>
        <div className="sidebar">
            <div className="sidebar-toggle">
                <Link to='#'>
                    <FaAngleRight />
                </Link>
                <Link to='#'>
                    <FaClipboardList onClick={toggleOrder}/>
                </Link>
                <Link to='#'>
                    <FaPlane onClick={toggleMenu}/>
                </Link>
            </div>
        </div>
        <div className={showOrder ? "sidebar-menu active" : "sidebar-menu"} >
            <ul className="bar-menu-item">
                <li className="sidebar-toggle-close">
                    <Link to='#' className='menu-bar'>
                        <FaAngleLeft onClick={toggleOrder} style={{fontSize: '1.5em'}}/>
                        <span>Status</span>
                    </Link>
                </li>
                <li className='menu-text' onClick={toggleYES}>
                    <Link to='#'> 
                        <span><p>Order</p></span>
                    </Link>
                </li>
                <li className='menu-text' onClick={toggleNO}>
                    <Link to='#'> 
                        <span><p>Cancel Order</p></span>
                    </Link>
                </li>
            </ul>
        </div>
        <div className={showMenu ? "sidebar-menu active" : "sidebar-menu"} >
            <ul className="bar-menu-item">
                <li className="sidebar-toggle-close">
                    <Link to='#' className='menu-bar'>
                        <FaAngleLeft onClick={toggleMenu} style={{fontSize: '1.5em'}}/>
                        <span>Shipping</span>
                    </Link>
                </li>
                <li className='menu-text' onClick={toggleStatus}>
                    <Link to='/shippingstatus'> 
                        <span><p>status</p></span>
                    </Link>
                </li>
            </ul>
        </div>
    </aside>
    {/* <div className={showStatus ? "pet-status active" : "pet-status"}>
          <div className="pet-status-box">
            <Link to='#' onClick={toggleStatus}>
              <FaRegWindowClose style={{ fontSize: '1.5em' }}/>
              <span>status</span>
            </Link>
            <p>Information</p>
            <ul>
              {pets.map((pet) => (
                <li key={pet.name}>
                  ID : {pet.id} <br />
                  Name :  {pet.name} <br />
                  Type : {pet.type} <br />
                  Price : {pet.price} <br />
                  Status : {pet.status}
                </li>
              ))}
            </ul>
          </div>
        </div> */}
        <div className={showYES ? "pet-status active" : "pet-status"}>
          <div className="pet-status-box">
            <Link to='/order' onClick={toggleStatus}>
              <FaRegWindowClose style={{ fontSize: '1.5em' }}/>
              <span>Order</span>
            </Link>
            <p>Order Succesfully!</p>
            <ul>
              {purchaseorder.map((order) => (
                <li key={order.id}>
                  ID : {order.id} <br />
                  date :  {order.date} <br />
                  Type : {order.type} <br />
                  delivery_address : {order.address} <br />
                  Status : {order.status}
                </li>
              ))}
            </ul>
          </div>
        </div>
    </>
  )
}

export default status