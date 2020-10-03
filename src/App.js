import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Profile from './components/Profile/Profile';
import Appointments from './components/Appointments/Appointments';
import Navbar from './components/Navbar/Navbar';

import styles from './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Profile} />
          <Route path='/appointments' exact component={Appointments} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
