import React from 'react';
import SVG from 'react-inlinesvg';

import styles from './Navbar.css';

import logo from '../../images/logo.png';

const ProfileIco = () => <SVG src={require('../../icons/profile.svg')} />;
const DoctorsIco = () => <SVG src={require('../../icons/doctors.svg')} />;
const MessagesIco = () => <SVG src={require('../../icons/messages.svg')} />;
const TestingIco = () => <SVG src={require('../../icons/testing.svg')} />;
const UsefulIco = () => <SVG src={require('../../icons/useful.svg')} />;
const HelpIco = () => <SVG src={require('../../icons/help.svg')} />;

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upperNav}>
        <div className={styles.logoCont}>
          <span>Логотип</span>
        </div>
        <div className={`${styles.navElem} ${styles.active}`}>
          <ProfileIco />
          <span>Профиль</span>
        </div>
        <div className={styles.navElem}>
          <DoctorsIco />
          <span>Врачи и клиники</span>
        </div>
        <div className={styles.navElem}>
          <MessagesIco />
          <span>Сообщения</span>
        </div>
        <div className={styles.navElem}>
          <TestingIco />
          <span>Тестирование</span>
        </div>
        <div className={styles.navElem}>
          <UsefulIco />
          <span>Полезно знать</span>
        </div>
        <button onClick={(event) => event.preventDefault()}>Подать заявку</button>
      </div>
      <div className={styles.bottomNav}>
        <div className={styles.navElem}>
          <HelpIco />
          <span>Помощь</span>
        </div>
        <img src={logo} alt='logo' />
      </div>
    </div>
  );
};

export default Navbar;
