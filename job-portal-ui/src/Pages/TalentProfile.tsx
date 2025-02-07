import { Button } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { Link } from "react-router";
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendTalent from "../TalentProfile/RecommendTalent";

const TalentProfile = () => {
    return (
        <>
            <div className="px-5 pt-5">

                <Link to='/findtalent'>
                    <Button leftSection={<IconArrowNarrowLeft />} variant="light" >back to find talent</Button>
                </Link>
            </div>

            <div className="flex px-5 pt-5">
                <Profile {...profile} />
                <RecommendTalent />
            </div>
        </>
    )
}

export default TalentProfile;