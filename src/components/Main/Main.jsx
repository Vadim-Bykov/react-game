import React from 'react';
import BoardContainer from '../Board/BoardContainer';
import style from './Main.module.scss';


const Main = () => {
  
  return (
    <main className={style.main}>
      <BoardContainer />
    </main>
  );
};

export default Main;
