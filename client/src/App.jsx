import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Landing from './Pages/Landing/Landing'
import OrderContext from './components/phycisianDashboard/OrderContext';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [orders, setOrders] = useState([]);

  return (
    <div style={{
      backgroundImage: `url(../src/assets/background.jpg)`,
      backgroundSize: 'cover',
      // backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      padding: '20px',
      opacity: 0.7,
      margin: '0',  // Add this to remove margin
      overflowX: 'hidden',  // Add this to hide horizontal overflow
    }}>
      <OrderContext.Provider value={{ orders, setOrders }}>
        <ApolloProvider client={client}>
          <NavBar />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route index element={<Home />} />
            {/* <Route index element={<Landing />}></Route> */}
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />

          </Routes>

        </ApolloProvider>

      </OrderContext.Provider>


    </div>
  )
}
export default App