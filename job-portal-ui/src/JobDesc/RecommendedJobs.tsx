import { jobList } from "../Data/JobsData";
import JobCard from "../FindJobs/JobCard";

const RecommendedJobs = () => {
    return (
        <>
            <div className="w-1/3">
                <div className="flex flex-col flex-wrap items-center gap-8">
                    <div className="text-xl font-semibold text-center">Recommended Jobs</div>

                    {jobList.map((job: any, idx: any) => idx < 6 && <JobCard key={idx} {...job} />)}

                </div>
            </div>
        </>
    )
}

export default RecommendedJobs;