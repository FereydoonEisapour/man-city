import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter} from 'react-router-dom';
//   CSS
import './Resources/css/app.css'
//  COMPONENT 
import Routes from './router';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


