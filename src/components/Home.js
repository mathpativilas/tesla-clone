import React from "react";
import styled from "styled-components";
import Section from "./Section";


function Home() {




  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftbtntext="custom order"
        rightbtntext="Existing Inventory"
        backimg="model-s.jpg"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftbtntext="custom order"
        rightbtntext="Existing Inventory"
        backimg="model-3.jpg"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftbtntext="custom order"
        rightbtntext="Existing Inventory"
        backimg="model-x.jpg"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftbtntext="custom order"
        rightbtntext="Existing Inventory"
        backimg="model-y.jpg"
      />

      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        leftbtntext="order now"
        rightbtntext="Learn More"
        backimg="solar-panel.jpg"
      />

      <Section
        title="Solar for New Roofs"
        description="Solar Roof Less Than a New Roof Plus Solar Panels"
        leftbtntext="order now"
        rightbtntext="Learn More"
        backimg="solar-roof.jpg"
      />
      <Section
        title="Accessories"
        description=""
        leftbtntext="shop now"
        rightbtntext=""
        backimg="accessories.jpg"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  background-color: darkcyan;
`;
