import { timeAgo } from "../../services/Utilities";
import ApplicationForm from "./ApplicationForm";

const ApplyJobCompany = (props: any) => {  
    return (
        <>
            <div className="px-5 pt-5"> 
                <div className='w-2/3 mx-auto'>

                    <div className="flex bg-[#cbedff] text-black justify-between">

                        <div className="flex gap-2 items-center capitalize ">
                            <div className="p-3">

                                <img className="h-14" src={`/Icons/${props.company}.png`} alt="microsoft" />

                            </div>
                            <div>

                                <div className="text-2xl">{props.jobTitle}</div>
                                <div className="text-lg">{props.company} &middot; {timeAgo(props.postTime)}  &middot; {props.applicants?props.applicants.length:0} Applicants</div>

                            </div>
                        </div>

                    </div>

                    <ApplicationForm />
                </div>
            </div>

        </>
    )
}

export default ApplyJobCompany;