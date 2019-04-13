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
import { customElement, inject } from 'aurelia-framework';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { onlyAureliaBound } from '../../wrapper/ReactWrapper';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';
var reactprops = {};
reactprops.value = {};
reactprops.ariaLabel = {};
reactprops.ariaValueText = onlyAureliaBound;
reactprops.disabled = {};
reactprops.className = {};
reactprops.label = {};
reactprops.value = {};
reactprops.defaultValue = {};
reactprops.min = {};
reactprops.max = {};
reactprops.showValue = {};
reactprops.step = {};
reactprops.onChange = (function (_this, value) { _this['value'] = value; });
reactprops.onChanged = onlyAureliaBound;
reactprops.vertical = {};
var DuSlider = /** @class */ (function (_super) {
    __extends(DuSlider, _super);
    function DuSlider(element) {
        var _this_1 = _super.call(this, element) || this;
        _this_1.hidden = false;
        _this_1.hiddenIsHidden = true;
        _this_1.hiddenName = 'hidden';
        return _this_1;
    }
    DuSlider.prototype.attached = function () {
        this.renderReact(Slider, this.createState(reactprops));
    };
    DuSlider = __decorate([
        inject(Element),
        customElement('du-slider')
    ], DuSlider);
    return DuSlider;
}(DuReactWrapperBaseClass));
export { DuSlider };
addProperties(DuSlider, reactprops);
