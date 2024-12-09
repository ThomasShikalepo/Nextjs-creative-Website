"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const RenderModel = ({ children, className, interactable = false }) => {
  return (
    <Canvas
      className={clsx("w-screen h-screen relative", className)}
      style={{
        zIndex: 10, // Increase the z-index for visibility
        pointerEvents: interactable ? "auto" : "none", // Allow interaction based on `interactable` prop
      }}
    >
      <Suspense fallback={null}>
        {children}
      </Suspense>
      <Environment preset="dawn" />
    </Canvas>
  );
};

export default RenderModel;
