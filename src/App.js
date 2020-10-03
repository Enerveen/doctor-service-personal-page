import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Profile from './components/Profile/Profile';
import Appointments from './components/Appointments/Appointments';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

import styles from './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.mainCont}>
          <Header />
          <Switch>
            <Route path='/' exact component={Profile} />
            <Route path='/appointments' exact component={Appointments} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
