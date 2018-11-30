"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
//export * from './test-plugin';
//export * from './test-plugin-configuration';
__export(require("./resources/index"));
var aurelia_pal_1 = require("aurelia-pal");
function configure(aurelia) {
    aurelia.globalResources([
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuColorPicker'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuDatePicker'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuDefaultButton'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuMessageBar'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuToggle'),
    ]);
}
exports.configure = configure;
