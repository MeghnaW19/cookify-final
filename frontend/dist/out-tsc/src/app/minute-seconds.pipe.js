import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let MinuteSecondsPipe = class MinuteSecondsPipe {
    transform(value) {
        const minutes = Math.floor(value / 60);
        return minutes.toString().padStart(2, '0') + ':' +
            (value - minutes * 60).toString().padStart(2, '0');
    }
};
MinuteSecondsPipe = tslib_1.__decorate([
    Pipe({
        name: 'minuteSeconds'
    })
], MinuteSecondsPipe);
export { MinuteSecondsPipe };
//# sourceMappingURL=minute-seconds.pipe.js.map