import React from "react";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { Header } from "./components/design";
import { CoffeeCup } from "./components/3D";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 22px;
  padding: 0 20px;
`;

const DesignWindow = styled.div`
  height: 500px;
  border: 2px solid grey;
  border-radius: 20px;
`;

const SideMenu = styled.div``;

const CanvasContainer = styled.div`
  height: 100%;
`;

function App() {
  return (
    <>
      <Header />
      <Container>
        <DesignWindow>
          <CanvasContainer id="canvas-container">
            <Canvas>
              <ambientLight intensity={0.1} />
              <directionalLight color="red" position={[0, 0, 5]} />
              <CoffeeCup />
            </Canvas>
          </CanvasContainer>
        </DesignWindow>
        <SideMenu>
          <h2>Make your design</h2>
        </SideMenu>
      </Container>
    </>
  );
}

export default App;
