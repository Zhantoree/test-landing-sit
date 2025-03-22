import { FC } from 'react';

import s from './Card.module.scss';

const Card: FC<CardProps> = ({
                               img,
                               title,
                               text,
                               rating,
                               tags,
                             }) => {
  return (
    <div>
      <img src={img} alt={text} />
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="wrapper">
        <p>{rating}</p>
        <div className={s.tags}>{tags.map(tag => <span key={tag}>{tag.toString()}</span>)}</div>
      </div>
    </div>
  );
};

interface CardProps {
  img: string;
  title: string;
  text: string;
  rating: number;
  tags: string[];
}

export default Card;