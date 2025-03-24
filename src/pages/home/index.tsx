import { useState } from 'react';
import s from './index.module.scss';
import benefitCard1 from '@/assets/images/benefit1.png';
import benefitCard1_m from '@/assets/images/benefit1_m.png';
import benefitCard2_m from '@/assets/images/benefit2_m.png';
import benefitCard3_m from '@/assets/images/benefit3_m.png';
import benefitCard2 from '@/assets/images/benefit2.png';
import benefitCard3 from '@/assets/images/benefit3.png';
import InfoCard from '@/pages/home/components/infoCard/infoCard.tsx';
import WorkCard from '@/pages/home/components/workCard/workCard.tsx';

const benefitCards = [
  {
    img: benefitCard1,
    img_m: benefitCard1_m,
    title: 'Креативный дизайн',
    text: 'Мы создаем уникальные дизайны, которые отражают индивидуальность вашего бренда и привлекают внимание целевой аудитории.',
    rating: 4.9,
    tags: ['Дизайн'],
  },
  {
    img: benefitCard2,
    img_m: benefitCard2_m,
    title: 'Быстрая разработка',
    text: 'Оптимизированный процесс разработки позволяет нам создавать высококачественные продукты в сжатые сроки.',
    rating: 4.8,
    tags: ['Разработка'],
  },
  {
    img: benefitCard3,
    img_m: benefitCard3_m,
    title: 'Мобильная оптимизация',
    text: 'Все наши проекты адаптированы для любых устройств, обеспечивая идеальный пользовательский опыт на любом экране.',
    rating: 4.7,
    tags: ['Оптимизация'],
  },
];

const workCards = [
  {
    label: 'Проект 1',
    title: 'E-commerce платформа',
    type: 'Веб-платформа',
  },
  {
    label: 'Проект 2',
    title: 'E-commerce платформа',
    type: 'Веб-платформа',
  },
  {
    label: 'Проект 3',
    title: 'E-commerce платформа',
    type: 'Веб-платформа',
  },
  {
    label: 'Проект 4',
    title: 'E-commerce платформа',
    type: 'Веб-платформа',
  },
  {
    label: 'Проект 5',
    title: 'E-commerce платформа',
    type: 'Веб-платформа',
  },
  {
    label: 'Проект 6',
    title: 'E-commerce платформа',
    type: 'Веб-платформа',
  },
];

const tabs = [
  'Главная',
  'О нас',
  'Услуги',
  'Портфолио',
  'Контакты',
];

const Home = () => {
  const [tab, setTab] = useState(tabs[0]);
  return (
    <>
      <section className={s.benefits}>
        <div className={s.container}>
          <h1>Инновационные решения для вашего бизнеса</h1>
          <div className={s['info-cards']}>
            {benefitCards.map((card) => (
              <InfoCard key={card.title}
                        img={card.img}
                        img_m={card.img_m}
                        title={card.title}
                        text={card.text}
                        rating={card.rating}
                        tags={card.tags}
              />
            ))}
          </div>
        </div>
      </section>
      <section className={s.work}>
        <h2>Наши работы</h2>
        <p>Ознакомьтесь с нашими лучшими проектами в различных категориях</p>
        <ul className={s.tabs}>
          {tabs.map((currTab: string) => (
            <li
              key={currTab}
              className={`${s.tab} ${currTab === tab ? s.active : ''}`}
              onClick={() => setTab(currTab)}
            >{currTab}</li>
          ))}
        </ul>
        <div className={s['work-cards']}>
          {
            workCards.map((card) => (
              <WorkCard key={card.label}
                        label={card.label}
                        title={card.title}
                        type={card.type}
              />
            ))
          }
        </div>
      </section>
    </>
  );
};

export default Home;