import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { Avatar, Button, Divider, Modal, Text, Tooltip } from '@mantine/core';
import { Link, useParams } from "react-router";
import { useDisclosure } from "@mantine/hooks";
import '@mantine/dates/styles.css';
import { DateInput, TimeInput } from '@mantine/dates';
import { useEffect, useRef, useState } from "react";
import { getProfile } from "../../services/ProfileService";
import { changeAppStatus } from "../../services/JobService";
import { errorNotification, successNotification } from "../../services/NotificationService";
import { formatInterviewTime, openBase64PDF } from "../../services/Utilities";

const TalentCard = (props: any) => {
    const { id } = useParams();
    const ref = useRef<HTMLInputElement>(null)
    const [opened, { open, close }] = useDisclosure(false);
    const [app, { open: openApp, close: closeApp }] = useDisclosure(false)
    const [date, setDate] = useState<Date | null>(null);
    const [time, setTime] = useState<any>(null)
    const [profile, setProfile] = useState<any>({})

    useEffect(() => {
        if (props.applicantId) getProfile(props.applicantId).then((res) => {
            setProfile(res)
        }).catch((err) => {
            console.log(err)
        })
        else setProfile(props)
    }, [props])

    const handleOffer = (status: string) => {
        let interview: any = { id, applicantId: profile?.id, applicationStatus: status }
        if (status == "INTERVIEWING") {
            const [hours, minutes] = time.split(":").map(Number);
            date?.setHours(hours, minutes)
            interview = { ...interview, interviewTime: date }

        }
        changeAppStatus(interview).then((res) => {
            if (status == "INTERVIEWING")
                successNotification("Interview Scheduled", "Interview scheduled successfully 👍")
            else if (status == "OFFERED")
                successNotification("Offered", "offer sent successfully 👏")
            else successNotification("Rejected", "Application Rejected 🙏")
            window.location.reload();
        }).catch((err) => {
            console.log(err)
            errorNotification("Error", err.response.data.errorMessage)
        })
    }
    // console.log(props)
    return (

        <>
            <div className="w-89 border p-2 border-blue-200 rounded-lg hover:border-blue-500 hover:shadow-xl">
                <div className="flex bg-blue-300 text-black justify-between">
                    <div className="flex gap-2 items-center capitalize ">
                        <div className="p-1">
                            <Avatar size='lg' src={profile?.picture ? `data:image/jpeg;base64,${profile?.picture}` : null} alt="microsoft" />
                        </div>
                        <div>
                            <div className="text-lg font-semibold">{props.name}</div>
                            <div>{profile?.jobTitle} &middot; {profile?.company}</div>
                        </div>
                    </div>
                    <IconHeart className="cursor-pointer" />
                </div>
                <div className="flex capitalize pt-1 text-xs gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:rounded-lg [&>div]:text-black [&>div]:bg-[#e1f8ff]">
                    {
                        profile?.skills?.map((skill: any, index: any) => index < 4 && <div key={index}>
                            {skill}
                        </div>)
                    }


                </div>
                <Text className='text-sm text-justify' lineClamp={3}>
                    {profile.about}
                </Text>
                <Divider my="md" />
                <div className="flex justify-between text-sm font-semibold items-center">
                    {
                        props.invited ? <div className="flex gap-1 text-sm items-center">
                            <IconCalendarMonth /> Interview: {formatInterviewTime(props.interviewTime)}
                        </div> : <><div>Exp: {props.totalExp?props.totalExp:1} {props.totalExp>1?"Years":"Year"}  </div>
                            <div className="flex text-gray-400 items-center"><IconMapPin className="h-10" />  {profile.location}</div></>
                    }

                </div>
                <Divider my="md" />
                <div className="flex [&>*]:w-1/2 [&>*]:p-1">
                    {
                        !props.invited ? <>
                            <Link to={`/talent-profile/${profile?.id}` }>
                                <Button variant="outline" fullWidth>Profile</Button>
                            </Link>
                            <div>
                                {props.posted ? <Tooltip label="Schedule Interview"><Button onClick={open} className="[&_span]:!text-xs" rightSection={<IconCalendarMonth size={20} />} variant="light" fullWidth>Schedule Interview</Button></Tooltip> : <Button variant="light" fullWidth>Message</Button>}

                            </div>
                        </> : <>

                            <Link to=''>
                                <Button onClick={() => handleOffer("OFFERED")} variant="outline" fullWidth>Accept</Button>
                            </Link>
                            <div>
                                <Button onClick={() => handleOffer("REJECTED")} variant="light" fullWidth>Reject</Button>

                            </div>

                        </>
                    }

                </div>
                {
                    (props.invited || props.posted) && <Button onClick={openApp} variant="filled" fullWidth>View Application</Button>
                }
                <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
                    <div className="flex flex-col gap-4">
                        <DateInput
                            value={date}
                            minDate={new Date()}
                            onChange={setDate}
                            label="Date"
                            placeholder="Enter Date"
                        />
                        <TimeInput label="Time" value={time} onChange={(event) => setTime(event.currentTarget.value)} ref={ref} onClick={() => ref.current?.showPicker()} />
                        <Button onClick={() => handleOffer("INTERVIEWING")} variant="light" fullWidth>Schedule</Button>
                    </div>
                </Modal>

                <Modal opened={app} onClose={closeApp} title="Application" centered>
                    <div className="flex flex-col gap-4">
                        <div>
                            Email: &emsp; <a className="hover:underline cursor-pointer text-center" href={`mailto:${props.email}`}>{props.email} </a>
                        </div>
                        <div>
                            Website: &emsp; <a target="_blank" className="hover:underline cursor-pointer text-center" href={props.website}>{props.website} </a>
                        </div>
                        <div>
                            Resume: &emsp; <span className="hover:underline cursor-pointer text-center" onClick={() => openBase64PDF(props.resume)}>{props.name} </span>
                        </div>
                        <div>
                            Cover Letter: &emsp; <div >{props.coverLetter} </div>
                        </div>

                    </div>
                </Modal>
            </div>




        </>
    )
}

export default TalentCard;