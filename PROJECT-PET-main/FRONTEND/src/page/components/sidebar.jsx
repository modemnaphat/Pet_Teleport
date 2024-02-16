import { Link } from 'react-router-dom'
import { FaAngleRight, FaClipboardList, FaPlane, FaAngleLeft } from 'react-icons/fa';
import { useState } from 'react';
import './sidebar.css'


function sidebar() {

    const [showMenu,setShowMenu] = useState(false);
    const togglePlane = ()=> {
    setShowMenu(!showMenu);
    };
    const [showOrder,setShowOrder] = useState(false);
    const  toggleClipboardlist  =() => {
    setShowOrder(!showOrder);
    };
  return (
    <aside>
        <div className="sidebar">
            <div className="sidebar-toggle">
                <Link to='#'>
                    <FaAngleRight />
                </Link>
                <Link to='/order'>
                    <FaClipboardList onClick={toggleClipboardlist}/>
                </Link>
                <Link to='/shippingstatus'>
                    <FaPlane onClick={togglePlane}/>
                </Link>

            </div>
        </div>
        <div className={showOrder ? "sidebar-menu active" : "sidebar-menu"} >
            <ul className="bar-menu-item">
                <li className="sidebar-toggle-close">
                    <Link to='#' className='menu-bar'>
                        <FaAngleLeft onClick={toggleClipboardlist} style={{fontSize: '1.5em'}}/>
                        <span>Recipe</span>
                    </Link>
                </li>
                <li className='menu-text'>
                    <Link to='/order'> 
                        <span><p>Order</p></span>
                    </Link>
                </li>
                <li className='menu-text'>
                    <Link to='/status'> 
                        <span><p> Cancel order</p></span>
                    </Link>
                </li>
            </ul>
        </div>
        <div className={showMenu ? "sidebar-menu active" : "sidebar-menu"} >
            <ul className="bar-menu-item">
                <li className="sidebar-toggle-close">
                    <Link to='#' className='menu-bar'>
                        <FaAngleLeft onClick={togglePlane} style={{fontSize: '1.5em'}}/>
                        <span>Shipping</span>
                    </Link>
                </li>
                <li className='menu-text'>
                    <Link to='/status'> 
                        <span><p>status</p></span>
                    </Link>
                </li>
            </ul>
        </div>
    </aside>
  )
}

export default sidebar