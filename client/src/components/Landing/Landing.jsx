import Container from 'react-bootstrap/Container';
import AuthService from '../../utils/auth'
import PhysDash from '../phycisianDashboard/PhysicianDashboard';
import PharmDash from '../pharmacistDashboard/PharmacistDashboard';

const Landing = () => {
  // console.log(AuthService.getProfile())
  // const { data } = AuthService.getProfile()
  // const type = data.userType
  // console.log(type)

  // let landingPage;
  // switch (type) {
  //   case 'Physician':
  //     landingPage = window.location.assign('/physician');
  //     break;
  //   case 'Pharmacy':
  //     landingPage = 
  //     break;
  //     Default < Login ></>
  //  }

  return (
    <div>
      <p>Landing Page</p>
      <>
        <Container>
          {/* {type === 'Physician' ? (<PhysDash />) : <PharmDash></PharmDash>} */}

        </Container>
      </>
    </div>
  )
}

export default Landing