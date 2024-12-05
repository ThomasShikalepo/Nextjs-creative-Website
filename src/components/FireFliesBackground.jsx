"use client";
import React, { useEffect, useState } from "react";

const createFirefly = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

const FireFliesBackground = () => {
  const [Fireflies, setFireflies] = useState([]);

  useEffect(() => {
    const addFireflyPeriodically = () => {
      const newFireFly = createFirefly();
      setFireflies((currentFireflies) => [
        ...currentFireflies.slice(-100),
        newFireFly,
      ]);
    };

    const interval = setInterval(addFireflyPeriodically, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflower-hidden">
      {Fireflies.map((firefly) => {
        return (
          <div
            key={firefly.id}
            className="absolute rounded-full w-[12px] h-[12px] bg-firefly-radial"
            style={{
              top: firefly.top,
              left: firefly.left,
              animation: `move ${firefly.animationDuration} infinite alternate`,
            }}
          >
            {" "}
          </div>
        );
      })}
    </div>
  );
};

export default FireFliesBackground;
