import React from 'react';
import style from './style.module.scss';

type Props = {
  children: React.ReactNode;
};

const ListItemWrapper: React.FC<Props> = (props: Props): JSX.Element => {
  const { children } = props;
  return <div className={style.wrapper}>{children}</div>;
};

export default ListItemWrapper;
