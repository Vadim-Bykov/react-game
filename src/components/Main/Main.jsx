import React from 'react';
import BoardContainer from '../Board/BoardContainer';
import style from './Main.module.css';
import cn from 'classnames';
import { setCountPairs } from '../../redux/mainReducer';
import { connect } from 'react-redux';


const Main = ({setCountPairs}) => {
  
  return (
    <main className={style.main}>
      <BoardContainer />
      <button onClick={() => setCountPairs(3)} className={cn(style.btn)} >Change</button>
    </main>
  );
};

export default connect(null, {setCountPairs})(Main);
