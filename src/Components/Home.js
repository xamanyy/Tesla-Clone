import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        desp="Order Online for Touchless Delivery"
        bgi ="model-s.jpg"
        lftbtn="Custom Order"
        rghtbtn="Existing Inventory"
      />
      <Section
        title="Model Y"
        desp="Order Online for Touchless Delivery"
        bgi ="model-y.jpg"
        lftbtn="Custom Order"
        rghtbtn="Existing Inventory"
      />
      <Section
        title="Solar Panel"
        desp="Order Online for Touchless Delivery"
        bgi ="solar-panel.jpg"
        lftbtn="Custom Order"
        rghtbtn="Existing Inventory"
      />
      <Section
        title="Solar Roof"
        desp="Order Online for Touchless Delivery"
        bgi ="solar-roof.jpg"
        lftbtn="Custom Order"
        rghtbtn="Existing Inventory"
      />
      <Section
        title="Model X"
        desp="Order Online for Touchless Delivery"
        bgi ="model-x.jpg"
        lftbtn="Custom Order"
        rghtbtn="Existing Inventory"
      />
      <Section
        title="Interior"
        desp="Order Online for Touchless Delivery"
        bgi ="new-interior.jpg"
        lftbtn="Custom Order"
        rghtbtn="Existing Inventory"
      />
      <Section
        title="Accesories"
        desp=""
        bgi ="accessories.jpg"
        lftbtn="Shop Now"
      />
      <Section
        title="Model 3"
        desp="Order Online for Touchless Delivery"
        bgi ="model-3.jpg"
        lftbtn="Custom Order"
        rghtbtn="Existing Inventory"
      />
    
  
    </Container>
  );
}

export default Home

const Container = styled.div`

height:100vh;

`