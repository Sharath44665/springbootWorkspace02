import { jobList } from "../../Data/JobsData";
import JobCard from "./JobCard";
import Sort from "./Sort";

const Jobs = () => {
    return (
        <>
            <div className="px-3">
                <div className="flex justify-between  pt-4">
                    <div className="capitalize text-2xl font-semibold">recommended jobs</div>
                    <div className="capitalize"><Sort /></div>
                </div>
                
                    <div className="flex flex-wrap justify-evenly pt-3 gap-4">
                        {
                            jobList.map((job, idx) => <JobCard key={idx} {...job} />)
                        }
                    </div>
                

            </div>

        </>
    )
}

export default Jobs;