import './layout.css'
import NavBar from '../Navigation/NavBar'
import { Outlet } from 'react-router-dom';

function Layout() {
    return <>
        <NavBar></NavBar>

        <Outlet></Outlet>

    </>
}

export default Layout