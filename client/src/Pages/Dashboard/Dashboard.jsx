import PharmDash from "../../components/pharmacistDashboard/PharmacistDashboard";
import PhysDash from "../../components/phycisianDashboard/PhysicianDashboard";
import Auth from '../../utils/auth'
import Login from "../Login/Login";



function Dashboard() {
    const profileData = Auth.getProfile();
    console.log(profileData);
    const userType = profileData.userType;
    function renderDash() {
        if (userType === 'Physician') {

            return <PhysDash />
        } else
            return <PharmDash />
    }
    return (
        <>
            {renderDash(userType)}
        </>
    );
}

export default Dashboard;