import { Button } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { Link, useParams } from "react-router";
import JobDesc from "../Components/JobDesc/JobDesc";
import RecommendedJobs from "../Components/JobDesc/RecommendedJobs";
import { useEffect, useState } from "react";
import { getJob } from "../services/JobService";

const JobDescPage = () => {
    const {id}= useParams();
    const [job, setJob] = useState<any>(null)
    // console.log(`type: ${id}`)
    useEffect(()=>{
        window.scrollTo(0, 0);
        getJob(id).then((res) => {
            setJob(res)
            
        }).catch((err)=>{
            console.log(err)
        })
    },[id])
    return (
        <>
            <div className="px-5 pt-5">

                <Link to='/findjob'>
                    <Button leftSection={<IconArrowNarrowLeft />} variant="light" >back to all jobs</Button>
                </Link>
            </div>

            <div className="flex px-5 pt-5">
               
                <JobDesc {...job} />
                <RecommendedJobs />
            </div>
        </>
    )
}

export default JobDescPage;