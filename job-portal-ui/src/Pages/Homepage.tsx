import Companies from "../Components/LandingPage/Companies";
import DreamJob from "../Components/LandingPage/DreamJob";
import JobCategory from "../Components/LandingPage/JobCategory";
import Subscribe from "../Components/LandingPage/Subscribe";
import Testimonials from "../Components/LandingPage/Testimonials";
import Working from "../Components/LandingPage/Workiing";

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