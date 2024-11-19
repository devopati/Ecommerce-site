"use client";

import { Carousel } from "flowbite-react";
import { CaurselTheme } from "../theme/caursel-theme";

export function HomeCoursel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel theme={CaurselTheme}>
        <img
          src="https://img.freepik.com/free-psd/flat-design-sale-template_23-2149948914.jpg?semt=ais_hybrid"
          alt="..."
        />
        <img
          src="https://img.freepik.com/free-psd/sale-banner-template-design_23-2149198214.jpg?semt=ais_hybrid"
          alt="..."
        />
        <img
          src="https://img.freepik.com/premium-vector/sale-banner-template-design_902944-1087.jpg?semt=ais_hybrid"
          alt="..."
        />
      </Carousel>
    </div>
  );
}
