var ObstacleDefinition = function (sheet, srcx, srcy, variations, lethal, width, height) {
    "use strict";

    this.sheet = sheet;

    if (width !== undefined) {
        this.width = width;
    }
    else {
        this.width = settings.spriteSize;
    }

    if (height !== undefined) {
        this.height = height;
    }
    else {
        this.height = settings.spriteSize;
    }

    this.srcx = srcx * this.width;
    this.srcy = srcy * this.height;

    if (variations !== undefined) {
        this.variations = variations;
    }
    else {
        this.variations = 1;
    }

    if (lethal !== undefined) {
        this.lethal = lethal;
    }
    else {
        this.lethal = true;
    }
};

// land obstacles
var car1 = new ObstacleDefinition(resources.ch1Sheet, 0, 0, 4);
var car2 = new ObstacleDefinition(resources.ch1Sheet, 0, 1, 4);
var car3 = new ObstacleDefinition(resources.ch1Sheet, 0, 2, 4);
var car4 = new ObstacleDefinition(resources.ch1Sheet, 0, 3, 4);
var bus = new ObstacleDefinition(resources.ch1Sheet, 0, 4, 2, true, settings.spriteSize * 2);

// water obstacle
var rock = new ObstacleDefinition(resources.ch1Sheet, 0, 5);
var boardLeft = new ObstacleDefinition(resources.ch1Sheet, 4, 5);
var boardRight = new ObstacleDefinition(resources.ch1Sheet, 6, 5);
var logLeft = new ObstacleDefinition(resources.ch1Sheet, 0, 6);
var logMidLeft = new ObstacleDefinition(resources.ch1Sheet, 2, 6);
var logMidRight = new ObstacleDefinition(resources.ch1Sheet, 4, 6);
var logRight = new ObstacleDefinition(resources.ch1Sheet, 6, 6);
var gatorTail = new ObstacleDefinition(resources.ch1Sheet, 0, 7);
var gatorBody = new ObstacleDefinition(resources.ch1Sheet, 2, 7);
var gatorHead = new ObstacleDefinition(resources.ch1Sheet, 4, 7);

