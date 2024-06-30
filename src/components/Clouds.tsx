import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";

export default function Clouds() {
  const [init, setInit] = useState(false);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: "#1e1e2e",
      },
      fullScreen: {
        zIndex: -1,
      },
      particles: {
        color: {
          value: "#fdebf3",
        },
        move: {
          enable: true,
          direction: "bottom",
          outModes: "out",
          speed: 1.6,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100,
        },
        opacity: {
          value: 0.7,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 10,
        },
        wobble: {
          enable: true,
          distance: 10,
          speed: 10,
        },
        zIndex: {
          value: { min: -1, max: 100 },
        },
      },
    }),
    [],
  );

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log(container);
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="-z-10"
      />
    );
  }
  return <></>;
}
