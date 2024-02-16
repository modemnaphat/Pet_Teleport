import { useState, useEffect } from "react"
import axios from 'axios'

function adminprofile() {

    const [admin, setAdmin] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // ทำ GET request เมื่อ component ถูก render
        axios.get('http://localhost:2000/admin')
          .then(response => {
            setAdmin(response.data); // เก็บข้อมูลที่ได้รับไว้ใน state
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
        <ul>
            {admin.map((admin) => (
                <li key={admin.id}>
                    {admin.id} <br />
                    {admin.username} <br />
                    {admin.email} <br />
                    {admin.password} <br />
                </li>
            ))}
        </ul>
    </>
  )
}

export default adminprofile