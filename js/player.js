var Player = function (level, props) {
    'use strict';

    this.canvas = settings.canvas;
    this.context = settings.context;
    this.sprite = resources.playerSheet;
    this.size = settings.spriteSize;

    // x, y position in sprite sheet
    this.srcx = 0;
    this.srcy = 0;

    this.lives = 3;

    this.goals = level.goals;
    this.props = props;
};

Player.prototype.reset = function () {
    'use strict';

    // middle of bottom sidewalk
    this.x = 7 * this.size;
    this.y = 13 * this.size;

    this.floating = false;
    this.lane = -1;
};

Player.prototype.die = function (where) {
    'use strict';

    switch (where) {
        case ('land'):
            this.props.push(new Prop(2, 0, this.x, this.y));
            break;
        case ('water'):
            this.props.push(new Prop(6, 0, this.x, this.y));
            break;
    }

    this.lives--;
    this.reset();
};

Player.prototype.move = function (e) {
    'use strict';

    if (e.keyCode == settings.left ||
        e.keyCode == settings.up ||
        e.keyCode == settings.right ||
        e.keyCode == settings.down) {
        e.preventDefault();
        switch (e.keyCode) {
            case settings.left:
                if (this.x > 0) this.x -= this.size;
                break;
            case settings.up:
                // freely move up to the topmost lane
                if (this.lane < 10) {
                    this.y -= this.size;
                    this.lane += 1;
                }
                // special case:
                // while on the topmost lane, only move up when aligned with a target
                else if (this.lane == 10) {
                    for (var i = 0; i < this.goals.length; i++) {
                        // only move if aligned with a target with a 25% offset
                        if (player.x + this.size / 2 >= this.goals[i] - this.size / 4 &&
                            player.x + this.size / 2 <= this.goals[i] + this.size * 1.25) {
                            // remove goal upon successfully landing on it
                            this.goals.splice(i, 1);

                            this.y -= this.size;
                            this.props.push(new Prop(3, 0, this.x, this.y));

                            this.reset();

                            break;
                        }
                    }
                }
                break;
            case settings.right:
                if (this.x < this.canvas.width - this.size) this.x += this.size;
                break;
            case settings.down:
                if (this.y < this.canvas.height - this.size) {
                    this.y += this.size;
                    this.lane -= 1;
                }
                break;
        }

        this.floating = false;
    }
};

Player.prototype.setFloatTarget = function (obstacle) {
    "use strict";

    this.floating = true;
    this.floatTarger = obstacle;
};

Player.prototype.float = function () {
    "use strict";

    this.x = this.floatTarger.x;
};

Player.prototype.draw = function () {
    'use strict';

    this.context.drawImage(this.sprite,
                           this.srcx, this.srcy,
                           this.size, this.size,
                           this.x, this.y,
                           this.size, this.size);
};

Player.prototype.setHitbox = function (x, y, w, h) {
    'use strict';

    this.hitbox =
    {
        x: x,
        y: y,
        w: w,
        h: h
    };
};

Player.prototype.drawHitbox = function () {
    'use strict';

    this.context.strokeStyle = 'lime';
    this.context.lineWidth = 1;
    // Adding 0.5 to x and y is necessary to make the line exactly 1px wide
    this.context.strokeRect(this.x + this.hitbox.x + 0.5,
                            this.y + this.hitbox.y + 0.5,
                            this.hitbox.w, this.hitbox.h);
};

Player.prototype.isColliding = function (obstacle) {
    'use strict';

    this.context.beginPath();
    this.context.rect(obstacle.x + obstacle.hitbox.x,
                      obstacle.y + obstacle.hitbox.y,
                      obstacle.hitbox.w, obstacle.hitbox.h);
    this.context.closePath();

    // test for collision with the player's upper left and lower right corners
    return this.context.isPointInPath(this.x + this.hitbox.x, this.y + this.hitbox.y) ||
        this.context.isPointInPath(this.x + this.hitbox.x + this.hitbox.w,
                                   this.y + this.hitbox.y + this.hitbox.h);
};
