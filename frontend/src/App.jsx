import './App.css'
import { useEffect, useState } from 'react';
import { Routes,Route,Outlet, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CustomerPage from './pages/CustomerPage';
function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/customer-detail/:id' element={<CustomerPage />}/>
      </Routes>
    </div>
  );
}

export default App;
