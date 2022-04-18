import axios from 'axios'
import { useEffect, useState } from 'react'
import Customers from '../components/Customers'
import Form from '../components/Form'
import Header from '../components/Header'

export default function Home() {
const [customers, setCustomers] = useState([])
  const [err, setErr] = useState('err')
  const [loading, setLoading] = useState('loading')

  useEffect(()=>{
    axios('http://localhost:5000')
    .then(res => setCustomers(res.data))
    .catch(err => console.log(err)) 
  },[customers])
  return (
    <div>
        <Header />
        <div className="md:grid grid-cols-4">
          <div className="col-span-3">
      <Customers customers ={customers}/>
      </div>
      <div className="col-span-1">
      <Form />
      </div>
      </div>
    </div>
  )
}
