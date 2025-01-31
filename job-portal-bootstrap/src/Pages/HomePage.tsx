import Companies from "../LandingPage/Companies";
import Dreamjob from "../LandingPage/DreamJob";
import JobCategory from "../LandingPage/JobCategory";
import Subscribe from "../LandingPage/Subscribe";
import Testimonials from "../LandingPage/Testimonials";
import Working from "../LandingPage/Working";

const HomePage = () => {
    return (
        <>
            <Dreamjob/>
            <Companies />
            <JobCategory />
            <Working />
            <Testimonials />
            <Subscribe />
            
        </>
    )
}

export default HomePage;