
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { getCurrentWeatherData } from './api/openWeatherMap';
import { Fragment } from 'react';

function App() {
    
//   getCurrentWeatherData();
  return (
    <Fragment>
            <Header />
            <Main />
            {/* <Footer /> */}

    </Fragment>
  )
}

export default App

/**
 * Header : Logo, Links, Profile
 *  
 */