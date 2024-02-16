import './post.css'
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

function post() {

    const [petData, setPetData] = useState({
        name: '',
        price: 0,
        type: '',
        status: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPetData({ ...petData, [name]: value });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:2000/pet', petData); 
            console.log('Pet posted:', response.data);
            // สามารถเพิ่มโค้ดเพื่อปรับปรุง UI หรือทำอย่างอื่นต่อไปได้
        } catch (error) {
            console.error('Error posting pet:', error);
        }
    };

    const resetForm = () => {
        setPetData({
            name: '',
            price: '',
            type: '',
            status: ''
        });
    };

    // const [petData, setPetData] = useState({
    //     name: '',
    //     price: 0,
    //     type: '',
    //     status: '',
    //     image: null
    // });

    // const handleChange = (event) => {
    //     if (event.target.name === 'image') {
    //         // เมื่อเลือกไฟล์รูปภาพ
    //         setPetData({ ...petData, image: event.target.files[0] });
    //     } else {
    //         const { name, value } = event.target;
    //         setPetData({ ...petData, [name]: value });
    //     }
    // };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const formData = new FormData();
    //         formData.append('name', petData.name);
    //         formData.append('price', petData.price);
    //         formData.append('type', petData.description);
    //         formData.append('status', petData.description);
    //         formData.append('image', petData.image); // เพิ่มรูปภาพลงใน FormData

    //         const response = await axios.post('http://localhost:2000/pet', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data' // ต้องระบุ Content-Type เป็น multipart/form-data เพื่ออัปโหลดไฟล์
    //             }
    //         });

    //         console.log('Pet posted:', response.data);
    //         // สามารถเพิ่มโค้ดเพื่อปรับปรุง UI หรือทำอย่างอื่นต่อไปได้
    //     } catch (error) {
    //         console.error('Error posting pet:', error);
    //     }
    // };

    function alertClickPost() {
        alert("Post Success!");
    }


    return (
        <>
        <div className="post-tab">
        <Link to='/pet' className='close-post-tab'><IoClose style={{fontSize: '4em'}}/></Link>
            <div className='post-box'>
            <h1>Post Pet</h1>
            <form onSubmit={handleSubmit} className='post'>
                <div>
                    <label htmlFor="name">Name :</label>
                    <input type="text" id="inputField" name="name" value={petData.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="price">Price : ($)</label>
                    <input type="number" id="inputField" name="price" value={petData.price} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="type">type of pet :</label>
                    <input id="inputField" name="type" value={petData.type} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="status">status :</label>
                    <input id="inputField" name="status" value={petData.status} onChange={handleChange} />
                </div>
                {/* <div>
                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image" name="image" onChange={handleChange} />
                </div> */}
                <button type="submit" onClick={alertClickPost}>Post</button>
                <button type="button" onClick={resetForm} >Clear</button>
            </form>
            </div>
        </div>
        </>
    )
}

export default post