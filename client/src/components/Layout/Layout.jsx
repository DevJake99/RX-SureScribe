import './layout.css'
import NavBar from '../Navigation/NavBar'
import { Outlet } from 'react-router-dom';
// import Login from '../login/Login'
import Footer from '../Footer/Footer'
/*
should I use formState for login? 
ex: if not logged in, set Navbar to hidden, but if logged in, NavBar Shows?
 */

function Layout() {
    return <>
        <NavBar></NavBar>


        <Outlet></Outlet>

        
        <Footer></Footer>
    </>
}

export default Layout