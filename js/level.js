var Level = function (chapter, stage) {
    this.chapter = chapter;
    this.stage = stage;

    this.obstacles = [];
    this.goals = [];
};

Level.prototype.loadGoals = function () {
    'use strict';

    this.goals = [];

    switch (this.chapter) {
        case (1):
            this.goals.push(32, 128, 224, 320, 416);
            break;
    }
};

Level.prototype.loadLevel = function () {
    'use strict';

    this.obstacles = [];

    if (this.chapter == 1 && this.stage == 1) {
        // street
        // lane 0
        this.obstacles.push(
            [
                new Obstacle(car1, 0, 100, 'right', 1),
                new Obstacle(car1, 0, 400, 'right', 1)
            ]);
        // lane 1
        this.obstacles.push(
            [
                new Obstacle(car2, 1, 0, 'left', 1),
                new Obstacle(car2, 1, 200, 'left', 1),
                new Obstacle(car2, 1, 400, 'left', 1)
            ]);
        // lane 2
        this.obstacles.push(
            [
                new Obstacle(car3, 2, 100, 'right', 1),
                new Obstacle(car3, 2, 300, 'right', 1)
            ]);
        // lane 3
        this.obstacles.push(
            [
                new Obstacle(car4, 3, 250, 'left', 2),
                new Obstacle(car4, 3, 325, 'left', 2),
                new Obstacle(car4, 3, 400, 'left', 2)
            ]);
        // lane 4
        this.obstacles.push(
            [
                new Obstacle(bus, 4, 50, 'left', 0.5),
                new Obstacle(bus, 4, 296, 'left', 0.5)
            ]);

        // sidewalk
        // lane 5
        this.obstacles.push([]);

        // river
        // lane 6
        this.obstacles.push(
            [
                new Obstacle(rock, 6, 0, 'left', 1),
                new Obstacle(rock, 6, 32, 'left', 1),
                new Obstacle(rock, 6, 64, 'left', 1),
                new Obstacle(rock, 6, 160, 'left', 1),
                new Obstacle(rock, 6, 192, 'left', 1),
                new Obstacle(rock, 6, 224, 'left', 1),
                new Obstacle(rock, 6, 320, 'left', 1),
                new Obstacle(rock, 6, 352, 'left', 1),
                new Obstacle(rock, 6, 384, 'left', 1)
            ]);
        //lane 7
        this.obstacles.push(
            [
                new Obstacle(boardLeft, 7, 100, 'right', 2),
                new Obstacle(boardRight, 7, 132, 'right', 2),
                new Obstacle(boardLeft, 7, 400, 'right', 2),
                new Obstacle(boardRight, 7, 432, 'right', 2)
            ]);
        // lane 8
        this.obstacles.push(
            [
                new Obstacle(logLeft, 8, 100, 'left', 0.5),
                new Obstacle(logMidLeft, 8, 132, 'left', 0.5),
                new Obstacle(logMidRight, 8, 164, 'left', 0.5),
                new Obstacle(logRight, 8, 196, 'left', 0.5),
                new Obstacle(logLeft, 8, 300, 'left', 0.5),
                new Obstacle(logMidLeft, 8, 332, 'left', 0.5),
                new Obstacle(logMidRight, 8, 364, 'left', 0.5),
                new Obstacle(logRight, 8, 396, 'left', 0.5)
            ]);
        // lane 9
        this.obstacles.push(
            [
                new Obstacle(gatorTail, 9, 100, 'right', 1),
                new Obstacle(gatorBody, 9, 132, 'right', 1),
                new Obstacle(gatorHead, 9, 164, 'right', 1),
                new Obstacle(gatorTail, 9, 400, 'right', 1),
                new Obstacle(gatorBody, 9, 432, 'right', 1),
                new Obstacle(gatorHead, 9, 464, 'right', 1)
            ]);
        // lane 10
        this.obstacles.push(
            [
                new Obstacle(rock, 10, 0, 'left', 1),
                new Obstacle(rock, 10, 32, 'left', 1),
                new Obstacle(rock, 10, 64, 'left', 1),
                new Obstacle(rock, 10, 160, 'left', 1),
                new Obstacle(rock, 10, 192, 'left', 1),
                new Obstacle(rock, 10, 224, 'left', 1),
                new Obstacle(rock, 10, 320, 'left', 1),
                new Obstacle(rock, 10, 352, 'left', 1),
                new Obstacle(rock, 10, 384, 'left', 1)
            ]);
    }
};
