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
          <h1>Rx SureScript</h1>
          <p style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '15pt' }}>
        Bridging the gap between Physicians and Pharmacists. <br />Empower collaboration and enhance patient care.
      </p>

        </div>

        <div className="key-features">
          <ul className="container">
          <h3>Key Features:</h3>
            <li>Centralized Patient Information: Access comprehensive patient profiles, including medical history, current medications, and treatment plans.</li>
            <li>Medication Management: Simplify the prescription process and enhance medication adherence.</li>
            <li>Secure and Compliant: We prioritize the security and privacy of patient information.</li>
            <li>User-Friendly Interface: Our intuitive and user-friendly interface makes navigating the platform a breeze.</li>
          </ul>
        </div>

        <div className="challenge-section">
          <div className="container">
            <h3>Addressing Healthcare Challenges:</h3>
            <p>Lack of Transparency: Rx SureScript addresses the challenge of transparency by providing all members of the patient care team full access to relevant clinical information at the point of care. Physicians and Pharmacists can now collaborate seamlessly with access to complete patient medication lists and medical histories.</p>
            <p>Team-Based Care Approach: We advocate for a team-based care approach to overcome communication difficulties and time constraints. Rx SureScript empowers pharmacists to work directly with patients, addressing critical areas in medication management through a patient-focused approach.</p>
          </div>
        </div>

        <div className="signup-section">
          <div className="container">
            <h3>Sign Up for Rx SureScript Today!</h3>
            <p>Unlock a new era of collaboration between Physicians and Pharmacists. Sign up now to experience the future of healthcare communication.</p>
            <Register />
          </div>
        </div>


        {/* <Outlet></Outlet> */}


        {/* <Footer></Footer> */}
    </>
}

export default Home