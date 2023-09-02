import React from 'react';
import style from './style.module.scss';
import ContentActionBtn from '../ContentActionBtn';
import ListItemWrapper from '../ListItemWrapper';
import cameraIcon from '../../../assets/icons/cameraIcon.svg';
import blueCameraIcon from '../../../assets/icons/blueCameraIcon.svg';
import meetIcon from '../../../assets/icons/meetIcon.svg';

const Consultations: React.FC = (): JSX.Element => {
  return (
    <div className={style.consultations}>
      <ContentActionBtn>Записать</ContentActionBtn>
      <ListItemWrapper>
        <img
          className={style.consultation__image}
          src={blueCameraIcon}
          alt='camera icon'
        />
        <div className={style.consultation__info}>
          <h4 className={style.consultation__title}>Online консультация</h4>
          <p className={style.consultation__date}>15.01.2019, 12:30-13:00</p>
        </div>
      </ListItemWrapper>
      <ListItemWrapper>
        <img
          className={style.consultation__image}
          src={cameraIcon}
          alt='camera icon'
        />

        <div className={style.consultation__info}>
          <h4 className={style.consultation__title}>Online консультация</h4>
          <p className={style.consultation__date}>15.01.2019, 12:30-13:00</p>
        </div>
      </ListItemWrapper>
      <ListItemWrapper>
        <div className={style.consultation__image}>
          <img src={meetIcon} alt='meet icon' />
        </div>
        <div className={style.consultation__info}>
          <h4 className={style.consultation__title}>Личный приём</h4>
          <p className={style.consultation__date}>15.01.2019, 12:30-13:00</p>
        </div>
        <span className={style.redText}>Не подтверждена</span>
      </ListItemWrapper>
    </div>
  );
};

export default Consultations;
