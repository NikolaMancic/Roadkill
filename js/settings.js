var settings = {
    // globals
    canvas: document.getElementById('canvas'),
    context: this.canvas.getContext('2d'),

    // default tile size
    spriteSize: 32,

    // audio
    sound: true,
    music: true,

    // controls
    left: 37,
    up: 38,
    right: 39,
    down: 40,

    // debug
    showHitboxes: false,

    // animation
    animationSpeed: 300 // milliseconds
};
