
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './Pages/HomePage'
import { Routes, Route } from "react-router";
import FindJob from './LandingPage/FindJob';
import FindTalent from "./LandingPage/FindTalent";
import UploadTalent from "./LandingPage/UploadTalent";
import AboutUs from "./LandingPage/AboutUs";

import './App.css'
import Header from './Header/Header';

function App() {


  return (
    <>
     <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/findjob" element={<FindJob />} />
        <Route path="/findtalent" element={<FindTalent />} />
        <Route path="/uploadjob" element={<UploadTalent />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>

    </>
  )
}

export default App
