import Marquee from "react-fast-marquee";
import { companies } from "../Data/Data";

const Companies = () => {

    return (
        <>
        <div className="text-center fs-1">
            Trusted by <span className="text-primary">1000+</span> Companies
        </div>
        <Marquee pauseOnHover={true} >
            {
                companies.map((company, idx) => <div key={idx} style={{backgroundColor:'black',cursor:'pointer'}}>
                    <img style={{height:'100px'}} className="mx-3" src={`/Companies/${company}.png`} alt={company} />
                </div>)
            }
        </Marquee>
        </>
    )
}

export default Companies;