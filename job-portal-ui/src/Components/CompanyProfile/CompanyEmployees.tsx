import { talents } from "../../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const CompanyEmployees = () => {
    return (
        <>
            <div className="flex flex-wrap justify-evenly pt-4 gap-4">
                {
                    
                    talents.map((talent, idx) =>

                        idx < 6 && <TalentCard key={idx} {...talent} />

                    )
                }
            </div>
        </>
    )
}

export default CompanyEmployees;