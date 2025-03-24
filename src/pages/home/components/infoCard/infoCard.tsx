import { FC } from 'react';

import s from './infoCard.module.scss';

const InfoCard: FC<InfoCardProps> = ({
                                       img,
                                       img_m,
                                       title,
                                       text,
                                       rating,
                                       tags,
                                     }) => {
  return (
    <div className={s.card}>
      <picture>
        <source media="(max-width: 600px)" srcSet={img_m} />
        <source media="(min-width: 601px)" srcSet={img} />
        <img aria-hidden="true" decoding="async" src={img} alt={title} width="440"
             height="440" />
      </picture>
      <h2>{title}</h2>
      <p>{text}</p>
      <div className={s.wrapper}>
        <p>★{rating}</p>
        <div className={s.tags}>{tags.map(tag => <span key={tag}>{tag.toString()}</span>)}</div>
      </div>
    </div>
  );
};

export interface InfoCardProps {
  img: string;
  img_m: string;
  title: string;
  text: string;
  rating: number;
  tags: string[];
}

export default InfoCard;