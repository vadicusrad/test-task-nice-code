import React from 'react';
import style from './style.module.scss';

import ContentHeader from './ContentHeader';
import { Outlet } from 'react-router-dom';
import ContentNavbar from './ContentNavbar';

const Content: React.FC = (): JSX.Element => {
  return (
    <div className={style.content}>
      <ContentHeader />
      <ContentNavbar />
      <div className={style.content__pages}>
        <Outlet />
      </div>
    </div>
  );
};

export default Content;
