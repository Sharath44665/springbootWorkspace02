import { formatDate } from "../../services/Utilities";

const ExpCard = (props:any) => {
    return (
        <>
       
        <div className="flex flex-col gap-2 mb-4">

            <div className="flex bg-[#e8f3fc] text-black p-2 justify-between">
                <div className="flex gap-2 items-center capitalize ">
                    <div className="p-1">
                        <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
                    </div>
                    <div>
                        <div className="text-lg">{props.title}</div>
                        <div>{props.company} &middot; {props.company}</div>
                    </div>
                </div>
                <div>
                    {formatDate(props.startDate)} - {props.working?'Present':formatDate(props.endDate)}
                </div>
            </div>
            <div className="text-justify">
                {props.description}
            </div>
        </div>
        </>
    )
}

export default ExpCard;