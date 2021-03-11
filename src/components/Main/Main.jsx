import React from 'react';
import BoardContainer from '../Board/BoardContainer';
import StatsContainer from '../Stats/StatsContainer';
import style from './Main.module.scss';


const Main = () => {
  
  return (
    <main className={style.main}>
      <StatsContainer />
      <BoardContainer />
    </main>
  );
};

export default Main;
