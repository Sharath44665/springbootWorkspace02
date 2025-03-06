import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled } from "@tabler/icons-react";
import { Link } from "react-router";
import { card } from "../../Data/JobDescData";
//@ts-ignore
import DOMPurify from 'dompurify';
import { timeAgo } from "../../services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { useEffect, useState } from "react";
import { postJob } from "../../services/JobService";
import { errorNotification, successNotification } from "../../services/NotificationService";

const JobDesc = (props: any) => {
    const dispatch = useDispatch();
    const [applied, setApplied] = useState(false)
    const profile = useSelector((state: any) => state.profile)
    const user = useSelector((state:any) => state.user)

    const handleSaveJob = () => {
        let savedJobs: any = [...profile.savedJobs];
        if (savedJobs?.includes(props.id)) {
            savedJobs = savedJobs?.filter((id: any) => id !== props.id)
        }
        else {
            savedJobs = [...savedJobs, props.id]
        }

        let updatedProfile = { ...profile, savedJobs: savedJobs }
        dispatch(changeProfile(updatedProfile))
    }

    useEffect(()=>{
        if(props.applicants?.filter((applicant:any)=> applicant.applicantId == user.id).length > 0){
            setApplied(true)
        }
        else{
            setApplied(false)
        }
    }, [props])

    const handleClose =() => {
        postJob({...props, jobStatus:"CLOSED"}).then((res) => {
            successNotification("Closed", "Job closed Successfully")
        }).catch((err) => {
            errorNotification("Error", err.response.data.errorMessage)
        })
    }

    const data = DOMPurify.sanitize(props.description);



    // console.log(props)
    return (
        <>
            <div className="w-2/3">
                <div className="flex bg-[#cbedff] text-black justify-between p-2 rounded-lg">
                    <div className="flex gap-2 items-center capitalize ">
                        <div className="p-3">

                            <img className="h-14" src={`/Icons/${props.company}.png`} alt={props.company} />

                        </div>
                        <div>

                            <div className="text-2xl">{props.jobTitle}</div>
                            <div className="text-lg">{props.company} &middot; {timeAgo(props.postTime)}  &middot; {props.applicants ? props.applicants.length : 0} applicants</div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        {
                            (props.edit || !applied) && <Link to={props.edit? `/pjob/${props.id}` :`/apply-job/${props.id}`}>
                                <Button variant="filled" size="sm" >{props.closed?'Reopen':props.edit ? 'Edit' : 'Apply'}</Button>
                            </Link>

                        }
                        {
                           !props.edit  && applied && <Button variant="filled" color="green" size="sm" >Applied</Button>
                        }
                        {   
                            props.edit && !props.closed ? <Button onClick={handleClose} variant="outline" color="red">Close</Button> : profile.savedJobs?.includes(props.id) ? <IconBookmarkFilled onClick={handleSaveJob} className="cursor-pointer" /> : <IconBookmark onClick={handleSaveJob} className="cursor-pointer" />
                        }

                    </div>
                </div>

                <div className="flex justify-between pb-3">
                    {
                        card.map((mycard: any, idx: any) => <div key={idx} className="pt-5 flex flex-col items-center gap-1">
                            <ActionIcon className="!h-12 !w-12" variant="filled" radius="xl" aria-label="Settings">
                                <mycard.icon style={{ width: '70%', height: '70%' }} stroke={1.5} />
                            </ActionIcon>
                            <div>{mycard.name}</div>
                            <div>{props ? props[mycard.id] : "NA"} {mycard.id == "packageOffered" && <>LPA</>}</div>
                        </div>)
                    }

                </div>
                <Divider />
                <div>
                    <div className="text-xl font-semibold mb-3">Requirede Skills</div>
                    <div className="flex flex-wrap gap-2 mb-3">
                        {
                            props?.skillsRequired?.map((jobSkill: any, idx: any) => <ActionIcon key={idx} className="!h-fit !w-fit [&_span]:!text-sm" p='xs' size='sm' variant="filled" radius="xl" aria-label="Settings">
                                {jobSkill}
                            </ActionIcon>)
                        }

                    </div>
                </div>
                <Divider />
                <div className="[&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold  [&_p]:text-justify [&_li]:mb-1 " dangerouslySetInnerHTML={{ __html: data }}>

                </div>
                <Divider />
                <div>
                    <div className="text-xl font-semibold mb-3">About Company:</div>
                    <div className="flex bg-[#cbedff] text-black justify-between items-center">
                        <div className="flex gap-2 items-center capitalize ">
                            <div className="p-3">

                                <img className="h-8" src={`/Icons/${props.company}.png`} alt="microsoft" />

                            </div>
                            <div>

                                <div className="text-lg font-medium">{props.company}</div>
                                <div className="">10K+ Employees</div>

                            </div>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <Link to={`/company/${props.company}`}>
                                <Button variant="filled " size="sm" >Company Page</Button>
                            </Link>

                        </div>
                    </div>
                    <div className="text-justify pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae accusantium nobis magnam aut laborum commodi natus vero sequi aliquam voluptas perspiciatis amet est velit corporis, consequuntur dolores dolorum ducimus autem, provident officia, assumenda eos vel voluptatem cum. Magnam, excepturi quae?</div>

                </div>
            </div>

        </>
    )
}

export default JobDesc;