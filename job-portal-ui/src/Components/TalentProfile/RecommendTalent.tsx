import { talents } from "../../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const RecommendTalent = () => {
    return (
        <>
        <div className="w-1/3">
            <div className="flex flex-col flex-wrap items-center gap-8">
                <div className="text-xl font-semibold text-center">Recommended Taletns</div>

                {talents.map((talent: any, idx: any) => idx < 4 && <TalentCard key={idx} {...talent} />)}

            </div>
        </div>
        </>
    )
}

export default RecommendTalent;