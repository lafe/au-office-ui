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
import { TagPicker } from 'office-ui-fabric-react/lib/Pickers';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';
var reactprops = {};
reactprops.onResolveSuggestions = (function () { });
reactprops.resolveDelay = {};
reactprops.onEmptyInputFocus = (function () { });
reactprops.defaultSelectedItems = {};
reactprops.onChange = function () { };
reactprops.onFocus = function () { };
reactprops.onBlur = function () { };
reactprops.getTextFromItem = (function () { });
reactprops.onGetMoreResults = (function () { });
reactprops.className = {};
reactprops.pickerSuggestionsProps = {};
reactprops.pickerCalloutProps = {};
reactprops.inputProps = {};
reactprops.onRemoveSuggestion = function () { };
reactprops.onValidateInput = (function () { });
reactprops.searchingText = {};
reactprops.disabled = {};
reactprops.itemLimit = {};
reactprops.createGenericItem = (function () { });
reactprops.onItemSelected = (function () { });
reactprops.selectedItems = {};
//reactprops.onInputChange = <any>(() => {});
reactprops.onDismiss = function () { };
reactprops.enableSelectedSuggestionAlert = {};
//@ts-ignore
reactprops.items = {};
var DuTagPicker = /** @class */ (function (_super) {
    __extends(DuTagPicker, _super);
    function DuTagPicker(element) {
        return _super.call(this, element) || this;
    }
    DuTagPicker.prototype.render = function () {
        renderReact.bind(this)(TagPicker, reactprops);
    };
    DuTagPicker = __decorate([
        noView(),
        inject(Element),
        customElement('du-tag-picker')
    ], DuTagPicker);
    return DuTagPicker;
}(ReactWrapper));
export { DuTagPicker };
addProperties(DuTagPicker, reactprops);
