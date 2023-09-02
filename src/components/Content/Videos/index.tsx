import React from 'react';
import style from './style.module.scss';
import ContentActionBtn from '../ContentActionBtn';
import video1 from '../../../assets/images/video1.png';
import video2 from '../../../assets/images/video2.png';
import video3 from '../../../assets/images/video3.png';
import ListItemWrapper from '../ListItemWrapper';

const Videos: React.FC = (): JSX.Element => {
  return (
    <div className={style.videos}>
      <ContentActionBtn>Рекомендовать</ContentActionBtn>
      <ListItemWrapper>
        <img src={video1} alt='video 1' />
        <div className={style.videos__text}>
          <h4 className={style.videos__title}>
            Крабик, ходьба в бок в приседе с двумя резинками Кра…
          </h4>
          <div className={style.videos__wrapper}>
            <p className={style.videos__author}>Астахова Е.В.</p>
            <p className={style.videos__date}></p>
          </div>
        </div>
      </ListItemWrapper>

      <ListItemWrapper>
        <img src={video2} alt='video 2' />
        <div className={style.videos__text}>
          <h4 className={style.videos__title}>
            Разминка для локтевого сустава
          </h4>
          <div className={style.videos__wrapper}>
            <p className={style.videos__author}>Астахова Е.В.</p>
            <p className={style.videos__date}>15.01.2019 - 22.01.2019</p>
          </div>
        </div>
      </ListItemWrapper>

      <ListItemWrapper>
        <img src={video3} alt='video 3' />
        <div className={style.videos__text}>
          <h4 className={style.videos__title}>
            Разминка для локтевого сустава Разминка для локтевого..
          </h4>
          <div className={style.videos__wrapper}>
            <p className={style.videos__author}>Астахова Е.В.</p>
            <p className={style.videos__date}>15.01.2019 - 22.01.2019</p>
          </div>
        </div>
      </ListItemWrapper>
    </div>
  );
};

export default Videos;
