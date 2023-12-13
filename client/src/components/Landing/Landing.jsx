import Container from 'react-bootstrap/Container';
import AuthService from '../../utils/auth'
import PhysDash from '../phycisianDashboard/PhysicianDashboard';
import PharmDash from '../pharmacistDashboard/PharmacistDashboard';

const Landing = () => {
  const { data } = AuthService.getProfile()
  const type = data.userType
  console.log(type)

  return (
    <div>
      <>
        <Container>
          {type === 'Physician' ? (window.location.assign('/physician')) : window.location.assign('/pharmacist')}
        </Container>
      </>
    </div>
  )
}

export default Landing