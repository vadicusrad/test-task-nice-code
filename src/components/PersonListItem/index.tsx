import { IPersonItem } from '@/types/person';
import React from 'react';
import style from './style.module.scss';

type PropsType = {
  person: IPersonItem;
  targetOption: boolean;
  key: number;
};

const PersonListItem: React.FC<PropsType> = (props: PropsType): JSX.Element => {
  const { person, targetOption } = props;
  return (
    <li className={style.person}>
      {targetOption ? (
        <input
          className={style.person__input}
          id='all'
          name='targetAll'
          type='checkbox'
        />
      ) : null}
      <img
        className={style.person__image}
        src={person.image}
        alt='person avatar'
      />
      <h3 className={style.person__name}>
        {person.firstName} {person.lastName}
      </h3>
    </li>
  );
};

export default PersonListItem;
