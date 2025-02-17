import PostedJobDesc from "../Components/PostedJobs/PostedJobDesc";
import PostedJobs from "../Components/PostedJobs/PostedJobs";


const PostedJobsPage = () => {
    return (
        <>
            <div className="px-5 pt-5 flex">
                <PostedJobs/>
                <PostedJobDesc />
            </div>

            
        </>
    )
}

export default PostedJobsPage;