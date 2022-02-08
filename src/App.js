import React from 'react'
import Main from './components/Main/mainComponent';
import Products from './components/Products/productsCompoents';
import { GlobalStyles } from './globalStyles';
import {productData as data} from './components/Products/data'
import Footer from './components/Footer/footerComponent';
import AboutComponent from './components/About/AboutComponent';



function App() {
  return (
    <>
      <GlobalStyles/>
      <Main/>
      <Products heading='Servicios' data={data}/>
      <AboutComponent/>
      <Footer/>
    </>    
  );
}

export default App;
