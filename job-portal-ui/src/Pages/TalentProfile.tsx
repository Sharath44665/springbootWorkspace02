import { Button } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router";
import Profile from "../Components/TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendTalent from "../Components/TalentProfile/RecommendTalent";
import { useEffect, useState } from "react";
import { getAllProfiles } from "../services/ProfileService";

const TalentProfile = () => {
    const navigate = useNavigate()
    const [talents, setTalents] = useState<any>([])
    useEffect(() => {
        getAllProfiles().then((res) => {
            setTalents(res)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <>
            <div className="px-5 pt-5"> 

                <Link to='/findtalent'>
                    <Button onClick={()=> navigate(-1)} leftSection={<IconArrowNarrowLeft />} variant="light" >back</Button>
                </Link>
            </div>

            <div className="flex px-5 pt-5">
                <Profile {...profile} />
                <RecommendTalent talents={talents} />
            </div>
        </>
    )
}

export default TalentProfile;