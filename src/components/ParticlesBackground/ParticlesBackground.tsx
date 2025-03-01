import {useEffect, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim";
import {useTheme} from "styled-components";

import {particlesOptions} from "@c/ParticlesBackground/particlesConfig";

export const ParticlesBackground = () => {
    const theme = useTheme();

    const [init, setInit] = useState(false);

    const updatedParticlesOptions = {
        ...particlesOptions,
        particles: {
            ...particlesOptions.particles,
            color: {
                ...particlesOptions.particles.color,
                value: theme.colors.primary,
            },
            links: {
                ...(particlesOptions.particles.links || {}),
                color: {
                    value: theme.colors.primary,
                },
            }
        }
    };

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return null;

    return <Particles id="tsparticles" options={updatedParticlesOptions}/>;
};