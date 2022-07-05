import { memo } from "react";
import Particles from "react-tsparticles";
import { loadSnowPreset } from "tsparticles-preset-snow";

const ParticleBg = () => {
  const particlesInit = async (main: any) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadSnowPreset(main);
  };

  const particlesLoaded: any = (container: any) => {
    console.log("success loaded particle");
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        preset: "Snow",

        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default memo(ParticleBg);

// import Particles from "react-tsparticles";
// import type { Engine } from "tsparticles-engine";
// import { loadSnowPreset } from "tsparticles-preset-snow";

// export class ParticlesContainer extends P {
//   // this customizes the component tsParticles installation
//   async customInit(engine: Engine): Promise<void> {
//     // this adds the preset to tsParticles, you can safely use the
//     await loadSnowPreset(engine);
//   }

//   render() {
//     const options = {
//       preset: "snow",
//     };

//     return <Particles options={options} init={this.customInit} />;
//   }
// }
