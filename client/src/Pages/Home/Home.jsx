import './Home.css'
// import NavBar from '../../components/Navigation/NavBar'
// import { Outlet } from 'react-router-dom';
// import Login from '../login/Login'
// import Footer from '../../components/Footer/Footer'

// import { useQuery } from '@apollo/client';
// import { QUERY_ME } from '../../utils/queries';



// import a useQuery to get user data, it's the `me` query

function Home() {
    // const token = AuthService.getProfile();

    //take the data from the query and then render based on userType
    // const { loading, data } = useQuery(QUERY_ME)
    // if (loading) {
    //     return <div>Loading...</div>;
    // }
    // const user = data?.me?.userType;


    return <>
        {/* <NavBar user={user}></NavBar> */}
        <h1>home page stuff goes here</h1>

        {/* <Outlet></Outlet> */}


        {/* <Footer></Footer> */}
    </>
}

export default Home