const PostedJobCard = (props:any) => {
    return (
        <>
        <div className="bg-[#e6ebf5] rounded-xl p-2 border-l-2 border-l-blue-500 ">
            <div className="text-lg font-semibold" >{props.jobTitle} </div>
            <div className="font-medium" >{props.location} </div>
            <div className="text-sm" >{props.posted} </div>
        </div>
        </>
    )
}

export default PostedJobCard;