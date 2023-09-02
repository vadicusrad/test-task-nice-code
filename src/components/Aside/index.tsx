import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import { IPersonItem } from '@/types/person';
import PersonListItem from '../PersonListItem';
import lupeIcon from '../../assets/icons/lupeIcon.svg';
import sortIcon from '../../assets/icons/sortIcon.svg';
import plusIcon from '../../assets/icons/plusIcon.svg';

type PropType = {
  personsList: IPersonItem[] | null;
};
const Aside = ({ personsList }: PropType) => {
  const [targetPersonBar, setTargetPersonBar] = useState(false);

  return (
    <aside className={style.aside}>
      <div className={style.aside__inputWrapper}>
        <input className={style.aside__inputText} type='text' />
        <span className={style.aside__lupeIconWrapper}>
          <img className={style.aside__icon} src={lupeIcon} alt='lupe icon' />
        </span>
        <span className={style.aside__sortIconWrapper}>
          <img className={style.aside__icon} src={sortIcon} alt='sort icon' />
        </span>
        <span className={style.aside__plusIconWrapper}>
          <img src={plusIcon} alt='plus icon' />
        </span>
      </div>

      <div>
        {targetPersonBar ? (
          <div className={style.aside__countInfo}>
            <span className={style.aside__targetAllOption}>
              <input
                className={style.aside__input}
                id='all'
                name='targetAll'
                type='checkbox'
              />
              <label htmlFor='all'>Все</label>
              <span
                style={
                  targetPersonBar
                    ? { background: '#4198C5' }
                    : { background: 'none' }
                }
                className={style.aside__counter}
              >
                212
              </span>
            </span>

            <div>
              <button className={style.aside__btn}>Действия</button>
              <button
                className={style.aside__btn}
                onClick={() => setTargetPersonBar(false)}
              >
                Отменить
              </button>
            </div>
          </div>
        ) : (
          <div className={style.aside__countInfo}>
            <span className={style.aside__counter}>212</span>

            <button
              onClick={() => setTargetPersonBar(true)}
              className={style.aside__btn}
            >
              Выбрать
            </button>
          </div>
        )}
      </div>
      <ul className={style.aside__list}>
        {personsList &&
          personsList.map((person: IPersonItem) => {
            return (
              <PersonListItem
                targetOption={targetPersonBar}
                key={person.id}
                person={person}
              />
            );
          })}
      </ul>
    </aside>
  );
};

export default Aside;
function data(value: any) {
  throw new Error('Function not implemented.');
}

function setPersonsList(users: any) {
  throw new Error('Function not implemented.');
}
