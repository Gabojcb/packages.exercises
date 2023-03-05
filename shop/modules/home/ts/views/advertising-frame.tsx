import * as React from "react";

export default function AdvertisingFrame({ h2, url }) {
  return (
    <section className="advertising-frame">
      <div className="flex-start">
        <h2 className="advertising__h2">
          SHOP REAL your virtual store with up to 50% of prices. CREATE YOUR OWN PRODUCTS NOW!
        </h2>
        <img src="images/rapido.png" alt="logo rapido" className="advertising__logo" />
      </div>
    </section>
  );
}
