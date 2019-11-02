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
define(["require", "exports", "aurelia-framework", "office-ui-fabric-react/lib/Pickers", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, Pickers_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var reactprops = {};
    reactprops.onResolveSuggestions = (function () { });
    reactprops.resolveDelay = {};
    reactprops.onEmptyInputFocus = (function () { });
    reactprops.defaultSelectedItems = {};
    reactprops.onChange = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onFocus = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onBlur = au_react_wrapper_1.onlyAureliaBound;
    reactprops.getTextFromItem = (function () { });
    reactprops.onGetMoreResults = (function () { });
    reactprops.className = {};
    reactprops.pickerSuggestionsProps = {};
    reactprops.pickerCalloutProps = {};
    reactprops.inputProps = {};
    reactprops.onRemoveSuggestion = au_react_wrapper_1.onlyAureliaBound;
    reactprops.onValidateInput = (function () { });
    reactprops.searchingText = {};
    reactprops.disabled = {};
    reactprops.itemLimit = {};
    reactprops.createGenericItem = (function () { });
    reactprops.onItemSelected = (function () { });
    reactprops.selectedItems = {};
    //reactprops.onInputChange = <any>(() => {});
    reactprops.onDismiss = au_react_wrapper_1.onlyAureliaBound;
    reactprops.enableSelectedSuggestionAlert = {};
    //@ts-ignore
    reactprops.items = {};
    reactprops.selectedItems = {};
    var DuTagPicker = /** @class */ (function (_super) {
        __extends(DuTagPicker, _super);
        function DuTagPicker(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuTagPicker.prototype.attached = function () {
            this.renderReact(Pickers_1.TagPicker, this.createState(reactprops));
        };
        DuTagPicker = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-tag-picker')
        ], DuTagPicker);
        return DuTagPicker;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuTagPicker = DuTagPicker;
    au_react_wrapper_1.addPropertiesState(DuTagPicker, reactprops);
});
