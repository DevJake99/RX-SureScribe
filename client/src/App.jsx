import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import PhysicianDashboard from './components/phycisianDashboard/PhysicianDashboard'
import PhysicianProfile from './components/physicianProfile/PhysicianProfile'
import PharmacistProfile from './components/pharmacistProfile/PharmacistProfile'


function App() {
  return (
    <>
      <Routes>
        <Route path='/logoin' element={<Login />} />
        <Route path="/" element={<Layout></Layout>}>
          <Route path='/physician' element={<PhysicianDashboard />} />
          <Route path='/pharmacist' element={<PharmacistProfile />} />
        </Route>
      </Routes>

    </>
  )
}
export default App
