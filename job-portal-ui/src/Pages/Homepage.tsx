import Header from "../Header/Header";
import Companies from "../LandingPage/Companies";
import DreamJob from "../LandingPage/DreamJob";
import JobCategory from "../LandingPage/JobCategory";

const HomePage =() => {
    return (
        <>
        <Header/>
        <DreamJob/>
        <Companies />
        <JobCategory />
        </>
    )
}

export default HomePage;