import React from 'react';
import { NavLink } from 'react-router-dom';

import DocCard from '../DocCard/DocCard';

import styles from './Profile.css';

import malushko from '../../images/Malushko.png';
import kharkov from '../../images/Kharkov.png';

//Иммитация данных, полученных с сервера, предполагается, что запросом с этой страницы мы получаем 2 сущности.

const data = [
  {
    name: 'Малушко Т. Н.',
    worktime: 'Понедельник 15.06.20 | 15:30',
    address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    department: 'Хирургия',
    /* В готовом проекте, как мне представляется, с сервера будет приходить ссылка на фотографию врача,
    здесь же, вместо URL-адреса я передаю саму картинку*/
    photoUrl: malushko,
  },
  {
    name: 'Харьков В. С.',
    worktime: 'Понедельник 15.06.20 | 18:30 ',
    address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    department: 'Терапевтическое отделение',
    photoUrl: kharkov,
  },
];

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.appointments}>
        <p>Записи на приём</p>
        <div className={styles.docCards}>
          {data.map((item, index) => (
            <DocCard key={index} docInfo={item} />
          ))}
          <div class={styles.showMore}>
            <p>Еще 3 записи</p>
            <NavLink to='/appointments'>Подробнее</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
