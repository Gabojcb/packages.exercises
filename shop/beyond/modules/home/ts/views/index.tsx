import * as React from "react";
import { Navigation , Main } from 'beyond/components';


export /*bundle*/
function Page(): JSX.Element {

  return (
    <>
      <Navigation  />
       <Main />
       <div className="container-output">
       </div>
       <div className="container-output">
       </div>
      <footer className="container__footer" id="footer-id">
        <div className="info__footer"><p className="message__infor">CONTACT</p></div>
        <div className="space-networks">
          <div className="flex">
            <img src="images/images-shop-real/facebook.png" alt="logo facebook" className="images-footer"/>
            <p className="networks">Shop Real</p>
          </div>
          <div className="flex">
            <img src="images/images-shop-real/instagram.png" alt="logo instagram" className="images-footer"/>
            <p className="networks">shopreal23</p>
          </div>
          <div className="flex">
            <img src="images/images-shop-real/gorjeo.png" alt="logo twitter" className="images-footer"/>
            <p className="networks">Shop Real</p>
          </div> 
        </div>
      <div className="rights">
        all rights reserved to <span className="name-span"> GaboDeveloper</span></div>
      </footer>
    </>
  );
}
