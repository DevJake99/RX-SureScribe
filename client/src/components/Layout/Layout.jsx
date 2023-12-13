import './layout.css'
import NavBar from '../Navigation/NavBar'
import { Outlet } from 'react-router-dom';
// import Login from '../login/Login'
import Footer from '../Footer/Footer'

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';



// import a useQuery to get user data, it's the `me` query

function Layout() {
    // const token = AuthService.getProfile();
    // console.log(token)

    //take the data from the query and then render based on userType
   /* const { loading, data } = useQuery(QUERY_ME, {
        // Pass the `thoughtId` URL parameter into query to retrieve this thought's data
        variables: { ...user },
    });

    const user = data.user.userType;

    if (loading) {
        return <div>Loading...</div>;
    } */

    return <>
        <NavBar></NavBar>


        {/* {(token.userType === 'Physician') && <PhysDash />}
        {(token.userType === 'Pharmacist') && <PharmDash />} */}


        <Outlet></Outlet>


        <Footer></Footer>
    </>
}

export default Layout