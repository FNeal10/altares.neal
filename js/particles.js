
(async () => {

    // Register the Slim bundle
    await loadSlim(tsParticles);

    // Initialize particles
    await tsParticles.load({
        id: "tsparticles",

        options: {
            fullScreen: {
                enable: false
            },

            background: {
                color: "#000000"
            },

            particles: {
                number: {
                    value: 150,
                    density: {
                        enable: true
                    }
                },

                color: {
                    value: "#777777"
                },

                opacity: {
                    value: 0.25,
                    random: true
                },

                size: {
                    value: {
                        min: 1,
                        max: 2
                    }
                },

                links: {
                    enable: true,
                    distance: 150,
                    color: "#777777",
                    opacity: 0.35,
                    width: 1
                },

                move: {
                    enable: true,
                    speed: 0.5,
                    random: true,
                    outModes: {
                        default: "out"
                    }
                }
            },

            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab"
                    }
                },

                modes: {
                    grab: {
                        distance: 140,
                        links: {
                            opacity: 0.25
                        }
                    }
                }
            },

            detectRetina: true
        }
    });

})();
