import React from 'react';
//Для реализации нескольких страниц в SPA на React, очевидно, лучше всего подходит react-router-dom
import { NavLink } from 'react-router-dom';
//Здесь и далее я использую react-inlinesvg чтобы не портить вид кода вставкой кода SVG непосредственно в элементы
import SVG from 'react-inlinesvg';

import DocCard from '../DocCard/DocCard';
import InfoCard from './InfoCard/InfoCard';

import styles from './Profile.css';

import malushko from '../../images/Malushko.png';
import kharkov from '../../images/Kharkov.png';

const InfoIco = () => <SVG src={require('../../icons/info.svg')} />;
const ResIco = () => <SVG src={require('../../icons/results.svg')} />;
const AddIco = () => <SVG src={require('../../icons/add.svg')} />;
const HistoryIco = () => <SVG src={require('../../icons/history.svg')} />;

//Имитация данных, полученных с сервера, предполагается, что запросом с этой страницы мы получаем 2 сущности.

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
      <section>
        <p>Записи на приём</p>
        <div className={styles.docCardsCont}>
          {data.map((item, index) => (
            <DocCard key={index} doc={item} />
          ))}
          <div className={styles.showMore}>
            <p>Еще 3 записи</p>
            <NavLink to='/appointments'>Подробнее</NavLink>
          </div>
        </div>
      </section>
      <section>
        <p>Электронная карта</p>
        <div className={styles.infoCardsCont}>
          <InfoCard
            props={{
              header: 'Информация о пациенте',
              content: (
                <ul>
                  <li>
                    <span>Ваши личные данные</span>
                  </li>
                  <li>
                    <span>Рекомендации врачей</span>
                  </li>
                  <li>
                    <span>История болезни</span>
                  </li>
                </ul>
              ),
              icon: InfoIco,
            }}
          />
          <InfoCard
            props={{
              header: 'Результаты анализов',
              content: <p>Вы можете узнать здесь результаты своих анализов</p>,
              icon: ResIco,
            }}
          />
          <InfoCard
            props={{
              header: 'Добавить информацию',
              content: <p>Добавляйте в свою электронную медицинскую карту новые данные</p>,
              icon: AddIco,
            }}
          />
          <InfoCard
            props={{
              header: 'История приемов',
              content: <p>Вся информация о полученных услугах за все время хранится здесь</p>,
              icon: HistoryIco,
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Profile;
