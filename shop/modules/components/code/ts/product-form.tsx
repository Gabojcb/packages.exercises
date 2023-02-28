import * as React from "react";
import { useState } from "react";

interface IForm {
  name: string;
  price: string;
  src: string;
  brand: string;
  category: string;
}

export /*bundle*/ const ProductForm = () => {
  const specs: IForm = {
    name: "",
    price: "",
    src: "",
    brand: "",
    category: "",
  };
  const [formData, setFormData] = useState<IForm>(specs);

  const { name, price, src, brand, category } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleVerifyData = (e) => {
    e.preventDefault();

    console.log(formData);
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(localStorage.getItem("formData"));
  };

  return (
    <article>
      <h2 className="form__description">Add your product data</h2>

      <form className="form__products" onSubmit={handleVerifyData}>
        <section>
          <label className="description">Name</label>
          <input
            name="name"
            type="text"
            className="form__input"
            onChange={onChange}
            value={name}
            placeholder="product name"
          />
        </section>

        <section>
          <label className="description">Price</label>
          <input
            name="price"
            type="number"
            className="form__input"
            onChange={onChange}
            value={price}
            placeholder="product price"
          />
        </section>

        <section>
          <label className="description">Brand</label>
          <input
            name="brand"
            type="text"
            className="form__input"
            onChange={onChange}
            value={brand}
            placeholder="product brand"
          />
        </section>

        <section>
          <label className="description">Src</label>
          <input
            name="src"
            type="text"
            className="form__input"
            onChange={onChange}
            value={src}
            placeholder="product src"
          />
        </section>

        <section>
          <label className="description">Category</label>
          <input
            name="category"
            type="text"
            className="form__input"
            onChange={onChange}
            value={category}
            placeholder="product category"
          />
        </section>
        <button className="form__button-send">send</button>
      </form>
    </article>
  );
};
