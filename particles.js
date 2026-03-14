const particleConfig = {

particles: {

number: { value: 80 },

color: { value: "#1DCD9F" },

shape: { type: "circle" },

opacity: { value: 0.5 },

size: { value: 3 },

line_linked: {
enable: true,
distance: 150,
color: "#1DCD9F",
opacity: 0.4,
width: 1
},

move: {
enable: true,
speed: 2
}

},

interactivity: {

detect_on: "canvas",

events: {

onhover: {
enable: true,
mode: "repulse"
},

onclick: {
enable: true,
mode: "push"
}

},

modes: {

repulse: {
distance: 100
},

push: {
particles_nb: 4
}

}

},

retina_detect: true

};

// HERO PARTICLES
particlesJS("particles-js", particleConfig);

// PROJECT PARTICLES
particlesJS("particles-projects", particleConfig);