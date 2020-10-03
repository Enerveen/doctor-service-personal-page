import React from 'react';
import SVG from 'react-inlinesvg';

import styles from './Header.css';

import avatar from '../../images/avatar.png';

const LensIco = () => <SVG src={require('../../icons/lens.svg')} />;
const BellIco = () => <SVG src={require('../../icons/bell.svg')} />;
const EyeIco = () => <SVG src={require('../../icons/eye.svg')} />;
const MoreIco = () => <SVG src={require('../../icons/more.svg')} />;

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>Мой профиль</h1>
      <div className={styles.leftSide}>
        <LensIco />
        <BellIco />
        <EyeIco />
        <img src={avatar} alt='avatar' />
        <div className={styles.moreCont}>
          <MoreIco />
        </div>
      </div>
    </div>
  );
};

export default Header;
