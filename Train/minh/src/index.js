import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div className='toDoList'>
    <div className='require'>Enter your task here...</div>
    <i class="fa-solid fa-swords"></i>
  <App work='clean up bedroom' />
  <App  work='do exercises'/>
  <App  work='jogging'/>
</div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
