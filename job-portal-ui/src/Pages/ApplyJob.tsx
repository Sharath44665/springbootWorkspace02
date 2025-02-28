import { Button } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router";
import ApplyJobCompany from "../Components/ApplyJob/ApplyJobCompany";
import { useEffect, useState } from "react";
import { getJob } from "../services/JobService";

const ApplyJob = () => {
    const navigate = useNavigate();
    const {id}= useParams();
    const [job, setJob] = useState<any>(null)

    useEffect(() => {
        window.scrollTo(0,0)
        getJob(id).then((res) =>{
            setJob(res)
        } ).catch((err) => {
            console.log(err)
        })
    }, [id])
    return (
        <>
            <div className="px-5 pt-5"> 
                <Button onClick={()=> navigate(-1)} leftSection={<IconArrowNarrowLeft />} variant="light" >go back to job</Button>

            </div>
            <ApplyJobCompany {...job} />

        </>
    )
}

export default ApplyJob;