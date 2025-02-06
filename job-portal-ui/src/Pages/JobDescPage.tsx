import { Button } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { Link } from "react-router";
import JobDesc from "../JobDesc/JobDesc";

const JobDescPage = () => {
    return (
        <>
            <div className="px-5 pt-5">

                <Link to='/findjob'>
                    <Button leftSection={<IconArrowNarrowLeft />} variant="light" >back to all jobs</Button>
                </Link>
            </div>

            <div className="flex px-5 pt-5">
               
                <JobDesc/>
            </div>
        </>
    )
}

export default JobDescPage;