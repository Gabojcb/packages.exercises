import * as React from "react";
import { useState, useEffect } from "react";
import { ComponentProduct } from "./component-product";

export /*bundle*/ const Navigation = () => {
  const [arrayProducts, setArrayProducts] = useState([]);
  const [componentProduct, setComponentProduct] = useState(null);

  async function getDataWithFetch() {
    const response = await fetch("https://my-json-server.typicode.com/Gabojcb/packages.exercises/products");
    const data = await response.json();
    setArrayProducts(data);
  }
  useEffect(() => {
    getDataWithFetch();
  }, []);

  const getProductsByCategory = (category) => arrayProducts.filter((product) => product.categories === category);

  const handleCategoryClick = (category) => {
    setComponentProduct(category);
  };

  const getProductComponentsByCategory = (category) =>
    getProductsByCategory(category).map((product) => (
      <ComponentProduct
        key={product.name}
        product={product.name}
        brand={product.brand}
        price={product.price}
        src={product.src}
        categories={product.categories}
      />
    ));

  return (
    <>
      <nav>
        <div className="container__logo">
          <p className="logo-shop color">Shop Real </p>
          <img src="images/images-shop-real/cart.png" className="logo-cart" alt="images cart" />
          <input type="text" className="input-searc" placeholder="search" />
        </div>
        <ul className="cont-ul">
          <li>Menu</li>
          <li className="nav__products">
            Products
            <ul className="ul-second color">
              <li className="categories">
                Categories
                <ul className="ul-third">
                  {["foods", "drinks", "clothes", "balls", "telephones", "consoles", "home", "tools"].map(
                    (category) => (
                      <li key={category} onClick={() => handleCategoryClick(category)} className="li-product">
                        {category}
                      </li>
                    )
                  )}
                </ul>
              </li>
            </ul>
          </li>
          <li className="color">
            <a href="#footer-id" className="anchorage">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex-product">{componentProduct && getProductComponentsByCategory(componentProduct)}</div>
    </>
  );
};

export default Navigation;
