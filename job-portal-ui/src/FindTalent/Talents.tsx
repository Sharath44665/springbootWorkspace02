import Sort from "../FindJobs/Sort";
import { talents } from "../Data/TalentData";
import TalentCard from "./TalentCard";

const Talents = () => {
    return (
        <>
            <div className="px-3 ">
                <div className="flex justify-between  pt-4">
                    <div className="capitalize text-2xl font-semibold">talents</div>
                    <div className="capitalize"><Sort /></div>
                </div>

                <div className="flex flex-wrap justify-evenly pt-4 gap-4">
                    {
                        talents.map((talent, idx) => {
                            return (<>
                                <TalentCard key={idx} {...talent} />
                            </>)
                        })
                    }


                </div>



            </div>

        </>
    )
}

export default Talents;