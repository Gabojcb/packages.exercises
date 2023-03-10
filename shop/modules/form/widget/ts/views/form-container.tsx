import * as React from "react";
import { useState } from "react";

interface IForm {
  name: string;
  price: string;
  src: string;
  brand: string;
  category: string;
}

export /*bundle*/ const FormContainer = () => {
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
    <article className="container-flex__form">
      <section className="background-left">
        <h2 className="form__description">Add your product data</h2>

        <ol className="list-guie">
          {"what should i write? "}

          <li className="ul__li-list">&#x1f536; 1.add the name of your product &#x2714;&#xfe0f;</li>
          <li className="ul__li-list">&#x1f536; 2.specify your price &#x2714;&#xfe0f;</li>
          <li className="ul__li-list">&#x1f536; 3.what brand is it &#x2714;&#xfe0f;</li>
          <li className="ul__li-list">&#x1f536; 4.your address by src &#x2714;&#xfe0f;</li>
          <li className="ul__li-list">&#x1f536; 5.and the corresponding category &#x2714;&#xfe0f;</li>
        </ol>
      </section>

      <form className="form__products" onSubmit={handleVerifyData}>
        <section className="container-logo-flex">
          <p className="form__p">¡CREATE YOUR PRODUCT NOW!</p>
          <img src="images/votacion-en-linea.png" className="form__images-logo" alt="images the form" />
        </section>

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
