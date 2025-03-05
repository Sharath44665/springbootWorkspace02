import { useParams } from "react-router";
import TalentCard from "../FindTalent/TalentCard";

const RecommendTalent = (props:any) => {
    const {id} = useParams();

    return (
        <>
        <div className="w-1/3">
            <div className="flex flex-col flex-wrap items-center gap-8">
                <div className="text-xl font-semibold text-center">Recommended Taletns</div>

                {props?.talents?.map((talent: any, idx: any) => idx < 4 && id!= talent.id && <TalentCard key={idx} {...talent} />)}

            </div>
        </div>
        </>
    )
}

export default RecommendTalent;