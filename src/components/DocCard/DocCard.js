import React from 'react';

import styles from './DocCard.css';

const DocCard = (data) => {
  const doc = data.docInfo;
  return (
    <div className={styles.container}>
      <div className={styles.upperPart}>
        <span>{doc.worktime}</span>
        <p>{doc.address}</p>
      </div>
      <div className={styles.bottomPart}>
        <div className={styles.doc}>
          <img src={doc.photoUrl} alt={doc.name} />
          <div>
            <p>{doc.name}</p>
            <span>{doc.department}</span>
          </div>
        </div>
        <button>Отменить</button>
      </div>
    </div>
  );
};

export default DocCard;
