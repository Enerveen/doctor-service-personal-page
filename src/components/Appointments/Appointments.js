import React from 'react';
import SVG from 'react-inlinesvg';

import DocCard from '../DocCard/DocCard';
import Calendar from './Calendar/Calendar';

import styles from './Appointments.css';

import malushko from '../../images/Malushko.png';
import kharkov from '../../images/Kharkov.png';

const ArrowIco = () => <SVG src={require('../../icons/arrow.svg')} />;

//Имитация данных, полученных с сервера, предполагается, что запросом с этой страницы мы получаем все имеющиеся сущности, для примера я взял 10.

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
  {
    name: 'Малушко Т. Н.',
    worktime: 'Понедельник 15.06.20 | 15:30',
    address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    department: 'Хирургия',
    photoUrl: malushko,
  },
  {
    name: 'Харьков В. С.',
    worktime: 'Понедельник 15.06.20 | 18:30 ',
    address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    department: 'Терапевтическое отделение',
    photoUrl: kharkov,
  },
  {
    name: 'Малушко Т. Н.',
    worktime: 'Понедельник 15.06.20 | 15:30',
    address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    department: 'Хирургия',
    photoUrl: malushko,
  },
  {
    name: 'Харьков В. С.',
    worktime: 'Понедельник 15.06.20 | 18:30 ',
    address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    department: 'Терапевтическое отделение',
    photoUrl: kharkov,
  },
  {
    name: 'Малушко Т. Н.',
    worktime: 'Понедельник 15.06.20 | 15:30',
    address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    department: 'Хирургия',
    photoUrl: malushko,
  },
  {
    name: 'Харьков В. С.',
    worktime: 'Понедельник 15.06.20 | 18:30 ',
    address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    department: 'Терапевтическое отделение',
    photoUrl: kharkov,
  },
  {
    name: 'Малушко Т. Н.',
    worktime: 'Понедельник 15.06.20 | 15:30',
    address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
    department: 'Хирургия',
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

const Appointments = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingCont}>
        <ArrowIco />
        <span>Мои записи</span>
      </div>
      <main>
        <section className={styles.appointments}>
          {data.map((item, index) => (
            <DocCard key={index} doc={item} />
          ))}
        </section>
        <section className={styles.calendarCont}>
          <Calendar />
        </section>
      </main>
    </div>
  );
};

export default Appointments;
