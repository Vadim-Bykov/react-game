import React from 'react';
import BoardContainer from '../Board/BoardContainer';
import CurrentStatistic from '../CurrentStats/CurrentStats';
import style from './Main.module.scss';


const Main = () => {
  
  return (
    <main className={style.main}>
      <CurrentStatistic />
      <BoardContainer />
    </main>
  );
};

export default Main;
