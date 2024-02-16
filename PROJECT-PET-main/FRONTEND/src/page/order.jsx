import React, { useState } from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import "./order.css";

const Order = () => {
  const [orderStatus, setOrderStatus] = useState(""); 

  const handleCancelClick = () => {
    setOrderStatus("cancel");
  };

  const handleSuccessfulClick = () => {
    setOrderStatus("successful");
  };

  const Box_Cancel = () => {
    return (
      <div className="box_Cancel">
        <h2> Cancel Order! </h2>
        <h3> Persian </h3>
        <p>
          <br /> Age : 1 Year <br />
          <br /> Price : 150$ <br />
          <br /> Color : White <br />
        </p>
      </div>
    );
  };

  const Box_Successful = () => {
    return (
      <div className="box_Successful">
        <h2> Order Successful! </h2>
        <h3> Scottish fold </h3>
        <p>
          <br /> Age : 1 Year <br />
          <br /> Price : 100$ <br />
          <br /> Color : Shaded Golden <br />
        </p>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <button onClick={handleCancelClick}>Cancel Order</button>
      <button onClick={handleSuccessfulClick}>Order Successful</button>

      {orderStatus === "cancel" ? <Box_Cancel /> : null}
      {orderStatus === "successful" ? <Box_Successful /> : null}
    </>
  );
};

export default Order;
