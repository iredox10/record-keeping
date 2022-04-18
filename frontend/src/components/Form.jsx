import axios from "axios";
import React, { useState } from "react";

export default function Form() {
  const [fullName, setfullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "http://localhost:5000/add-customer",
        { fullName, address, phoneNumber, whatsappNumber },
        config
      );
      setfullName("");
      setAddress("");
      setPhoneNumber("");
      setWhatsappNumber("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-2 bg-blue-500 w-full mt-20 ">
      <h1>add customer</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName">customer name</label>
          <input
            type="text"
            value={fullName}
            name="fullName"
            id="fullName"
            onChange={(e) => setfullName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address">address</label>
          <input
            type="text"
            value={address}
            name="address"
            id="address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber">phone number</label>
          <input
            type="number"
            value={phoneNumber}
            name="phoneNumber"
            id="phoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="whatsappNumber">whatsappNumber</label>
          <input
            type="number"
            value={whatsappNumber}
            name="whatsappNumber"
            id="whatsappNumber"
            onChange={(e) => setWhatsappNumber(e.target.value)}
          />
        </div>
        <button className="p-2 bg-blue-600 text-white ">add customer</button>
      </form>
    </div>
  );
}
