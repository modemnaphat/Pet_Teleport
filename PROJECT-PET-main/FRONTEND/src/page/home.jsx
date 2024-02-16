import './home.css'
import Navbar from './components/navbar'
import { Link } from 'react-router-dom'
// import { IoSearchOutline } from "react-icons/io5";

function home() {
  return (
    <>
    <Navbar />
    {/* <div className="search-box">
      <form className='search'>
        <i><IoSearchOutline /></i>
        <input type='text' placeholder='Search'></input>
      </form>
    </div> */}
    <section className="image-slider">
      <div className="slider-wrapper">
        <Link to='/pet'>
        <div className="slider">
          <img id='slide-2' src='./src/assets/slider2.jpg' />
          <img id='slide-1' src='./src/assets/slider1.jpg' />
          <img id='slide-3' src='./src/assets/slider3.jpg' />
          <img id='slide-4' src='./src/assets/slider4.jpg' />
        </div></Link>
        <div className="slider-nav">
          <Link to='#slide-2'></Link>
          <Link to='#slide-1'></Link>
          <Link to='#slide-3'></Link>
          <Link to='#slide-4'></Link>
        </div>
      </div>
    </section>
    <div className='photo'>
      <img id='photo1' src='./src/assets/photo1.jpg' />
      <img id='photo1' src='./src/assets/photo2.jpg' />
      <img id='photo1' src='./src/assets/photo3.jpg' />
      <img id='photo1' src='./src/assets/photo4.jpg' />
      <img id='photo1' src='./src/assets/photo5.jpg' />
      <img id='photo1' src='./src/assets/photo5.jpg' />
    </div>
    </>
  )
}

export default home