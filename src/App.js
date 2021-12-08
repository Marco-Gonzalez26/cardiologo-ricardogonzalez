import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Main from './components/Main/mainComponent';
import Products from './components/Products/productsCompoents';
import { GlobalStyles } from './globalStyles';
import {productData as data, productData2 as data2} from './components/Products/data'
import Featured from './components/Featured/featuredComponent';

function App() {
  return (
    <Router>
       <GlobalStyles/>
      <Main/>
      <Products heading='Choose your favorite' data={data}/>
      <Featured/>
      <Products heading='Sweet Treats for You' data={data2}/>
    </Router>
  );
}

export default App;
