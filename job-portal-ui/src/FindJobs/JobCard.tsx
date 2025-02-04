import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";
import { Divider, Text } from '@mantine/core';

const JobCard = (props:any) => {
    return (

        <>
            <div className="w-89 border p-2 border-blue-200 rounded-lg hover:border-blue-500 hover:shadow-xl">
                <div className="flex bg-[#cbedff] justify-between">
                    <div className="flex gap-2 items-center capitalize ">
                        <div className="p-1">
                            <img className="h-7" src={`/Icons/${props.company}.png`} alt="microsoft" />
                        </div>
                        <div>
                            <div className="text-lg">{props.jobTitle}</div>
                            <div>{props.company} &middot; {props.applicants} applicants</div>
                        </div>
                    </div>
                    <IconBookmark className="cursor-pointer" />
                </div>
                <div className="flex capitalize pt-1 text-xs gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:rounded-lg  [&>div]:bg-[#e1f8ff]">
                    <div>{props.experience}</div>
                    <div>{props.jobType}</div>
                    <div>{props.location}</div>
                </div>
                <Text className='text-sm text-justify' lineClamp={3}>
                    {props.description}
                </Text>
                <Divider my="md" />
                <div className="flex justify-between text-sm">
                    <div> &#8377; {props.package}</div>
                    <div className="flex text-gray-400"><IconClockHour3 className="text-sm" /> {props.postedDaysAgo} days ago</div>
                </div>

            </div>




        </>
    )
}

export default JobCard;