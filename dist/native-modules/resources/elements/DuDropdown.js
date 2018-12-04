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
import { customElement, inject, noView } from 'aurelia-framework';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { renderReact, addProperties, ReactWrapper, defaultActionEvent } from '../wrapper/ReactWrapper';
var reactprops = {};
reactprops.placeholder = {};
reactprops.options = defaultActionEvent;
reactprops.onChange = defaultActionEvent;
reactprops.onDismiss = defaultActionEvent;
reactprops.dropdownWidth = {};
reactprops.responsiveMode = {};
reactprops.multiSelect = {};
reactprops.defaultSelectedKeys = {};
reactprops.selectedKeys = {};
reactprops.multiSelectDelimiter = {};
reactprops.keytipProps = {};
var DuDropdown = /** @class */ (function (_super) {
    __extends(DuDropdown, _super);
    function DuDropdown(element) {
        return _super.call(this, element) || this;
    }
    DuDropdown.prototype.render = function () {
        renderReact.bind(this)(Dropdown, reactprops);
    };
    DuDropdown = __decorate([
        noView(),
        inject(Element),
        customElement('du-dropdown')
    ], DuDropdown);
    return DuDropdown;
}(ReactWrapper));
export { DuDropdown };
addProperties(DuDropdown, reactprops);