import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import PhysicianDashboard from './components/phycisianDashboard/PhysicianDashboard'
import PhysicianProfile from './components/physicianProfile/PhysicianProfile'
import PharmacistProfile from './components/pharmacistProfile/PharmacistProfile'
import Login from './components/login/Login'
import NavBar from './components/Navigation/NavBar';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout>
          <Route path='/navbar' element={<NavBar />} />
          <Route path='/login' element={<Login />} />
          <Route path='/physician' element={<PhysicianDashboard />} />
          <Route path='/pharmacist' element={<PharmacistProfile />} />
        </Layout>}>
        </Route>
      </Routes>

    </>
  )
}
export default App
