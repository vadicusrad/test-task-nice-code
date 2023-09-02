import React from 'react';
import style from './style.module.scss';
import roundedPlusIcon from '../../../assets/icons/roundedPlusIcon.svg';

type Props = {
  children: React.ReactNode;
};

const ContentActionBtn: React.FC<Props> = (props: Props): JSX.Element => {
  const { children } = props;
  return (
    <div className={style.wrapper}>
      {children}
      <button className={style.btn}>
        <img src={roundedPlusIcon} alt='' />
      </button>
    </div>
  );
};

export default ContentActionBtn;
