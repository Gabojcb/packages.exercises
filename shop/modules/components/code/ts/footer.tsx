import * as React from "react";

export /*bundle*/ function FooterSection() {
  return (
    <footer className="container__footer" id="footer-id">
      <div className="info__footer">
        <p className="message__infor">CONTACT</p>
      </div>
      <div className="space-networks">
        <section className="sing-up">
          <div>
            <h2>Let's be honest</h2>
            <p>You have to enter your email if you want to receive offer notifications</p>
          </div>
          <input type="email" placeholder="jhondoe@gmail.com" />
          <button>to subscribe</button>
        </section>

        <section className="links">
          <div className="footer__info">
            <h3>SERVICES</h3>
            <p>Gift Card</p>
            <p>Mobile App</p>
            <p>Shipping & Delivery</p>
            <p>Order Pickup</p>
            <p>Account Signup</p>
            <p>Shop by location</p>
            <p>Idea & Guides</p>
          </div>

          <div className="footer__info">
            <h3>ABOUT</h3>
            <p>about shopcart</p>
            <p>carrerts</p>
            <p>New & Blog</p>
            <p>Help</p>
            <p>Press Center</p>
            <p>Shop by location</p>
            <p>Idea & Guides</p>
          </div>

          <div className="footer__info">
            <h3>HELP</h3>
            <p>Shopcart Help</p>
            <p>Return</p>
            <p>track orders</p>
            <p>contact us</p>
            <p>feedback</p>
            <p>sadasdasd</p>
            <p>Security & fraud</p>
          </div>
        </section>

        <section className="networks">
          <div className="networks__flex-row">
            <img src="images/images-networks/facebook.png" className="networks__logo" alt="facebook logo" />
            <p>Shop Real</p>
          </div>

          <div className="networks__flex-row">
            <img src="images/images-networks/instagram.png" className="networks__logo" alt="instagram logo" />
            <p>shopreal</p>
          </div>

          <div className="networks__flex-row">
            <img src="images/images-networks/twitter.png" className="networks__logo" alt="twitter logo" />
            <p>Shop Real</p>
          </div>

          <div className="networks__flex-row">
            <img src="images/images-networks/whatsapp.png" className="networks__logo" alt="whatsapp logo" />
            <p>0-3333-222-99</p>
          </div>
        </section>
      </div>
      <div className="rights">
        all rights reserved to <span className="name-span"> GaboDeveloper</span>
      </div>
    </footer>
  );
}
