import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Customers({customers}) {
  const [customer, setCustomer] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(true)
  const viewCustomer = (id) =>{
    axios.get('http://localhost:5000/view-customer/' + id)
    .then((res) => {
      setCustomer(res.data)
      setLoading(false)
    }).catch((err) => {
      setError(err)
    });
  }

  return (
    <div className="p-4 max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-3">
        <h1 className="text-white text-2xl md:text-4xl capitalize">customers</h1>
        <div className="capitalize">
        <input type="search" name="search" id="search" placeholder='search...' className='p-2 outline-none'/>
        <button className="bg-blue-500 text-white p-2 ">search</button>
        </div>
        </div>
        <div className="md:flex flex-wrap gap-3">
        {customers.map(c =>(
        <div className='bg-blue-400 text-white p-3 mb-2 md:mb-0' key={c.id}>
          <p className="capitalize md:text-xl"><span className="font-bold">full name: </span>{c.fullName}</p>
          <p className="capitalize md:text-xl"><span className="font-bold">address: </span>{c.address}</p>
          <p className="capitalize md:text-xl"><span className="font-bold">whatsapp Number: </span>{c.whatsappNumber}</p>
          <p className="capitalize md:text-xl"><span className="font-bold">phone Number: </span>{c.phoneNumber}</p>
          <Link to={`/customer-detail/${c._id}`}>view detail</Link>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Customers