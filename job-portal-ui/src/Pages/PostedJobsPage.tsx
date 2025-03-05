import { useNavigate, useParams } from "react-router";
import PostedJobDesc from "../Components/PostedJobs/PostedJobDesc";
import PostedJobs from "../Components/PostedJobs/PostedJobs";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getJobPostedBy } from "../services/JobService";


const PostedJobsPage = () => {
    const navigate = useNavigate()
    const {id} = useParams();
    const user = useSelector((state: any) => state.user)
    const [jobList, setJobList] = useState<any[]>([])
    const [job, setJob] = useState<any>({})

    useEffect(()=> {
        window.scrollTo(0,0)
        getJobPostedBy(user.id).then((res)=>{
            setJobList(res)
            // console.log(res)   
            if (res && res.length > 0 && Number(id) == 0) navigate(`/posted-jobs/${res[0].id}`)             
            setJob(res.find((item:any)=> item.id==id))
           
        }).catch((err) => {
            console.log(err)
        })
    },[id])
    return (
        <>
            <div className="px-5 pt-5 flex">
                <PostedJobs job={job} jobList={jobList} />
                <PostedJobDesc {...job} />
            </div>

            
        </>
    )
}

export default PostedJobsPage;