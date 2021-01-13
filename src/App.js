import React,{useEffect} from 'react';
import { useDispatch } from "react-redux";
import Routes from './routes';
import {getSongs} from './actions';
import './App.css'

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getSongs());
    // eslint-disable-next-line
  },[])
  return (
    <div >
      <Routes/>
    </div>
  );
}

export default App;
