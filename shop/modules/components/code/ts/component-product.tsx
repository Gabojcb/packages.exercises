import * as React from "react";

interface IProduct {
  key: string;
  name: string;
  brand: string;
  price: string;
  src: string;
  categorie: string;
}

export /*bundle*/ const Product = (props: IProduct) => {
  const { name, brand, price, src, categorie } = props;
  return (
    <div className="container">
      <div className="product">
        <div className="container__image">
          <img className="product__image" src={src} alt={name} />
        </div>
        <div className="container__info">
          <p className="data">
            Product: <span className="key-product">{name}</span>
          </p>
          <p className="data">
            Brand: <span className="key-product">{brand}</span>
          </p>
          <p className="data">
            Categorie: <span className="key-product">{categorie}</span>
          </p>
          <p className="data">
            Price: <span className="key-product">{price}</span>
          </p>
        </div>
        <div className="container__button">
          <button className="btn-buy">Buy</button>
        </div>
      </div>
    </div>
  );
};
