import React from "react";
import { ComponentProduct } from "../component-product";

export /*bundle*/ const Consoles = () => {
    return(
        <>
            <ComponentProduct 
                product='Ps5'
                brand='Sony'
                price='900$'
                src='images/images-shop-real/consolas/ps5.png'
                categories='consoles'
            />
            <ComponentProduct 
                product='Psp'
                brand='Sony'
                price='100$'
                src='images/images-shop-real/consolas/psp.png'
                categories='consoles'
            />
            <ComponentProduct 
                product='switch'
                brand='Nintendo'
                price='500$'
                src='images/images-shop-real/consolas/switch.png'
                categories='consoles'
            />
            <ComponentProduct 
                product='Xbox 360'
                brand='Microsoft'
                price='120$'
                src='images/images-shop-real/consolas/xbox-360.png'
                categories='consoles'
            />
            <ComponentProduct
                product='Xbox one'
                brand='Microsoft'
                price='600$'
                src='images/images-shop-real/consolas/xbox-one.png'
                categories='consoles'
            />
        </>
    )
}