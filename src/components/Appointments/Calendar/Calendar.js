/*Компонент календаря в данном случае является всего лишь макетом без какого-либо функционала.
В формулировке задания явно не указано, должен ли календарь быть "рабочим". В случае таковой необходимости, могу переделать эту часть задания*/

import React from 'react';
import SVG from 'react-inlinesvg';

import styles from './Calendar.css';

const LarrowIco = () => <SVG src={require('../../../icons/larrow.svg')} />;
const RarrowIco = () => <SVG src={require('../../../icons/rarrow.svg')} />;

//Создание пустого массива с длиной 30 для последующего заполнения календаря
let days = new Array(30).fill(true);

const Calendar = () => {
  //Функция для упрощения отрисовки элементов внутри календаря
  function calendar(index) {
    if (index < 4) {
      return (
        <div key={index} className={styles.elemInactive}>
          {index + 1}
        </div>
      );
    } else if (index === 14) {
      return (
        <div key={index} className={styles.elem}>
          {index + 1}
          <span className={styles.notification}>2</span>
        </div>
      );
    } else if (index === 29) {
      return (
        <div key={index} className={styles.elem}>
          {index + 1}
          <span className={styles.notification}>1</span>
        </div>
      );
    } else {
      return (
        <div key={index} className={styles.elem}>
          {index + 1}
        </div>
      );
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <LarrowIco />
        <span>Июнь, 2020</span>
        <RarrowIco />
      </div>
      <div className={styles.days}>
        <span>Пн</span>
        <span>Вт</span>
        <span>Ср</span>
        <span>Чт</span>
        <span>Пт</span>
        <span>Сб</span>
        <span>Вс</span>
      </div>
      <div className={styles.body}>{days.map((_, index) => calendar(index))}</div>
    </div>
  );
};

export default Calendar;
