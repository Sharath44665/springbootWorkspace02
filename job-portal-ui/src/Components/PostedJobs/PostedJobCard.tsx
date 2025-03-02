import { Link, useParams } from "react-router";
import { timeAgo } from "../../services/Utilities";

const PostedJobCard = (props:any) => {
    const id = useParams();

    return (
        <>
        <Link to={`/posted-jobs/${props.id}`} className={`bg-[#e6ebf5] text-black rounded-xl p-2 border-l-2 border-l-blue-500 ${props.id==id} `}>
            <div className="text-lg font-semibold" >{props.jobTitle} </div>
            <div className="font-medium" >{props.location} </div>
            <div className="text-sm" >{timeAgo(props.postTime)} </div>
        </Link>
        </>
    )
}

export default PostedJobCard;