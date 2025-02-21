import { Button } from "@mantine/core";
import { useState } from "react";
import ExpInput from "./ExpInput";
import { formatDate } from "../../services/Utilities";

const ExpCard = (props: any) => {
    const [edit, setEdit]= useState(false)
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
                        <div>{props.company} &middot; {props.company}</div>
                    </div>
                </div>
                <div>
                    {formatDate(props.startDate)} - {formatDate(props.endDate)}
                </div>
            </div>
            <div className="text-justify">
                {props.description}
            </div>
            {
                props.edit && <div className="flex gap-5">
                    <Button onClick={()=> setEdit(true)} variant="outline" >Edit</Button>
                    <Button color="red" variant="light" >Delete</Button>
                </div>
            }

        </div>: <ExpInput setEdit={setEdit} />
        }

            
        </>
    )
}

export default ExpCard;