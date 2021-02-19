import React from 'react';
import BoardContainer from '../Board/BoardContainer';
import style from './Main.module.css';
import ChangeSize from '../ChangeSize/ChangeSize';


const Main = ({setCountPairs}) => {
  
  return (
    <main className={style.main}>
      <BoardContainer />
      <ChangeSize />
    </main>
  );
};

export default Main;
