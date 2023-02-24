import * as React from "react";
import { useState, useEffect } from "react";
import { ComponentProduct , Navigation , Main } from 'beyond/components';


export /*bundle*/
function Page(): JSX.Element {
  const [arrayProducts, setArrayProducts] = useState([]);
  
  const output = arrayProducts.map(product => <ComponentProduct product={product.name} brand={product.brand} price={product.price} src={product.src} categories={product.categories} />)
  
  async function getDataWithFetch() {
    const response = await fetch('https://my-json-server.typicode.com/Gabojcb/web.exercises/products');
    const data = await response.json();
    setArrayProducts(data);
    console.log(data, arrayProducts);
  }

  useEffect(()=> {
    getDataWithFetch();
  },[])

  return (
    <>
      <Navigation  />
       <Main />
       <div className="container-output">
       </div>
      <footer className="container__footer" id="footer-id">
        <div className="info__footer"><p className="message__infor">CONTACT</p></div>
        <div className="space-networks">
          <div className="flex">
            <img src="images/images-shop-real/facebook.png" alt="logo facebook" className="images-footer"/>
            <p className="networks">Shop Real</p>
          </div>
          <div className="flex">
            <img src="images/images-shop-real/instagram.png" alt="logo instagram" className="images-footer"/>
            <p className="networks">shopreal23</p>
          </div>
          <div className="flex">
            <img src="images/images-shop-real/gorjeo.png" alt="logo twitter" className="images-footer"/>
            <p className="networks">Shop Real</p>
          </div> 
        </div>
      <div className="rights">
        all rights reserved to <span className="name-span"> GaboDeveloper</span></div>
      </footer>
    </>
  );
}
