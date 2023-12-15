import PharmDash from "../../components/pharmacistDashboard/PharmacistDashboard";
import PhysDash from "../../components/phycisianDashboard/PhysicianDashboard";
import Auth from '../../utils/auth'
import { useQuery } from "@apollo/client";
import { QUERY_PATIENTS } from "../../utils/queries";


function Dashboard() {
    const profileData = Auth.getProfile();
    console.log(profileData);
    const userType = profileData.data.userType;

    const { loading, data } = useQuery(QUERY_PATIENTS);
    const patients = data?.patients || [];

    if (!loading) {
        console.log(data)
    }
    function renderDash() {
        if (userType === 'Physician') {

            return <PhysDash patients={patients} />
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