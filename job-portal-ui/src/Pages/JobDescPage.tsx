import { Button } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { Link } from "react-router";
import JobDesc from "../JobDesc/JobDesc";
import RecommendedJobs from "../JobDesc/RecommendedJobs";

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
                <RecommendedJobs />
            </div>
        </>
    )
}

export default JobDescPage;