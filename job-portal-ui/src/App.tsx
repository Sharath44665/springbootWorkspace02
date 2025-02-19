import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import './App.css'
import HomePage from './Pages/Homepage';
import Footer from './Components/Footer/Footer';
import FindJob from './Pages/FindJob';
import FindTalent from './Pages/FindTalent';
import TalentProfile from './Pages/TalentProfile';
import PostJobPage from './Pages/PostJobPage';
import JobDescPage from './Pages/JobDescPage';
import ApplyJob from './Pages/ApplyJob';
import CompanyPage from './Pages/CompanyPage';
import PostedJobsPage from './Pages/PostedJobsPage';
import JobHistoryPage from './Pages/JobHistoryPage';
import SignupPage from './Pages/SignupPage';
import ProfilePage from './Pages/Profilepage';
import ErrorPage from './Pages/ErrorPage';
import Header from './Components/Header/Header';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';
import { Provider } from 'react-redux'
import Store from './Store';

const theme = createTheme({
  colors: {
    sepia: [
      "#f5f5f5",
      "#e7e7e7",
      "#cdcdcd",
      "#b2b2b2",
      "#9a9a9a",
      "#8b8b8b",
      "#848484",
      "#717171",
      "#656565",
      "#575757"
    ],
  },
  /** Put your mantine theme override here */
});


function App() {


  return (
    <>
      <Provider store={Store} >
        <MantineProvider theme={theme}>
          <Notifications position="top-center" zIndex={1000} />
          <div className='relative'>

            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/findjob" element={<FindJob />} />
              <Route path="/findtalent" element={<FindTalent />} />
              <Route path="/jobs" element={<JobDescPage />} />
              <Route path="/apply-job" element={<ApplyJob />} />
              <Route path="/company" element={<CompanyPage />} />
              <Route path="/talent-profile" element={<TalentProfile />} />
              <Route path="/pjob" element={<PostJobPage />} />
              <Route path="/posted-jobs" element={<PostedJobsPage />} />
              <Route path="/jhistory" element={<JobHistoryPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<SignupPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/*" element={<ErrorPage />} />

            </Routes>
            <Footer />
          </div>

        </MantineProvider>

      </Provider>


    </>
  )
}

export default App
