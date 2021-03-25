import React from 'react';
import ReactDOM from 'react-dom';
import { firebase } from './Firebase'
import { BrowserRouter } from 'react-router-dom';
//   CSS
import './Resources/css/app.css'
//  COMPONENT 
import Routes from './router';

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes {...props} />
    </BrowserRouter>
  )
}
firebase.auth().onAuthStateChanged((user) => {
  ReactDOM.render(<App user={user} />, document.getElementById('root'));
})


