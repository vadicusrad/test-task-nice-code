import React from 'react';
import style from './style.module.scss';
import ContentActionBtn from '../ContentActionBtn';
import Event from '../../../assets/images/event.png';
import ListItemWrapper from '../ListItemWrapper';
import vabinarIcon from '../../../assets/icons/vabinarIcon.svg';
import calendarIcon from '../../../assets/icons/calendarIcon.svg';
import clockIcon from '../../../assets/icons/clockIcon.svg';

const Events: React.FC = (): JSX.Element => {
  return (
    <div className={style.events}>
      <ContentActionBtn>Рекомендовать</ContentActionBtn>

      <ListItemWrapper>
        <img src={Event} alt='превью видео' />
        <div className={style.events__wrapper}>
          <h4 className={style.events__title}>
            Тяга резинки в шаге со сгибанием локтя под 90 градусов{' '}
          </h4>
          <div className={style.events__info}>
            <div className={style.events__infoItem}>
              <img src={vabinarIcon} alt='vebinar icon' />
              <span>Вебинар</span>
            </div>
            <div className={style.events__infoItem}>
              <img src={calendarIcon} alt='calendar icon' />
              <span>9 марта 2021</span>
            </div>
            <div className={style.events__infoItem}>
              <img src={clockIcon} alt='clock icon' />
              <span>17:00</span>
            </div>
          </div>
        </div>
      </ListItemWrapper>
      <ListItemWrapper>
        <img src={Event} alt='превью видео' />
        <div className={style.events__wrapper}>
          <h4 className={style.events__title}>
            Тяга резинки в шаге со сгибанием локтя под 90 градусов{' '}
          </h4>
          <div className={style.events__info}>
            <div className={style.events__infoItem}>
              <img src={vabinarIcon} alt='vebinar icon' />
              <span>Вебинар</span>
            </div>
            <div className={style.events__infoItem}>
              <img src={calendarIcon} alt='calendar icon' />
              <span>9 марта 2021</span>
            </div>
            <div className={style.events__infoItem}>
              <img src={clockIcon} alt='clock icon' />
              <span>17:00</span>
            </div>
          </div>
        </div>
      </ListItemWrapper>
      <ListItemWrapper>
        <img src={Event} alt='превью видео' />
        <div className={style.events__wrapper}>
          <h4 className={style.events__title}>
            Тяга резинки в шаге со сгибанием локтя под 90 градусов{' '}
          </h4>
          <div className={style.events__info}>
            <div className={style.events__infoItem}>
              <img src={vabinarIcon} alt='vebinar icon' />
              <span>Вебинар</span>
            </div>
            <div className={style.events__infoItem}>
              <img src={calendarIcon} alt='calendar icon' />
              <span>9 марта 2021</span>
            </div>
            <div className={style.events__infoItem}>
              <img src={clockIcon} alt='clock icon' />
              <span>17:00</span>
            </div>
          </div>
        </div>
      </ListItemWrapper>
      <ListItemWrapper>
        <img src={Event} alt='превью видео' />
        <div className={style.events__wrapper}>
          <h4 className={style.events__title}>
            Тяга резинки в шаге со сгибанием локтя под 90 градусов{' '}
          </h4>
          <div className={style.events__info}>
            <div className={style.events__infoItem}>
              <img src={vabinarIcon} alt='vebinar icon' />
              <span>Вебинар</span>
            </div>
            <div className={style.events__infoItem}>
              <img src={calendarIcon} alt='calendar icon' />
              <span>9 марта 2021</span>
            </div>
            <div className={style.events__infoItem}>
              <img src={clockIcon} alt='clock icon' />
              <span>17:00</span>
            </div>
          </div>
        </div>
      </ListItemWrapper>
    </div>
  );
};

export default Events;
