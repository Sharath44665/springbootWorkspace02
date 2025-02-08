import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { Avatar, Button, Divider, Modal, Text, Tooltip } from '@mantine/core';
import { Link } from "react-router";
import { useDisclosure } from "@mantine/hooks";
import '@mantine/dates/styles.css';
import { DateInput, TimeInput } from '@mantine/dates';
import { useRef, useState } from "react";


const TalentCard = (props: any) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [value, setValue] = useState<Date | null>(null);
    const ref = useRef<HTMLInputElement>(null)
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
                    {
                        props.invited ? <div className="flex gap-1 text-sm items-center">
                            <IconCalendarMonth /> Interview: 9 march 2025 on Time: 3:00 PM
                        </div> : <><div>{props.expectedCtc}</div>
                            <div className="flex text-gray-400 items-center"><IconMapPin className="h-10" />  {props.location}</div></>
                    }

                </div>
                <Divider my="md" />
                <div className="flex [&>*]:w-1/2 [&>*]:p-1">
                    {
                        !props.invited ? <>
                            <Link to='/talent-profile'>
                                <Button variant="outline" fullWidth>Profile</Button>
                            </Link>
                            <div>
                                {props.posted ? <Tooltip label="Schedule Interview"><Button onClick={open} className="[&_span]:!text-xs" rightSection={<IconCalendarMonth size={20} />} variant="light" fullWidth>Schedule Interview</Button></Tooltip> : <Button variant="light" fullWidth>Message</Button>}

                            </div>
                        </> : <>

                            <Link to=''>
                                <Button variant="outline" fullWidth>Accept</Button>
                            </Link>
                            <div>
                                <Button variant="light" fullWidth>Reject</Button>

                            </div>

                        </>
                    }

                </div>
                <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
                    <div className="flex flex-col gap-4">
                        <DateInput
                            value={value}
                            minDate={new Date()}
                            onChange={setValue}
                            label="Date"
                            placeholder="Enter Date"
                        />
                        <TimeInput label="Time" ref={ref} onClick={() => ref.current?.showPicker()} />
                        <Button variant="light" fullWidth>Schedule</Button>
                    </div>
                </Modal>
            </div>




        </>
    )
}

export default TalentCard;