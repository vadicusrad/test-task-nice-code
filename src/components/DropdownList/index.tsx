import React from 'react';
import style from './style.module.scss';

const DropdownList: React.FC = (): JSX.Element => {
  return (
    <ul className={style.dropdownList}>
      <li className={style.dropdownList__item}>Изменить</li>
      <li className={style.dropdownList__item}>Удалить</li>
    </ul>
  );
};

export default DropdownList;
