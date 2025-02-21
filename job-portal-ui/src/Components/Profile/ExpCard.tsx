import { Button } from "@mantine/core";
import { useState } from "react";
import ExpInput from "./ExpInput";
import { formatDate } from "../../services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../services/NotificationService";

const ExpCard = (props: any) => {
    const dispatch = useDispatch();
    const [edit, setEdit]= useState(false)
    const profile = useSelector((state: any) => state.profile)
    const handleDelete = () => {
        let exp = [...profile.experiences];
        exp.splice(props.idx, 1);
        let updatedProfile = {...profile, experiences:exp} 
        dispatch(changeProfile(updatedProfile))
        successNotification('Success', 'Experience deleted succesfully')
    }
    return  (
        <>
        {
            !edit ?<div className="flex flex-col gap-2 mb-4">

            <div className="flex bg-[#e0dee0] text-black p-2 justify-between">
                <div className="flex gap-2 items-center capitalize ">
                    <div className="p-1">
                        <img className="h-7" src={`/Icons/${props.company}.png`} alt="microsoft" />
                    </div>
                    <div>
                        <div className="text-lg">{props.title}</div>
                        <div>{props.company} &middot; {props.location}</div>
                    </div>
                </div>
                <div>
                    {formatDate(props.startDate)} - {props.working?'Present':formatDate(props.endDate)}
                </div>
            </div>
            <div className="text-justify">
                {props.description}
            </div>
            {
                props.edit && <div className="flex gap-5">
                    <Button onClick={()=> setEdit(true)} color="green" variant="light" >Edit</Button>
                    <Button onClick={handleDelete} color="red" variant="light" >Delete</Button>
                </div>
            }

        </div>: <ExpInput {...props} setEdit={setEdit} />
        }

            
        </>
    )
}

export default ExpCard;