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
import { Breadcrumb } from 'office-ui-fabric-react/lib/Breadcrumb';
import { renderReact, addProperties, ReactWrapper, defaultActionEvent } from '../wrapper/ReactWrapper';
var reactprops = {};
reactprops.items = {};
reactprops.className = {};
reactprops.dividerAs = {};
reactprops.maxDisplayedItems = {};
reactprops.onReduceData = defaultActionEvent;
reactprops.overflowIndex = {};
var DuBreadcrumb = /** @class */ (function (_super) {
    __extends(DuBreadcrumb, _super);
    function DuBreadcrumb(element) {
        return _super.call(this, element) || this;
    }
    DuBreadcrumb.prototype.render = function () {
        renderReact.bind(this)(Breadcrumb, reactprops);
    };
    DuBreadcrumb = __decorate([
        noView(),
        inject(Element),
        customElement('du-breadcrumb')
    ], DuBreadcrumb);
    return DuBreadcrumb;
}(ReactWrapper));
export { DuBreadcrumb };
addProperties(DuBreadcrumb, reactprops);
