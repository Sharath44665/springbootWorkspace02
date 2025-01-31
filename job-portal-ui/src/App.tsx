import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, Slider } from '@mantine/core';


import './App.css'
import HomePage from './Pages/Homepage';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindJob from './Pages/FindJob';

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
      <MantineProvider theme={theme}>
        <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/findjob" element={<FindJob />} />
        {/* <Route path="/findtalent" element={<FindTalent />} />
        <Route path="/uploadjob" element={<UploadTalent />} />
        <Route path="/aboutus" element={<AboutUs />} /> */}
      </Routes>
        <Footer/>

      </MantineProvider>


    </>
  )
}

export default App
