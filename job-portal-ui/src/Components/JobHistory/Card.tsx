import { IconBookmark, IconBookmarkFilled, IconCalendarMonth, IconClockHour3 } from "@tabler/icons-react";
import { Button, Divider, Text } from '@mantine/core';
import { Link } from "react-router";
import { timeAgo } from "../../services/Utilities";
import { changeProfile } from "../../Slices/ProfileSlice";
import { useDispatch, useSelector } from "react-redux";

const Card = (props: any) => {
    const dispatch = useDispatch()
    const profile = useSelector((state:any)=> state.profile)
    const handleSaveJob =() =>{
            let savedJobs:any = [...profile.savedJobs];
            if (savedJobs?.includes(props.id)){
                savedJobs = savedJobs?.filter((id:any)=> id !== props.id)
            }
            else{
                savedJobs = [...savedJobs, props.id]
            }
    
            let updatedProfile = {...profile, savedJobs:savedJobs}
            dispatch(changeProfile(updatedProfile))
        }
    return (

        <>
            <div  className="w-89 border p-2 border-blue-200 rounded-lg hover:border-blue-500 hover:shadow-xl">
                <div className="flex bg-[#cbedff] text-black justify-between">
                    <div className="flex gap-2 items-center capitalize ">
                        <div className="p-1">
                            <img className="h-7" src={`/Icons/${props.company}.png`} alt="microsoft" />
                        </div>
                        <div>
                            <div className="text-lg">{props.jobTitle}</div>
                            <div>{props.company} &middot; {props.applicants?props.applicants.length : 0} applicants</div>
                        </div>
                    </div>
                    {
                        profile.savedJobs?.includes(props.id)?<IconBookmarkFilled onClick={handleSaveJob} className="cursor-pointer" />: <IconBookmark onClick={handleSaveJob} className="cursor-pointer" />
                    }

                </div>
                <div className="flex capitalize pt-1 text-xs gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:rounded-lg [&>div]:text-black  [&>div]:bg-[#e1f8ff]">
                    <div>{props.experience}</div>
                    <div>{props.jobType}</div>
                    <div>{props.location}</div>
                </div>
                <Text className='text-sm text-justify' lineClamp={3}>
                    {props.about}
                </Text>
                <Divider my="md" />
                <div className="flex justify-between text-sm">
                    <div> &#8377; {props.packageOffered} LPA</div>
                    <div className="flex text-gray-400"><IconClockHour3 className="text-sm" /> {props.applied ? "Applied" : props.offered ? " Interviewed" : ""} {timeAgo(props.postTime)} </div>
                </div>
                {
                    props.offered && <div className="flex gap-2">

                        <Button variant="outline" fullWidth>Accept</Button>
                        <Button variant="light" fullWidth>Reject</Button>
                    </div>
                }
                {
                    props.interviewing && <div className="flex gap-1 text-sm">
                        <IconCalendarMonth /> Sun, 22 March &bull; <span className="font-semibold">3:00 PM</span>
                    </div>
                }
                <Link to={`/jobs/${props.id}`} >
                    <Button fullWidth variant="light" >View job</Button>
                </Link>
            </div>




        </>
    )
}

export default Card;