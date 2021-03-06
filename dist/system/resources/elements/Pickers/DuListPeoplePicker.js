System.register(["aurelia-framework", "office-ui-fabric-react/lib/Pickers", "@dunite/au-react-wrapper"], function (exports_1, context_1) {
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
    var aurelia_framework_1, Pickers_1, au_react_wrapper_1, reactprops, DuListPeoplePicker;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (Pickers_1_1) {
                Pickers_1 = Pickers_1_1;
            },
            function (au_react_wrapper_1_1) {
                au_react_wrapper_1 = au_react_wrapper_1_1;
            }
        ],
        execute: function () {
            reactprops = {};
            //@ts-ignore
            reactprops.items = {}; // items: T[] | undefined;
            reactprops.onResolveSuggestions = au_react_wrapper_1.onlyAureliaBound;
            reactprops.resolveDelay = {};
            reactprops.onEmptyInputFocus = au_react_wrapper_1.onlyAureliaBound;
            reactprops.defaultSelectedItems = {};
            reactprops.onChange = (function (_this, items) { _this['selectedItems'] = items; });
            reactprops.onFocus = au_react_wrapper_1.onlyAureliaBound;
            reactprops.onBlur = au_react_wrapper_1.onlyAureliaBound;
            reactprops.getTextFromItem = au_react_wrapper_1.onlyAureliaBound;
            reactprops.onGetMoreResults = au_react_wrapper_1.onlyAureliaBound;
            reactprops.className = {};
            reactprops.pickerSuggestionsProps = {};
            reactprops.pickerCalloutProps = {};
            reactprops.inputProps = {};
            reactprops.onRemoveSuggestion = au_react_wrapper_1.onlyAureliaBound;
            reactprops.onValidateInput = au_react_wrapper_1.onlyAureliaBound;
            reactprops.searchingText = au_react_wrapper_1.onlyAureliaBound;
            reactprops.disabled = {};
            reactprops.itemLimit = {};
            reactprops.createGenericItem = au_react_wrapper_1.onlyAureliaBound;
            reactprops.removeButtonAriaLabel = {};
            reactprops.onItemSelected = au_react_wrapper_1.onlyAureliaBound;
            reactprops.selectedItems = {};
            reactprops.onInputChange = au_react_wrapper_1.onlyAureliaBound;
            reactprops.onDismiss = au_react_wrapper_1.onlyAureliaBound;
            reactprops.enableSelectedSuggestionAlert = {};
            reactprops.selectedItems = {};
            DuListPeoplePicker = /** @class */ (function (_super) {
                __extends(DuListPeoplePicker, _super);
                function DuListPeoplePicker(element) {
                    var _this_1 = _super.call(this, element) || this;
                    _this_1.hidden = false;
                    _this_1.hiddenIsHidden = true;
                    _this_1.hiddenName = 'hidden';
                    return _this_1;
                }
                DuListPeoplePicker.prototype.attached = function () {
                    this.renderReact(Pickers_1.ListPeoplePicker, this.createState(reactprops));
                };
                DuListPeoplePicker = __decorate([
                    aurelia_framework_1.inject(Element),
                    aurelia_framework_1.customElement('du-list-people-picker')
                ], DuListPeoplePicker);
                return DuListPeoplePicker;
            }(au_react_wrapper_1.AuReactStateWrapper));
            exports_1("DuListPeoplePicker", DuListPeoplePicker);
            au_react_wrapper_1.addPropertiesState(DuListPeoplePicker, reactprops);
        }
    };
});
