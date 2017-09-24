'use strict';

var chapter;
var stage;
var level;

var player;

var obstacles = [];
var props = [];

function init() {
    settings.canvas.width = 480;
    settings.canvas.height = 480;

    chapter = 1;
    stage = 1;

    level = new Level(chapter, stage);
    level.loadLevel();
    level.loadGoals();

    obstacles = level.obstacles;

    player = new Player(level, props);
    player.setHitbox(5, 3, 15, 27);
    player.reset();

    window.addEventListener('keydown', player.move.bind(player), false);
    window.requestAnimationFrame(update)
}

function update() {
    settings.context.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
    settings.context.drawImage(resources.background, 0, 0);

    // draw misc sprites (ie. splats)
    if (props.length > 0) {
        for (var i = 0; i < props.length; i++) {
            props[i].draw();
        }
    }

    for (i = 0; i < obstacles.length; i++) {
        for (var j = 0; j < obstacles[i].length; j++) {
            obstacles[i][j].move();
            obstacles[i][j].draw();

            if (settings.showHitboxes) {
                obstacles[i][j].drawHitbox();
            }
        }

        if (player.floating) {
            player.float();
        }

        player.draw();
        if (settings.showHitboxes) {
            player.drawHitbox();
        }
    }

    // If on an occupied land lane
    if (player.lane >= 0 && player.lane <= 5
        && obstacles[player.lane].length > 0) {
        for (i = 0; i < obstacles[player.lane].length; i++) {
            // die if hit
            if (player.isColliding(obstacles[player.lane][i])) {
                player.die('land');
                break;
            }
        }
    }
    // If on an occupied water lane
    else if (player.lane >= 6 && player.lane <= 10
        && obstacles[player.lane].length > 0) {
        var waterCollision = true;

        // scan whole lane before concluding anything about collision
        for (i = 0; i < obstacles[player.lane].length; i++) {
            if (player.isColliding(obstacles[player.lane][i])) {
                // snap to the object
                player.setFloatTarget(obstacles[player.lane][i]);
                waterCollision = false;
                break;
            }
        }

        // die if on water
        if (waterCollision) {
            player.die('water');
        }
    }

    if (player.lives > 0)
        window.requestAnimationFrame(update);
}

init();
