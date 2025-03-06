import { Navigate, Route, Routes } from "react-router";
import HomePage from "./Homepage";
import ApplyJob from "./ApplyJob";
import CompanyPage from "./CompanyPage";
import ErrorPage from "./ErrorPage";
import FindJob from "./FindJob";
import FindTalent from "./FindTalent";
import JobDescPage from "./JobDescPage";
import JobHistoryPage from "./JobHistoryPage";
import PostedJobsPage from "./PostedJobsPage";
import PostJobPage from "./PostJobPage";
import ProfilePage from "./Profilepage";
import SignupPage from "./SignupPage";
import TalentProfile from "./TalentProfile";
import { useSelector } from "react-redux";


const AppRoutes = () => {

    const user = useSelector((state:any)=> state.user)
    return (<>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/findjob" element={<FindJob />} />
            <Route path="/findtalent" element={<FindTalent />} />
            <Route path="/jobs/:id" element={<JobDescPage />} />
            <Route path="/apply-job/:id" element={<ApplyJob />} />
            <Route path="/company/:name" element={<CompanyPage />} />
            <Route path="/talent-profile/:id" element={<TalentProfile />} />
            <Route path="/pjob/:id" element={<PostJobPage />} />
            <Route path="/posted-jobs/:id" element={<PostedJobsPage />} />
            <Route path="/jhistory" element={<JobHistoryPage />} />
            <Route path="/signup" element={user ?<Navigate to="/" />: <SignupPage />} />
            <Route path="/login" element={user ?<Navigate to="/" />:<SignupPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/*" element={<ErrorPage />} />

        </Routes>
    </>)
}

export default AppRoutes;