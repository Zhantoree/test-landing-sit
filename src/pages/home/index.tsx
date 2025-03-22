import s from './index.module.scss';
import benefitCard1 from '@/assets/images/benefit1.png';
import benefitCard2 from '@/assets/images/benefit2.png';
import benefitCard3 from '@/assets/images/benefit3.png';
import Card from '@/pages/home/components/card/Card.tsx';


const benefitCards = [
  {
    img: benefitCard1,
    title: 'Креативный дизайн',
    text: 'Мы создаем уникальные дизайны, которые отражают индивидуальность вашего бренда и привлекают внимание целевой аудитории.',
    rating: 4.9,
    tags: ['Дизайн'],
  },
  {
    img: benefitCard2,
    title: 'Быстрая разработка',
    text: 'Оптимизированный процесс разработки позволяет нам создавать высококачественные продукты в сжатые сроки.',
    rating: 4.8,
    tags: ['Разработка'],
  },
  {
    img: benefitCard3,
    title: 'Мобильная оптимизация',
    text: 'Все наши проекты адаптированы для любых устройств, обеспечивая идеальный пользовательский опыт на любом экране.',
    rating: 4.7,
    tags: ['Оптимизация'],
  },
];

const Home = () => {
  return (
    <>
      <section className={s.benefits}>
        <h2>Инновационные решения для вашего бизнеса</h2>
        <div className="cards">
          {benefitCards.map((card) => (
            <Card key={card.title}
                  img={card.img}
                  title={card.title}
                  text={card.text}
                  rating={card.rating}
                  tags={card.tags}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;