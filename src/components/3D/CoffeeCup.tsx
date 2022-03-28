import { useLoader } from "@react-three/fiber";
import React, { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const CoffeeCup = () => {
  const gltf = useLoader(GLTFLoader, "../../assets/models/coffee-cup.gltf");
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
};

export default CoffeeCup;
