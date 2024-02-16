/* eslint-disable no-undef */
// src/ShippingStatus.js
import { useState, useEffect } from "react";
import axios from 'axios'

const ShippingStatus = () => {

  const [shipments, setShipments] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ทำ GET request เมื่อ component ถูก render
    axios.get('http://localhost:2000/purchaseorder')
      .then(response => {
        setShipments(response.data); // เก็บข้อมูลที่ได้รับไว้ใน state
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
    <div>
      <h1>Shipping Status</h1>
      <ul>
        {shipments.map((item) => (
          <li key={item.id}>
            ID: {item.id} <br />
            PetID: {item.petId} <br />
            Date: {item.date} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShippingStatus;

