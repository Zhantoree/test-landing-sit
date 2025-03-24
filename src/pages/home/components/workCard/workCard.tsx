import { FC } from 'react';
import { Link } from 'react-router';

import s from './workCard.module.scss';

const WorkCard: FC<WorkCardProps> = ({
                                       label,
                                       title,
                                       type,
                                     }) => {
  return (
    <div className={s.card}>
      <p className={s.label}>{label}</p>
      <div className={s.backside}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.type}>{type}</p>
        <Link to={'/'}>Подробнее</Link>
      </div>
    </div>
  );
};

export interface WorkCardProps {
  label: string;
  title: string;
  type: string;
}

export default WorkCard;