import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.scss';

const ContentNavbar: React.FC = (): JSX.Element => {
  return (
    <nav className={style.content__tabs}>
      <ul className={style.content__tabsList}>
        <li className={style.content__tabItem}>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? '#4198C5' : '' })}
            className={style.content__navLink}
            to='/'
          >
            Заметки
          </NavLink>
        </li>
        <span className={style.content__verticalDivider}></span>
        <li className={style.content__tabItem}>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? '#4198C5' : '' })}
            className={style.content__navLink}
            to='consultations'
          >
            Консультации
          </NavLink>
        </li>
        <span className={style.content__verticalDivider}></span>
        <li className={style.content__tabItem}>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? '#4198C5' : '' })}
            className={style.content__navLink}
            to='videos'
          >
            Видео
          </NavLink>
        </li>
        <span className={style.content__verticalDivider}></span>
        <li className={style.content__tabItem}>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? '#4198C5' : '' })}
            className={style.content__navLink}
            to='events'
          >
            Мероприятия
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default ContentNavbar;
