import React, { useState } from 'react';
import styles from './InfoCard.css';

const InfoCard = ({ props }) => {
  const [isHover, setIsHover] = useState(false);
  const additionalClass = isHover ? styles.active : '';
  return (
    <div className={styles.container + ' ' + additionalClass} onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
      <div className={styles.icoCont + ' ' + additionalClass}>{props.icon()}</div>
      <div className={styles.main}>
        <h2 className={additionalClass}>{props.header}</h2>
        <div>{props.content}</div>
      </div>
    </div>
  );
};

export default InfoCard;
