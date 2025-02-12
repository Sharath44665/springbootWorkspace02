import { profile } from "../Data/TalentData";
import Profile from "../Profile/Profile";

const ProfilePage = () => {
    return (
        <>
        <div>
            <Profile {...profile}/>
        </div>
        </>
    )
}

export default ProfilePage;