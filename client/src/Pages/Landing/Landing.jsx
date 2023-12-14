import Container from 'react-bootstrap/Container';
import AuthService from '../../utils/auth'
import PhysDash from '../../components/phycisianDashboard/PhysicianDashboard';
import PharmDash from '../../components/pharmacistDashboard/PharmacistDashboard';
import Login from '../Login/Login';

const Landing = () => {
  // console.log(AuthService.getProfile())
  const { data } = AuthService.getProfile()
  const type = data.userType
  console.log(type)

  const renderView = (type) => {
    if (type === 'Physician') {
      return <PhysDash />
    } else if (type === 'Pharmacist') {
      return <PharmDash />
    } else return <Login />

    /*switch (type) {
      case 'Physician':
        return <PhysDash />;
      case 'Pharmacist':
        return <PharmDash />;
      default:
        return <Login />;
    }*/
  }

  return (
    <div>
      <p>Landing Page</p>
      <>
        <Container>
          {renderView(type)}

        </Container>
      </>
    </div>
  )
}

export default Landing