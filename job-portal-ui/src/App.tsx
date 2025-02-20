import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import './App.css'
import Header from './Components/Header/Header';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';
import { Provider } from 'react-redux'
import Store from './Store';
import AppRoutes from './Pages/AppRoutes';
import Footer from './Components/Footer/Footer';

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
            <AppRoutes />
            <Footer />
          </div>

        </MantineProvider>

      </Provider>


    </>
  )
}

export default App
