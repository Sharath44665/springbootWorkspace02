import Companies from "../LandingPage/Companies";
import DreamJob from "../LandingPage/DreamJob";
import JobCategory from "../LandingPage/JobCategory";
import Subscribe from "../LandingPage/Subscribe";
import Testimonials from "../LandingPage/Testimonials";
import Working from "../LandingPage/Workiing";

const HomePage = () => {
    return (
        <>
            
            <DreamJob />
            <Companies />
            <JobCategory />
            <Working />
            <Testimonials />
            <Subscribe />
            
        </>
    )
}

export default HomePage;