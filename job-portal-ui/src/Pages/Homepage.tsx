import Header from "../Header/Header";
import Companies from "../LandingPage/Companies";
import DreamJob from "../LandingPage/DreamJob";
import JobCategory from "../LandingPage/JobCategory";
import Testimonials from "../LandingPage/Testimonials";
import Working from "../LandingPage/Workiing";

const HomePage = () => {
    return (
        <>
            <Header />
            <DreamJob />
            <Companies />
            <JobCategory />
            <Working />
            <Testimonials />
        </>
    )
}

export default HomePage;