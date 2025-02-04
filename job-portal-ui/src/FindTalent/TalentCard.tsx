import { IconHeart, IconMapPin } from "@tabler/icons-react";
import { Avatar, Button, Divider, Text } from '@mantine/core';
import { Link } from "react-router";

const TalentCard = (props: any) => {
    return (

        <>
            <div className="w-89 border p-2 border-blue-200 rounded-lg hover:border-blue-500 hover:shadow-xl">
                <div className="flex bg-[#cbedff] justify-between">
                    <div className="flex gap-2 items-center capitalize ">
                        <div className="p-1">
                            <Avatar size='lg' src={`/${props.image}.png`} alt="microsoft" />
                        </div>
                        <div>
                            <div className="text-lg font-semibold">{props.name}</div>
                            <div>{props.role} &middot; {props.company}</div>
                        </div>
                    </div>
                    <IconHeart className="cursor-pointer" />
                </div>
                <div className="flex capitalize pt-1 text-xs gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:rounded-lg  [&>div]:bg-[#e1f8ff]">
                    {
                        props.topSkills?.map((skill: any, index: any) => <div key={index}>
                            {skill}
                        </div>)
                    }

                    
                </div>
                <Text className='text-sm text-justify' lineClamp={3}>
                    {props.about}
                </Text>
                <Divider my="md" />
                <div className="flex justify-between text-sm font-semibold items-center">
                    <div>{props.expectedCtc}</div>
                    <div className="flex text-gray-400 items-center"><IconMapPin className="h-10" />  {props.location}</div>
                </div>
                <Divider my="md" />
                <div className="flex [&>*]:w-1/2 [&>*]:p-1">
                    <Link to='/talent-profile'>
                        <Button variant="outline" fullWidth>Profile</Button>
                    </Link>
                    <div>

                        <Button variant="light" fullWidth>Message</Button>
                    </div>
                </div>
            </div>




        </>
    )
}

export default TalentCard;