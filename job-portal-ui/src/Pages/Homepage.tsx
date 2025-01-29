import Header from "../Header/Header";
import Companies from "../LandingPage/Companies";
import DreamJob from "../LandingPage/DreamJob";
import JobCategory from "../LandingPage/JobCategory";
import Working from "../LandingPage/Workiing";

const HomePage = () => {
    return (
        <>
            <Header />
            <DreamJob />
            <Companies />
            <JobCategory />
            <Working />
        </>
    )
}

export default HomePage;