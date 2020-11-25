import React from "react";
import Icon1 from "../../assets/images/car.svg";
import Icon2 from "../../assets/images/secure_data.svg";
import Icon3 from "../../assets/images/data_report.svg";
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH1,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Service</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} alt="" />
            <ServicesH2>Reduce Expenses</ServicesH2>
            <ServicesP>
              we help reduce fees and increase your overall revenue.
            </ServicesP>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={Icon2} alt="" />
            <ServicesH2>Vitual Offices</ServicesH2>
            <ServicesP>
              You can access our platform anywhere in the world.
            </ServicesP>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={Icon3} alt="" />
            <ServicesH2>Premium Benefits</ServicesH2>
            <ServicesP>
              Unlock our special membership car that returns 5% cash back.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
