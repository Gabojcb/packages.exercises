import * as React from "react";
import { useState, useEffect } from "react";
import { Product } from "./component-product";
import { ProductForm } from "./product-form";

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
  const [componentProduct, setComponentProduct] = useState(null);
  const [isCLicked, setIsClick] = useState(false);

  async function getDataWithFetch() {
    const response = await fetch("https://my-json-server.typicode.com/Gabojcb/packages.exercises/products");
    const data: IProducts[] = await response.json();
    setProducts(data);
  }
  useEffect(() => {
    getDataWithFetch();
  }, []);

  const specs: IProducts = {
    key: "",
    product: "",
    price: "",
    src: "",
    brand: "",
    category: "",
  };

  const getProductsByCategory = (category) => products.filter((product) => product.category === category);

  const handleCategoryClick = (category) => setComponentProduct(category);

  const getProductComponentsByCategory = (category) =>
    getProductsByCategory(category).map((product) => (
      <Product
        key={product.name}
        name={product.name}
        brand={product.brand}
        price={product.price}
        src={product.src}
        category={product.category}
      />
    ));

  const handleClickChange = () => setIsClick(true);

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
          <li className="color" onClick={handleClickChange}>
            Add Products
          </li>
        </ul>
      </nav>
      <div className="flex-product">{componentProduct && getProductComponentsByCategory(componentProduct)}</div>
      <div className="form__container">{isCLicked === true && <ProductForm />}</div>
    </>
  );
};

export default Navigation;
