import React, { useState } from 'react';
import style from './style.module.scss';
import avatar from '../../assets/images/profileAvatar.png';
import optionsIcon from '../../assets/icons/optionsIcon.svg';
import DropdownList from '../DropdownList';

const ContentHeader: React.FC = (): JSX.Element => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className={style.content__header}>
      <div className={style.content__headerInfo}>
        <img src={avatar} alt='profile avatar' />
        <div className={style.content__wrapper}>
          <h2 className={style.content__name}>Рожков Денис Петрович</h2>
          <p className={style.content__descr}>30 лет, муж</p>
        </div>
      </div>

      <div
        onClick={() => setDropdown(!dropdown)}
        className={style.content__headerButton}
      >
        <img src={optionsIcon} alt='options icon' />
        {dropdown && <DropdownList />}
      </div>
    </div>
  );
};

export default ContentHeader;
