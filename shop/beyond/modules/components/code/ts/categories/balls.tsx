import React from "react";
import { useState, useEffect } from "react";
import { ComponentProduct } from "../component-product";

export /*bundle*/ const Balls = () => {
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

    return(
        <>
            {output}     
        </>
    )
}    