import './layout.css'
import NavBar from '../Navigation/NavBar'
import { Outlet } from 'react-router-dom';
import PharmacistDashboard from '../pharmacistDashboard/PharmacistDashboard'
import PhysicianDashboard from '../phycisianDashboard/PhysicianDashboard'
// import Login from '../login/Login'
import Footer from '../Footer/Footer'
import Register from '../login/Register'

function Layout() {
    return <>
        <NavBar></NavBar>


        <Outlet></Outlet>

        <PhysicianDashboard></PhysicianDashboard>
        <PharmacistDashboard></PharmacistDashboard>
        <Footer></Footer>
    </>
}

export default Layout