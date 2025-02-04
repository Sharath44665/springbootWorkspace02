import { Button } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { Link } from "react-router";

const TalentProfile = () => {
    return (
        <>
            <div className="px-5 pt-5">

            <Link to='/findtalent'>
                <Button leftSection={<IconArrowNarrowLeft/>} variant="light" >back to find talent</Button>
            </Link>
            </div>
        </>
    )
}

export default TalentProfile;