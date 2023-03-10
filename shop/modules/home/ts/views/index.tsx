import * as React from "react";
import { Navigation, FooterSection, Recommendations } from "shop/components";

export /*bundle*/
function Page(): JSX.Element {
  const srcImg = {
    img1: "images/images-recommendations/men-testimonio.png",
    img2: "images/images-recommendations/girl-testimonio.png",
    img3: "images/images-recommendations/woman-testimonio.png",
  };

  return (
    <>
      <Navigation />
      <main>
        <section className="services-container">
          <div className="services__div-info">
            <h2 className="services__h2">Business Services For Companies</h2>
            <div className="container-p">
              <p className="services__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem ex, vulputate ut dui a, lacinia
                semper metus. Aenean porta porttitor urna, vitae pretium sem Donec in nunc elit. Duis magna metus,
                tincidunt eget fermentum non, ultricies at odio. Quisque vitae mi in ante ullamcorper viverra fermentum
                nec nunc. Nulla facilisi
              </p>
            </div>
            <div className="services__statistics">
              <p className="statistics__p">Safe Delivery 100%</p>
              <div className="percentage one"></div>
            </div>
            <div className="services__statistics">
              <p className="statistics__p">Opportunity Spotting 76%</p>
              <div className="percentage two"></div>
            </div>
            <div className="services__statistics">
              <p className="statistics__p">Online Marketing 90%</p>
              <div className="percentage three"></div>
            </div>
          </div>
          <div className="services__images">
            <img className="services__img" src="images/images-services/services.jpg" alt="images services" />
          </div>
        </section>

        <section className="recommendations-container">
          <h2 className="recommendations__h2">Read Customer Testimonials</h2>
          <div className="recommendations-flex">
            <Recommendations
              src={srcImg.img1}
              alt="testimonio men"
              paragraph="tincidunt eget fermentum non, ultricies at odio. Quisque vitae mi in ante ullamcorper viverra fermentum nec nunc. Nulla facilisi. Suspendisse aliquam ex arcu, at mollis magna bibendum in"
              name="Suspendisse"
              job="Pretium"
            />

            <Recommendations
              src={srcImg.img2}
              alt="testimonio girl"
              paragraph="Proin elementum odio tellus, eget fermentum tortor interdum nec. Mauris pulvinar mattis libero, vel vehicula magna laoreet nec. Pellentesque massa erat, tempor vitae vehicula ac"
              name="Aenean "
              job="Pellentesque "
            />

            <Recommendations
              src={srcImg.img3}
              alt="testimonio woman"
              paragraph=" Donec porta nisi ut tellus laoreet aliquet. Sed iaculis dolor justo, ut ornare turpis porttitor vitae. Vivamus faucibus sem at faucibus ultrices"
              name="Vestibulum"
              job="Quisque "
            />
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
