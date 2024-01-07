import React, { useRef, useState, useEffect } from "react";
import {
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
} from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import Molly from "./Molly";

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new Vector3();

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.05);
    camera.lookAt(0, 0, 0);
  });
}

export default function Experience() {
  const zz = useGLTF("./molly.glb");

  return (
    <>
      <color args={["#e8ac74"]} attach="background" />

      <Environment preset="city" />
      <ambientLight intensity={0.7} />
      <PresentationControls
        global
        // rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        // azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <Molly />
        </Float>
      </PresentationControls>
      <Rig />

      {/* <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} /> */}
    </>
  );
}
