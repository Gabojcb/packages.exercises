import * as React from "react";
import { useState, useEffect } from "react";
import { Product } from "./component-product";
import { routing } from "@beyond-js/kernel/routing";

interface IProducts {
  key: string;
  product: string;
  brand: string;
  price: string;
  src: string;
  category: string;
}

export /*bundle*/ const Navigation = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [view, setView] = useState("HOME");

  const views = { home: routing.pushState("/home"), form: routing.pushState("/form") };

  async function getDataWithFetch() {
    const response = await fetch("https://my-json-server.typicode.com/Gabojcb/packages.exercises/products");
    const data: IProducts[] = await response.json();
    setProducts(data);
  }
  useEffect(() => {
    getDataWithFetch();
  }, []);

  const filterProducts = products.filter((product) => product.categories === category);

  const handleCategoryClick = (event) => {
    console.log("hiciste click");
    const category = event.currentTarget.dataset.category;
    setCategory(category);
  };

  const output = filterProducts.map((product) => (
    <Product
      key={product.name}
      name={product.name}
      brand={product.brand}
      price={product.price}
      src={product.src}
      category={product.category}
    />
  ));

  const handleChangeNavigation = (event) => {
    console.log(event.currentTarget.innerHTML);
    if (event.currentTarget.innerHTML === "HOME") {
      routing.pushState("/home");
    } else if (event.currentTarget.innerHTML === "ADD PRODUCTS") {
      routing.pushState("/form");
    }
  };
  return (
    <>
      <nav>
        <div className="container__logo">
          <p className="logo-shop color">SHOP REAL </p>
          <img src="images/images-shop-real/cart.png" className="logo-cart" alt="images cart" />
          <input type="text" className="input-searc" placeholder="search" />
        </div>
        <ul className="cont-ul">
          <li onClick={handleChangeNavigation}>MENU</li>
          <li className="nav__products">
            PRODUCTS
            <ul className="ul-second color">
              <li className="categories">
                CATEGORY
                <ul className="ul-third">
                  {["foods", "drinks", "clothes", "balls", "telephones", "consoles", "home", "tools"].map(
                    (category) => (
                      <li key={category} data-category={category} onClick={handleCategoryClick} className="li-product">
                        {category}
                      </li>
                    )
                  )}
                </ul>
              </li>
            </ul>
          </li>
          <li className="color" onClick={handleChangeNavigation}>
            ADD PRODUCTS
          </li>
        </ul>
      </nav>
      <div className="flex-product">{output}</div>
    </>
  );
};

export default Navigation;
