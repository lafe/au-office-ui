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
define(["require", "exports", "aurelia-framework", "office-ui-fabric-react/lib/Button", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Button_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var reactprops = {};
    reactprops.allowDisabledFocus = {};
    reactprops.ariaDescription = {};
    reactprops.ariaHidden = {};
    reactprops.ariaLabel = {};
    reactprops.keytipProps = {};
    reactprops.menuIconProps = {};
    reactprops.menuTriggerKeyCode = {};
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onMenuClick = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onAfterMenuDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.persistMenu = {};
    reactprops.primaryDisabled = {};
    reactprops.splitButtonAriaLabel = {};
    reactprops.toggle = {};
    reactprops.href = {};
    reactprops.primary = {};
    reactprops.uniqueId = {};
    reactprops.disabled = {};
    reactprops.checked = {};
    reactprops.className = {};
    reactprops.text = {};
    reactprops.iconProps = {};
    reactprops.menuProps = {};
    reactprops.split = {};
    reactprops.onClick = au_react_wrapper_1.onlyAureliaBound;
    reactprops.secondaryText = {};
    var DuCompoundButton = /** @class */ (function (_super) {
        __extends(DuCompoundButton, _super);
        function DuCompoundButton(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuCompoundButton.prototype.attached = function () {
            this.renderReact(Button_1.CompoundButton, this.createState(reactprops));
        };
        DuCompoundButton = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-compound-button')
        ], DuCompoundButton);
        return DuCompoundButton;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuCompoundButton = DuCompoundButton;
    au_react_wrapper_1.addPropertiesState(DuCompoundButton, reactprops);
});
