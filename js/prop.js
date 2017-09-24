var Prop = function (srcx, srcy, x, y) {
    'use strict';

    this.context = settings.context;
    this.sprite = resources.playerSheet;
    this.size = settings.spriteSize;

    this.srcy = srcy * this.size;
    this.srcx = srcx * this.size;
    this.x = x;
    this.y = y;
};

Prop.prototype.draw = function () {
    'use strict';

    this.context.drawImage(this.sprite,
                           this.srcx, this.srcy,
                           this.size, this.size,
                           this.x, this.y,
                           this.size, this.size);
};
