import * as React from "react";
import { useState } from "react";

export /*bundle*/ const ProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [src, setSrc] = useState("");
  const [category, setCategoty] = useState("");
  const [formData, setFormData] = useState({});

  const handleVerifyData = (e) => {
    e.preventDefault();

    console.log(formData);
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(localStorage.getItem("formData"));
  };

  return (
    <form className="form__products" onSubmit={handleVerifyData}>
      <p className="form__description">Add your product data</p>

      <div className="container-input">
        <div>
          <label className="description">Name</label>
          <input
            name="name"
            type="text"
            className="form__input"
            onChange={(e) => {
              setName(e.target.value);
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
            value={name}
            placeholder="product name"
          />
        </div>

        <div>
          <label className="description">Price</label>
          <input
            name="price"
            type="number"
            className="form__input"
            onChange={(e) => {
              setPrice(e.target.value);
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
            value={price}
            placeholder="product price"
          />
        </div>

        <div>
          <label className="description">Brand</label>
          <input
            name="brand"
            type="text"
            className="form__input"
            onChange={(e) => {
              setBrand(e.target.value);
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
            value={brand}
            placeholder="product brand"
          />
        </div>

        <div>
          <label className="description">Src</label>
          <input
            name="src"
            type="text"
            className="form__input"
            onChange={(e) => {
              setSrc(e.target.value);
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
            value={src}
            placeholder="product src"
          />
        </div>

        <div>
          <label className="description">Category</label>
          <input
            name="category"
            type="text"
            className="form__input"
            onChange={(e) => {
              setCategoty(e.target.value);
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
            value={category}
            placeholder="product category"
          />
        </div>
        <button className="form__button-send">send</button>
      </div>
    </form>
  );
};
