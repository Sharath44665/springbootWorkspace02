import { useEffect, useState } from "react"; 
import JobCard from "./JobCard";
import Sort from "./Sort";
import { getAllJobs } from "../../services/JobService";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../../Slices/FilterSlice";
import { resetSort } from "../../Slices/SortSlice";

const Jobs = () => {
    const dispatch = useDispatch()
    const [jobList, setJobList] = useState([{}]);
    const filter = useSelector((state: any) => state.filter)
    const sort = useSelector((state:any)=> state.sort)      
    const [filteredJobs, setFilteredJobs] = useState<any>([])

    useEffect(()=> {
        dispatch(resetFilter())
        dispatch(resetSort())
        getAllJobs().then((res)=> {
            setJobList(res.filter((job:any) => job.jobStatus == "ACTIVE"))
            // console.log(res[0])
        }).catch((err) => {
            console.log(err)
        })
    },[])

    useEffect(()=>{
        if(sort == "most recent"){
            setJobList([...jobList].sort((a:any, b:any)=> new Date(b.postTime).getTime() - new Date(a.postTime).getTime()))
        }
        else if(sort == "salary (low-high)"){
            setJobList([...jobList].sort((a:any, b:any)=> a.packageOffered - b.packageOffered ))
        }
        else if(sort == "salary (high-low)"){
            setJobList([...jobList].sort((a:any, b:any)=> b.packageOffered - a.packageOffered ))
        }
    },[sort])

    useEffect(() => {
            
            let filtered = jobList;
     
            if (filter["Job Title"] && filter["Job Title"].length > 0) {    
                filtered = filtered.filter((job: any) => filter["Job Title"]?.some((x: any) => job.jobTitle.toLowerCase().includes(x.toLowerCase()))) 
            }
            if (filter.Location && filter.Location.length >0){
                filtered = filtered.filter((job: any) => filter.Location?.some((x: any) => job.location.toLowerCase().includes(x.toLowerCase())))       
            }
            if(filter.Experience && filter.Experience.length > 0 ){
                filtered = filtered.filter((job:any)=>filter.Experience?.some((x:any)=>job.experience?.toLowerCase().includes(x.toLowerCase())));        
            }
            if (filter["Job Type"] && filter["Job Type"].length > 0) {    
                filtered = filtered.filter((job: any) => filter["Job Type"]?.some((x: any) => job.jobType.toLowerCase().includes(x.toLowerCase()))) 
            }
            if(filter.salary && filter.salary.length > 0){
                filtered = filtered.filter((jobs:any)=> filter.salary[0] <= jobs.packageOffered && jobs.packageOffered <= filter.salary[1]);
            }           
            // console.log(filter)
            setFilteredJobs(filtered); 
        }, [filter, jobList])
    return (
        <>
            <div className="px-3">
                <div className="flex justify-between  pt-4">
                    <div className="capitalize text-2xl font-semibold">recommended jobs</div>
                    <div className="capitalize"><Sort sort="job" /></div>
                </div>
                
                    <div className="flex flex-wrap justify-evenly pt-3 gap-4">
                        {
                            filteredJobs.map((job:any, idx:any) => <JobCard key={idx} {...job} />)
                        }
                    </div>
                

            </div>

        </>
    )
}

export default Jobs;