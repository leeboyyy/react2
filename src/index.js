import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Human from './pages/Human';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function Hello(props) {
//   return <h1>Hello World!</h1>;
// }

// const Person = (props) => {
//   return (
//     <>
//     <h1>Hello page: { JSON.stringify(props) }</h1>
//     <h2>Name: {props.name}</h2>
//     <h2>Mobile: {props.mobile}</h2>
//     <h2>Place: {props.place}</h2>
//     </>
//   );
// }

// const Human = () => {
//   return (
//     <>
//     <Person name="MOM Computer Institutions" mobile="9110739025" place="Ongole"/>
//     </>
//   );
// }

// const Person = ({name, place, mobile }) => {
//   // const pname = <h2>Name: {name}</h2>;
//   const person = (
//     <div>
//       <h2>Name: {name}</h2>
//       <h2>Mobile: {mobile}</h2>
//     </div>
//   );
//   return (
//     <>
//     {/* <h1>Hello page: { JSON.stringify(props) }</h1> */}
//     {/* {name} */}
//     {person}
//     <h2>Place: {place}</h2>
//     </>
//   );
// }

const i=5;
var nickName = "Hello";
if(i<10){
  nickName ="Hello MOM!!! "
}

const myElement = <h1> {nickName} {1+1+"MOM"+1+1} : { (i==5)?  "PASS": "FAIL" } : { (i!=5) && "Yes"}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Human/>
    {myElement}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
