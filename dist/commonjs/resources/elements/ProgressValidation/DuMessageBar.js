"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var MessageBar_1 = require("office-ui-fabric-react/lib/MessageBar");
var au_react_wrapper_1 = require("@dunite/au-react-wrapper");
var reactprops = {};
reactprops.className = {};
reactprops.isMultiline = {};
reactprops.messageBarType = {};
reactprops.onDismiss = au_react_wrapper_1.onlyAureliaBound;
reactprops.dismissButtonAriaLabel = {};
reactprops.truncated = {};
reactprops.overflowButtonAriaLabel = {};
reactprops.actions = {};
var DuMessageBar = /** @class */ (function (_super) {
    __extends(DuMessageBar, _super);
    function DuMessageBar(element) {
        var _this = _super.call(this, element) || this;
        _this.hidden = false;
        _this.hiddenIsHidden = true;
        _this.hiddenName = 'hidden';
        return _this;
    }
    DuMessageBar.prototype.attached = function () {
        this.renderReact(MessageBar_1.MessageBar, this.createState(reactprops));
    };
    DuMessageBar = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('du-message-bar')
    ], DuMessageBar);
    return DuMessageBar;
}(au_react_wrapper_1.AuReactStateWrapper));
exports.DuMessageBar = DuMessageBar;
au_react_wrapper_1.addPropertiesState(DuMessageBar, reactprops);
