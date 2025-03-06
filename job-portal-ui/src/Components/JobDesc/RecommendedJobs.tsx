import { useParams } from "react-router";
import JobCard from "../FindJobs/JobCard";
import { useEffect, useState } from "react";
import { getAllJobs } from "../../services/JobService";

const RecommendedJobs = () => {
    const { id } = useParams();
    const [jobList, setJobList] = useState<any>(null);
    useEffect(() => {
        getAllJobs().then((res) => {
            setJobList(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <>
            <div className="w-1/3">
                <div className="flex flex-col flex-wrap items-center gap-8">
                    <div className="text-xl font-semibold text-center">Recommended Jobs</div>

                    {
                        jobList?.map((job: any, idx: any) => (idx < 6 && (id != job.id)) && <JobCard key={idx} {...job} />)
                    }

                </div>
            </div>
        </>
    )
}

export default RecommendedJobs;