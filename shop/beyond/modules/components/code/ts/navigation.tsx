import React from "react";
import { useState, useEffect } from "react";
import { ComponentProduct } from "./component-product";

export /*bundle*/ const Navigation = () => {

  const [arrayProducts, setArrayProducts] = useState([])
  const [componentProduct, setComponentProduct] = useState(null);

  const getCategorieHome = arrayProducts.filter(product => product.categories === "home" );
  const getCategorieDrinks = arrayProducts.filter(product => product.categories === "drinks");
  const getCategorieBalls = arrayProducts.filter(product => product.categories === "balls");
  const getCategorieConsoles = arrayProducts.filter(product => product.categories === "consoles");
  const getCategorieFoods = arrayProducts.filter(product => product.categories === "consoles");

  const showCategorieHome = getCategorieHome.map(product => <ComponentProduct product={product.name} brand={product.brand} price={product.price} src={product.src} categories={product.categories} />);
  const showCategorieDrinks = getCategorieDrinks.map(product => <ComponentProduct product={product.name} brand={product.brand} price={product.price} src={product.src} categories={product.categories} />);
  const showCategorieBalls = getCategorieBalls.map(product => <ComponentProduct product={product.name} brand={product.brand} price={product.price} src={product.src} categories={product.categories} />);
  const showCategorieConsoles = getCategorieConsoles.map(product => <ComponentProduct product={product.name} brand={product.brand} price={product.price} src={product.src} categories={product.categories} />);
  const showCategorieFoods = getCategorieFoods.map(product => <ComponentProduct product={product.name} brand={product.brand} price={product.price} src={product.src} categories={product.categories} />);

  async function getDataWithFetch() {
    const response = await fetch('https://my-json-server.typicode.com/Gabojcb/packages.exercises/products');
    const data = await response.json();
    setArrayProducts(data);
    console.log(data);
  }

  useEffect(()=> {
    getDataWithFetch();
  },[])

  const handleClick = (component) => {
    setComponentProduct(component);
  }

  return (
    <>
      <nav>
        <div className="container__logo">
          <p className="logo-shop color">Shop Real </p>
          <img src="images/images-shop-real/cart.png" className="logo-cart" alt="images cart" />
          <input type="text" className="input-searc" placeholder="search"/>
        </div>
        <ul className="cont-ul">
          <li>Menu</li>
          <li className="nav__products">
            Products
            <ul className="ul-second color">
              <li className="categories">
                Categories
                <ul className="ul-third">
                  <li onClick={() => handleClick('Foods')} className='li-product'>Foods</li>
                  <li onClick={() => handleClick('Drinks')} className='li-product'>Drinks</li>
                  <li onClick={() => handleClick('Clothes')} className='li-product'>Clothes</li>
                  <li onClick={() => handleClick('Balls')} className='li-product'>Balls</li>
                  <li onClick={() => handleClick('Telephones')} className='li-product'>Telephones</li>
                  <li onClick={() => handleClick('Consoles')} className='li-product'>Consoles</li>
                  <li onClick={() => handleClick('Home')} className='li-product'>Home</li>
                  <li onClick={() => handleClick('Tools')} className='li-product'>Tools</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="color"><a href="#footer-id" className="anchorage">Contact</a></li>
        </ul>
      </nav>
      <div className="flex-product">
        {componentProduct === "Home" && showCategorieHome}
        {componentProduct === "Drinks" && showCategorieDrinks}
        {componentProduct === "Balls" && showCategorieBalls}
        {componentProduct === "Consoles" && showCategorieConsoles}
        {componentProduct === "Foods" && showCategorieFoods}
      </div>
    </>
  );
};
