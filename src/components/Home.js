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
        backimg="model-y.jpg"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  background-color: darkcyan;
`;
