import Marquee from "react-fast-marquee";
import { companies } from "../../Data/Data";

const Companies = () => {
    return (
        <>
            <div className="mt-15">
                <div className="capitalize text-4xl font-semibold  text-center">trusted by <span className="text-blue-700">1000+ </span>Companies</div>

                
            </div>
            <Marquee pauseOnHover={true}>
                <div className="bg-gray-300 flex">
                {
                companies.map((company, idx) => {
                    return (
                       
                        <div key={idx} className="hover:bg-black mx-8 px-2">
                            <img className="h-14" src={`/Companies/${company}.png`} alt={`${company}`} />
                        </div>
                      
                    )
                })
            }
                </div>
            </Marquee>
        </>
    )
}

export default Companies;