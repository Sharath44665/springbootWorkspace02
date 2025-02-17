import { jobList } from "../../Data/JobsData";
import JobCard from "../FindJobs/JobCard";

const CompanyJobs = () => {
    return (
        <>
            <div className="flex flex-wrap justify-evenly pt-3 gap-4">
                {
                    jobList.map((job, idx) => <JobCard key={idx} {...job} />)
                }
            </div>
        </>
    )
}

export default CompanyJobs;