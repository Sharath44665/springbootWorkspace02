import PostedJobDesc from "../PostedJobs/PostedJobDesc";
import PostedJobs from "../PostedJobs/PostedJobs";


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