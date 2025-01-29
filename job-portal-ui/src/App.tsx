import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, Slider } from '@mantine/core';


import './App.css'
import HomePage from './Pages/Homepage';

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {


  return (
    <>
      <MantineProvider theme={theme}>
        {/* <Header /> */}
        <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/findjob" element={<FindJob />} />
        <Route path="/findtalent" element={<FindTalent />} />
        <Route path="/uploadjob" element={<UploadTalent />} />
        <Route path="/aboutus" element={<AboutUs />} /> */}
      </Routes>
        {/* <Footer/> */}

      </MantineProvider>


    </>
  )
}

export default App
