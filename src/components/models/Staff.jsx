/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: MrPuppet (https://sketchfab.com/MrPuppet)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/wizard-staff-8f92ada4d88f4e5d9f8784c34522e8af
Title: wizard staff
*/
"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Staff(props) {
  const { nodes, materials } = useGLTF("/models/staff-transformed.glb");

  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.007;
  });

  return (
    <group
      {...props}
      dispose={null}
      scale={[45, 45, 45]}
      position={[0, -2, 0]}
      ref={modelRef}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wizard_staff_lambert4_0.geometry}
        material={materials.lambert4}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wizard_staff_blinn1_0.geometry}
        material={materials.blinn1}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wizard_staff_lambert3_0.geometry}
        material={materials.lambert3}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/models/staff-transformed.glb");