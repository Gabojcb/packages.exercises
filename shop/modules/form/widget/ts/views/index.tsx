import * as React from "react";
import { FormContainer } from "./form-container";
import { Navigation, FooterSection } from "shop/components";

export /*bundle*/
function View() {
  return (
    <>
      <Navigation />
      <section className="form__container">
        <FormContainer />
      </section>
      <FooterSection />
    </>
  );
}
