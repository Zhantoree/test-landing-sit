import s from './index.module.scss';
import CloseIcon from '@/assets/icons/close.svg';
import BurgerIcon from '@/assets/icons/burger.svg';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';


const navItems: NavItem[] = [
  {
    label: 'Главная',
    link: '/',
  },
  {
    label: 'О нас',
    link: '/about',
  },
  {
    label: 'Услуги',
    link: '/services',
  },
  {
    label: 'Портфолио',
    link: '/portfolio',
  },
  {
    label: 'Контакты',
    link: '/contacts',
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 767);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };


  const handleResize = () => setIsOpen(window.innerWidth > 767);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <nav id={s.navigation}>

      <Link to={'/'} className={s.logo}>
        CompanyName
      </Link>
      <img onClick={toggleNavBar}
           src={isOpen ? CloseIcon : BurgerIcon}
           className={s['toggle-button']}
           alt="CloseIcon"
      />

      <ul className={`${s['nav-items']} ${isOpen ? s.open : ''}`}>
        {
          navItems.map((item) => (
            <li className={s['nav-item']} key={item.label}>
              <Link to={item.link}>{item.label}</Link>
            </li>
          ))
        }
      </ul>

    </nav>
  );
};

interface NavItem {
  label: string;
  link: string;
}

export default NavBar;