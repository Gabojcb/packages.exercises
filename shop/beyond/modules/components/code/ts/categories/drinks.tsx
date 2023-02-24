import React from "react";
import { ComponentProduct } from "../component-product";

export /*bundle*/ const Drinks = () => {
    return(
        <>
            <ComponentProduct 
                product='Smoothie'
                brand='None'
                price='1.5$'
                src='images/images-shop-real/bebidas/batidos-fresa.png'
                categories='drinks'
            />
            <ComponentProduct 
                product='Coca-cola'
                brand='None'
                price='1.2$'
                src='images/images-shop-real/bebidas/bebida-coca-cola.png'
                categories='drinks'
            />
            <ComponentProduct 
                product='Coffee with cream'
                brand='None'
                price='1$'
                src='images/images-shop-real/bebidas/bebida-de-cafe-crema.png'
                categories='drinks'
            />
            <ComponentProduct 
                product='American beer'
                brand='American'
                price='1.2$'
                src='images/images-shop-real/bebidas/cerveza-americana.png'
                categories='drinks'
            />
            <ComponentProduct 
                product='Heineken beer'
                brand='Heineken'
                price='1.3$'
                src='images/images-shop-real/bebidas/cerveza-heineken.png'
                categories='drinks'
            />
            <ComponentProduct 
                product='Malta'
                brand='Venezolana'
                price='1.2$'
                src='images/images-shop-real/bebidas/malta-venezolana.png'
                categories='drinks'
            />
            <ComponentProduct 
                product='Pepsi'
                brand='Pepsi'
                price='2.2$'
                src='images/images-shop-real/bebidas/pepsi.png'
                categories='drinks'
            />
        </>
    );
}