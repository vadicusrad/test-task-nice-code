import React from 'react';
import style from './style.module.scss';
import Aside from '../Aside';
import Content from '../Content';
import { IPersonItem } from '@/types/person';
import { Outlet } from 'react-router-dom';

type PropType = {
  personsList: IPersonItem[] | null;
};
const Layout: React.FC<PropType> = ({ personsList }: PropType): JSX.Element => {
  return (
    <div className={style.layout}>
      <Aside personsList={personsList} />
      <main className={style.layout__main}>
        <Content />
      </main>
    </div>
  );
};
export default Layout;
