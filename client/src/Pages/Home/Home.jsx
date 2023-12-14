import './Home.css'
import Register from '../Register/Register';


function Home() {
    // const token = AuthService.getProfile();

    //take the data from the query and then render based on userType
    // const { loading, data } = useQuery(QUERY_ME)
    // if (loading) {
    //     return <div>Loading...</div>;
    // }
    // const user = data?.me?.userType;


    return <>
      <div className="header">
          <h1>Rx SureScribe</h1>
          <p style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '15pt' }}>
        Bridging the gap between Physicians and Pharmacists. <br />Empower collaboration and enhance patient care.
      </p>
        </div>
<hr />
        <div className="home-container">
          <ul className="container">
          <h3>Key Features:</h3>
            <li style={{ marginLeft: '30px' }}><b>Centralized Patient Information:</b> Access comprehensive patient profiles, including medical history, current medications, and treatment plans.</li>
            <li style={{ marginLeft: '30px' }}><b>Medication Management:</b> Simplify the prescription process and enhance medication adherence.</li>
            <li style={{ marginLeft: '30px' }}><b>Secure and Compliant:</b> We prioritize the security and privacy of patient information.</li>
            <li style={{ marginLeft: '30px' }}><b>User-Friendly Interface:</b> Our intuitive and user-friendly interface makes navigating the platform a breeze.</li>
          </ul>
        </div>

        <div className="home-container">
          <div className="container">
            <h3>Addressing Healthcare Challenges:</h3>
            <p><b>Lack of Transparency:</b> Rx SureScribe addresses the challenge of transparency by providing all members of the patient care team full access to relevant clinical information at the point of care. Physicians and Pharmacists can now collaborate seamlessly with access to complete patient medication lists and medical histories.</p>
            <p><b>Team-Based Care Approach:</b> We advocate for a team-based care approach to overcome communication difficulties and time constraints. Rx SureScribe empowers pharmacists to work directly with patients, addressing critical areas in medication management through a patient-focused approach.</p>
          </div>
        </div>

        <div className="signup-section">
          <div className="container">
            <h3>Sign Up for Rx SureScribe Today!</h3>
            <p>Unlock a new era of collaboration between Physicians and Pharmacists. Sign up now to experience the future of healthcare communication.</p>
            <Register />
          </div>
        </div>


        {/* <Outlet></Outlet> */}


        {/* <Footer></Footer> */}
    </>
}

export default Home