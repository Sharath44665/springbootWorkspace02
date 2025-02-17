import { similar } from "../../Data/Company";
import CompanyCard from "./CompanyCard";

const SimilarCompanies = () => {
    return (
        <>
        <div className="w-1/4">
            <div className="flex flex-col flex-wrap items-center gap-8">
                <div className="text-xl font-semibold text-center justify-between">Similar Companies</div>

                {
                    similar.map((company:any, idx:any)=><CompanyCard key={idx} {...company} />)
                }

            </div>
        </div>
        </>
    )
}

export default SimilarCompanies;