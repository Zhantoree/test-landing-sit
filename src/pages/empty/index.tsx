import s from './index.module.scss';
import NotFoundIcon from '@/assets/images/404.svg';

const Index = () => {
  return (
    <div className={s.wrapper} role="main" aria-label="Page not found">
      <h1 className="visuallyHidden">404 - Page Not Found</h1>
      <img width={626} height={626} className={s.icon} src={NotFoundIcon} alt="NotFoundIcon" />
    </div>
  );
};

export default Index;