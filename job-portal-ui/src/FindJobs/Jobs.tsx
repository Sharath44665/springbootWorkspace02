import { Container } from "@mantine/core";
import { jobList } from "../Data/JobsData";
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
                <Container  size="max-width" >
                    <div className="flex flex-wrap gap-2 @container">
                        {
                            jobList.map((job, idx) => <JobCard key={idx} {...job} />)
                        }
                    </div>
                </Container>



            </div>


        </>
    )
}

export default Jobs;