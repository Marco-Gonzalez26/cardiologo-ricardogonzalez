import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Main from './components/Main/mainComponent';
import { GlobalStyles } from './globalStyles';

function App() {
  return (
    <Router>
       <GlobalStyles/>
      <Main/>
    </Router>
  );
}

export default App;
