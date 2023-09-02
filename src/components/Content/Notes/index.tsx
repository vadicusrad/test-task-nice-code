import React from 'react';
import style from './style.module.scss';
import mapImage from '../../../assets/images/map.png';
import ContentActionBtn from '../ContentActionBtn';
import optionsIcon from '../../../assets/icons/optionsIcon.svg';
import DropdownList from '@/components/DropdownList';

const Notes: React.FC = (): JSX.Element => {
  return (
    <div className={style.notes}>
      <ContentActionBtn>Новая запись</ContentActionBtn>
      <div className={style.notes__item}>
        <p>
          <span className={style.notes__date}>20.12.2019</span>
          Физические упражнения способствуют активизации мышечных сокращений,
          кровотока в тканях, снимают отечность, повышают энергетические
          возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение
          различных посттравматических дефектов в самих мышцах, костной ткани,
          связках и сухожилиях.
        </p>
        <div className={style.notes__button}>
          <img src={optionsIcon} alt='options icon' />
        </div>
      </div>
      <div className={style.notes__item}>
        <p>
          <span className={style.notes__date}>20.12.2019</span>
          Улучшенное питание мышечной ткани ускоряет замещение различных
          посттравматических дефектов в самих мышцах, костной ткани, связках и
          сухожилиях.
        </p>
        <div className={style.notes__button}>
          <img src={optionsIcon} alt='options icon' />
        </div>
      </div>
      <div className={style.notes__imageWrapper}>
        <img src={mapImage} alt='map image' />
      </div>
    </div>
  );
};

export default Notes;
