import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddProduct from '../components/AddProduct'
import Header from '../components/Header'

export default function CustomerPage() {
    const [user,setUser] = useState(null)
    const [product,setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const {id} = useParams()
    useEffect(()=>{
        axios.get('http://localhost:5000/customer-detail/' + id)
        .then(res => {
            setUser(res.data.customer)
            // setUser(res.data.products)
            setLoading(false)
        }
            )
        .catch(err => console.log(err))
        console.log(user)
    },[])
  return (
    <div>
        <Header />
        <div className="p-4 text-white">
            <h1></h1>
            {loading && <h1>loading data</h1>}
            {user && 
                <div>
                    <p><span>customer name:</span>{user.fullName}</p>
                    <p><span>customer address:</span>{user.address}</p>
                    <p><span>phone Number:</span>{user.phoneNumber}</p>
                    <p><span>whatsapp Number:</span>{user.whatsappNumber}</p>
                </div>
            }
        </div>
        <AddProduct />
    </div>
  )
}
