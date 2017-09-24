var Obstacle = function (template, lane, x, direction, speed) {
    'use strict';

    this.canvas = settings.canvas;
    this.context = settings.context;

    this.sprite = template.sheet;
    this.width = template.width;
    this.height = template.height;

    this.lethal = template.lethal;

    // x, y position in sprite sheet
    if (template.variations > 1)
        this.srcx = template.srcx + Math.floor(Math.random() * template.variations) * 2 * this.width;
    else
        this.srcx = template.srcx;

    this.srcy = template.srcy;

    // lanes are numbered from the bottom
    // lane = map height - (grass + sidewalk) - lane number
    this.lane = lane;
    this.x = x;
    this.y = (14 - 2 - lane) * this.height;

    if (speed !== undefined)
        this.speed = speed;
    else
        this.speed = 1;
    this.direction = direction;

    // frame flips between 1st and 2nd frame of animation
    this.frame = true;
    this.timePerFrame = settings.animationSpeed + Math.floor(Math.random() * 300);
    this.startOfFrame = Date.now();

    this.hitbox =
    {
        x: 0,
        y: 0,
        w: this.width,
        h: this.height
    }
};

Obstacle.prototype.move = function () {
    'use strict';

    if (this.direction == 'left') {
        this.x -= this.speed;

        if (this.x < -this.width)
            this.x = this.canvas.width;
    }
    else {
        this.x += this.speed;

        if (this.x > this.canvas.width)
            this.x = -this.width;
    }
};

Obstacle.prototype.draw = function () {
    'use strict';

    this.context.drawImage(this.sprite,
                           this.srcx + (this.frame ? 0 : 1) * this.width, this.srcy,
                           this.width, this.height,
                           this.x, this.y,
                           this.width, this.height);

    if (Date.now() > this.startOfFrame + this.timePerFrame) {
        this.frame = !this.frame;
        this.startOfFrame = Date.now();
    }
};

Obstacle.prototype.drawHitbox = function () {
    'use strict';

    this.context.strokeStyle = 'yellow';

    this.context.lineWidth = 1;
    // Adding 0.5 to x and y is necessary to make the line exactly 1px wide
    this.context.strokeRect(this.x + this.hitbox.x + 0.5,
                            this.y + this.hitbox.y + 0.5,
                            this.hitbox.w, this.hitbox.h);
};
