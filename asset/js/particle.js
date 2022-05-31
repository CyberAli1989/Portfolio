$(function () {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 43,
                "density": {
                    "enable": true,
                    "value_area": 1025.908125981517
                }
            },
            "color": {
                "value": "#444444"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 1,
                    "color": "#444444"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 11.987245570712759,
                    "size_min": 4.794898228285103,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "bottom",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 299.68113926781893,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 215.77042027282963,
                    "size": 263.7194025556807,
                    "duration": 2,
                    "opacity": 0.07991497047141839,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": false
    });
    // var count_particles, stats, update;
    // stats = new Stats;
    // stats.setMode(0);
    // stats.domElement.style.position = 'absolute';
    // stats.domElement.style.left = '0px';
    // stats.domElement.style.top = '0px';
    // document.body.appendChild(stats.domElement);
    // count_particles = document.querySelector('.js-count-particles');
    // update = function () {
    //     stats.begin();
    //     stats.end();
    //     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    //         count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    //     }
    //     requestAnimationFrame(update);
    // };
    // requestAnimationFrame(update);
});