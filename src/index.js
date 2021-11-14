// import React from 'react';
// import ReactDOM from 'react-dom'; //we get this to be used on websites
// import './index.css';
// import Card from './Card.js';
// import {robots} from './robots.js' //Here we add {} because it has no "default" in export, if I hvae another variable called cat, then it will be {robots, cat}
// import reportWebVitals from './reportWebVitals';
// import 'tachyons';

// ReactDOM.render(
//   <React.StrictMode>
//     <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} username={robots[0].username}/>
//     <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} username={robots[1].username}/>
//     <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} username={robots[2].username}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

//Now to loop in cards and use several ones, we will put all of them in a parent called "CardList"


import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import 'tachyons';
import App from './Containers/App.js';
import reportWebVitals from './reportWebVitals';

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
