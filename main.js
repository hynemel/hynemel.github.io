(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/shared/ui-core/src/index.ts":
/*!*************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/index.ts ***!
  \*************************************************************************/
/*! exports provided: FormModule, SvgIconModule, SearchFieldModule, TextModule, ButtonModule, CustomValidators, RequiredTrueDirective, ValidateMesssageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_form_form_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/form/form.module */ "../../libs/shared/ui-core/src/lib/form/form.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return _lib_form_form_module__WEBPACK_IMPORTED_MODULE_0__["FormModule"]; });

/* harmony import */ var _lib_svg_icon_svg_icon_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/svg-icon/svg-icon.module */ "../../libs/shared/ui-core/src/lib/svg-icon/svg-icon.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvgIconModule", function() { return _lib_svg_icon_svg_icon_module__WEBPACK_IMPORTED_MODULE_1__["SvgIconModule"]; });

/* harmony import */ var _lib_search_field_search_field_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/search-field/search-field.module */ "../../libs/shared/ui-core/src/lib/search-field/search-field.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchFieldModule", function() { return _lib_search_field_search_field_module__WEBPACK_IMPORTED_MODULE_2__["SearchFieldModule"]; });

/* harmony import */ var _lib_text_text_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/text/text.module */ "../../libs/shared/ui-core/src/lib/text/text.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextModule", function() { return _lib_text_text_module__WEBPACK_IMPORTED_MODULE_3__["TextModule"]; });

/* harmony import */ var _lib_button_button_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/button/button.module */ "../../libs/shared/ui-core/src/lib/button/button.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return _lib_button_button_module__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"]; });

/* harmony import */ var _lib_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/form/validation */ "../../libs/shared/ui-core/src/lib/form/validation/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return _lib_form_validation__WEBPACK_IMPORTED_MODULE_5__["CustomValidators"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequiredTrueDirective", function() { return _lib_form_validation__WEBPACK_IMPORTED_MODULE_5__["RequiredTrueDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidateMesssageService", function() { return _lib_form_validation__WEBPACK_IMPORTED_MODULE_5__["ValidateMesssageService"]; });









/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/button/button.component.html":
/*!*************************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/button/button.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button [type]=\"type\" [ngClass]=\"buttonClass\" [disabled]=\"disabled\" [name]=\"name\" (click)=\"onClickButton($event)\">\n  <ng-content select=\"[iconBefore]\"></ng-content>\n  <ng-content select=\"[label]\"></ng-content>\n  <ng-content select=\"[iconAfter]\"></ng-content>\n</button>\n"

/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/button/button.component.ts":
/*!***********************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/button/button.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ButtonComponent = /** @class */ (function () {
    function ButtonComponent(element) {
        this.element = element;
        this.buttonClass = 'btn';
        this.buttonBaseClasses = {
            primary: 'primary',
            primaryInverse: 'primary-inverse',
            secondary: 'outline-secondary',
            tertiary: 'outline-tertiary',
            tertiaryAlt: 'outline-tertiary-alt',
            link: 'link',
            dropdown: 'dropdown'
        };
        this.variant = 'primary';
        this.type = 'button';
        this.disabled = false;
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ButtonComponent.prototype.ngOnInit = function () {
        var nativeElement = this.element.nativeElement;
        var iconBefore = nativeElement.querySelector('[iconBefore]');
        var iconAfter = nativeElement.querySelector('[iconAfter]');
        this.buttonClass += " btn-" + (this.buttonBaseClasses[this.variant] || 'primary') + " " + this.buttonClasses;
        if (iconBefore) {
            this.buttonClass += ' has-icon-before';
        }
        if (iconAfter) {
            this.buttonClass += ' has-icon-after';
        }
    };
    ButtonComponent.prototype.onClickButton = function (event) {
        this.click.emit(event);
        event.stopPropagation();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "variant", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ButtonComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ButtonComponent.prototype, "buttonClasses", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "click", void 0);
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-core-button',
            template: __webpack_require__(/*! ./button.component.html */ "../../libs/shared/ui-core/src/lib/button/button.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/button/button.module.ts":
/*!********************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/button/button.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return ButtonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _svg_icon_svg_icon_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg-icon/svg-icon.module */ "../../libs/shared/ui-core/src/lib/svg-icon/svg-icon.module.ts");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button.component */ "../../libs/shared/ui-core/src/lib/button/button.component.ts");





var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    ButtonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _svg_icon_svg_icon_module__WEBPACK_IMPORTED_MODULE_3__["SvgIconModule"]],
            exports: [_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]]
        })
    ], ButtonModule);
    return ButtonModule;
}());



/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/form/checkbox.component.html":
/*!*************************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/form/checkbox.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input\n  type=\"checkbox\"\n  class=\"custom-control-input\"\n  #inputRef\n  [name]=\"name\"\n  [id]=\"inputId\"\n  [formControl]=\"control\"\n  [checked]=\"value\"\n/>\n<label class=\"custom-control-label\" [attr.for]=\"inputId\">\n  <ng-content></ng-content>\n</label>\n"

/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/form/checkbox.component.ts":
/*!***********************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/form/checkbox.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custom_input_component_abstract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-input-component.abstract */ "../../libs/shared/ui-core/src/lib/form/custom-input-component.abstract.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");




var CheckboxComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CheckboxComponent, _super);
    function CheckboxComponent(validators, asyncValidators, controlContainer) {
        var _this = _super.call(this, validators, asyncValidators, controlContainer) || this;
        _this.classList = 'custom-control custom-checkbox';
        return _this;
    }
    CheckboxComponent_1 = CheckboxComponent;
    var CheckboxComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CheckboxComponent.prototype, "classList", void 0);
    CheckboxComponent = CheckboxComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-core-checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "../../libs/shared/ui-core/src/lib/form/checkbox.component.html"),
            providers: Object(_custom_input_component_abstract__WEBPACK_IMPORTED_MODULE_2__["MakeProviders"])(CheckboxComponent_1)
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_ASYNC_VALIDATORS"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array,
            Array,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]])
    ], CheckboxComponent);
    return CheckboxComponent;
}(_custom_input_component_abstract__WEBPACK_IMPORTED_MODULE_2__["CustomInputComponentAbstract"]));



/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/form/custom-input-component.abstract.ts":
/*!************************************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/form/custom-input-component.abstract.ts ***!
  \************************************************************************************************************/
/*! exports provided: CustomInputComponentAbstract, MakeProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomInputComponentAbstract", function() { return CustomInputComponentAbstract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeProviders", function() { return MakeProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");




var CustomInputComponentAbstract = /** @class */ (function () {
    function CustomInputComponentAbstract(validators, asyncValidators, controlContainer) {
        if (validators === void 0) { validators = null; }
        if (asyncValidators === void 0) { asyncValidators = null; }
        this.controlContainer = controlContainer;
        this._value = '';
        this._disabled = false;
        this._touched = false;
        this.classList = '';
        this.focusOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Invoked when the model has been changed
         */
        this.onChange = function (_) { };
        /**
         * Invoked when the model has been touched
         */
        this.onTouched = function () { };
        /**
         * Invoked when `disabled` property has been changed
         */
        this.onDisabledChange = function (_) { };
        this.isNgForm = this.controlContainer && this.controlContainer.formDirective instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"];
        // usage inside a template-driven form
        if (this.isNgForm) {
            this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
            this.formControl.setValidators(validators);
            this.formControl.setAsyncValidators(asyncValidators);
        }
    }
    Object.defineProperty(CustomInputComponentAbstract.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            // allow setting an empty value as true
            value = value !== false;
            if (value !== this._disabled && this.inputElementRef && this.formControl) {
                this._disabled = value;
                this.inputElementRef.nativeElement.disabled = value;
                this._disabled ? this.formControl.disable() : this.formControl.enable();
                this.onDisabledChange(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomInputComponentAbstract.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    CustomInputComponentAbstract.prototype.onFocusOut = function () {
        this.onTouched();
        this._touched = true;
        this.focusOut.emit(true);
    };
    Object.defineProperty(CustomInputComponentAbstract.prototype, "errors", {
        get: function () {
            return this.formControl.errors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomInputComponentAbstract.prototype, "touched", {
        get: function () {
            return this._touched;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomInputComponentAbstract.prototype, "control", {
        get: function () {
            return this.formControl;
        },
        enumerable: true,
        configurable: true
    });
    CustomInputComponentAbstract.prototype.ngOnInit = function () {
        var _this = this;
        // reactive form usage, so get the formControl from ControlContainer instance
        if (!this.formControl) {
            this.formControl =
                (this.controlContainer && this.controlContainer.control.get(this.formControlName)) ||
                    new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        }
        this.formControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function (value) {
            _this.value = value;
        });
        if (!this.inputId) {
            this.inputId = this.name;
        }
        if (this.class) {
            this.classList += " " + this.class;
        }
    };
    ///////////////
    // OVERRIDES //
    ///////////////
    /**
     * Writes a new item to the element.
     * @param value the value
     */
    CustomInputComponentAbstract.prototype.writeValue = function (value) {
        if (value) {
            this._value = value;
            if (this.isNgForm) {
                this.formControl.setValue(value);
            }
        }
    };
    /**
     * Registers a callback function that should be called when the control's value changes in the UI.
     * @param fn
     */
    CustomInputComponentAbstract.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * Registers a callback function that should be called when the control receives a blur event.
     * @param fn
     */
    CustomInputComponentAbstract.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    CustomInputComponentAbstract.prototype.registerOnDisabledChange = function (fn) {
        this.onDisabledChange = fn;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputRef', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CustomInputComponentAbstract.prototype, "inputElementRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomInputComponentAbstract.prototype, "classList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CustomInputComponentAbstract.prototype, "class", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CustomInputComponentAbstract.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CustomInputComponentAbstract.prototype, "inputId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CustomInputComponentAbstract.prototype, "formControlName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], CustomInputComponentAbstract.prototype, "disabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], CustomInputComponentAbstract.prototype, "value", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CustomInputComponentAbstract.prototype, "focusOut", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focusout'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CustomInputComponentAbstract.prototype, "onFocusOut", null);
    return CustomInputComponentAbstract;
}());

// helper to create providers from custom input component
function MakeProviders(type) {
    return [
        {
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return type; }),
            multi: true
        },
        {
            provide: CustomInputComponentAbstract,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return type; }),
            multi: true
        }
    ];
}


/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/form/form-element.component.html":
/*!*****************************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/form/form-element.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\" [ngClass]=\"{ 'box-group': !useFieldset }\">\n  <fieldset class=\"w-100\" *ngIf=\"useFieldset; else contentTPL\">\n    <div class=\"box-group\">\n      <ng-container *ngTemplateOutlet=\"contentTPL\"></ng-container>\n    </div>\n  </fieldset>\n\n  <ng-template #labelTPL>\n    <div [class.text-disabled]=\"allDisabled\">\n      {{ label }}\n      <span *ngIf=\"required\">*</span>\n    </div>\n  </ng-template>\n\n  <ng-template #contentTPL>\n    <ng-container *ngIf=\"label\">\n      <div class=\"box\" [ngClass]=\"labelColumnClasses\">\n        <label class=\"mb-0 mt-0\" *ngIf=\"!useFieldset\" [for]=\"labelForId\">\n          <ng-container *ngTemplateOutlet=\"labelTPL\"></ng-container>\n        </label>\n        <legend class=\"mb-0 mt-0\" *ngIf=\"useFieldset\">\n          <ng-container *ngTemplateOutlet=\"labelTPL\"></ng-container>\n        </legend>\n      </div>\n    </ng-container>\n    <div class=\"box\" [ngClass]=\"inputColumnClasses\">\n      <ng-content></ng-content>\n      <ui-core-form-errors class=\"mt-0\" *ngIf=\"hasErrors\" [messages]=\"errorMessages\"></ui-core-form-errors>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/form/form-element.component.ts":
/*!***************************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/form/form-element.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: FormElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElementComponent", function() { return FormElementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custom_input_component_abstract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-input-component.abstract */ "../../libs/shared/ui-core/src/lib/form/custom-input-component.abstract.ts");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validation */ "../../libs/shared/ui-core/src/lib/form/validation/index.ts");
/* harmony import */ var _input_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-field.component */ "../../libs/shared/ui-core/src/lib/form/input-field.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _textarea_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./textarea.component */ "../../libs/shared/ui-core/src/lib/form/textarea.component.ts");









var FormElementComponent = /** @class */ (function () {
    function FormElementComponent(ngForm, controlContainer, validateMesssageService) {
        this.ngForm = ngForm;
        this.controlContainer = controlContainer;
        this.validateMesssageService = validateMesssageService;
        this.classList = 'w-100';
        this.hasErrors = false;
        this.allDisabled = false;
        this.required = false;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.form = ngForm || controlContainer.formDirective;
    }
    FormElementComponent.prototype.ngAfterContentInit = function () {
        if (this.inputComponentList.length === 0) {
            throw new Error('For content projection only type of CustomInputComponentAbstract allowed!');
        }
        this.useFieldset = this.inputComponentList.length > 1;
        this.uniqueFormControls = Array.from(new Set(this.inputComponentList.map(function (component) { return component.control; })));
        this.prepareLabels();
        this.subscribeToErrors();
        this.subscribeToStatusChanges();
        this.setAllDisabledState();
        this.checkRequired();
    };
    /**
     * set up input/label relation
     * when fieldset used or no label provided activate screeenreader label
     */
    FormElementComponent.prototype.prepareLabels = function () {
        if (this.inputComponentList.length === 1) {
            this.labelForId = this.inputComponentList.first.inputId;
        }
        if (this.useFieldset || !this.label) {
            var useScreenReaderLabelProp_1 = 'useScreenReaderLabel';
            this.inputComponentList
                .filter(function (component) { return component.hasOwnProperty(useScreenReaderLabelProp_1); })
                .forEach(function (component) {
                component[useScreenReaderLabelProp_1] = true;
            });
        }
    };
    /**
     * subscribe to all events where potential validation errors could occur
     */
    FormElementComponent.prototype.subscribeToErrors = function () {
        var valueChanges$ = this.uniqueFormControls.map(function (control) { return control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])()); }), inputFieldFocusOut$ = this.inputComponentList
            .filter(function (component) { return component instanceof _input_field_component__WEBPACK_IMPORTED_MODULE_5__["InputFieldComponent"] || component instanceof _textarea_component__WEBPACK_IMPORTED_MODULE_8__["TextareaComponent"]; })
            .map(function (component) { return component.focusOut; });
        rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"].apply(void 0, [this.form.ngSubmit].concat(valueChanges$, inputFieldFocusOut$)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(this.setErrorMessages.bind(this));
    };
    /**
     * subscribe to contained components statusChanges
     */
    FormElementComponent.prototype.subscribeToStatusChanges = function () {
        var statusChanges$ = this.uniqueFormControls.map(function (control) { return control.statusChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])()); });
        rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"].apply(void 0, statusChanges$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(this.setAllDisabledState.bind(this));
    };
    /**
     * retrieve validation errors from contained form controls
     */
    FormElementComponent.prototype.setErrorMessages = function () {
        var _this = this;
        var uniqueErrors = new Set();
        this.hasErrors = false;
        this.inputComponentList
            .filter(function (component) { return component.errors && !component.disabled && (component.touched || _this.form.submitted); })
            .forEach(function (component) {
            var errors = component.errors;
            Object.keys(errors).forEach(function (key) {
                // get error message from service and add it to the list
                uniqueErrors.add(_this.validateMesssageService.getMessage(errors, key));
            });
            _this.hasErrors = true;
        });
        if (this.hasErrors) {
            // display the messages
            this.errorMessages = Array.from(uniqueErrors);
        }
    };
    /**
     * set disabled state depending on each contained input control's disabled state
     */
    FormElementComponent.prototype.setAllDisabledState = function () {
        this.allDisabled = !this.uniqueFormControls.some(function (control) { return control.enabled; });
    };
    /**
     * checks if some controls are required
     */
    FormElementComponent.prototype.checkRequired = function () {
        this.required = this.uniqueFormControls
            .map(function (ctrl) { return (ctrl.validator && ctrl.validator({})) || {}; })
            .some(function (validator) { return validator.required || validator.requiredTrue; });
    };
    FormElementComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_custom_input_component_abstract__WEBPACK_IMPORTED_MODULE_3__["CustomInputComponentAbstract"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], FormElementComponent.prototype, "inputComponentList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FormElementComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FormElementComponent.prototype, "labelColumnClasses", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FormElementComponent.prototype, "inputColumnClasses", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormElementComponent.prototype, "classList", void 0);
    FormElementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-core-form-element',
            template: __webpack_require__(/*! ./form-element.component.html */ "../../libs/shared/ui-core/src/lib/form/form-element.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"],
            _validation__WEBPACK_IMPORTED_MODULE_4__["ValidateMesssageService"]])
    ], FormElementComponent);
    return FormElementComponent;
}());



/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/form/form-errors.component.ts":
/*!**************************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/form/form-errors.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: FormErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormErrorsComponent", function() { return FormErrorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var FormErrorsComponent = /** @class */ (function () {
    function FormErrorsComponent() {
        this.classList = 'invalid-feedback d-block';
    }
    FormErrorsComponent.prototype.ngOnInit = function () {
        if (this.class) {
            this.classList += " " + this.class;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormErrorsComponent.prototype, "classList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FormErrorsComponent.prototype, "messages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FormErrorsComponent.prototype, "class", void 0);
    FormErrorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-core-form-errors',
            template: "\n    <div *ngFor=\"let message of messages\">{{ message }}</div>\n  "
        })
    ], FormErrorsComponent);
    return FormErrorsComponent;
}());



/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/form/form.module.ts":
/*!****************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/form/form.module.ts ***!
  \****************************************************************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _input_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-field.component */ "../../libs/shared/ui-core/src/lib/form/input-field.component.ts");
/* harmony import */ var _textarea_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./textarea.component */ "../../libs/shared/ui-core/src/lib/form/textarea.component.ts");
/* harmony import */ var _radiobutton_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radiobutton.component */ "../../libs/shared/ui-core/src/lib/form/radiobutton.component.ts");
/* harmony import */ var _checkbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkbox.component */ "../../libs/shared/ui-core/src/lib/form/checkbox.component.ts");
/* harmony import */ var _form_element_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-element.component */ "../../libs/shared/ui-core/src/lib/form/form-element.component.ts");
/* harmony import */ var _form_errors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-errors.component */ "../../libs/shared/ui-core/src/lib/form/form-errors.component.ts");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validation */ "../../libs/shared/ui-core/src/lib/form/validation/index.ts");











var FormModule = /** @class */ (function () {
    function FormModule() {
    }
    FormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _input_field_component__WEBPACK_IMPORTED_MODULE_4__["InputFieldComponent"],
                _textarea_component__WEBPACK_IMPORTED_MODULE_5__["TextareaComponent"],
                _radiobutton_component__WEBPACK_IMPORTED_MODULE_6__["RadiobuttonComponent"],
                _checkbox_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxComponent"],
                _form_element_component__WEBPACK_IMPORTED_MODULE_8__["FormElementComponent"],
                _form_errors_component__WEBPACK_IMPORTED_MODULE_9__["FormErrorsComponent"],
                _validation__WEBPACK_IMPORTED_MODULE_10__["RequiredTrueDirective"]
            ],
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _input_field_component__WEBPACK_IMPORTED_MODULE_4__["InputFieldComponent"],
                _textarea_component__WEBPACK_IMPORTED_MODULE_5__["TextareaComponent"],
                _radiobutton_component__WEBPACK_IMPORTED_MODULE_6__["RadiobuttonComponent"],
                _checkbox_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxComponent"],
                _form_element_component__WEBPACK_IMPORTED_MODULE_8__["FormElementComponent"],
                _validation__WEBPACK_IMPORTED_MODULE_10__["RequiredTrueDirective"]
            ]
        })
    ], FormModule);
    return FormModule;
}());



/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/form/input-field.component.html":
/*!****************************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/form/input-field.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label [for]=\"inputId\" class=\"sr-only\" *ngIf=\"useScreenReaderLabel\">\n  {{ screenReaderLabel || placeholder }}\n</label>\n<input\n  type=\"text\"\n  class=\"form-control\"\n  #inputRef\n  [name]=\"name\"\n  [id]=\"inputId\"\n  [formControl]=\"control\"\n  [placeholder]=\"placeholder\"\n  [value]=\"value\"\n/>\n"

/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/form/input-field.component.scss":
/*!****************************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/form/input-field.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * functions definition\n */\n/***\n * original import\n */\n/***\n * Patch / extend\n */\n/*\n * scss helper functions\n * TODO: finish or review implementation / remove if not needed\n */\n/**\n * returns a font value from the definition\n */\n/**\n * returns a color value from the definition\n */\n/**\n * returns a spacing value from the definition\n */\n/**\n * Remove the unit of a value\n */\n/**\n * tests value if integer\n */\n/**\n * retrieve multiple of baseline\n */\n/**\n * helper to return the calc function for baseline with border\n */\n/**\n * convert rem values to px based on default font size of 16px\n */\n/*\n * hdms variable definitions\n */\n/********************\n * Fonts definitions\n * Design spec: Definitions see https://fork.invisionapp.com/d/main#/console/17301588/358610542/preview\n * Documentation: https://confluence.hilti.com/display/pshilti/UI+library+documentation\n */\n/* Not used at the moment.\n$baseline-hilti-extended: 0.185;\n$baseline-hilti-heavy-extended: 0.185;\n$baseline-arial: 0.153320;\n$baseline-monospace: 0.162;\n*/\n/*\n * Color definitions end\n ********************/\n/********************\n * Color definitions\n * Design spec: Definitions see https://fork.invisionapp.com/d/main/#/console/17301588/358610505/preview\n * Documentation: https://confluence.hilti.com/display/pshilti/UI+library+documentation\n */\n/*\n * Color definitions end\n ********************/\n/********************\n * Grid system\n * Design spec:\n * Breakpoints: https://fork.invisionapp.com/d/main#/console/17301588/358610513/preview\n * Mobile: https://fork.invisionapp.com/d/main#/console/17301588/358610515/preview\n * Tablet: https://fork.invisionapp.com/d/main#/console/17301588/358610516/preview\n * Desktop+: https://fork.invisionapp.com/d/main#/console/17301588/358610517/preview\n * Documentation: https://confluence.hilti.com/display/pshilti/UI+library+documentation\n */\n/*\n * Grid system end\n ********************/\n/********************\n * Heights\n */\n/*\n * Heights end\n ********************/\n/********************\n * Sizing\n */\n/*\n * Sizing end\n ********************/\n/********************\n * Spacings\n * Design spec:\n * https://fork.invisionapp.com/d/main#/console/17301588/358610511/preview\n * https://fork.invisionapp.com/d/main#/console/17301588/358610510/preview\n * Documentation: https://confluence.hilti.com/display/pshilti/UI+library+documentation\n */\n/*\n * Spacings end\n ********************/\n/********************\n * Custom forms\n */\n/*\n * Custom forms end\n ********************/\n/********************\n * Layout helper classes\n * Documentation: https://confluence.hilti.com/display/pshilti/Layout\n */\n/*\n * Layout helper classes end\n ********************/\n/*\n * global mixin definitions\n * TODO: finish or review implementation / remove if not needed\n */\n/*\n * variables definition\n */\n/***\n * original import\n */\n/***\n * Patch / extend\n */\n/*\n * mixins definition\n */\n/***\n * original import\n */\n/***\n * Patch / extend\n */\n/**\n * HILTI specific modifications:\n * $border property: if plumber applied on elements with borders, these need to be subtracted from padding\n */\n/*\n * Plumber baseline definition file\n */\n:host-context(.search-field) .form-control {\n  padding-right: 40px;\n  padding-right: 2.5rem; }\n:host-context(.header-variant) .form-control:not(:disabled) {\n  border-color: #d2051e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWwvaG9sbmcvZGV2L2xheW91dC9oZG1zL2xpYnMvc2hhcmVkL3VpLWNvcmUvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2Z1bmN0aW9ucy5zY3NzIiwibGlicy9zaGFyZWQvdWktY29yZS9zcmMvbGliL2Zvcm0vaW5wdXQtZmllbGQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWVsL2hvbG5nL2Rldi9sYXlvdXQvaGRtcy9saWJzL3NoYXJlZC91aS1jb3JlL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvY3VzdG9tL19mdW5jdGlvbnMuc2NzcyIsIi9Vc2Vycy9tZWwvaG9sbmcvZGV2L2xheW91dC9oZG1zL2xpYnMvc2hhcmVkL3VpLWNvcmUvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9jdXN0b20vX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL21lbC9ob2xuZy9kZXYvbGF5b3V0L2hkbXMvbGlicy9zaGFyZWQvdWktY29yZS9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL2N1c3RvbS9fbWl4aW5zLnNjc3MiLCIvVXNlcnMvbWVsL2hvbG5nL2Rldi9sYXlvdXQvaGRtcy9saWJzL3NoYXJlZC91aS1jb3JlL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL192YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9tZWwvaG9sbmcvZGV2L2xheW91dC9oZG1zL2xpYnMvc2hhcmVkL3VpLWNvcmUvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX21peGlucy5zY3NzIiwiL1VzZXJzL21lbC9ob2xuZy9kZXYvbGF5b3V0L2hkbXMvbGlicy9zaGFyZWQvdWktY29yZS9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL2N1c3RvbS9fcGx1bWJlci5zY3NzIiwiL1VzZXJzL21lbC9ob2xuZy9kZXYvbGF5b3V0L2hkbXMvbGlicy9zaGFyZWQvdWktY29yZS9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL2N1c3RvbS9fYmFzZWxpbmUuc2NzcyIsIi9Vc2Vycy9tZWwvaG9sbmcvZGV2L2xheW91dC9oZG1zL2xpYnMvc2hhcmVkL3VpLWNvcmUvc3JjL2xpYi9mb3JtL2lucHV0LWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQ0VFO0FERUY7O0VDQ0U7QURLRjs7RUNGRTtBQ1JGOzs7RURZRTtBQ1BGOztFRFVFO0FDRUY7O0VEQ0U7QUNXRjs7RURSRTtBQ29CRjs7RURqQkU7QUM0QkY7O0VEekJFO0FDZ0NGOztFRDdCRTtBQ3dDRjs7RURyQ0U7QUNnREY7O0VEN0NFO0FFcENGOztFRnVDRTtBRWhDRjs7OztFRnFDRTtBRTVCRjs7Ozs7Q0ZrQ0M7QUVKRDs7cUJGT3FCO0FFSHJCOzs7O0VGUUU7QUUwREY7O3FCRnZEcUI7QUUyRHJCOzs7Ozs7OztFRmxERTtBRTBGRjs7cUJGdkZxQjtBRTJGckI7O0VGeEZFO0FFK0ZGOztxQkY1RnFCO0FFZ0dyQjs7RUY3RkU7QUV5R0Y7O3FCRnRHcUI7QUUwR3JCOzs7Ozs7RUZuR0U7QUUrSUY7O3FCRjVJcUI7QUUyUnJCOztFRnhSRTtBRXFURjs7cUJGbFRxQjtBRWlWckI7OztFRjdVRTtBRXFYRjs7cUJGbFhxQjtBRzVHckI7OztFSGdIRTtBSWhIRjs7RUptSEU7QUkvR0Y7O0VKa0hFO0FJNUdGOztFSitHRTtBS3pIRjs7RUw0SEU7QUt4SEY7O0VMMkhFO0FLckhGOztFTHdIRTtBTTdIRjs7O0VOaUlFO0FPdElGOztFUHlJRTtBUXZJRjtFQUVJLG1CQUFtQjtFQUFuQixxQkFBbUIsRUFBQTtBQUl2QjtFQUVJLHFCTjZDUyxFQUFBIiwiZmlsZSI6ImxpYnMvc2hhcmVkL3VpLWNvcmUvc3JjL2xpYi9mb3JtL2lucHV0LWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIGZ1bmN0aW9ucyBkZWZpbml0aW9uXG4gKi9cblxuLyoqKlxuICogb3JpZ2luYWwgaW1wb3J0XG4gKi9cblxuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XG5cbi8qKipcbiAqIFBhdGNoIC8gZXh0ZW5kXG4gKi9cbiIsIi8qXG4gKiBmdW5jdGlvbnMgZGVmaW5pdGlvblxuICovXG4vKioqXG4gKiBvcmlnaW5hbCBpbXBvcnRcbiAqL1xuLyoqKlxuICogUGF0Y2ggLyBleHRlbmRcbiAqL1xuLypcbiAqIHNjc3MgaGVscGVyIGZ1bmN0aW9uc1xuICogVE9ETzogZmluaXNoIG9yIHJldmlldyBpbXBsZW1lbnRhdGlvbiAvIHJlbW92ZSBpZiBub3QgbmVlZGVkXG4gKi9cbi8qKlxuICogcmV0dXJucyBhIGZvbnQgdmFsdWUgZnJvbSB0aGUgZGVmaW5pdGlvblxuICovXG4vKipcbiAqIHJldHVybnMgYSBjb2xvciB2YWx1ZSBmcm9tIHRoZSBkZWZpbml0aW9uXG4gKi9cbi8qKlxuICogcmV0dXJucyBhIHNwYWNpbmcgdmFsdWUgZnJvbSB0aGUgZGVmaW5pdGlvblxuICovXG4vKipcbiAqIFJlbW92ZSB0aGUgdW5pdCBvZiBhIHZhbHVlXG4gKi9cbi8qKlxuICogdGVzdHMgdmFsdWUgaWYgaW50ZWdlclxuICovXG4vKipcbiAqIHJldHJpZXZlIG11bHRpcGxlIG9mIGJhc2VsaW5lXG4gKi9cbi8qKlxuICogaGVscGVyIHRvIHJldHVybiB0aGUgY2FsYyBmdW5jdGlvbiBmb3IgYmFzZWxpbmUgd2l0aCBib3JkZXJcbiAqL1xuLyoqXG4gKiBjb252ZXJ0IHJlbSB2YWx1ZXMgdG8gcHggYmFzZWQgb24gZGVmYXVsdCBmb250IHNpemUgb2YgMTZweFxuICovXG4vKlxuICogaGRtcyB2YXJpYWJsZSBkZWZpbml0aW9uc1xuICovXG4vKioqKioqKioqKioqKioqKioqKipcbiAqIEZvbnRzIGRlZmluaXRpb25zXG4gKiBEZXNpZ24gc3BlYzogRGVmaW5pdGlvbnMgc2VlIGh0dHBzOi8vZm9yay5pbnZpc2lvbmFwcC5jb20vZC9tYWluIy9jb25zb2xlLzE3MzAxNTg4LzM1ODYxMDU0Mi9wcmV2aWV3XG4gKiBEb2N1bWVudGF0aW9uOiBodHRwczovL2NvbmZsdWVuY2UuaGlsdGkuY29tL2Rpc3BsYXkvcHNoaWx0aS9VSStsaWJyYXJ5K2RvY3VtZW50YXRpb25cbiAqL1xuLyogTm90IHVzZWQgYXQgdGhlIG1vbWVudC5cbiRiYXNlbGluZS1oaWx0aS1leHRlbmRlZDogMC4xODU7XG4kYmFzZWxpbmUtaGlsdGktaGVhdnktZXh0ZW5kZWQ6IDAuMTg1O1xuJGJhc2VsaW5lLWFyaWFsOiAwLjE1MzMyMDtcbiRiYXNlbGluZS1tb25vc3BhY2U6IDAuMTYyO1xuKi9cbi8qXG4gKiBDb2xvciBkZWZpbml0aW9ucyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKlxuICogQ29sb3IgZGVmaW5pdGlvbnNcbiAqIERlc2lnbiBzcGVjOiBEZWZpbml0aW9ucyBzZWUgaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4vIy9jb25zb2xlLzE3MzAxNTg4LzM1ODYxMDUwNS9wcmV2aWV3XG4gKiBEb2N1bWVudGF0aW9uOiBodHRwczovL2NvbmZsdWVuY2UuaGlsdGkuY29tL2Rpc3BsYXkvcHNoaWx0aS9VSStsaWJyYXJ5K2RvY3VtZW50YXRpb25cbiAqL1xuLypcbiAqIENvbG9yIGRlZmluaXRpb25zIGVuZFxuICoqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqXG4gKiBHcmlkIHN5c3RlbVxuICogRGVzaWduIHNwZWM6XG4gKiBCcmVha3BvaW50czogaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTEzL3ByZXZpZXdcbiAqIE1vYmlsZTogaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTE1L3ByZXZpZXdcbiAqIFRhYmxldDogaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTE2L3ByZXZpZXdcbiAqIERlc2t0b3ArOiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbiMvY29uc29sZS8xNzMwMTU4OC8zNTg2MTA1MTcvcHJldmlld1xuICogRG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9jb25mbHVlbmNlLmhpbHRpLmNvbS9kaXNwbGF5L3BzaGlsdGkvVUkrbGlicmFyeStkb2N1bWVudGF0aW9uXG4gKi9cbi8qXG4gKiBHcmlkIHN5c3RlbSBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKlxuICogSGVpZ2h0c1xuICovXG4vKlxuICogSGVpZ2h0cyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKlxuICogU2l6aW5nXG4gKi9cbi8qXG4gKiBTaXppbmcgZW5kXG4gKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKipcbiAqIFNwYWNpbmdzXG4gKiBEZXNpZ24gc3BlYzpcbiAqIGh0dHBzOi8vZm9yay5pbnZpc2lvbmFwcC5jb20vZC9tYWluIy9jb25zb2xlLzE3MzAxNTg4LzM1ODYxMDUxMS9wcmV2aWV3XG4gKiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbiMvY29uc29sZS8xNzMwMTU4OC8zNTg2MTA1MTAvcHJldmlld1xuICogRG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9jb25mbHVlbmNlLmhpbHRpLmNvbS9kaXNwbGF5L3BzaGlsdGkvVUkrbGlicmFyeStkb2N1bWVudGF0aW9uXG4gKi9cbi8qXG4gKiBTcGFjaW5ncyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKlxuICogQ3VzdG9tIGZvcm1zXG4gKi9cbi8qXG4gKiBDdXN0b20gZm9ybXMgZW5kXG4gKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKipcbiAqIExheW91dCBoZWxwZXIgY2xhc3Nlc1xuICogRG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9jb25mbHVlbmNlLmhpbHRpLmNvbS9kaXNwbGF5L3BzaGlsdGkvTGF5b3V0XG4gKi9cbi8qXG4gKiBMYXlvdXQgaGVscGVyIGNsYXNzZXMgZW5kXG4gKioqKioqKioqKioqKioqKioqKiovXG4vKlxuICogZ2xvYmFsIG1peGluIGRlZmluaXRpb25zXG4gKiBUT0RPOiBmaW5pc2ggb3IgcmV2aWV3IGltcGxlbWVudGF0aW9uIC8gcmVtb3ZlIGlmIG5vdCBuZWVkZWRcbiAqL1xuLypcbiAqIHZhcmlhYmxlcyBkZWZpbml0aW9uXG4gKi9cbi8qKipcbiAqIG9yaWdpbmFsIGltcG9ydFxuICovXG4vKioqXG4gKiBQYXRjaCAvIGV4dGVuZFxuICovXG4vKlxuICogbWl4aW5zIGRlZmluaXRpb25cbiAqL1xuLyoqKlxuICogb3JpZ2luYWwgaW1wb3J0XG4gKi9cbi8qKipcbiAqIFBhdGNoIC8gZXh0ZW5kXG4gKi9cbi8qKlxuICogSElMVEkgc3BlY2lmaWMgbW9kaWZpY2F0aW9uczpcbiAqICRib3JkZXIgcHJvcGVydHk6IGlmIHBsdW1iZXIgYXBwbGllZCBvbiBlbGVtZW50cyB3aXRoIGJvcmRlcnMsIHRoZXNlIG5lZWQgdG8gYmUgc3VidHJhY3RlZCBmcm9tIHBhZGRpbmdcbiAqL1xuLypcbiAqIFBsdW1iZXIgYmFzZWxpbmUgZGVmaW5pdGlvbiBmaWxlXG4gKi9cbjpob3N0LWNvbnRleHQoLnNlYXJjaC1maWVsZCkgLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7IH1cblxuOmhvc3QtY29udGV4dCguaGVhZGVyLXZhcmlhbnQpIC5mb3JtLWNvbnRyb2w6bm90KDpkaXNhYmxlZCkge1xuICBib3JkZXItY29sb3I6ICNkMjA1MWU7IH1cbiIsIi8qXG4gKiBzY3NzIGhlbHBlciBmdW5jdGlvbnNcbiAqIFRPRE86IGZpbmlzaCBvciByZXZpZXcgaW1wbGVtZW50YXRpb24gLyByZW1vdmUgaWYgbm90IG5lZWRlZFxuICovXG5cbi8qKlxuICogcmV0dXJucyBhIGZvbnQgdmFsdWUgZnJvbSB0aGUgZGVmaW5pdGlvblxuICovXG5AZnVuY3Rpb24gZm9udCgka2V5KSB7XG4gIEBpZiBtYXAtaGFzLWtleSgkZm9udHMsICRrZXkpIHtcbiAgICBAcmV0dXJuIG1hcC1nZXQoJGZvbnRzLCAka2V5KTtcbiAgfVxuXG4gIEB3YXJuIFwiVW5rbm93biBgI3ska2V5fWAgaW4gJGZvbnRzLlwiO1xuICBAcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogcmV0dXJucyBhIGNvbG9yIHZhbHVlIGZyb20gdGhlIGRlZmluaXRpb25cbiAqL1xuQGZ1bmN0aW9uIGNvbG9yKCRrZXkpIHtcbiAgQGlmIG1hcC1oYXMta2V5KCRjb2xvcnMsICRrZXkpIHtcbiAgICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGtleSk7XG4gIH1cblxuICBAd2FybiBcIlVua25vd24gYCN7JGtleX1gIGluICRjb2xvcnMuXCI7XG4gIEByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiByZXR1cm5zIGEgc3BhY2luZyB2YWx1ZSBmcm9tIHRoZSBkZWZpbml0aW9uXG4gKi9cbkBmdW5jdGlvbiBzcGFjaW5nKCRrZXkpIHtcbiAgQGlmIG1hcC1oYXMta2V5KCRzcGFjZXJzLCAka2V5KSB7XG4gICAgQHJldHVybiBtYXAtZ2V0KCRzcGFjZXJzLCAka2V5KTtcbiAgfVxuXG4gIEB3YXJuIFwiVW5rbm93biBgI3ska2V5fWAgaW4gJHNwYWNlcnMuXCI7XG4gIEByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIHVuaXQgb2YgYSB2YWx1ZVxuICovXG5AZnVuY3Rpb24gcmVtb3ZlLXVuaXQoJG51bWJlcikge1xuICBAaWYgdHlwZS1vZigkbnVtYmVyKSA9PSAnbnVtYmVyJyBhbmQgbm90IHVuaXRsZXNzKCRudW1iZXIpIHtcbiAgICBAcmV0dXJuICRudW1iZXIgLyAoJG51bWJlciAqIDAgKyAxKTtcbiAgfVxuXG4gIEByZXR1cm4gJG51bWJlcjtcbn1cblxuLyoqXG4gKiB0ZXN0cyB2YWx1ZSBpZiBpbnRlZ2VyXG4gKi9cbkBmdW5jdGlvbiBpcy1pbnRlZ2VyKCR2YWx1ZSkge1xuICBAcmV0dXJuICh1bml0bGVzcygkdmFsdWUpIGFuZCAkdmFsdWUgPT0gcm91bmQoJHZhbHVlKSk7XG59XG5cbi8qKlxuICogcmV0cmlldmUgbXVsdGlwbGUgb2YgYmFzZWxpbmVcbiAqL1xuQGZ1bmN0aW9uIGJsKCR2YWx1ZSkge1xuICBAaWYgbm90IGlzLWludGVnZXIoJHZhbHVlKSB7XG4gICAgQGVycm9yICd2YWx1ZSBtdXN0IGJlIGludGVnZXIsIGdvdCAjeyR2YWx1ZX0gaW5zdGVhZCc7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZSAqICRiYXNlbGluZS1ncmlkLWhlaWdodDtcbn1cblxuLyoqXG4gKiBoZWxwZXIgdG8gcmV0dXJuIHRoZSBjYWxjIGZ1bmN0aW9uIGZvciBiYXNlbGluZSB3aXRoIGJvcmRlclxuICovXG5AZnVuY3Rpb24gYmwtYm9yZGVyKCRwYWRkaW5nKSB7XG4gIEBpZiBub3QgaXMtaW50ZWdlcigkcGFkZGluZykgb3IgJHBhZGRpbmcgPCAwIHtcbiAgICBAZXJyb3IgJ3BhZGRpbmcgbXVzdCBiZSBpbnRlZ2VyIGFuZCBsYXJnZXIgMCwgZ290ICN7JHBhZGRpbmd9IGluc3RlYWQnO1xuICB9XG5cbiAgQHJldHVybiBibCgkcGFkZGluZykgLSAkYm9yZGVyLXdpZHRoO1xufVxuXG4vKipcbiAqIGNvbnZlcnQgcmVtIHZhbHVlcyB0byBweCBiYXNlZCBvbiBkZWZhdWx0IGZvbnQgc2l6ZSBvZiAxNnB4XG4gKi9cbkBmdW5jdGlvbiByZW0tdG8tcHgoJHJlbVZhbHVlKSB7XG4gIC8vIFRPRE86IGFzIDE2cHggaXMgZGVwZW5kZW5kIG9uIGJyb3dzZXIgc2V0dGluZ3MgdGhpcyBpcyBzdGlsbCBzdWJqZWN0IHRvIGNoYW5nZVxuICBAcmV0dXJuIHJlbW92ZS11bml0KCRyZW1WYWx1ZSkgKiAxNnB4O1xufVxuIiwiLypcbiAqIGhkbXMgdmFyaWFibGUgZGVmaW5pdGlvbnNcbiAqL1xuXG4vLyBIRE1TIGN1c3RvbVxuJGJhc2VsaW5lLWdyaWQtaGVpZ2h0OiAxMXB4ICFkZWZhdWx0O1xuXG4vKioqKioqKioqKioqKioqKioqKipcbiAqIEZvbnRzIGRlZmluaXRpb25zXG4gKiBEZXNpZ24gc3BlYzogRGVmaW5pdGlvbnMgc2VlIGh0dHBzOi8vZm9yay5pbnZpc2lvbmFwcC5jb20vZC9tYWluIy9jb25zb2xlLzE3MzAxNTg4LzM1ODYxMDU0Mi9wcmV2aWV3XG4gKiBEb2N1bWVudGF0aW9uOiBodHRwczovL2NvbmZsdWVuY2UuaGlsdGkuY29tL2Rpc3BsYXkvcHNoaWx0aS9VSStsaWJyYXJ5K2RvY3VtZW50YXRpb25cbiAqL1xuXG4kYmFzZWxpbmUtaGlsdGktcm9tYW46IDAuMTY7XG4kYmFzZWxpbmUtaGlsdGktYm9sZDogMC4xNjtcblxuLyogTm90IHVzZWQgYXQgdGhlIG1vbWVudC5cbiRiYXNlbGluZS1oaWx0aS1leHRlbmRlZDogMC4xODU7XG4kYmFzZWxpbmUtaGlsdGktaGVhdnktZXh0ZW5kZWQ6IDAuMTg1O1xuJGJhc2VsaW5lLWFyaWFsOiAwLjE1MzMyMDtcbiRiYXNlbGluZS1tb25vc3BhY2U6IDAuMTYyO1xuKi9cblxuJGZvbnRzOiAoXG4gICdoaWx0aS1yb21hbic6IChcbiAgICAnSGlsdGkgUm9tYW4nLFxuICAgIEFyaWFsLFxuICAgIFZlcmRhbmEsXG4gICAgc2Fucy1zZXJpZlxuICApLFxuICAnaGlsdGktYm9sZCc6IChcbiAgICAnSGlsdGkgQm9sZCcsXG4gICAgQXJpYWwsXG4gICAgVmVyZGFuYSxcbiAgICBzYW5zLXNlcmlmXG4gIClcbiAgLyogbm90IHVzZWQgYXQgdGhlIG1vbWVudFxuICAgICAgICAnaGlsdGktZXh0ZW5kZWQnOiAgICggJ0hpbHRpIEV4dGVuZGVkJywgQXJpYWwsIFZlcmRhbmEsIHNhbnMtc2VyaWYgKSxcbiAgICAgICAgJ2hpbHRpLWhlYXZ5JzogICAgICAoICdIaWx0aSBIZWF2eSBFeHRlbmRlZCcsIEFyaWFsLCBWZXJkYW5hLCBzYW5zLXNlcmlmICksXG4gICAgICAgICdhcmlhbCc6ICAgICAgICAgICAgICggQXJpYWwsIFZlcmRhbmEsIHNhbnMtc2VyaWYgKSxcbiAgICAgICAgJ21vbm9zcGFjZSc6ICAgICAgICAgKCBtb25vc3BhY2UgKVxuICAgICAgICAqL1xuKTtcblxuJGJhc2UtZm9udC1zaXplOiAxNXB4O1xuXG4vKlxuICogQ29sb3IgZGVmaW5pdGlvbnMgZW5kXG4gKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKioqKioqKioqKioqKioqKioqKlxuICogQ29sb3IgZGVmaW5pdGlvbnNcbiAqIERlc2lnbiBzcGVjOiBEZWZpbml0aW9ucyBzZWUgaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4vIy9jb25zb2xlLzE3MzAxNTg4LzM1ODYxMDUwNS9wcmV2aWV3XG4gKiBEb2N1bWVudGF0aW9uOiBodHRwczovL2NvbmZsdWVuY2UuaGlsdGkuY29tL2Rpc3BsYXkvcHNoaWx0aS9VSStsaWJyYXJ5K2RvY3VtZW50YXRpb25cbiAqL1xuJHJlZDogI2QyMDUxZTtcbiRidXJndW5keTogIzY3MWEzZDtcbiRzdGVlbC0xMDA6ICM1MjRmNTM7XG4kd2hpdGU6ICNmZmY7XG4kd2FybS1jb25jcmV0ZS0xMDA6ICNkN2NlYmQ7XG4kaGVhdnktY29uY3JldGUtMTAwOiAjODg3ZjZlO1xuJHN0ZWVsLTQwOiAjYmFiOWJhO1xuJHN0ZWVsLTEwOiAjZWRlZGVkO1xuJGJsYWNrLTY6IHJnYmEoMCwgMCwgMCwgMC4wNik7XG5cbiRjb2xvcnM6ICgpO1xuJGNvbG9yczogbWFwLW1lcmdlKFxuICAoXG4gICAgJ3JlZCc6ICRyZWQsXG4gICAgJ2J1cmd1bmR5JzogJGJ1cmd1bmR5LFxuICAgICdzdGVlbC0xMDAnOiAkc3RlZWwtMTAwLFxuICAgICd3aGl0ZSc6ICR3aGl0ZSxcbiAgICAnd2FybS1jb25jcmV0ZS0xMDAnOiAkd2FybS1jb25jcmV0ZS0xMDAsXG4gICAgJ2hlYXZ5LWNvbmNyZXRlLTEwMCc6ICRoZWF2eS1jb25jcmV0ZS0xMDAsXG4gICAgJ3N0ZWVsLTQwJzogJHN0ZWVsLTQwLFxuICAgICdzdGVlbC0xMCc6ICRzdGVlbC0xMCAvLyBXSVA6IGNvbG9yIGRlZmluaXRpb24gZm9yICh2ZXJ5KSBsaWdodCBncmF5IG1pc3NpbmdcbiAgKSxcbiAgJGNvbG9yc1xuKTtcblxuJHByaW1hcnk6ICRyZWQ7XG4kc2Vjb25kYXJ5OiAkYnVyZ3VuZHk7XG4vLyBUT0RPOiBXSVAgLSBzdWNjZXNzLCBpbmZvLCB3YXJuaW5nIGFuZCBkYW5nZXIgbm90IHlldCBkZWZpbmVkXG4vLyBzZWUgaGVyZTogaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4vIy9jb25zb2xlLzE3MzAxNTg4LzM1ODYxMDUwNi9wcmV2aWV3XG4kc3VjY2VzczogbGlnaHRncmVlbjtcbiRpbmZvOiBsaWdodGJsdWU7XG4kd2FybmluZzogb3JhbmdlO1xuJGRhbmdlcjogJHJlZDtcbiRsaWdodDogJHdoaXRlO1xuJGRhcms6ICRzdGVlbC0xMDA7XG5cbi8vIGN1c3RvbSB0aGVtZSBjb2xvcnNcbiRuZXV0cmFsLWxpZ2h0OiAkd2FybS1jb25jcmV0ZS0xMDA7XG4kbmV1dHJhbC1kYXJrOiAkaGVhdnktY29uY3JldGUtMTAwO1xuJGRpc2FibGVkOiAkc3RlZWwtNDA7XG5cbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kdGhlbWUtY29sb3JzOiAoKTtcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgICdwcmltYXJ5JzogJHByaW1hcnksXG4gICAgJ3NlY29uZGFyeSc6ICRzZWNvbmRhcnksXG4gICAgJ3N1Y2Nlc3MnOiAkc3VjY2VzcyxcbiAgICAnaW5mbyc6ICRuZXV0cmFsLWxpZ2h0LFxuICAgICd3YXJuaW5nJzogJHdhcm5pbmcsXG4gICAgJ2Rhbmdlcic6ICRkYW5nZXIsXG4gICAgJ2xpZ2h0JzogJGxpZ2h0LFxuICAgICdkYXJrJzogJGRhcmssXG4gICAgJ2Rpc2FibGVkJzogJGRpc2FibGVkLFxuICAgICduZXV0cmFsLWxpZ2h0JzogJG5ldXRyYWwtbGlnaHQsXG4gICAgJ25ldXRyYWwtZGFyayc6ICRuZXV0cmFsLWRhcmssXG4gICAgJ3N0ZWVsLTEwJzogJHN0ZWVsLTEwIC8vIFdJUDogc2VlIGFib3ZlXG4gICksXG4gICR0aGVtZS1jb2xvcnNcbik7XG5cbi8qXG4gKiBDb2xvciBkZWZpbml0aW9ucyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqKioqKioqKioqKioqKioqKioqXG4gKiBHcmlkIHN5c3RlbVxuICogRGVzaWduIHNwZWM6XG4gKiBCcmVha3BvaW50czogaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTEzL3ByZXZpZXdcbiAqIE1vYmlsZTogaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTE1L3ByZXZpZXdcbiAqIFRhYmxldDogaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTE2L3ByZXZpZXdcbiAqIERlc2t0b3ArOiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbiMvY29uc29sZS8xNzMwMTU4OC8zNTg2MTA1MTcvcHJldmlld1xuICogRG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9jb25mbHVlbmNlLmhpbHRpLmNvbS9kaXNwbGF5L3BzaGlsdGkvVUkrbGlicmFyeStkb2N1bWVudGF0aW9uXG4gKi9cblxuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA3NjhweCxcbiAgbWQ6IDEwMjRweCxcbiAgbGc6IDE0NDBweCxcbiAgeGw6IDI1NjBweFxuKTtcblxuJGdyaWQtYnJlYWtwb2ludHMtbm8tZ3V0dGVyOiB4cywgc207XG5cbiRncmlkLWNvbHVtbnM6IDQ4O1xuJGdyaWQtZ3V0dGVyLXdpZHRoOiAxMHB4O1xuJGdyaWQtZ3V0dGVyLXdpZHRoLW5vLWd1dHRlcjogMHB4O1xuXG4kbWVkaWEtZGlyZWN0aW9uOiAnbWluJztcbiRtZWRpYS1kaXJlY3Rpb24tdjogJ21pbic7XG5cbiRjb250YWluZXItc3BhY2luZ3M6ICgpICFkZWZhdWx0O1xuLy8gaGFsZiAkZ3JpZC1ndXR0ZXItd2lkdGggd2lkdGggd2lsbCBiZSBhZGRlZCB0byBhbGwgbm8gbWF0dGVyIHRoZSBicmVha3BvaW50XG4kY29udGFpbmVyLXNwYWNpbmdzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICB4czogMTVweCxcbiAgICBzbTogMzVweCxcbiAgICBtZDogNTVweCxcbiAgICBsZzogNzVweCxcbiAgICB4bDogMTM1cHhcbiAgKSxcbiAgJGNvbnRhaW5lci1zcGFjaW5nc1xuKTtcblxuLypcbiAqIEdyaWQgc3lzdGVtIGVuZFxuICoqKioqKioqKioqKioqKioqKioqL1xuXG4vKioqKioqKioqKioqKioqKioqKipcbiAqIEhlaWdodHNcbiAqL1xuXG4kYmwtaGVpZ2h0LXNpemVzLWZyb206IDM7XG4kYmwtaGVpZ2h0LXNpemVzLXRvOiAyMDtcblxuLypcbiAqIEhlaWdodHMgZW5kXG4gKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKioqKioqKioqKioqKioqKioqKlxuICogU2l6aW5nXG4gKi9cblxuJGJveC13aWR0aHM6IChcbiAgJzEtNic6IHBlcmNlbnRhZ2UoMS82KSxcbiAgJzEtNCc6IHBlcmNlbnRhZ2UoMS80KSxcbiAgJzEtMyc6IHBlcmNlbnRhZ2UoMS8zKSxcbiAgJzEtMic6IHBlcmNlbnRhZ2UoMS8yKSxcbiAgJzItMyc6IHBlcmNlbnRhZ2UoMi8zKVxuKTtcblxuLypcbiAqIFNpemluZyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqKioqKioqKioqKioqKioqKioqXG4gKiBTcGFjaW5nc1xuICogRGVzaWduIHNwZWM6XG4gKiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbiMvY29uc29sZS8xNzMwMTU4OC8zNTg2MTA1MTEvcHJldmlld1xuICogaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTEwL3ByZXZpZXdcbiAqIERvY3VtZW50YXRpb246IGh0dHBzOi8vY29uZmx1ZW5jZS5oaWx0aS5jb20vZGlzcGxheS9wc2hpbHRpL1VJK2xpYnJhcnkrZG9jdW1lbnRhdGlvblxuICovXG5cbiRzcGFjZXI6ICRiYXNlbGluZS1ncmlkLWhlaWdodDtcblxuJHNwYWNlcnM6IChcbiAgKFxuICAgIDA6IDAsXG4gICAgMTogKFxuICAgICAgJHNwYWNlciAqIDFcbiAgICApLFxuICAgIDI6IChcbiAgICAgICRzcGFjZXIgKiAyXG4gICAgKSxcbiAgICAzOiAoXG4gICAgICAkc3BhY2VyICogM1xuICAgICksXG4gICAgNDogKFxuICAgICAgJHNwYWNlciAqIDRcbiAgICApLFxuICAgIDU6IChcbiAgICAgICRzcGFjZXIgKiA1XG4gICAgKVxuICApXG4pO1xuXG4kaG9yaXpvbnRhbC1zcGFjZXJzOiAoXG4gIChcbiAgICAwOiAwLFxuICAgIDE6IDVweCxcbiAgICAyOiAxMHB4LFxuICAgIDM6IDE1cHgsXG4gICAgNDogMjBweCxcbiAgICA1OiAyNXB4XG4gIClcbik7XG5cbiRjb250YWluZXItcGFkZGluZy14OiAxNXB4O1xuXG4vKlxuICogU3BhY2luZ3MgZW5kXG4gKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIE9wdGlvbnNcbiRlbmFibGUtdmFsaWRhdGlvbi1pY29uczogZmFsc2U7XG5cbiRib2R5LWJnOiAkd2hpdGU7XG4kYm9keS1jb2xvcjogJHN0ZWVsLTEwMDtcblxuJGZvbnQtZmFtaWx5LWJhc2U6IG1hcC1nZXQoJGZvbnRzLCAnaGlsdGktLXJvbWFuJyk7XG5cbiRoZWFkaW5ncy1mb250LWZhbWlseTogbWFwLWdldCgkZm9udHMsICdoaWx0aS0tcm9tYW4nKTsgLy8gVE9ETzogcmV2aWV3XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IDQwMDsgLy8gVE9ETzogcmV2aWV3XG5cbiRoZWFkaW5ncy1saW5lLWhlaWdodDogYmwoMik7XG5cbiRoMS1mb250LXNpemU6IDIwcHg7XG4kaDItZm9udC1zaXplOiA0NHB4O1xuJGgzLWZvbnQtc2l6ZTogMjBweDtcblxuJGJvZHktZm9udDogbWFwLWdldCgkZm9udHMsICdoaWx0aS1yb21hbicpO1xuXG4vLyAkZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAwLjkzNzVyZW07XG5cbiRmb250LXdlaWdodC1iYXNlOiA0MDA7XG4kbGluZS1oZWlnaHQtYmFzZTogMjtcblxuLy8gQ29tcG9uZW50c1xuLy9cbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cbi8vIFRPRE86IFdJUCAvIHJldmlld1xuJGJveC1zaGFkb3ctc206IDAgMC4xMjVyZW0gMC4xMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG5cbiRib3JkZXItd2lkdGg6IDFweDtcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnk7XG5cbiRib3JkZXItcmFkaXVzOiAwO1xuJGJvcmRlci1yYWRpdXMtbGc6ICRib3JkZXItcmFkaXVzO1xuJGJvcmRlci1yYWRpdXMtc206IDZweDtcblxuLy8gQWxlcnRzXG4vLyBUT0RPOiBXSVAgLyByZXZpZXdcbiRhbGVydC1ib3JkZXItd2lkdGg6IDFweDtcbiRhbGVydC1wYWRkaW5nLXk6ICRiYXNlbGluZS1ncmlkLWhlaWdodCAtICRhbGVydC1ib3JkZXItd2lkdGg7IC8vIHJlc3BlY3QgYm9yZGVyIHdpZHRoIHRvIHN0YXkgd2l0aGluIGJhc2VsaW5lXG4kYWxlcnQtbWFyZ2luLWJvdHRvbTogJGJhc2VsaW5lLWdyaWQtaGVpZ2h0O1xuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG4vLyBUT0RPOiBXSVAgLyByZXZpZXdcbiRkcm9wZG93bi1taW4td2lkdGg6IDIwcmVtO1xuJGRyb3Bkb3duLXBhZGRpbmcteTogMDtcbiRkcm9wZG93bi1zcGFjZXI6IDE3cHg7XG4kZHJvcGRvd24tYm94LXNoYWRvdzogMCAwLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG5cbi8vIExpc3RzXG4kbGlzdC11bC1idWxsZXQtZGlhbWV0ZXI6IDVweDtcbiRsaXN0LXVsLWljb24td2lkdGg6IDE4cHg7XG4kbGlzdC11bC1pY29uLXRleHQtc3BhY2luZzogJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMjtcbiRsaXN0LW9sLW51bWJlci13aWR0aDogMjFweDtcbiRsaXN0LW9sLW51bWJlci10ZXh0LXNwYWNpbmc6ICRsaXN0LXVsLWljb24tdGV4dC1zcGFjaW5nO1xuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cbi8vIFRPRE86IFdJUCAvIHJldmlld1xuJGxpbmstY29sb3I6ICRzdGVlbC0xMDA7XG5cbi8vIE5hdmJhclxuLy8gVE9ETzogV0lQIC8gcmV2aWV3XG4kbmF2YmFyLXBhZGRpbmcteTogMDtcbiRuYXZiYXItbmF2LWxpbmstcGFkZGluZy14OiAwLjYyNXJlbTtcbiRuYXYtbGluay1wYWRkaW5nLXg6ICRjb250YWluZXItcGFkZGluZy14O1xuXG4vLyBDb21wdXRlIHRoZSBuYXZiYXItYnJhbmQgcGFkZGluZy15IHNvIHRoZSBuYXZiYXItYnJhbmQgd2lsbCBoYXZlIHRoZSBzYW1lIGhlaWdodCBhcyBuYXZiYXItdGV4dCBhbmQgbmF2LWxpbmtcbiRuYXZiYXItYnJhbmQtcGFkZGluZy15OiAwO1xuJG5hdmJhci1saWdodC1jb2xvcjogJGhlYXZ5LWNvbmNyZXRlLTEwMDtcbiRuYXZiYXItbGlnaHQtaG92ZXItY29sb3I6ICRuYXZiYXItbGlnaHQtY29sb3I7XG4kbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvcjogJG5hdmJhci1saWdodC1jb2xvcjtcblxuLy8gQnV0dG9ucyArIEZvcm1zXG4vL1xuLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXG5cbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xuXG4vLyBGb3Jtc1xuXG4kbGFiZWwtbWFyZ2luLWJvdHRvbTogYmwoMSk7XG4kZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tOiBibCgyKTtcbiRmb3JtLXRleHQtbWFyZ2luLXRvcDogYmwoMSk7XG5cbi8vIFRPRE86IFdJUCAvIHJldmlld1xuJGlucHV0LWhlaWdodDogYmwoMyk7XG4kaW5wdXQtaGVpZ2h0LXNtOiAkaW5wdXQtaGVpZ2h0O1xuJGlucHV0LWhlaWdodC1sZzogJGlucHV0LWhlaWdodDtcblxuJGlucHV0LWZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplO1xuXG4kaW5wdXQtYmc6IHRyYW5zcGFyZW50O1xuJGlucHV0LWRpc2FibGVkLWJnOiAkaW5wdXQtYmc7XG4kaW5wdXQtZGlzYWJsZWQtY29sb3I6ICRkaXNhYmxlZDsgLy8gY3VzdG9tIC0gbm8gYm9vdHN0cmFwIHN0YW5kYXJkXG5cbiRpbnB1dC1jb2xvcjogJGJvZHktY29sb3I7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkbmV1dHJhbC1saWdodDtcbiRpbnB1dC1ib3JkZXItd2lkdGg6ICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoO1xuJGlucHV0LWJveC1zaGFkb3c6IG5vbmU7XG5cbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAkYm9yZGVyLXJhZGl1cy1sZztcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuJGlucHV0LWZvY3VzLWJnOiAkaW5wdXQtYmc7XG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5O1xuJGlucHV0LWZvY3VzLWNvbG9yOiAkaW5wdXQtY29sb3I7XG4kaW5wdXQtZm9jdXMtd2lkdGg6IDA7XG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcblxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAkbmV1dHJhbC1kYXJrO1xuJGlucHV0LXBsYWNlaG9sZGVyLWRpc2FibGVkLWNvbG9yOiAkZGlzYWJsZWQ7IC8vIGN1c3RvbSAtIG5vIGJvb3RzdHJhcCBzdGFuZGFyZFxuJGlucHV0LXBsYWludGV4dC1jb2xvcjogJGJvZHktY29sb3I7XG5cbi8vIEZvcm0gVmFsaWRhdGlvblxuLy8gVE9ETzogV0lQXG4kZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcjogJHN1Y2Nlc3M7XG4kZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yOiAkZGFyaztcbiRmb3JtLWZlZWRiYWNrLWludmFsaWQtbWVzc2FnZS1jb2xvcjogJGRhbmdlcjsgLy8gY3VzdG9tIC0gbm8gYm9vdHN0cmFwIHN0YW5kYXJkXG5cbiRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiAoKTtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kZm9ybS12YWxpZGF0aW9uLXN0YXRlczogbWFwLW1lcmdlKFxuICAoXG4gICAgJ3ZhbGlkJzogKFxuICAgICAgJ2NvbG9yJzogJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3JcbiAgICApLFxuICAgICdpbnZhbGlkJzogKFxuICAgICAgJ2NvbG9yJzogJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvclxuICAgIClcbiAgKSxcbiAgJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXNcbik7XG5cbi8qKioqKioqKioqKioqKioqKioqKlxuICogQ3VzdG9tIGZvcm1zXG4gKi9cblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplOiAxLjEyNXJlbTsgLy8xOHB4O1xuJGN1c3RvbS1jb250cm9sLWd1dHRlcjogMC4zMTI1cmVtOyAvLzVweDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmc6IHRyYW5zcGFyZW50O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItY29sb3I6ICRkYXJrO1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWRpc2FibGVkLWNvbG9yOiAkZGlzYWJsZWQ7IC8vIGN1c3RvbSAtIG5vIGJvb3RzdHJhcCBzdGFuZGFyZFxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1jaGVja2VkLWRpc2FibGVkOiBzdHItcmVwbGFjZShcbiAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1kaXNhYmxlZC1jb2xvcn0nIGQ9J002LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNiAyLjk3NCA3LjI1IDggMi4xOTN6Jy8lM2UlM2Mvc3ZnJTNlXCIpLFxuICAnIycsXG4gICclMjMnXG4pICFkZWZhdWx0O1xuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItaWNvbi1jaGVja2VkLWRpc2FibGVkOiBzdHItcmVwbGFjZShcbiAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM2UlM2NjaXJjbGUgcj0nMycgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtY29sb3J9Jy8lM2UlM2Mvc3ZnJTNlXCIpLFxuICAnIycsXG4gICclMjMnXG4pICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWRpc2FibGVkLWJnOiB0cmFuc3BhcmVudDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcjogJGRhcms7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmc6IHRyYW5zcGFyZW50O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJvcmRlci1jb2xvcjogJGRhcms7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm94LXNoYWRvdzogbm9uZTtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAkZGlzYWJsZWQ7IC8vIGN1c3RvbSAtIG5vIGJvb3RzdHJhcCBzdGFuZGFyZFxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmc6IHRyYW5zcGFyZW50O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkZGFyaztcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJveC1zaGFkb3c6IG5vbmU7XG4kY3VzdG9tLWNvbnRyb2wtbGFiZWwtZGlzYWJsZWQtY29sb3I6ICRkaXNhYmxlZDtcbi8qXG4gKiBDdXN0b20gZm9ybXMgZW5kXG4gKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIEJ1dHRvbnNcbi8vIFRPRE86IFdJUCAvIHJldmlld1xuJGJ0bi1wYWRkaW5nLXg6IDIwcHg7XG4kYnRuLWJvcmRlci13aWR0aDogMDtcbiRidG4tYmxvY2stc3BhY2luZy15OiAkYmFzZWxpbmUtZ3JpZC1oZWlnaHQ7XG5cbiRidG4tZGlzYWJsZWQtb3BhY2l0eTogMTtcbiRidG4tYm9yZGVyLXdpZHRoOiAxcHg7XG4kYnRuLWZvbnQtZmFtaWx5OiBtYXAtZ2V0KCRmb250cywgJ2hpbHRpLWJvbGQnKTtcbiRidG4tbGluay1mb250LWZhbWlseTogbWFwLWdldCgkZm9udHMsICdoaWx0aS1yb21hbicpO1xuXG4kYnRuLWZvY3VzLXdpZHRoOiAwO1xuJGJ0bi1ib3gtc2hhZG93OiBub25lO1xuJGJ0bi1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xuJGJ0bi1hY3RpdmUtYm94LXNoYWRvdzogbm9uZTtcblxuLy8gQnV0dG9uIG91dGxpbmVcbiRidG4tb3V0bGluZS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiRidG4tb3V0bGluZS1ib3JkZXItcmFkaXVzOiA2cHg7XG4kYnRuLW91dGxpbmUtYm94LXNoYWRvdzogMCA3cHggOHB4IDAgJGJsYWNrLTY7XG4kYnRuLW91dGxpbmUtaG92ZXItYm94LXNoYWRvdzogMCAzcHggM3B4IDAgJGJsYWNrLTY7XG4kYnRuLW91dGxpbmUtZm9jdXMtYm94LXNoYWRvdzogJGJ0bi1vdXRsaW5lLWJveC1zaGFkb3c7XG5cbi8vIEJ1dHRvbiBsaW5rc1xuJGxpbmstZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogbm9uZTtcblxuLyoqKioqKioqKioqKioqKioqKioqXG4gKiBMYXlvdXQgaGVscGVyIGNsYXNzZXNcbiAqIERvY3VtZW50YXRpb246IGh0dHBzOi8vY29uZmx1ZW5jZS5oaWx0aS5jb20vZGlzcGxheS9wc2hpbHRpL0xheW91dFxuICovXG5cbiRoZG1zLWhlbHBlci1jb250YWluZXItY29sb3I6IChcbiAgb3V0bGluZTogMnB4IGRvdWJsZSAjMDAwNzg4LFxuICBiYWNrZ3JvdW5kOiByZ2JhKCMwMDkwZmYsIDAuMiksXG4gIGNsYXNzSW5kaWNhdG9yOiAjMDA5MGZmLFxuICBjb2xvcjogIzAwMDc4OFxuKTtcblxuJGhkbXMtaGVscGVyLXJvdy1jb2xvcjogKFxuICBvdXRsaW5lOiAycHggZGFzaGVkICMyODYxMDAsXG4gIGJhY2tncm91bmQ6IHJnYmEoIzAwYWIwMCwgMC4yKSxcbiAgY2xhc3NJbmRpY2F0b3I6ICMwMGFiMDAsXG4gIGNvbG9yOiAjMjg2MTAwXG4pO1xuXG4kaGRtcy1oZWxwZXItY29sdW1ucy1jb2xvcjogKFxuICBvdXRsaW5lOiAycHggZG90dGVkICM2NjNjMDAsXG4gIGJhY2tncm91bmQ6IHJnYmEoI2RkZDUwMCwgMC4yKSxcbiAgY2xhc3NJbmRpY2F0b3I6ICNkZGQ1MDAsXG4gIGNvbG9yOiAjNjYzYzAwXG4pO1xuXG4kaGRtcy1oZWxwZXItYm94LWdyb3VwLWNvbG9yOiAoXG4gIG91dGxpbmU6IDJweCBkYXNoZWQgI2ZmMDAwMCxcbiAgYmFja2dyb3VuZDogcmdiYSgjZmYwMDAwLCAwLjIpLFxuICBjbGFzc0luZGljYXRvcjogI2ZmMDAwMCxcbiAgY29sb3I6ICNmZjAwMDBcbik7XG5cbiRoZG1zLWhlbHBlci1ib3gtY29sb3I6IChcbiAgb3V0bGluZTogMnB4IGRhc2hlZCAjZmYwNWZmLFxuICBiYWNrZ3JvdW5kOiByZ2JhKCNmZjA1ZmYsIDAuMiksXG4gIGNsYXNzSW5kaWNhdG9yOiAjZmYwNWZmLFxuICBjb2xvcjogI2ZmMDVmZlxuKTtcblxuLypcbiAqIExheW91dCBoZWxwZXIgY2xhc3NlcyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cbiIsIi8qXG4gKiBnbG9iYWwgbWl4aW4gZGVmaW5pdGlvbnNcbiAqIFRPRE86IGZpbmlzaCBvciByZXZpZXcgaW1wbGVtZW50YXRpb24gLyByZW1vdmUgaWYgbm90IG5lZWRlZFxuICovXG5cbkBtaXhpbiB1dGlsaXR5LWRlZmluaXRpb24oJGNsYXNzRnJhZ21lbnQsICRrZXksICR2YWx1ZSwgJGZvckFsbEJyZWFrcG9pbnRzOiBmYWxzZSkge1xuICBAaWYgKCRrZXkgYW5kICR2YWx1ZSkge1xuICAgICUjeyRjbGFzc0ZyYWdtZW50fSB7XG4gICAgICAjeyRrZXl9OiAjeyR2YWx1ZX07XG4gICAgfVxuXG4gICAgLiN7JGNsYXNzRnJhZ21lbnR9IHtcbiAgICAgICN7JGtleX06ICN7JHZhbHVlfTtcbiAgICB9XG5cbiAgICBAaWYgJGZvckFsbEJyZWFrcG9pbnRzIHtcbiAgICAgIEBlYWNoICRicCBpbiAkYnJlYWtwb2ludC1rZXlzIHtcbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludCgkYnApIHtcbiAgICAgICAgICAuI3skYnB9LSN7JGNsYXNzRnJhZ21lbnR9IHtcbiAgICAgICAgICAgICN7JGtleX06ICN7JHZhbHVlfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEB3YXJuIFwiTm8gdmFsdWUgZm9yIHV0aWxpdHktZGVmaW5pdGlvbiBnaXZlblwiO1xuICB9XG59XG4iLCIvKlxuICogdmFyaWFibGVzIGRlZmluaXRpb25cbiAqL1xuXG4vKioqXG4gKiBvcmlnaW5hbCBpbXBvcnRcbiAqL1xuXG5AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcblxuLyoqKlxuICogUGF0Y2ggLyBleHRlbmRcbiAqL1xuIiwiLypcbiAqIG1peGlucyBkZWZpbml0aW9uXG4gKi9cblxuLyoqKlxuICogb3JpZ2luYWwgaW1wb3J0XG4gKi9cblxuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL19taXhpbnMuc2Nzcyc7XG5cbi8qKipcbiAqIFBhdGNoIC8gZXh0ZW5kXG4gKi9cbiIsIi8vIFBMVU1CRVIgLSBFYXN5IGJhc2VsaW5lIGdyaWRzIHdpdGggU0FTU1xuLy8gaHR0cHM6Ly9qYW1vbnNlcnJhbm8uZ2l0aHViLmlvL3BsdW1iZXItc2Fzc1xuLy8gQ29weXJpZ2h0IDIwMTYgVmlrdG9yIEhvbnRpXG4vLyBNSVQgTGljZW5zZVxuXG4vKipcbiAqIEhJTFRJIHNwZWNpZmljIG1vZGlmaWNhdGlvbnM6XG4gKiAkYm9yZGVyIHByb3BlcnR5OiBpZiBwbHVtYmVyIGFwcGxpZWQgb24gZWxlbWVudHMgd2l0aCBib3JkZXJzLCB0aGVzZSBuZWVkIHRvIGJlIHN1YnRyYWN0ZWQgZnJvbSBwYWRkaW5nXG4gKi9cblxuLy8gKioqIERFRkFVTFRTICoqKlxuLy8gRG8gbm90IGNoYW5nZSBpdCBoZXJlLCB1c2UgdGhlIHBsdW1iZXItc2V0LWRlZmF1bHRzIG1peGluIGluc3RlYWQhXG4kLXBsdW1iZXItZGVmYXVsdHM6IChcbiAgZm9udC1zaXplOiAyLFxuICBsaW5lLWhlaWdodDogMyxcbiAgbGVhZGluZy10b3A6IDAsXG4gIGxlYWRpbmctYm90dG9tOiAwLFxuICBncmlkLWhlaWdodDogMXJlbSxcbiAgYmFzZWxpbmU6IG51bGwsXG4gIHVzZS1iYXNlbGluZS1vcmlnaW46IGZhbHNlLFxuICBib3JkZXI6IDBcbikgIWRlZmF1bHQ7XG5cbi8vIE1lcmdlIHByb3ZpZGVkIHNldHRpbmdzIGludG8gdGhlIGRlZmF1bHRzIG1hcFxuQG1peGluIHBsdW1iZXItc2V0LWRlZmF1bHRzKCRkZWZhdWx0cy4uLikge1xuICAkLXBsdW1iZXItZGVmYXVsdHM6IG1hcC1tZXJnZSgkLXBsdW1iZXItZGVmYXVsdHMsIGtleXdvcmRzKCRkZWZhdWx0cykpICFnbG9iYWw7XG59XG5cbi8vIEdldCBhIGRlZmF1bHQgdmFsdWVcbkBmdW5jdGlvbiAtcGx1bWJlci1nZXQtZGVmYXVsdCgka2V5KSB7XG4gIEByZXR1cm4gbWFwLWdldCgkLXBsdW1iZXItZGVmYXVsdHMsICRrZXkpO1xufVxuXG4vLyBDaGVjayBpZiBhIHZhbHVlIGlzIGEgbm9uLW5lZ2F0aXZlIGludGVnZXJcbkBmdW5jdGlvbiAtcGx1bWJlci1pcy1pbnRlZ2VyKCR2YWx1ZSkge1xuICBAcmV0dXJuICh1bml0bGVzcygkdmFsdWUpIGFuZCAkdmFsdWUgPT0gcm91bmQoJHZhbHVlKSk7XG59XG5cbi8vIFJvdW5kIHZhbHVlIHRvIHRoZSBuZWFyZXN0IHF1YXJ0ZXIgcGl4ZWxcbi8vIFRoaXMgcHJvdmlkZXMgcmVhc29uYWJsZSBwcmVjaXNpb24gYW5kIHByZXZlbnRzIGdyaWQgY3JlZXAgKGJ5IGZyYWN0aW9ucyBhZGRpbmcgdXApIGluIG1vc3QgYnJvd3NlcnNcbkBmdW5jdGlvbiAtcGx1bWJlci1yb3VuZCgkdmFsdWUpIHtcbiAgQHJldHVybiByb3VuZCgkdmFsdWUgKiA0KSAvIDQ7XG59XG5cbkBmdW5jdGlvbiBwbHVtYmVyLWNhbGMoXG4gICRmb250LXNpemU6IG51bGwsXG4gICRsaW5lLWhlaWdodDogbnVsbCxcbiAgJGxlYWRpbmctdG9wOiBudWxsLFxuICAkbGVhZGluZy1ib3R0b206IG51bGwsXG4gICRncmlkLWhlaWdodDogbnVsbCxcbiAgJGJhc2VsaW5lOiBudWxsLFxuICAkdXNlLWJhc2VsaW5lLW9yaWdpbjogbnVsbCxcbiAgJGJvcmRlcjogbnVsbFxuKSB7XG4gIC8vICoqKiBWQUxJREFURSBQQVJBTUVURVJTICoqKlxuICAvLyBmb250LXNpemVcbiAgQGlmIG5vdCAkZm9udC1zaXplIHtcbiAgICAkZm9udC1zaXplOiAtcGx1bWJlci1nZXQtZGVmYXVsdChmb250LXNpemUpO1xuICB9XG4gIEBpZiBub3QgdW5pdGxlc3MoJGZvbnQtc2l6ZSkgb3IgJGZvbnQtc2l6ZSA8PSAwIHtcbiAgICBAZXJyb3IgJyRmb250LXNpemUgcGFyYW1ldGVyIG11c3QgYmUgYSBwb3NpdGl2ZSB1bml0bGVzcyBudW1iZXIsIGdvdCAjeyRmb250LXNpemV9IGluc3RlYWQnO1xuICB9XG5cbiAgLy8gbGluZS1oZWlnaHRcbiAgQGlmIG5vdCAkbGluZS1oZWlnaHQge1xuICAgICRsaW5lLWhlaWdodDogLXBsdW1iZXItZ2V0LWRlZmF1bHQobGluZS1oZWlnaHQpO1xuICB9XG4gIEBpZiBub3QgdW5pdGxlc3MoJGxpbmUtaGVpZ2h0KSBvciAkbGluZS1oZWlnaHQgIT0gcm91bmQoJGxpbmUtaGVpZ2h0KSBvciAkbGluZS1oZWlnaHQgPCAxIHtcbiAgICBAZXJyb3IgJyRsaW5lLWhlaWdodCBwYXJhbWV0ZXIgbXVzdCBiZSBhIHBvc2l0aXZlIHVuaXRsZXNzIGludGVnZXIsIGdvdCAjeyRsaW5lLWhlaWdodH0gaW5zdGVhZCc7XG4gIH1cblxuICAvLyBsZWFkaW5nLXRvcFxuICBAaWYgbm90ICRsZWFkaW5nLXRvcCB7XG4gICAgJGxlYWRpbmctdG9wOiAtcGx1bWJlci1nZXQtZGVmYXVsdChsZWFkaW5nLXRvcCk7XG4gIH1cbiAgQGlmIG5vdCAtcGx1bWJlci1pcy1pbnRlZ2VyKCRsZWFkaW5nLXRvcCkge1xuICAgIEBlcnJvciAnJGxlYWRpbmctdG9wIHBhcmFtZXRlciBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIGludGVnZXIsIGdvdCAjeyRsZWFkaW5nLXRvcH0gaW5zdGVhZC4nO1xuICB9XG5cbiAgLy8gbGVhZGluZy1ib3R0b21cbiAgQGlmIG5vdCAkbGVhZGluZy1ib3R0b20ge1xuICAgICRsZWFkaW5nLWJvdHRvbTogLXBsdW1iZXItZ2V0LWRlZmF1bHQobGVhZGluZy1ib3R0b20pO1xuICB9XG4gIEBpZiBub3QgLXBsdW1iZXItaXMtaW50ZWdlcigkbGVhZGluZy1ib3R0b20pIHtcbiAgICBAZXJyb3IgJyRsZWFkaW5nLWJvdHRvbSBwYXJhbWV0ZXIgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyLCBnb3QgI3skbGVhZGluZy1ib3R0b219IGluc3RlYWQnO1xuICB9XG5cbiAgLy8gZ3JpZC1oZWlnaHRcbiAgQGlmIG5vdCAkZ3JpZC1oZWlnaHQge1xuICAgICRncmlkLWhlaWdodDogLXBsdW1iZXItZ2V0LWRlZmF1bHQoZ3JpZC1oZWlnaHQpO1xuICB9XG4gIEBpZiB1bml0bGVzcygkZ3JpZC1oZWlnaHQpIG9yICRncmlkLWhlaWdodCA8IDAge1xuICAgIEBlcnJvciAnJGdyaWQtaGVpZ2h0IHBhcmFtZXRlciBtdXN0IGJlIGEgcG9zaXRpdmUgdW5pdCwgZ290ICN7JGdyaWQtaGVpZ2h0fSBpbnN0ZWFkJztcbiAgfVxuXG4gIC8vIGJhc2VsaW5lXG4gIEBpZiBub3QgJGJhc2VsaW5lIHtcbiAgICAkYmFzZWxpbmU6IC1wbHVtYmVyLWdldC1kZWZhdWx0KGJhc2VsaW5lKTtcbiAgfVxuICBAaWYgbm90ICRiYXNlbGluZSB7XG4gICAgQGVycm9yICckYmFzZWxpbmUgbXVzdCBiZSBwYXNzZWQgYXMgYSBwYXJhbWV0ZXIgb3IgZGVmaW5lZCBpbiBkZWZhdWx0cyc7XG4gIH0gQGVsc2UgaWYgbm90ICh1bml0bGVzcygkYmFzZWxpbmUpIGFuZCAkYmFzZWxpbmUgPj0gMCBhbmQgJGJhc2VsaW5lIDwgMSkge1xuICAgIEBlcnJvciAnJGJhc2VsaW5lIHBhcmFtZXRlciBtdXN0IGJlIGEgdW5pdGxlc3MgZnJhY3Rpb24gYmV0d2VlbiAwIGFuZCAxLCBnb3QgI3skYmFzZWxpbmV9IGluc3RlYWQnO1xuICB9XG5cbiAgLy8gdXNlLWJhc2VsaW5lLW9yaWdpblxuICBAaWYgbm90ICR1c2UtYmFzZWxpbmUtb3JpZ2luIHtcbiAgICAkdXNlLWJhc2VsaW5lLW9yaWdpbjogLXBsdW1iZXItZ2V0LWRlZmF1bHQodXNlLWJhc2VsaW5lLW9yaWdpbik7XG4gIH1cbiAgQGlmIHR5cGUtb2YoJHVzZS1iYXNlbGluZS1vcmlnaW4pICE9IGJvb2wge1xuICAgIEBlcnJvciAnJHVzZS1iYXNlbGluZS1vcmlnaW4gcGFyYW1ldGVyIG11c3QgYmUgQm9vbGVhbiwgZ290ICN7JHVzZS1iYXNlbGluZS1vcmlnaW59IGluc3RlYWQnO1xuICB9XG5cbiAgLy8gYm9yZGVyXG4gIEBpZiBub3QgJGJvcmRlciB7XG4gICAgJGJvcmRlcjogLXBsdW1iZXItZ2V0LWRlZmF1bHQoYm9yZGVyKTtcbiAgfVxuICBAaWYgbm90ICRib3JkZXIge1xuICAgIEBlcnJvciAnJGJvcmRlciBtdXN0IGJlIHBhc3NlZCBhcyBhIHBhcmFtZXRlciBvciBkZWZpbmVkIGluIGRlZmF1bHRzJztcbiAgfVxuXG4gIC8vICoqKiBDQUxDVUxBVEUgQkFTRUxJTkUgQ09SUkVDVElPTiAqKipcbiAgLy8gdGhlIGRpc3RhbmNlIG9mIHRoZSBvcmlnaW5hbCBiYXNlbGluZSBmcm9tIHRoZSBib3R0b21cbiAgJGJhc2VsaW5lLWZyb20tYm90dG9tOiAoJGxpbmUtaGVpZ2h0IC0gJGZvbnQtc2l6ZSkgLyAyICsgKCRmb250LXNpemUgKiAkYmFzZWxpbmUpO1xuICAvLyB0aGUgY29ycmVjdGVkIGJhc2VsaW5lIHdpbGwgYmUgb24gdGhlIG5lYXJlc3QgZ3JpZGxpbmVcbiAgJGNvcnJlY3RlZC1iYXNlbGluZTogcm91bmQoJGJhc2VsaW5lLWZyb20tYm90dG9tKTtcbiAgLy8gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgb3JpZ2luYWwgYW5kIHRoZSBjb3JyZWN0ZWQgYmFzZWxpbmVcbiAgJGJhc2VsaW5lLWRpZmZlcmVuY2U6ICRjb3JyZWN0ZWQtYmFzZWxpbmUgLSAkYmFzZWxpbmUtZnJvbS1ib3R0b207XG5cbiAgLy8gaWYgYmFzZWxpbmUgb3JpZ2luIGlzIHVzZWQgZm9yIGxlYWRpbmdzIHN1YnN0cmFjdCB0aGUgZGlzdGFuY2Ugb2YgdGhlIGJhc2VsaW5lIGZyb20gdGhlIGVkZ2VzXG4gIEBpZiAkdXNlLWJhc2VsaW5lLW9yaWdpbiA9PSB0cnVlIHtcbiAgICAkbGVhZGluZy10b3A6ICRsZWFkaW5nLXRvcCAtICgkbGluZS1oZWlnaHQgLSAkY29ycmVjdGVkLWJhc2VsaW5lKTtcbiAgICAkbGVhZGluZy1ib3R0b206ICRsZWFkaW5nLWJvdHRvbSAtICRjb3JyZWN0ZWQtYmFzZWxpbmU7XG4gIH1cblxuICAvLyAqKiogQ0FMQ1VMQVRFIEZPTlQgU0laRSBBTkQgTElORSBIRUlHSFRcbiAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqICRncmlkLWhlaWdodDtcbiAgJGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQgKiAkZ3JpZC1oZWlnaHQ7XG5cbiAgLy8gKioqIENBTENVTEFURSBNQVJHSU5TIEFORCBQQURESU5HUyAqKipcbiAgJHBhZGRpbmctdG9wOiBudWxsO1xuICAkbWFyZ2luLXRvcDogbnVsbDtcbiAgJG1hcmdpbi1ib3R0b206IG51bGw7XG4gICRwYWRkaW5nLWJvdHRvbTogbnVsbDtcblxuICBAaWYgJGJhc2VsaW5lLWRpZmZlcmVuY2UgPCAwIHtcbiAgICAvLyBhZGQgdG9wIGxlYWRpbmdcbiAgICAkbWFyZ2luLXRvcDogJGxlYWRpbmctdG9wICogJGdyaWQtaGVpZ2h0O1xuICAgIC8vIHB1c2ggdGhlIGJhc2VsaW5lIGRvd24gdG8gdGhlIG5leHQgZ3JpZGxpbmVcbiAgICAkcGFkZGluZy10b3A6IC0kYmFzZWxpbmUtZGlmZmVyZW5jZSAqICRncmlkLWhlaWdodCAtICRib3JkZXI7XG4gICAgLy8gYWRkIHRoZSByZW1haW5pbmcgZGlzdGFuY2UgdG8gcmVhY2ggdGhlIG5leHQgZ3JpZGxpbmVcbiAgICAkcGFkZGluZy1ib3R0b206ICgxICsgJGJhc2VsaW5lLWRpZmZlcmVuY2UpICogJGdyaWQtaGVpZ2h0IC0gJGJvcmRlcjtcbiAgICAvLyBhZGQgYm90dG9tIGxlYWRpbmcgYW5kIHJlbW92ZSB0aGUgMSBleGNlc3MgZ3JpZCBoZWlnaHQgdGhhdCBjb21lcyBmcm9tIHB1c2hpbmcgZG93blxuICAgICRtYXJnaW4tYm90dG9tOiAoJGxlYWRpbmctYm90dG9tIC0gMSkgKiAkZ3JpZC1oZWlnaHQ7XG4gIH0gQGVsc2Uge1xuICAgIC8vIGFkZCB0b3AgbGVhZGluZyBhbmQgcmVtb3ZlIHRoZSAxIGV4Y2VzcyBncmlkIGhlaWdodCB0aGF0IGNvbWVzIGZyb20gcHVsbGluZyB1cFxuICAgICRtYXJnaW4tdG9wOiAoJGxlYWRpbmctdG9wIC0gMSkgKiAkZ3JpZC1oZWlnaHQ7XG4gICAgLy8gcHVsbCB0aGUgYmFzZWxpbmUgdXAgdG8gdGhlIHByZXZpb3VzIGdyaWRsaW5lXG4gICAgJHBhZGRpbmctdG9wOiAoMSAtICRiYXNlbGluZS1kaWZmZXJlbmNlKSAqICRncmlkLWhlaWdodCAtICRib3JkZXI7XG4gICAgLy8gYWRkIHRoZSByZW1haW5pbmcgZGlzdGFuY2UgdG8gcmVhY2ggdGhlIG5leHQgZ3JpZGxpbmVcbiAgICAkcGFkZGluZy1ib3R0b206ICRiYXNlbGluZS1kaWZmZXJlbmNlICogJGdyaWQtaGVpZ2h0IC0gJGJvcmRlcjtcbiAgICAvLyBhZGQgYm90dG9tIGxlYWRpbmdcbiAgICAkbWFyZ2luLWJvdHRvbTogJGxlYWRpbmctYm90dG9tICogJGdyaWQtaGVpZ2h0O1xuICB9XG5cbiAgLy8gcm91bmQgcGl4ZWwgdmFsdWVzIHRvIGRlY3JlYXNlIGJyb3dzZXIgaW5jb25zaXN0ZW5jaWVzXG4gIEBpZiB1bml0KCRncmlkLWhlaWdodCkgPT0gJ3B4JyB7XG4gICAgJGxpbmUtaGVpZ2h0OiAtcGx1bWJlci1yb3VuZCgkbGluZS1oZWlnaHQpO1xuICAgICRtYXJnaW4tdG9wOiAtcGx1bWJlci1yb3VuZCgkbWFyZ2luLXRvcCk7XG4gICAgJHBhZGRpbmctdG9wOiAtcGx1bWJlci1yb3VuZCgkcGFkZGluZy10b3ApO1xuICAgICRwYWRkaW5nLWJvdHRvbTogLXBsdW1iZXItcm91bmQoJHBhZGRpbmctYm90dG9tKTtcbiAgICAkbWFyZ2luLWJvdHRvbTogLXBsdW1iZXItcm91bmQoJG1hcmdpbi1ib3R0b20pO1xuICB9XG5cbiAgLy8gKioqIFBST1BFUlRZIE9VVFBVVCAqKipcbiAgQHJldHVybiAoXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLFxuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQsXG4gICAgbWFyZ2luLXRvcDogJG1hcmdpbi10b3AsXG4gICAgcGFkZGluZy10b3A6ICRwYWRkaW5nLXRvcCxcbiAgICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmctYm90dG9tLFxuICAgIG1hcmdpbi1ib3R0b206ICRtYXJnaW4tYm90dG9tXG4gICk7XG59XG5cbkBtaXhpbiBwbHVtYmVyKFxuICAkZm9udC1zaXplOiBudWxsLFxuICAkbGluZS1oZWlnaHQ6IG51bGwsXG4gICRsZWFkaW5nLXRvcDogbnVsbCxcbiAgJGxlYWRpbmctYm90dG9tOiBudWxsLFxuICAkZ3JpZC1oZWlnaHQ6IG51bGwsXG4gICRiYXNlbGluZTogbnVsbCxcbiAgJHVzZS1iYXNlbGluZS1vcmlnaW46IG51bGwsXG4gICRib3JkZXI6IG51bGxcbikge1xuICAkcGx1bWJlci1yZXN1bHQ6IHBsdW1iZXItY2FsYyhcbiAgICAkZm9udC1zaXplLFxuICAgICRsaW5lLWhlaWdodCxcbiAgICAkbGVhZGluZy10b3AsXG4gICAgJGxlYWRpbmctYm90dG9tLFxuICAgICRncmlkLWhlaWdodCxcbiAgICAkYmFzZWxpbmUsXG4gICAgJHVzZS1iYXNlbGluZS1vcmlnaW4sXG4gICAgJGJvcmRlclxuICApO1xuXG4gIC8vICoqKiBDU1MgT1VUUFVUICoqKlxuICBmb250LXNpemU6IG1hcC1nZXQoJHBsdW1iZXItcmVzdWx0LCBmb250LXNpemUpO1xuICBsaW5lLWhlaWdodDogbWFwLWdldCgkcGx1bWJlci1yZXN1bHQsIGxpbmUtaGVpZ2h0KTtcbiAgbWFyZ2luLXRvcDogbWFwLWdldCgkcGx1bWJlci1yZXN1bHQsIG1hcmdpbi10b3ApO1xuICBwYWRkaW5nLXRvcDogbWFwLWdldCgkcGx1bWJlci1yZXN1bHQsIHBhZGRpbmctdG9wKTtcbiAgcGFkZGluZy1ib3R0b206IG1hcC1nZXQoJHBsdW1iZXItcmVzdWx0LCBwYWRkaW5nLWJvdHRvbSk7XG4gIG1hcmdpbi1ib3R0b206IG1hcC1nZXQoJHBsdW1iZXItcmVzdWx0LCBtYXJnaW4tYm90dG9tKTtcbn1cbiIsIi8qXG4gKiBQbHVtYmVyIGJhc2VsaW5lIGRlZmluaXRpb24gZmlsZVxuICovXG5cbkBpbmNsdWRlIHBsdW1iZXItc2V0LWRlZmF1bHRzKFxuICAkZm9udC1zaXplOiByZW1vdmUtdW5pdCgkYmFzZS1mb250LXNpemUpIC8gcmVtb3ZlLXVuaXQoJGJhc2VsaW5lLWdyaWQtaGVpZ2h0KSxcbiAgJGJhc2VsaW5lOiAkYmFzZWxpbmUtaGlsdGktcm9tYW4sXG4gICRncmlkLWhlaWdodDogJGJhc2VsaW5lLWdyaWQtaGVpZ2h0LFxuICAkbGVhZGluZy1ib3R0b206IDIsXG4gICRsaW5lLWhlaWdodDogMlxuKTtcblxuQGlmICgkaW5jbHVkZUJhc2VsaW5lKSB7XG4gIC8vIFBsdW1iZXJcbiAgJXBsdW1iZXItZ2VuZXJpYyB7XG4gICAgQGluY2x1ZGUgcGx1bWJlcigpO1xuICB9XG5cbiAgJXBsdW1iZXItZ2VuZXJpYy1sZWFkaW5nLTAtMCB7XG4gICAgQGluY2x1ZGUgcGx1bWJlcigkbGVhZGluZy10b3A6IDAsICRsZWFkaW5nLWJvdHRvbTogMCk7XG4gIH1cblxuICAlcGx1bWJlci1nZW5lcmljLWxlYWRpbmctMS0wIHtcbiAgICBAaW5jbHVkZSBwbHVtYmVyKCRsZWFkaW5nLXRvcDogMSwgJGxlYWRpbmctYm90dG9tOiAwKTtcbiAgfVxuXG4gICVwbHVtYmVyLWdlbmVyaWMtbGVhZGluZy0xLTIge1xuICAgIEBpbmNsdWRlIHBsdW1iZXIoJGxlYWRpbmctdG9wOiAxLCAkbGVhZGluZy1ib3R0b206IDIpO1xuICB9XG5cbiAgJXBsdW1iZXItZ2VuZXJpYy1sZWFkaW5nLTEtMC1ib3JkZXIge1xuICAgIEBpbmNsdWRlIHBsdW1iZXIoJGxlYWRpbmctdG9wOiAxLCAkbGVhZGluZy1ib3R0b206IDAsICRib3JkZXI6ICRib3JkZXItd2lkdGgpO1xuICB9XG5cbiAgJXBsdW1iZXItZ2VuZXJpYy1ib2xkIHtcbiAgICBAaW5jbHVkZSBwbHVtYmVyKCRiYXNlbGluZTogJGJhc2VsaW5lLWhpbHRpLWJvbGQpO1xuICB9XG5cbiAgJXBsdW1iZXItbGkge1xuICAgIEBpbmNsdWRlIHBsdW1iZXIoJGxlYWRpbmctYm90dG9tOiAwKTtcbiAgfVxuXG4gICVwbHVtYmVyLXRleHQtc21hbGwge1xuICAgIEBpbmNsdWRlIHBsdW1iZXIoJGZvbnQtc2l6ZTogMTMgLyByZW1vdmUtdW5pdCgkYmFzZWxpbmUtZ3JpZC1oZWlnaHQpLCAkbGVhZGluZy1ib3R0b206IDApO1xuICB9XG5cbiAgJXBsdW1iZXItdGV4dC1zbWFsbC1ib2xkIHtcbiAgICBAaW5jbHVkZSBwbHVtYmVyKFxuICAgICAgJGZvbnQtc2l6ZTogMTMgLyByZW1vdmUtdW5pdCgkYmFzZWxpbmUtZ3JpZC1oZWlnaHQpLFxuICAgICAgJGxlYWRpbmctYm90dG9tOiAwLFxuICAgICAgJGJhc2VsaW5lOiAkYmFzZWxpbmUtaGlsdGktYm9sZFxuICAgICk7XG4gIH1cblxuICAlcGx1bWJlci1oZWFkaW5nLWxhcmdlIHtcbiAgICBAaW5jbHVkZSBwbHVtYmVyKCRmb250LXNpemU6IDQsICRsaW5lLWhlaWdodDogNCk7XG4gIH1cblxuICAlcGx1bWJlci1oZWFkaW5nLW1lZGl1bSB7XG4gICAgQGluY2x1ZGUgcGx1bWJlcigkZm9udC1zaXplOiAyKTtcbiAgfVxuXG4gICVwbHVtYmVyLWhlYWRpbmctc21hbGwge1xuICAgIEBpbmNsdWRlIHBsdW1iZXIoJGZvbnQtc2l6ZTogMTggLyByZW1vdmUtdW5pdCgkYmFzZWxpbmUtZ3JpZC1oZWlnaHQpKTtcbiAgfVxuXG4gICVwbHVtYmVyLWhlYWRpbmctbWVkaXVtLWJvbGQge1xuICAgIEBpbmNsdWRlIHBsdW1iZXIoJGJhc2VsaW5lOiAkYmFzZWxpbmUtaGlsdGktYm9sZCwgJGZvbnQtc2l6ZTogMik7XG4gIH1cblxuICAlcGx1bWJlci1jdXN0b20taW5wdXQge1xuICAgIEBpbmNsdWRlIHBsdW1iZXIoJGxlYWRpbmctdG9wOiAxLCAkbGVhZGluZy1ib3R0b206IDApO1xuICB9XG5cbiAgJXBsdW1iZXItYnV0dG9uLWJvcmRlciB7XG4gICAgQGluY2x1ZGUgcGx1bWJlcigkbGVhZGluZy10b3A6IDIsICRsZWFkaW5nLWJvdHRvbTogMiwgJGJvcmRlcjogJGJvcmRlci13aWR0aCk7XG4gIH1cbn1cblxuJHBsdW1iZXItY3VzdG9tLWlucHV0LXZhbHVlczogcGx1bWJlci1jYWxjKFxuICAkbGVhZGluZy10b3A6IDEsXG4gICRsZWFkaW5nLWJvdHRvbTogMFxuKSAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0cy91aS1jb3JlLWNvbW1vbic7XG5cbjpob3N0LWNvbnRleHQoLnNlYXJjaC1maWVsZCkge1xuICAuZm9ybS1jb250cm9sIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICB9XG59XG5cbjpob3N0LWNvbnRleHQoLmhlYWRlci12YXJpYW50KSB7XG4gIC5mb3JtLWNvbnRyb2w6bm90KDpkaXNhYmxlZCkge1xuICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnk7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/form/input-field.component.ts":
/*!**************************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/form/input-field.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: InputFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFieldComponent", function() { return InputFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custom_input_component_abstract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-input-component.abstract */ "../../libs/shared/ui-core/src/lib/form/custom-input-component.abstract.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");




var InputFieldComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InputFieldComponent, _super);
    function InputFieldComponent(validators, asyncValidators, controlContainer) {
        var _this = _super.call(this, validators, asyncValidators, controlContainer) || this;
        _this.placeholder = '';
        _this.useScreenReaderLabel = false;
        _this.classList = 'ui-core-input-field';
        _this.isDisabled = false;
        return _this;
    }
    InputFieldComponent_1 = InputFieldComponent;
    var InputFieldComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputFieldComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputFieldComponent.prototype, "screenReaderLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputFieldComponent.prototype, "useScreenReaderLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputFieldComponent.prototype, "classList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-disabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputFieldComponent.prototype, "isDisabled", void 0);
    InputFieldComponent = InputFieldComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-core-input-field',
            template: __webpack_require__(/*! ./input-field.component.html */ "../../libs/shared/ui-core/src/lib/form/input-field.component.html"),
            providers: Object(_custom_input_component_abstract__WEBPACK_IMPORTED_MODULE_2__["MakeProviders"])(InputFieldComponent_1),
            styles: [__webpack_require__(/*! ./input-field.component.scss */ "../../libs/shared/ui-core/src/lib/form/input-field.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_ASYNC_VALIDATORS"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array,
            Array,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]])
    ], InputFieldComponent);
    return InputFieldComponent;
}(_custom_input_component_abstract__WEBPACK_IMPORTED_MODULE_2__["CustomInputComponentAbstract"]));



/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/form/radiobutton.component.html":
/*!****************************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/form/radiobutton.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input\n  type=\"radio\"\n  class=\"custom-control-input\"\n  #inputRef\n  [name]=\"name\"\n  [id]=\"inputId\"\n  [formControl]=\"control\"\n  [value]=\"radioValue\"\n  [checked]=\"radioValue == value\"\n/>\n<label class=\"custom-control-label\" [for]=\"inputId\">\n  <ng-content></ng-content>\n</label>\n"

/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/form/radiobutton.component.ts":
/*!**************************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/form/radiobutton.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: RadiobuttonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadiobuttonComponent", function() { return RadiobuttonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custom_input_component_abstract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-input-component.abstract */ "../../libs/shared/ui-core/src/lib/form/custom-input-component.abstract.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");




var increment = 0;
var RadiobuttonComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RadiobuttonComponent, _super);
    function RadiobuttonComponent(validators, asyncValidators, controlContainer) {
        var _this = _super.call(this, validators, asyncValidators, controlContainer) || this;
        _this.classList = 'custom-control custom-radio';
        _this.idPostFix = increment;
        increment++;
        return _this;
    }
    RadiobuttonComponent_1 = RadiobuttonComponent;
    RadiobuttonComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.inputId += this.idPostFix;
    };
    var RadiobuttonComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RadiobuttonComponent.prototype, "classList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('value'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RadiobuttonComponent.prototype, "radioValue", void 0);
    RadiobuttonComponent = RadiobuttonComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-core-radiobutton',
            template: __webpack_require__(/*! ./radiobutton.component.html */ "../../libs/shared/ui-core/src/lib/form/radiobutton.component.html"),
            providers: Object(_custom_input_component_abstract__WEBPACK_IMPORTED_MODULE_2__["MakeProviders"])(RadiobuttonComponent_1)
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_ASYNC_VALIDATORS"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array,
            Array,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]])
    ], RadiobuttonComponent);
    return RadiobuttonComponent;
}(_custom_input_component_abstract__WEBPACK_IMPORTED_MODULE_2__["CustomInputComponentAbstract"]));



/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/form/textarea.component.html":
/*!*************************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/form/textarea.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <label [for]=\"inputId\" class=\"sr-only\" *ngIf=\"useScreenReaderLabel\">\n    {{ screenReaderLabel || placeholder }}\n  </label>\n  <textarea\n    class=\"form-control\"\n    #inputRef\n    [name]=\"name\"\n    [id]=\"inputId\"\n    [formControl]=\"control\"\n    [rows]=\"rows\"\n    [ngClass]=\"{ 'no-resize': !resizable }\"\n    [ngStyle]=\"styleHeight\"\n    [placeholder]=\"placeholder\"\n    [attr.maxlength]=\"maxlength > 0 ? maxlength : null\"\n    (focusin)=\"height = expandHeight\"\n    (focusout)=\"height = collapseHeight\"\n  ></textarea>\n  <div\n    *ngIf=\"labelRemaining\"\n    class=\"form-text mt-0 pt-0 pb-0 text-right\"\n    [ngClass]=\"{ 'text-disabled': disabled, 'text-neutral-dark': !disabled }\"\n  >\n    {{ labelRemaining }}\n  </div>\n</div>\n"

/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/form/textarea.component.ts":
/*!***********************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/form/textarea.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TextareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaComponent", function() { return TextareaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custom_input_component_abstract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-input-component.abstract */ "../../libs/shared/ui-core/src/lib/form/custom-input-component.abstract.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");




var TextareaComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TextareaComponent, _super);
    function TextareaComponent(validators, asyncValidators, controlContainer, cdr) {
        var _this = _super.call(this, validators, asyncValidators, controlContainer) || this;
        _this.cdr = cdr;
        _this.placeholder = '';
        _this.rows = 1;
        _this.resizable = false;
        _this.expandOnFocus = false;
        _this.useScreenReaderLabel = false;
        return _this;
    }
    TextareaComponent_1 = TextareaComponent;
    Object.defineProperty(TextareaComponent.prototype, "styleHeight", {
        get: function () {
            return this.height
                ? {
                    height: this.height + "px"
                }
                : {};
        },
        enumerable: true,
        configurable: true
    });
    TextareaComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.calculateExpandHeight();
        if (this.labelCharsLeft && this.maxlength > 0) {
            this.formControl.valueChanges.subscribe(function (value) {
                _this.calculateCharsLeft(value);
            });
            this.calculateCharsLeft(this.value);
            this.cdr.detectChanges();
        }
    };
    /**
     * calculate expanded textarea height based on row count applied
     */
    TextareaComponent.prototype.calculateExpandHeight = function () {
        if (this.expandOnFocus) {
            var el = this.inputElementRef.nativeElement;
            el.rows = 1;
            var elHeight = el.offsetHeight;
            el.rows = this.rows;
            this.expandHeight = el.offsetHeight;
            this.collapseHeight = this.height = elHeight;
        }
    };
    /**
     * caclulates how many chars left if textarea has a maxlength restriction
     */
    TextareaComponent.prototype.calculateCharsLeft = function (value) {
        var actLength = value ? value.length : 0, remaining = this.maxlength - actLength;
        this.labelRemaining = this.labelCharsLeft.replace('{0}', remaining.toString());
    };
    var TextareaComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextareaComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextareaComponent.prototype, "rows", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TextareaComponent.prototype, "maxlength", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TextareaComponent.prototype, "labelCharsLeft", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextareaComponent.prototype, "resizable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextareaComponent.prototype, "expandOnFocus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TextareaComponent.prototype, "screenReaderLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextareaComponent.prototype, "useScreenReaderLabel", void 0);
    TextareaComponent = TextareaComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-core-textarea',
            template: __webpack_require__(/*! ./textarea.component.html */ "../../libs/shared/ui-core/src/lib/form/textarea.component.html"),
            providers: Object(_custom_input_component_abstract__WEBPACK_IMPORTED_MODULE_2__["MakeProviders"])(TextareaComponent_1)
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_ASYNC_VALIDATORS"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array,
            Array,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], TextareaComponent);
    return TextareaComponent;
}(_custom_input_component_abstract__WEBPACK_IMPORTED_MODULE_2__["CustomInputComponentAbstract"]));



/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/form/validation/custom-validators.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/form/validation/custom-validators.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CustomValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
var CustomValidators = /** @class */ (function () {
    function CustomValidators() {
    }
    // replacement for already existing requiredTrue validator, as this one has a specific error key requiredTrue
    CustomValidators.requiredTrue = function (control) {
        var error = { requiredTrue: true };
        if (!control.value) {
            return error;
        }
        else {
            return null;
        }
    };
    return CustomValidators;
}());



/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/form/validation/index.ts":
/*!*********************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/form/validation/index.ts ***!
  \*********************************************************************************************/
/*! exports provided: CustomValidators, RequiredTrueDirective, ValidateMesssageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-validators */ "../../libs/shared/ui-core/src/lib/form/validation/custom-validators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return _custom_validators__WEBPACK_IMPORTED_MODULE_0__["CustomValidators"]; });

/* harmony import */ var _required_true_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./required-true.directive */ "../../libs/shared/ui-core/src/lib/form/validation/required-true.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequiredTrueDirective", function() { return _required_true_directive__WEBPACK_IMPORTED_MODULE_1__["RequiredTrueDirective"]; });

/* harmony import */ var _validate_messsage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validate-messsage.service */ "../../libs/shared/ui-core/src/lib/form/validation/validate-messsage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidateMesssageService", function() { return _validate_messsage_service__WEBPACK_IMPORTED_MODULE_2__["ValidateMesssageService"]; });






/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/form/validation/required-true.directive.ts":
/*!***************************************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/form/validation/required-true.directive.ts ***!
  \***************************************************************************************************************/
/*! exports provided: RequiredTrueDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredTrueDirective", function() { return RequiredTrueDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custom_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-validators */ "../../libs/shared/ui-core/src/lib/form/validation/custom-validators.ts");




var RequiredTrueDirective = /** @class */ (function () {
    function RequiredTrueDirective() {
    }
    RequiredTrueDirective_1 = RequiredTrueDirective;
    RequiredTrueDirective.prototype.validate = function (control) {
        return _custom_validators__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].requiredTrue(control);
    };
    var RequiredTrueDirective_1;
    RequiredTrueDirective = RequiredTrueDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[uiCoreRequiredTrue][formControl],[uiCoreRequiredTrue][ngModel]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return RequiredTrueDirective_1; }), multi: true }]
        })
    ], RequiredTrueDirective);
    return RequiredTrueDirective;
}());



/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/form/validation/validate-messsage.service.ts":
/*!*****************************************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/form/validation/validate-messsage.service.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ValidateMesssageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateMesssageService", function() { return ValidateMesssageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ValidateMesssageService = /** @class */ (function () {
    function ValidateMesssageService() {
    }
    ValidateMesssageService.prototype.getMessage = function (validator, key) {
        switch (key) {
            case 'required':
                return 'Please enter a value';
            case 'requiredTrue':
                return 'Please set required selection';
            case 'pattern':
                return 'Value does not match required pattern';
            case 'minlength':
                return "Value must be a minimum of " + validator.minlength.requiredLength + " characters";
            case 'maxlength':
                return "Value must be a maximum of " + validator.maxlength.requiredLength + " characters";
        }
        if (typeof validator[key] === 'string') {
            return validator[key];
        }
        else {
            return "Validation failed: " + key;
        }
    };
    ValidateMesssageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ValidateMesssageService);
    return ValidateMesssageService;
}());



/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/search-field/search-field.component.html":
/*!*************************************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/search-field/search-field.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\">\n  <ui-core-input-field\n    #inputField\n    class=\"ui-core-search-field-input\"\n    [name]=\"name\"\n    [inputId]=\"inputId\"\n    [placeholder]=\"placeholder\"\n    [disabled]=\"disabled\"\n  ></ui-core-input-field>\n  <div class=\"input-group-append\">\n    <button type=\"submit\" class=\"ui-core-search-field-btn\" [title]=\"buttonTitle\">\n      <ui-core-svg-icon icon=\"search\" width=\"18\"></ui-core-svg-icon>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/search-field/search-field.component.scss":
/*!*************************************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/search-field/search-field.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * functions definition\n */\n/***\n * original import\n */\n/***\n * Patch / extend\n */\n/*\n * scss helper functions\n * TODO: finish or review implementation / remove if not needed\n */\n/**\n * returns a font value from the definition\n */\n/**\n * returns a color value from the definition\n */\n/**\n * returns a spacing value from the definition\n */\n/**\n * Remove the unit of a value\n */\n/**\n * tests value if integer\n */\n/**\n * retrieve multiple of baseline\n */\n/**\n * helper to return the calc function for baseline with border\n */\n/**\n * convert rem values to px based on default font size of 16px\n */\n/*\n * hdms variable definitions\n */\n/********************\n * Fonts definitions\n * Design spec: Definitions see https://fork.invisionapp.com/d/main#/console/17301588/358610542/preview\n * Documentation: https://confluence.hilti.com/display/pshilti/UI+library+documentation\n */\n/* Not used at the moment.\n$baseline-hilti-extended: 0.185;\n$baseline-hilti-heavy-extended: 0.185;\n$baseline-arial: 0.153320;\n$baseline-monospace: 0.162;\n*/\n/*\n * Color definitions end\n ********************/\n/********************\n * Color definitions\n * Design spec: Definitions see https://fork.invisionapp.com/d/main/#/console/17301588/358610505/preview\n * Documentation: https://confluence.hilti.com/display/pshilti/UI+library+documentation\n */\n/*\n * Color definitions end\n ********************/\n/********************\n * Grid system\n * Design spec:\n * Breakpoints: https://fork.invisionapp.com/d/main#/console/17301588/358610513/preview\n * Mobile: https://fork.invisionapp.com/d/main#/console/17301588/358610515/preview\n * Tablet: https://fork.invisionapp.com/d/main#/console/17301588/358610516/preview\n * Desktop+: https://fork.invisionapp.com/d/main#/console/17301588/358610517/preview\n * Documentation: https://confluence.hilti.com/display/pshilti/UI+library+documentation\n */\n/*\n * Grid system end\n ********************/\n/********************\n * Heights\n */\n/*\n * Heights end\n ********************/\n/********************\n * Sizing\n */\n/*\n * Sizing end\n ********************/\n/********************\n * Spacings\n * Design spec:\n * https://fork.invisionapp.com/d/main#/console/17301588/358610511/preview\n * https://fork.invisionapp.com/d/main#/console/17301588/358610510/preview\n * Documentation: https://confluence.hilti.com/display/pshilti/UI+library+documentation\n */\n/*\n * Spacings end\n ********************/\n/********************\n * Custom forms\n */\n/*\n * Custom forms end\n ********************/\n/********************\n * Layout helper classes\n * Documentation: https://confluence.hilti.com/display/pshilti/Layout\n */\n/*\n * Layout helper classes end\n ********************/\n/*\n * global mixin definitions\n * TODO: finish or review implementation / remove if not needed\n */\n/*\n * variables definition\n */\n/***\n * original import\n */\n/***\n * Patch / extend\n */\n/*\n * mixins definition\n */\n/***\n * original import\n */\n/***\n * Patch / extend\n */\n/**\n * HILTI specific modifications:\n * $border property: if plumber applied on elements with borders, these need to be subtracted from padding\n */\n/*\n * Plumber baseline definition file\n */\n:host {\n  position: relative;\n  display: block; }\n:host .ui-core-search-field-btn {\n    padding: 0 10px;\n    padding: 0 0.625rem;\n    position: absolute;\n    right: 0;\n    top: 0;\n    background: transparent;\n    border: 0;\n    outline: none;\n    color: #524f53; }\n:host .ui-core-input-field.is-disabled + .input-group-append .ui-core-search-field-btn {\n    color: #bab9ba;\n    cursor: default; }\n:host.header-variant .ui-core-search-field-btn {\n    color: #d2051e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWwvaG9sbmcvZGV2L2xheW91dC9oZG1zL2xpYnMvc2hhcmVkL3VpLWNvcmUvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2Z1bmN0aW9ucy5zY3NzIiwibGlicy9zaGFyZWQvdWktY29yZS9zcmMvbGliL3NlYXJjaC1maWVsZC9zZWFyY2gtZmllbGQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWVsL2hvbG5nL2Rldi9sYXlvdXQvaGRtcy9saWJzL3NoYXJlZC91aS1jb3JlL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvY3VzdG9tL19mdW5jdGlvbnMuc2NzcyIsIi9Vc2Vycy9tZWwvaG9sbmcvZGV2L2xheW91dC9oZG1zL2xpYnMvc2hhcmVkL3VpLWNvcmUvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9jdXN0b20vX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL21lbC9ob2xuZy9kZXYvbGF5b3V0L2hkbXMvbGlicy9zaGFyZWQvdWktY29yZS9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL2N1c3RvbS9fbWl4aW5zLnNjc3MiLCIvVXNlcnMvbWVsL2hvbG5nL2Rldi9sYXlvdXQvaGRtcy9saWJzL3NoYXJlZC91aS1jb3JlL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL192YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9tZWwvaG9sbmcvZGV2L2xheW91dC9oZG1zL2xpYnMvc2hhcmVkL3VpLWNvcmUvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX21peGlucy5zY3NzIiwiL1VzZXJzL21lbC9ob2xuZy9kZXYvbGF5b3V0L2hkbXMvbGlicy9zaGFyZWQvdWktY29yZS9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL2N1c3RvbS9fcGx1bWJlci5zY3NzIiwiL1VzZXJzL21lbC9ob2xuZy9kZXYvbGF5b3V0L2hkbXMvbGlicy9zaGFyZWQvdWktY29yZS9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL2N1c3RvbS9fYmFzZWxpbmUuc2NzcyIsIi9Vc2Vycy9tZWwvaG9sbmcvZGV2L2xheW91dC9oZG1zL2xpYnMvc2hhcmVkL3VpLWNvcmUvc3JjL2xpYi9zZWFyY2gtZmllbGQvc2VhcmNoLWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQ0VFO0FERUY7O0VDQ0U7QURLRjs7RUNGRTtBQ1JGOzs7RURZRTtBQ1BGOztFRFVFO0FDRUY7O0VEQ0U7QUNXRjs7RURSRTtBQ29CRjs7RURqQkU7QUM0QkY7O0VEekJFO0FDZ0NGOztFRDdCRTtBQ3dDRjs7RURyQ0U7QUNnREY7O0VEN0NFO0FFcENGOztFRnVDRTtBRWhDRjs7OztFRnFDRTtBRTVCRjs7Ozs7Q0ZrQ0M7QUVKRDs7cUJGT3FCO0FFSHJCOzs7O0VGUUU7QUUwREY7O3FCRnZEcUI7QUUyRHJCOzs7Ozs7OztFRmxERTtBRTBGRjs7cUJGdkZxQjtBRTJGckI7O0VGeEZFO0FFK0ZGOztxQkY1RnFCO0FFZ0dyQjs7RUY3RkU7QUV5R0Y7O3FCRnRHcUI7QUUwR3JCOzs7Ozs7RUZuR0U7QUUrSUY7O3FCRjVJcUI7QUUyUnJCOztFRnhSRTtBRXFURjs7cUJGbFRxQjtBRWlWckI7OztFRjdVRTtBRXFYRjs7cUJGbFhxQjtBRzVHckI7OztFSGdIRTtBSWhIRjs7RUptSEU7QUkvR0Y7O0VKa0hFO0FJNUdGOztFSitHRTtBS3pIRjs7RUw0SEU7QUt4SEY7O0VMMkhFO0FLckhGOztFTHdIRTtBTTdIRjs7O0VOaUlFO0FPdElGOztFUHlJRTtBUXZJRjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7QUFGaEI7SUFLSSxlQUFlO0lBQWYsbUJBQWU7SUFDZixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGFBQWE7SUFDYixjTjJDZSxFQUFBO0FNdkRuQjtJQWdCSSxjTjJDYztJTTFDZCxlQUFlLEVBQUE7QUFqQm5CO0lBc0JNLGNOK0JPLEVBQUEiLCJmaWxlIjoibGlicy9zaGFyZWQvdWktY29yZS9zcmMvbGliL3NlYXJjaC1maWVsZC9zZWFyY2gtZmllbGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogZnVuY3Rpb25zIGRlZmluaXRpb25cbiAqL1xuXG4vKioqXG4gKiBvcmlnaW5hbCBpbXBvcnRcbiAqL1xuXG5AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJztcblxuLyoqKlxuICogUGF0Y2ggLyBleHRlbmRcbiAqL1xuIiwiLypcbiAqIGZ1bmN0aW9ucyBkZWZpbml0aW9uXG4gKi9cbi8qKipcbiAqIG9yaWdpbmFsIGltcG9ydFxuICovXG4vKioqXG4gKiBQYXRjaCAvIGV4dGVuZFxuICovXG4vKlxuICogc2NzcyBoZWxwZXIgZnVuY3Rpb25zXG4gKiBUT0RPOiBmaW5pc2ggb3IgcmV2aWV3IGltcGxlbWVudGF0aW9uIC8gcmVtb3ZlIGlmIG5vdCBuZWVkZWRcbiAqL1xuLyoqXG4gKiByZXR1cm5zIGEgZm9udCB2YWx1ZSBmcm9tIHRoZSBkZWZpbml0aW9uXG4gKi9cbi8qKlxuICogcmV0dXJucyBhIGNvbG9yIHZhbHVlIGZyb20gdGhlIGRlZmluaXRpb25cbiAqL1xuLyoqXG4gKiByZXR1cm5zIGEgc3BhY2luZyB2YWx1ZSBmcm9tIHRoZSBkZWZpbml0aW9uXG4gKi9cbi8qKlxuICogUmVtb3ZlIHRoZSB1bml0IG9mIGEgdmFsdWVcbiAqL1xuLyoqXG4gKiB0ZXN0cyB2YWx1ZSBpZiBpbnRlZ2VyXG4gKi9cbi8qKlxuICogcmV0cmlldmUgbXVsdGlwbGUgb2YgYmFzZWxpbmVcbiAqL1xuLyoqXG4gKiBoZWxwZXIgdG8gcmV0dXJuIHRoZSBjYWxjIGZ1bmN0aW9uIGZvciBiYXNlbGluZSB3aXRoIGJvcmRlclxuICovXG4vKipcbiAqIGNvbnZlcnQgcmVtIHZhbHVlcyB0byBweCBiYXNlZCBvbiBkZWZhdWx0IGZvbnQgc2l6ZSBvZiAxNnB4XG4gKi9cbi8qXG4gKiBoZG1zIHZhcmlhYmxlIGRlZmluaXRpb25zXG4gKi9cbi8qKioqKioqKioqKioqKioqKioqKlxuICogRm9udHMgZGVmaW5pdGlvbnNcbiAqIERlc2lnbiBzcGVjOiBEZWZpbml0aW9ucyBzZWUgaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTQyL3ByZXZpZXdcbiAqIERvY3VtZW50YXRpb246IGh0dHBzOi8vY29uZmx1ZW5jZS5oaWx0aS5jb20vZGlzcGxheS9wc2hpbHRpL1VJK2xpYnJhcnkrZG9jdW1lbnRhdGlvblxuICovXG4vKiBOb3QgdXNlZCBhdCB0aGUgbW9tZW50LlxuJGJhc2VsaW5lLWhpbHRpLWV4dGVuZGVkOiAwLjE4NTtcbiRiYXNlbGluZS1oaWx0aS1oZWF2eS1leHRlbmRlZDogMC4xODU7XG4kYmFzZWxpbmUtYXJpYWw6IDAuMTUzMzIwO1xuJGJhc2VsaW5lLW1vbm9zcGFjZTogMC4xNjI7XG4qL1xuLypcbiAqIENvbG9yIGRlZmluaXRpb25zIGVuZFxuICoqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqXG4gKiBDb2xvciBkZWZpbml0aW9uc1xuICogRGVzaWduIHNwZWM6IERlZmluaXRpb25zIHNlZSBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbi8jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTA1L3ByZXZpZXdcbiAqIERvY3VtZW50YXRpb246IGh0dHBzOi8vY29uZmx1ZW5jZS5oaWx0aS5jb20vZGlzcGxheS9wc2hpbHRpL1VJK2xpYnJhcnkrZG9jdW1lbnRhdGlvblxuICovXG4vKlxuICogQ29sb3IgZGVmaW5pdGlvbnMgZW5kXG4gKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKipcbiAqIEdyaWQgc3lzdGVtXG4gKiBEZXNpZ24gc3BlYzpcbiAqIEJyZWFrcG9pbnRzOiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbiMvY29uc29sZS8xNzMwMTU4OC8zNTg2MTA1MTMvcHJldmlld1xuICogTW9iaWxlOiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbiMvY29uc29sZS8xNzMwMTU4OC8zNTg2MTA1MTUvcHJldmlld1xuICogVGFibGV0OiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbiMvY29uc29sZS8xNzMwMTU4OC8zNTg2MTA1MTYvcHJldmlld1xuICogRGVza3RvcCs6IGh0dHBzOi8vZm9yay5pbnZpc2lvbmFwcC5jb20vZC9tYWluIy9jb25zb2xlLzE3MzAxNTg4LzM1ODYxMDUxNy9wcmV2aWV3XG4gKiBEb2N1bWVudGF0aW9uOiBodHRwczovL2NvbmZsdWVuY2UuaGlsdGkuY29tL2Rpc3BsYXkvcHNoaWx0aS9VSStsaWJyYXJ5K2RvY3VtZW50YXRpb25cbiAqL1xuLypcbiAqIEdyaWQgc3lzdGVtIGVuZFxuICoqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqXG4gKiBIZWlnaHRzXG4gKi9cbi8qXG4gKiBIZWlnaHRzIGVuZFxuICoqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqXG4gKiBTaXppbmdcbiAqL1xuLypcbiAqIFNpemluZyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKlxuICogU3BhY2luZ3NcbiAqIERlc2lnbiBzcGVjOlxuICogaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTExL3ByZXZpZXdcbiAqIGh0dHBzOi8vZm9yay5pbnZpc2lvbmFwcC5jb20vZC9tYWluIy9jb25zb2xlLzE3MzAxNTg4LzM1ODYxMDUxMC9wcmV2aWV3XG4gKiBEb2N1bWVudGF0aW9uOiBodHRwczovL2NvbmZsdWVuY2UuaGlsdGkuY29tL2Rpc3BsYXkvcHNoaWx0aS9VSStsaWJyYXJ5K2RvY3VtZW50YXRpb25cbiAqL1xuLypcbiAqIFNwYWNpbmdzIGVuZFxuICoqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqXG4gKiBDdXN0b20gZm9ybXNcbiAqL1xuLypcbiAqIEN1c3RvbSBmb3JtcyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKlxuICogTGF5b3V0IGhlbHBlciBjbGFzc2VzXG4gKiBEb2N1bWVudGF0aW9uOiBodHRwczovL2NvbmZsdWVuY2UuaGlsdGkuY29tL2Rpc3BsYXkvcHNoaWx0aS9MYXlvdXRcbiAqL1xuLypcbiAqIExheW91dCBoZWxwZXIgY2xhc3NlcyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cbi8qXG4gKiBnbG9iYWwgbWl4aW4gZGVmaW5pdGlvbnNcbiAqIFRPRE86IGZpbmlzaCBvciByZXZpZXcgaW1wbGVtZW50YXRpb24gLyByZW1vdmUgaWYgbm90IG5lZWRlZFxuICovXG4vKlxuICogdmFyaWFibGVzIGRlZmluaXRpb25cbiAqL1xuLyoqKlxuICogb3JpZ2luYWwgaW1wb3J0XG4gKi9cbi8qKipcbiAqIFBhdGNoIC8gZXh0ZW5kXG4gKi9cbi8qXG4gKiBtaXhpbnMgZGVmaW5pdGlvblxuICovXG4vKioqXG4gKiBvcmlnaW5hbCBpbXBvcnRcbiAqL1xuLyoqKlxuICogUGF0Y2ggLyBleHRlbmRcbiAqL1xuLyoqXG4gKiBISUxUSSBzcGVjaWZpYyBtb2RpZmljYXRpb25zOlxuICogJGJvcmRlciBwcm9wZXJ0eTogaWYgcGx1bWJlciBhcHBsaWVkIG9uIGVsZW1lbnRzIHdpdGggYm9yZGVycywgdGhlc2UgbmVlZCB0byBiZSBzdWJ0cmFjdGVkIGZyb20gcGFkZGluZ1xuICovXG4vKlxuICogUGx1bWJlciBiYXNlbGluZSBkZWZpbml0aW9uIGZpbGVcbiAqL1xuOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG4gIDpob3N0IC51aS1jb3JlLXNlYXJjaC1maWVsZC1idG4ge1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiAjNTI0ZjUzOyB9XG4gIDpob3N0IC51aS1jb3JlLWlucHV0LWZpZWxkLmlzLWRpc2FibGVkICsgLmlucHV0LWdyb3VwLWFwcGVuZCAudWktY29yZS1zZWFyY2gtZmllbGQtYnRuIHtcbiAgICBjb2xvcjogI2JhYjliYTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cbiAgOmhvc3QuaGVhZGVyLXZhcmlhbnQgLnVpLWNvcmUtc2VhcmNoLWZpZWxkLWJ0biB7XG4gICAgY29sb3I6ICNkMjA1MWU7IH1cbiIsIi8qXG4gKiBzY3NzIGhlbHBlciBmdW5jdGlvbnNcbiAqIFRPRE86IGZpbmlzaCBvciByZXZpZXcgaW1wbGVtZW50YXRpb24gLyByZW1vdmUgaWYgbm90IG5lZWRlZFxuICovXG5cbi8qKlxuICogcmV0dXJucyBhIGZvbnQgdmFsdWUgZnJvbSB0aGUgZGVmaW5pdGlvblxuICovXG5AZnVuY3Rpb24gZm9udCgka2V5KSB7XG4gIEBpZiBtYXAtaGFzLWtleSgkZm9udHMsICRrZXkpIHtcbiAgICBAcmV0dXJuIG1hcC1nZXQoJGZvbnRzLCAka2V5KTtcbiAgfVxuXG4gIEB3YXJuIFwiVW5rbm93biBgI3ska2V5fWAgaW4gJGZvbnRzLlwiO1xuICBAcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogcmV0dXJucyBhIGNvbG9yIHZhbHVlIGZyb20gdGhlIGRlZmluaXRpb25cbiAqL1xuQGZ1bmN0aW9uIGNvbG9yKCRrZXkpIHtcbiAgQGlmIG1hcC1oYXMta2V5KCRjb2xvcnMsICRrZXkpIHtcbiAgICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGtleSk7XG4gIH1cblxuICBAd2FybiBcIlVua25vd24gYCN7JGtleX1gIGluICRjb2xvcnMuXCI7XG4gIEByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiByZXR1cm5zIGEgc3BhY2luZyB2YWx1ZSBmcm9tIHRoZSBkZWZpbml0aW9uXG4gKi9cbkBmdW5jdGlvbiBzcGFjaW5nKCRrZXkpIHtcbiAgQGlmIG1hcC1oYXMta2V5KCRzcGFjZXJzLCAka2V5KSB7XG4gICAgQHJldHVybiBtYXAtZ2V0KCRzcGFjZXJzLCAka2V5KTtcbiAgfVxuXG4gIEB3YXJuIFwiVW5rbm93biBgI3ska2V5fWAgaW4gJHNwYWNlcnMuXCI7XG4gIEByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIHVuaXQgb2YgYSB2YWx1ZVxuICovXG5AZnVuY3Rpb24gcmVtb3ZlLXVuaXQoJG51bWJlcikge1xuICBAaWYgdHlwZS1vZigkbnVtYmVyKSA9PSAnbnVtYmVyJyBhbmQgbm90IHVuaXRsZXNzKCRudW1iZXIpIHtcbiAgICBAcmV0dXJuICRudW1iZXIgLyAoJG51bWJlciAqIDAgKyAxKTtcbiAgfVxuXG4gIEByZXR1cm4gJG51bWJlcjtcbn1cblxuLyoqXG4gKiB0ZXN0cyB2YWx1ZSBpZiBpbnRlZ2VyXG4gKi9cbkBmdW5jdGlvbiBpcy1pbnRlZ2VyKCR2YWx1ZSkge1xuICBAcmV0dXJuICh1bml0bGVzcygkdmFsdWUpIGFuZCAkdmFsdWUgPT0gcm91bmQoJHZhbHVlKSk7XG59XG5cbi8qKlxuICogcmV0cmlldmUgbXVsdGlwbGUgb2YgYmFzZWxpbmVcbiAqL1xuQGZ1bmN0aW9uIGJsKCR2YWx1ZSkge1xuICBAaWYgbm90IGlzLWludGVnZXIoJHZhbHVlKSB7XG4gICAgQGVycm9yICd2YWx1ZSBtdXN0IGJlIGludGVnZXIsIGdvdCAjeyR2YWx1ZX0gaW5zdGVhZCc7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZSAqICRiYXNlbGluZS1ncmlkLWhlaWdodDtcbn1cblxuLyoqXG4gKiBoZWxwZXIgdG8gcmV0dXJuIHRoZSBjYWxjIGZ1bmN0aW9uIGZvciBiYXNlbGluZSB3aXRoIGJvcmRlclxuICovXG5AZnVuY3Rpb24gYmwtYm9yZGVyKCRwYWRkaW5nKSB7XG4gIEBpZiBub3QgaXMtaW50ZWdlcigkcGFkZGluZykgb3IgJHBhZGRpbmcgPCAwIHtcbiAgICBAZXJyb3IgJ3BhZGRpbmcgbXVzdCBiZSBpbnRlZ2VyIGFuZCBsYXJnZXIgMCwgZ290ICN7JHBhZGRpbmd9IGluc3RlYWQnO1xuICB9XG5cbiAgQHJldHVybiBibCgkcGFkZGluZykgLSAkYm9yZGVyLXdpZHRoO1xufVxuXG4vKipcbiAqIGNvbnZlcnQgcmVtIHZhbHVlcyB0byBweCBiYXNlZCBvbiBkZWZhdWx0IGZvbnQgc2l6ZSBvZiAxNnB4XG4gKi9cbkBmdW5jdGlvbiByZW0tdG8tcHgoJHJlbVZhbHVlKSB7XG4gIC8vIFRPRE86IGFzIDE2cHggaXMgZGVwZW5kZW5kIG9uIGJyb3dzZXIgc2V0dGluZ3MgdGhpcyBpcyBzdGlsbCBzdWJqZWN0IHRvIGNoYW5nZVxuICBAcmV0dXJuIHJlbW92ZS11bml0KCRyZW1WYWx1ZSkgKiAxNnB4O1xufVxuIiwiLypcbiAqIGhkbXMgdmFyaWFibGUgZGVmaW5pdGlvbnNcbiAqL1xuXG4vLyBIRE1TIGN1c3RvbVxuJGJhc2VsaW5lLWdyaWQtaGVpZ2h0OiAxMXB4ICFkZWZhdWx0O1xuXG4vKioqKioqKioqKioqKioqKioqKipcbiAqIEZvbnRzIGRlZmluaXRpb25zXG4gKiBEZXNpZ24gc3BlYzogRGVmaW5pdGlvbnMgc2VlIGh0dHBzOi8vZm9yay5pbnZpc2lvbmFwcC5jb20vZC9tYWluIy9jb25zb2xlLzE3MzAxNTg4LzM1ODYxMDU0Mi9wcmV2aWV3XG4gKiBEb2N1bWVudGF0aW9uOiBodHRwczovL2NvbmZsdWVuY2UuaGlsdGkuY29tL2Rpc3BsYXkvcHNoaWx0aS9VSStsaWJyYXJ5K2RvY3VtZW50YXRpb25cbiAqL1xuXG4kYmFzZWxpbmUtaGlsdGktcm9tYW46IDAuMTY7XG4kYmFzZWxpbmUtaGlsdGktYm9sZDogMC4xNjtcblxuLyogTm90IHVzZWQgYXQgdGhlIG1vbWVudC5cbiRiYXNlbGluZS1oaWx0aS1leHRlbmRlZDogMC4xODU7XG4kYmFzZWxpbmUtaGlsdGktaGVhdnktZXh0ZW5kZWQ6IDAuMTg1O1xuJGJhc2VsaW5lLWFyaWFsOiAwLjE1MzMyMDtcbiRiYXNlbGluZS1tb25vc3BhY2U6IDAuMTYyO1xuKi9cblxuJGZvbnRzOiAoXG4gICdoaWx0aS1yb21hbic6IChcbiAgICAnSGlsdGkgUm9tYW4nLFxuICAgIEFyaWFsLFxuICAgIFZlcmRhbmEsXG4gICAgc2Fucy1zZXJpZlxuICApLFxuICAnaGlsdGktYm9sZCc6IChcbiAgICAnSGlsdGkgQm9sZCcsXG4gICAgQXJpYWwsXG4gICAgVmVyZGFuYSxcbiAgICBzYW5zLXNlcmlmXG4gIClcbiAgLyogbm90IHVzZWQgYXQgdGhlIG1vbWVudFxuICAgICAgICAnaGlsdGktZXh0ZW5kZWQnOiAgICggJ0hpbHRpIEV4dGVuZGVkJywgQXJpYWwsIFZlcmRhbmEsIHNhbnMtc2VyaWYgKSxcbiAgICAgICAgJ2hpbHRpLWhlYXZ5JzogICAgICAoICdIaWx0aSBIZWF2eSBFeHRlbmRlZCcsIEFyaWFsLCBWZXJkYW5hLCBzYW5zLXNlcmlmICksXG4gICAgICAgICdhcmlhbCc6ICAgICAgICAgICAgICggQXJpYWwsIFZlcmRhbmEsIHNhbnMtc2VyaWYgKSxcbiAgICAgICAgJ21vbm9zcGFjZSc6ICAgICAgICAgKCBtb25vc3BhY2UgKVxuICAgICAgICAqL1xuKTtcblxuJGJhc2UtZm9udC1zaXplOiAxNXB4O1xuXG4vKlxuICogQ29sb3IgZGVmaW5pdGlvbnMgZW5kXG4gKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKioqKioqKioqKioqKioqKioqKlxuICogQ29sb3IgZGVmaW5pdGlvbnNcbiAqIERlc2lnbiBzcGVjOiBEZWZpbml0aW9ucyBzZWUgaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4vIy9jb25zb2xlLzE3MzAxNTg4LzM1ODYxMDUwNS9wcmV2aWV3XG4gKiBEb2N1bWVudGF0aW9uOiBodHRwczovL2NvbmZsdWVuY2UuaGlsdGkuY29tL2Rpc3BsYXkvcHNoaWx0aS9VSStsaWJyYXJ5K2RvY3VtZW50YXRpb25cbiAqL1xuJHJlZDogI2QyMDUxZTtcbiRidXJndW5keTogIzY3MWEzZDtcbiRzdGVlbC0xMDA6ICM1MjRmNTM7XG4kd2hpdGU6ICNmZmY7XG4kd2FybS1jb25jcmV0ZS0xMDA6ICNkN2NlYmQ7XG4kaGVhdnktY29uY3JldGUtMTAwOiAjODg3ZjZlO1xuJHN0ZWVsLTQwOiAjYmFiOWJhO1xuJHN0ZWVsLTEwOiAjZWRlZGVkO1xuJGJsYWNrLTY6IHJnYmEoMCwgMCwgMCwgMC4wNik7XG5cbiRjb2xvcnM6ICgpO1xuJGNvbG9yczogbWFwLW1lcmdlKFxuICAoXG4gICAgJ3JlZCc6ICRyZWQsXG4gICAgJ2J1cmd1bmR5JzogJGJ1cmd1bmR5LFxuICAgICdzdGVlbC0xMDAnOiAkc3RlZWwtMTAwLFxuICAgICd3aGl0ZSc6ICR3aGl0ZSxcbiAgICAnd2FybS1jb25jcmV0ZS0xMDAnOiAkd2FybS1jb25jcmV0ZS0xMDAsXG4gICAgJ2hlYXZ5LWNvbmNyZXRlLTEwMCc6ICRoZWF2eS1jb25jcmV0ZS0xMDAsXG4gICAgJ3N0ZWVsLTQwJzogJHN0ZWVsLTQwLFxuICAgICdzdGVlbC0xMCc6ICRzdGVlbC0xMCAvLyBXSVA6IGNvbG9yIGRlZmluaXRpb24gZm9yICh2ZXJ5KSBsaWdodCBncmF5IG1pc3NpbmdcbiAgKSxcbiAgJGNvbG9yc1xuKTtcblxuJHByaW1hcnk6ICRyZWQ7XG4kc2Vjb25kYXJ5OiAkYnVyZ3VuZHk7XG4vLyBUT0RPOiBXSVAgLSBzdWNjZXNzLCBpbmZvLCB3YXJuaW5nIGFuZCBkYW5nZXIgbm90IHlldCBkZWZpbmVkXG4vLyBzZWUgaGVyZTogaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4vIy9jb25zb2xlLzE3MzAxNTg4LzM1ODYxMDUwNi9wcmV2aWV3XG4kc3VjY2VzczogbGlnaHRncmVlbjtcbiRpbmZvOiBsaWdodGJsdWU7XG4kd2FybmluZzogb3JhbmdlO1xuJGRhbmdlcjogJHJlZDtcbiRsaWdodDogJHdoaXRlO1xuJGRhcms6ICRzdGVlbC0xMDA7XG5cbi8vIGN1c3RvbSB0aGVtZSBjb2xvcnNcbiRuZXV0cmFsLWxpZ2h0OiAkd2FybS1jb25jcmV0ZS0xMDA7XG4kbmV1dHJhbC1kYXJrOiAkaGVhdnktY29uY3JldGUtMTAwO1xuJGRpc2FibGVkOiAkc3RlZWwtNDA7XG5cbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kdGhlbWUtY29sb3JzOiAoKTtcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgICdwcmltYXJ5JzogJHByaW1hcnksXG4gICAgJ3NlY29uZGFyeSc6ICRzZWNvbmRhcnksXG4gICAgJ3N1Y2Nlc3MnOiAkc3VjY2VzcyxcbiAgICAnaW5mbyc6ICRuZXV0cmFsLWxpZ2h0LFxuICAgICd3YXJuaW5nJzogJHdhcm5pbmcsXG4gICAgJ2Rhbmdlcic6ICRkYW5nZXIsXG4gICAgJ2xpZ2h0JzogJGxpZ2h0LFxuICAgICdkYXJrJzogJGRhcmssXG4gICAgJ2Rpc2FibGVkJzogJGRpc2FibGVkLFxuICAgICduZXV0cmFsLWxpZ2h0JzogJG5ldXRyYWwtbGlnaHQsXG4gICAgJ25ldXRyYWwtZGFyayc6ICRuZXV0cmFsLWRhcmssXG4gICAgJ3N0ZWVsLTEwJzogJHN0ZWVsLTEwIC8vIFdJUDogc2VlIGFib3ZlXG4gICksXG4gICR0aGVtZS1jb2xvcnNcbik7XG5cbi8qXG4gKiBDb2xvciBkZWZpbml0aW9ucyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqKioqKioqKioqKioqKioqKioqXG4gKiBHcmlkIHN5c3RlbVxuICogRGVzaWduIHNwZWM6XG4gKiBCcmVha3BvaW50czogaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTEzL3ByZXZpZXdcbiAqIE1vYmlsZTogaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTE1L3ByZXZpZXdcbiAqIFRhYmxldDogaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTE2L3ByZXZpZXdcbiAqIERlc2t0b3ArOiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbiMvY29uc29sZS8xNzMwMTU4OC8zNTg2MTA1MTcvcHJldmlld1xuICogRG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9jb25mbHVlbmNlLmhpbHRpLmNvbS9kaXNwbGF5L3BzaGlsdGkvVUkrbGlicmFyeStkb2N1bWVudGF0aW9uXG4gKi9cblxuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA3NjhweCxcbiAgbWQ6IDEwMjRweCxcbiAgbGc6IDE0NDBweCxcbiAgeGw6IDI1NjBweFxuKTtcblxuJGdyaWQtYnJlYWtwb2ludHMtbm8tZ3V0dGVyOiB4cywgc207XG5cbiRncmlkLWNvbHVtbnM6IDQ4O1xuJGdyaWQtZ3V0dGVyLXdpZHRoOiAxMHB4O1xuJGdyaWQtZ3V0dGVyLXdpZHRoLW5vLWd1dHRlcjogMHB4O1xuXG4kbWVkaWEtZGlyZWN0aW9uOiAnbWluJztcbiRtZWRpYS1kaXJlY3Rpb24tdjogJ21pbic7XG5cbiRjb250YWluZXItc3BhY2luZ3M6ICgpICFkZWZhdWx0O1xuLy8gaGFsZiAkZ3JpZC1ndXR0ZXItd2lkdGggd2lkdGggd2lsbCBiZSBhZGRlZCB0byBhbGwgbm8gbWF0dGVyIHRoZSBicmVha3BvaW50XG4kY29udGFpbmVyLXNwYWNpbmdzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICB4czogMTVweCxcbiAgICBzbTogMzVweCxcbiAgICBtZDogNTVweCxcbiAgICBsZzogNzVweCxcbiAgICB4bDogMTM1cHhcbiAgKSxcbiAgJGNvbnRhaW5lci1zcGFjaW5nc1xuKTtcblxuLypcbiAqIEdyaWQgc3lzdGVtIGVuZFxuICoqKioqKioqKioqKioqKioqKioqL1xuXG4vKioqKioqKioqKioqKioqKioqKipcbiAqIEhlaWdodHNcbiAqL1xuXG4kYmwtaGVpZ2h0LXNpemVzLWZyb206IDM7XG4kYmwtaGVpZ2h0LXNpemVzLXRvOiAyMDtcblxuLypcbiAqIEhlaWdodHMgZW5kXG4gKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKioqKioqKioqKioqKioqKioqKlxuICogU2l6aW5nXG4gKi9cblxuJGJveC13aWR0aHM6IChcbiAgJzEtNic6IHBlcmNlbnRhZ2UoMS82KSxcbiAgJzEtNCc6IHBlcmNlbnRhZ2UoMS80KSxcbiAgJzEtMyc6IHBlcmNlbnRhZ2UoMS8zKSxcbiAgJzEtMic6IHBlcmNlbnRhZ2UoMS8yKSxcbiAgJzItMyc6IHBlcmNlbnRhZ2UoMi8zKVxuKTtcblxuLypcbiAqIFNpemluZyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqKioqKioqKioqKioqKioqKioqXG4gKiBTcGFjaW5nc1xuICogRGVzaWduIHNwZWM6XG4gKiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbiMvY29uc29sZS8xNzMwMTU4OC8zNTg2MTA1MTEvcHJldmlld1xuICogaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTEwL3ByZXZpZXdcbiAqIERvY3VtZW50YXRpb246IGh0dHBzOi8vY29uZmx1ZW5jZS5oaWx0aS5jb20vZGlzcGxheS9wc2hpbHRpL1VJK2xpYnJhcnkrZG9jdW1lbnRhdGlvblxuICovXG5cbiRzcGFjZXI6ICRiYXNlbGluZS1ncmlkLWhlaWdodDtcblxuJHNwYWNlcnM6IChcbiAgKFxuICAgIDA6IDAsXG4gICAgMTogKFxuICAgICAgJHNwYWNlciAqIDFcbiAgICApLFxuICAgIDI6IChcbiAgICAgICRzcGFjZXIgKiAyXG4gICAgKSxcbiAgICAzOiAoXG4gICAgICAkc3BhY2VyICogM1xuICAgICksXG4gICAgNDogKFxuICAgICAgJHNwYWNlciAqIDRcbiAgICApLFxuICAgIDU6IChcbiAgICAgICRzcGFjZXIgKiA1XG4gICAgKVxuICApXG4pO1xuXG4kaG9yaXpvbnRhbC1zcGFjZXJzOiAoXG4gIChcbiAgICAwOiAwLFxuICAgIDE6IDVweCxcbiAgICAyOiAxMHB4LFxuICAgIDM6IDE1cHgsXG4gICAgNDogMjBweCxcbiAgICA1OiAyNXB4XG4gIClcbik7XG5cbiRjb250YWluZXItcGFkZGluZy14OiAxNXB4O1xuXG4vKlxuICogU3BhY2luZ3MgZW5kXG4gKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIE9wdGlvbnNcbiRlbmFibGUtdmFsaWRhdGlvbi1pY29uczogZmFsc2U7XG5cbiRib2R5LWJnOiAkd2hpdGU7XG4kYm9keS1jb2xvcjogJHN0ZWVsLTEwMDtcblxuJGZvbnQtZmFtaWx5LWJhc2U6IG1hcC1nZXQoJGZvbnRzLCAnaGlsdGktLXJvbWFuJyk7XG5cbiRoZWFkaW5ncy1mb250LWZhbWlseTogbWFwLWdldCgkZm9udHMsICdoaWx0aS0tcm9tYW4nKTsgLy8gVE9ETzogcmV2aWV3XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IDQwMDsgLy8gVE9ETzogcmV2aWV3XG5cbiRoZWFkaW5ncy1saW5lLWhlaWdodDogYmwoMik7XG5cbiRoMS1mb250LXNpemU6IDIwcHg7XG4kaDItZm9udC1zaXplOiA0NHB4O1xuJGgzLWZvbnQtc2l6ZTogMjBweDtcblxuJGJvZHktZm9udDogbWFwLWdldCgkZm9udHMsICdoaWx0aS1yb21hbicpO1xuXG4vLyAkZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAwLjkzNzVyZW07XG5cbiRmb250LXdlaWdodC1iYXNlOiA0MDA7XG4kbGluZS1oZWlnaHQtYmFzZTogMjtcblxuLy8gQ29tcG9uZW50c1xuLy9cbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cbi8vIFRPRE86IFdJUCAvIHJldmlld1xuJGJveC1zaGFkb3ctc206IDAgMC4xMjVyZW0gMC4xMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG5cbiRib3JkZXItd2lkdGg6IDFweDtcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnk7XG5cbiRib3JkZXItcmFkaXVzOiAwO1xuJGJvcmRlci1yYWRpdXMtbGc6ICRib3JkZXItcmFkaXVzO1xuJGJvcmRlci1yYWRpdXMtc206IDZweDtcblxuLy8gQWxlcnRzXG4vLyBUT0RPOiBXSVAgLyByZXZpZXdcbiRhbGVydC1ib3JkZXItd2lkdGg6IDFweDtcbiRhbGVydC1wYWRkaW5nLXk6ICRiYXNlbGluZS1ncmlkLWhlaWdodCAtICRhbGVydC1ib3JkZXItd2lkdGg7IC8vIHJlc3BlY3QgYm9yZGVyIHdpZHRoIHRvIHN0YXkgd2l0aGluIGJhc2VsaW5lXG4kYWxlcnQtbWFyZ2luLWJvdHRvbTogJGJhc2VsaW5lLWdyaWQtaGVpZ2h0O1xuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG4vLyBUT0RPOiBXSVAgLyByZXZpZXdcbiRkcm9wZG93bi1taW4td2lkdGg6IDIwcmVtO1xuJGRyb3Bkb3duLXBhZGRpbmcteTogMDtcbiRkcm9wZG93bi1zcGFjZXI6IDE3cHg7XG4kZHJvcGRvd24tYm94LXNoYWRvdzogMCAwLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG5cbi8vIExpc3RzXG4kbGlzdC11bC1idWxsZXQtZGlhbWV0ZXI6IDVweDtcbiRsaXN0LXVsLWljb24td2lkdGg6IDE4cHg7XG4kbGlzdC11bC1pY29uLXRleHQtc3BhY2luZzogJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMjtcbiRsaXN0LW9sLW51bWJlci13aWR0aDogMjFweDtcbiRsaXN0LW9sLW51bWJlci10ZXh0LXNwYWNpbmc6ICRsaXN0LXVsLWljb24tdGV4dC1zcGFjaW5nO1xuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cbi8vIFRPRE86IFdJUCAvIHJldmlld1xuJGxpbmstY29sb3I6ICRzdGVlbC0xMDA7XG5cbi8vIE5hdmJhclxuLy8gVE9ETzogV0lQIC8gcmV2aWV3XG4kbmF2YmFyLXBhZGRpbmcteTogMDtcbiRuYXZiYXItbmF2LWxpbmstcGFkZGluZy14OiAwLjYyNXJlbTtcbiRuYXYtbGluay1wYWRkaW5nLXg6ICRjb250YWluZXItcGFkZGluZy14O1xuXG4vLyBDb21wdXRlIHRoZSBuYXZiYXItYnJhbmQgcGFkZGluZy15IHNvIHRoZSBuYXZiYXItYnJhbmQgd2lsbCBoYXZlIHRoZSBzYW1lIGhlaWdodCBhcyBuYXZiYXItdGV4dCBhbmQgbmF2LWxpbmtcbiRuYXZiYXItYnJhbmQtcGFkZGluZy15OiAwO1xuJG5hdmJhci1saWdodC1jb2xvcjogJGhlYXZ5LWNvbmNyZXRlLTEwMDtcbiRuYXZiYXItbGlnaHQtaG92ZXItY29sb3I6ICRuYXZiYXItbGlnaHQtY29sb3I7XG4kbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvcjogJG5hdmJhci1saWdodC1jb2xvcjtcblxuLy8gQnV0dG9ucyArIEZvcm1zXG4vL1xuLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXG5cbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xuXG4vLyBGb3Jtc1xuXG4kbGFiZWwtbWFyZ2luLWJvdHRvbTogYmwoMSk7XG4kZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tOiBibCgyKTtcbiRmb3JtLXRleHQtbWFyZ2luLXRvcDogYmwoMSk7XG5cbi8vIFRPRE86IFdJUCAvIHJldmlld1xuJGlucHV0LWhlaWdodDogYmwoMyk7XG4kaW5wdXQtaGVpZ2h0LXNtOiAkaW5wdXQtaGVpZ2h0O1xuJGlucHV0LWhlaWdodC1sZzogJGlucHV0LWhlaWdodDtcblxuJGlucHV0LWZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplO1xuXG4kaW5wdXQtYmc6IHRyYW5zcGFyZW50O1xuJGlucHV0LWRpc2FibGVkLWJnOiAkaW5wdXQtYmc7XG4kaW5wdXQtZGlzYWJsZWQtY29sb3I6ICRkaXNhYmxlZDsgLy8gY3VzdG9tIC0gbm8gYm9vdHN0cmFwIHN0YW5kYXJkXG5cbiRpbnB1dC1jb2xvcjogJGJvZHktY29sb3I7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkbmV1dHJhbC1saWdodDtcbiRpbnB1dC1ib3JkZXItd2lkdGg6ICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoO1xuJGlucHV0LWJveC1zaGFkb3c6IG5vbmU7XG5cbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAkYm9yZGVyLXJhZGl1cy1sZztcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAkYm9yZGVyLXJhZGl1cy1zbTtcblxuJGlucHV0LWZvY3VzLWJnOiAkaW5wdXQtYmc7XG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5O1xuJGlucHV0LWZvY3VzLWNvbG9yOiAkaW5wdXQtY29sb3I7XG4kaW5wdXQtZm9jdXMtd2lkdGg6IDA7XG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcblxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAkbmV1dHJhbC1kYXJrO1xuJGlucHV0LXBsYWNlaG9sZGVyLWRpc2FibGVkLWNvbG9yOiAkZGlzYWJsZWQ7IC8vIGN1c3RvbSAtIG5vIGJvb3RzdHJhcCBzdGFuZGFyZFxuJGlucHV0LXBsYWludGV4dC1jb2xvcjogJGJvZHktY29sb3I7XG5cbi8vIEZvcm0gVmFsaWRhdGlvblxuLy8gVE9ETzogV0lQXG4kZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcjogJHN1Y2Nlc3M7XG4kZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yOiAkZGFyaztcbiRmb3JtLWZlZWRiYWNrLWludmFsaWQtbWVzc2FnZS1jb2xvcjogJGRhbmdlcjsgLy8gY3VzdG9tIC0gbm8gYm9vdHN0cmFwIHN0YW5kYXJkXG5cbiRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiAoKTtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kZm9ybS12YWxpZGF0aW9uLXN0YXRlczogbWFwLW1lcmdlKFxuICAoXG4gICAgJ3ZhbGlkJzogKFxuICAgICAgJ2NvbG9yJzogJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3JcbiAgICApLFxuICAgICdpbnZhbGlkJzogKFxuICAgICAgJ2NvbG9yJzogJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvclxuICAgIClcbiAgKSxcbiAgJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXNcbik7XG5cbi8qKioqKioqKioqKioqKioqKioqKlxuICogQ3VzdG9tIGZvcm1zXG4gKi9cblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplOiAxLjEyNXJlbTsgLy8xOHB4O1xuJGN1c3RvbS1jb250cm9sLWd1dHRlcjogMC4zMTI1cmVtOyAvLzVweDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmc6IHRyYW5zcGFyZW50O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItY29sb3I6ICRkYXJrO1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWRpc2FibGVkLWNvbG9yOiAkZGlzYWJsZWQ7IC8vIGN1c3RvbSAtIG5vIGJvb3RzdHJhcCBzdGFuZGFyZFxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1jaGVja2VkLWRpc2FibGVkOiBzdHItcmVwbGFjZShcbiAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1kaXNhYmxlZC1jb2xvcn0nIGQ9J002LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNiAyLjk3NCA3LjI1IDggMi4xOTN6Jy8lM2UlM2Mvc3ZnJTNlXCIpLFxuICAnIycsXG4gICclMjMnXG4pICFkZWZhdWx0O1xuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItaWNvbi1jaGVja2VkLWRpc2FibGVkOiBzdHItcmVwbGFjZShcbiAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM2UlM2NjaXJjbGUgcj0nMycgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtY29sb3J9Jy8lM2UlM2Mvc3ZnJTNlXCIpLFxuICAnIycsXG4gICclMjMnXG4pICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWRpc2FibGVkLWJnOiB0cmFuc3BhcmVudDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcjogJGRhcms7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmc6IHRyYW5zcGFyZW50O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJvcmRlci1jb2xvcjogJGRhcms7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm94LXNoYWRvdzogbm9uZTtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAkZGlzYWJsZWQ7IC8vIGN1c3RvbSAtIG5vIGJvb3RzdHJhcCBzdGFuZGFyZFxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmc6IHRyYW5zcGFyZW50O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkZGFyaztcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJveC1zaGFkb3c6IG5vbmU7XG4kY3VzdG9tLWNvbnRyb2wtbGFiZWwtZGlzYWJsZWQtY29sb3I6ICRkaXNhYmxlZDtcbi8qXG4gKiBDdXN0b20gZm9ybXMgZW5kXG4gKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIEJ1dHRvbnNcbi8vIFRPRE86IFdJUCAvIHJldmlld1xuJGJ0bi1wYWRkaW5nLXg6IDIwcHg7XG4kYnRuLWJvcmRlci13aWR0aDogMDtcbiRidG4tYmxvY2stc3BhY2luZy15OiAkYmFzZWxpbmUtZ3JpZC1oZWlnaHQ7XG5cbiRidG4tZGlzYWJsZWQtb3BhY2l0eTogMTtcbiRidG4tYm9yZGVyLXdpZHRoOiAxcHg7XG4kYnRuLWZvbnQtZmFtaWx5OiBtYXAtZ2V0KCRmb250cywgJ2hpbHRpLWJvbGQnKTtcbiRidG4tbGluay1mb250LWZhbWlseTogbWFwLWdldCgkZm9udHMsICdoaWx0aS1yb21hbicpO1xuXG4kYnRuLWZvY3VzLXdpZHRoOiAwO1xuJGJ0bi1ib3gtc2hhZG93OiBub25lO1xuJGJ0bi1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xuJGJ0bi1hY3RpdmUtYm94LXNoYWRvdzogbm9uZTtcblxuLy8gQnV0dG9uIG91dGxpbmVcbiRidG4tb3V0bGluZS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiRidG4tb3V0bGluZS1ib3JkZXItcmFkaXVzOiA2cHg7XG4kYnRuLW91dGxpbmUtYm94LXNoYWRvdzogMCA3cHggOHB4IDAgJGJsYWNrLTY7XG4kYnRuLW91dGxpbmUtaG92ZXItYm94LXNoYWRvdzogMCAzcHggM3B4IDAgJGJsYWNrLTY7XG4kYnRuLW91dGxpbmUtZm9jdXMtYm94LXNoYWRvdzogJGJ0bi1vdXRsaW5lLWJveC1zaGFkb3c7XG5cbi8vIEJ1dHRvbiBsaW5rc1xuJGxpbmstZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogbm9uZTtcblxuLyoqKioqKioqKioqKioqKioqKioqXG4gKiBMYXlvdXQgaGVscGVyIGNsYXNzZXNcbiAqIERvY3VtZW50YXRpb246IGh0dHBzOi8vY29uZmx1ZW5jZS5oaWx0aS5jb20vZGlzcGxheS9wc2hpbHRpL0xheW91dFxuICovXG5cbiRoZG1zLWhlbHBlci1jb250YWluZXItY29sb3I6IChcbiAgb3V0bGluZTogMnB4IGRvdWJsZSAjMDAwNzg4LFxuICBiYWNrZ3JvdW5kOiByZ2JhKCMwMDkwZmYsIDAuMiksXG4gIGNsYXNzSW5kaWNhdG9yOiAjMDA5MGZmLFxuICBjb2xvcjogIzAwMDc4OFxuKTtcblxuJGhkbXMtaGVscGVyLXJvdy1jb2xvcjogKFxuICBvdXRsaW5lOiAycHggZGFzaGVkICMyODYxMDAsXG4gIGJhY2tncm91bmQ6IHJnYmEoIzAwYWIwMCwgMC4yKSxcbiAgY2xhc3NJbmRpY2F0b3I6ICMwMGFiMDAsXG4gIGNvbG9yOiAjMjg2MTAwXG4pO1xuXG4kaGRtcy1oZWxwZXItY29sdW1ucy1jb2xvcjogKFxuICBvdXRsaW5lOiAycHggZG90dGVkICM2NjNjMDAsXG4gIGJhY2tncm91bmQ6IHJnYmEoI2RkZDUwMCwgMC4yKSxcbiAgY2xhc3NJbmRpY2F0b3I6ICNkZGQ1MDAsXG4gIGNvbG9yOiAjNjYzYzAwXG4pO1xuXG4kaGRtcy1oZWxwZXItYm94LWdyb3VwLWNvbG9yOiAoXG4gIG91dGxpbmU6IDJweCBkYXNoZWQgI2ZmMDAwMCxcbiAgYmFja2dyb3VuZDogcmdiYSgjZmYwMDAwLCAwLjIpLFxuICBjbGFzc0luZGljYXRvcjogI2ZmMDAwMCxcbiAgY29sb3I6ICNmZjAwMDBcbik7XG5cbiRoZG1zLWhlbHBlci1ib3gtY29sb3I6IChcbiAgb3V0bGluZTogMnB4IGRhc2hlZCAjZmYwNWZmLFxuICBiYWNrZ3JvdW5kOiByZ2JhKCNmZjA1ZmYsIDAuMiksXG4gIGNsYXNzSW5kaWNhdG9yOiAjZmYwNWZmLFxuICBjb2xvcjogI2ZmMDVmZlxuKTtcblxuLypcbiAqIExheW91dCBoZWxwZXIgY2xhc3NlcyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cbiIsIi8qXG4gKiBnbG9iYWwgbWl4aW4gZGVmaW5pdGlvbnNcbiAqIFRPRE86IGZpbmlzaCBvciByZXZpZXcgaW1wbGVtZW50YXRpb24gLyByZW1vdmUgaWYgbm90IG5lZWRlZFxuICovXG5cbkBtaXhpbiB1dGlsaXR5LWRlZmluaXRpb24oJGNsYXNzRnJhZ21lbnQsICRrZXksICR2YWx1ZSwgJGZvckFsbEJyZWFrcG9pbnRzOiBmYWxzZSkge1xuICBAaWYgKCRrZXkgYW5kICR2YWx1ZSkge1xuICAgICUjeyRjbGFzc0ZyYWdtZW50fSB7XG4gICAgICAjeyRrZXl9OiAjeyR2YWx1ZX07XG4gICAgfVxuXG4gICAgLiN7JGNsYXNzRnJhZ21lbnR9IHtcbiAgICAgICN7JGtleX06ICN7JHZhbHVlfTtcbiAgICB9XG5cbiAgICBAaWYgJGZvckFsbEJyZWFrcG9pbnRzIHtcbiAgICAgIEBlYWNoICRicCBpbiAkYnJlYWtwb2ludC1rZXlzIHtcbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludCgkYnApIHtcbiAgICAgICAgICAuI3skYnB9LSN7JGNsYXNzRnJhZ21lbnR9IHtcbiAgICAgICAgICAgICN7JGtleX06ICN7JHZhbHVlfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEB3YXJuIFwiTm8gdmFsdWUgZm9yIHV0aWxpdHktZGVmaW5pdGlvbiBnaXZlblwiO1xuICB9XG59XG4iLCIvKlxuICogdmFyaWFibGVzIGRlZmluaXRpb25cbiAqL1xuXG4vKioqXG4gKiBvcmlnaW5hbCBpbXBvcnRcbiAqL1xuXG5AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcblxuLyoqKlxuICogUGF0Y2ggLyBleHRlbmRcbiAqL1xuIiwiLypcbiAqIG1peGlucyBkZWZpbml0aW9uXG4gKi9cblxuLyoqKlxuICogb3JpZ2luYWwgaW1wb3J0XG4gKi9cblxuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL19taXhpbnMuc2Nzcyc7XG5cbi8qKipcbiAqIFBhdGNoIC8gZXh0ZW5kXG4gKi9cbiIsIi8vIFBMVU1CRVIgLSBFYXN5IGJhc2VsaW5lIGdyaWRzIHdpdGggU0FTU1xuLy8gaHR0cHM6Ly9qYW1vbnNlcnJhbm8uZ2l0aHViLmlvL3BsdW1iZXItc2Fzc1xuLy8gQ29weXJpZ2h0IDIwMTYgVmlrdG9yIEhvbnRpXG4vLyBNSVQgTGljZW5zZVxuXG4vKipcbiAqIEhJTFRJIHNwZWNpZmljIG1vZGlmaWNhdGlvbnM6XG4gKiAkYm9yZGVyIHByb3BlcnR5OiBpZiBwbHVtYmVyIGFwcGxpZWQgb24gZWxlbWVudHMgd2l0aCBib3JkZXJzLCB0aGVzZSBuZWVkIHRvIGJlIHN1YnRyYWN0ZWQgZnJvbSBwYWRkaW5nXG4gKi9cblxuLy8gKioqIERFRkFVTFRTICoqKlxuLy8gRG8gbm90IGNoYW5nZSBpdCBoZXJlLCB1c2UgdGhlIHBsdW1iZXItc2V0LWRlZmF1bHRzIG1peGluIGluc3RlYWQhXG4kLXBsdW1iZXItZGVmYXVsdHM6IChcbiAgZm9udC1zaXplOiAyLFxuICBsaW5lLWhlaWdodDogMyxcbiAgbGVhZGluZy10b3A6IDAsXG4gIGxlYWRpbmctYm90dG9tOiAwLFxuICBncmlkLWhlaWdodDogMXJlbSxcbiAgYmFzZWxpbmU6IG51bGwsXG4gIHVzZS1iYXNlbGluZS1vcmlnaW46IGZhbHNlLFxuICBib3JkZXI6IDBcbikgIWRlZmF1bHQ7XG5cbi8vIE1lcmdlIHByb3ZpZGVkIHNldHRpbmdzIGludG8gdGhlIGRlZmF1bHRzIG1hcFxuQG1peGluIHBsdW1iZXItc2V0LWRlZmF1bHRzKCRkZWZhdWx0cy4uLikge1xuICAkLXBsdW1iZXItZGVmYXVsdHM6IG1hcC1tZXJnZSgkLXBsdW1iZXItZGVmYXVsdHMsIGtleXdvcmRzKCRkZWZhdWx0cykpICFnbG9iYWw7XG59XG5cbi8vIEdldCBhIGRlZmF1bHQgdmFsdWVcbkBmdW5jdGlvbiAtcGx1bWJlci1nZXQtZGVmYXVsdCgka2V5KSB7XG4gIEByZXR1cm4gbWFwLWdldCgkLXBsdW1iZXItZGVmYXVsdHMsICRrZXkpO1xufVxuXG4vLyBDaGVjayBpZiBhIHZhbHVlIGlzIGEgbm9uLW5lZ2F0aXZlIGludGVnZXJcbkBmdW5jdGlvbiAtcGx1bWJlci1pcy1pbnRlZ2VyKCR2YWx1ZSkge1xuICBAcmV0dXJuICh1bml0bGVzcygkdmFsdWUpIGFuZCAkdmFsdWUgPT0gcm91bmQoJHZhbHVlKSk7XG59XG5cbi8vIFJvdW5kIHZhbHVlIHRvIHRoZSBuZWFyZXN0IHF1YXJ0ZXIgcGl4ZWxcbi8vIFRoaXMgcHJvdmlkZXMgcmVhc29uYWJsZSBwcmVjaXNpb24gYW5kIHByZXZlbnRzIGdyaWQgY3JlZXAgKGJ5IGZyYWN0aW9ucyBhZGRpbmcgdXApIGluIG1vc3QgYnJvd3NlcnNcbkBmdW5jdGlvbiAtcGx1bWJlci1yb3VuZCgkdmFsdWUpIHtcbiAgQHJldHVybiByb3VuZCgkdmFsdWUgKiA0KSAvIDQ7XG59XG5cbkBmdW5jdGlvbiBwbHVtYmVyLWNhbGMoXG4gICRmb250LXNpemU6IG51bGwsXG4gICRsaW5lLWhlaWdodDogbnVsbCxcbiAgJGxlYWRpbmctdG9wOiBudWxsLFxuICAkbGVhZGluZy1ib3R0b206IG51bGwsXG4gICRncmlkLWhlaWdodDogbnVsbCxcbiAgJGJhc2VsaW5lOiBudWxsLFxuICAkdXNlLWJhc2VsaW5lLW9yaWdpbjogbnVsbCxcbiAgJGJvcmRlcjogbnVsbFxuKSB7XG4gIC8vICoqKiBWQUxJREFURSBQQVJBTUVURVJTICoqKlxuICAvLyBmb250LXNpemVcbiAgQGlmIG5vdCAkZm9udC1zaXplIHtcbiAgICAkZm9udC1zaXplOiAtcGx1bWJlci1nZXQtZGVmYXVsdChmb250LXNpemUpO1xuICB9XG4gIEBpZiBub3QgdW5pdGxlc3MoJGZvbnQtc2l6ZSkgb3IgJGZvbnQtc2l6ZSA8PSAwIHtcbiAgICBAZXJyb3IgJyRmb250LXNpemUgcGFyYW1ldGVyIG11c3QgYmUgYSBwb3NpdGl2ZSB1bml0bGVzcyBudW1iZXIsIGdvdCAjeyRmb250LXNpemV9IGluc3RlYWQnO1xuICB9XG5cbiAgLy8gbGluZS1oZWlnaHRcbiAgQGlmIG5vdCAkbGluZS1oZWlnaHQge1xuICAgICRsaW5lLWhlaWdodDogLXBsdW1iZXItZ2V0LWRlZmF1bHQobGluZS1oZWlnaHQpO1xuICB9XG4gIEBpZiBub3QgdW5pdGxlc3MoJGxpbmUtaGVpZ2h0KSBvciAkbGluZS1oZWlnaHQgIT0gcm91bmQoJGxpbmUtaGVpZ2h0KSBvciAkbGluZS1oZWlnaHQgPCAxIHtcbiAgICBAZXJyb3IgJyRsaW5lLWhlaWdodCBwYXJhbWV0ZXIgbXVzdCBiZSBhIHBvc2l0aXZlIHVuaXRsZXNzIGludGVnZXIsIGdvdCAjeyRsaW5lLWhlaWdodH0gaW5zdGVhZCc7XG4gIH1cblxuICAvLyBsZWFkaW5nLXRvcFxuICBAaWYgbm90ICRsZWFkaW5nLXRvcCB7XG4gICAgJGxlYWRpbmctdG9wOiAtcGx1bWJlci1nZXQtZGVmYXVsdChsZWFkaW5nLXRvcCk7XG4gIH1cbiAgQGlmIG5vdCAtcGx1bWJlci1pcy1pbnRlZ2VyKCRsZWFkaW5nLXRvcCkge1xuICAgIEBlcnJvciAnJGxlYWRpbmctdG9wIHBhcmFtZXRlciBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIGludGVnZXIsIGdvdCAjeyRsZWFkaW5nLXRvcH0gaW5zdGVhZC4nO1xuICB9XG5cbiAgLy8gbGVhZGluZy1ib3R0b21cbiAgQGlmIG5vdCAkbGVhZGluZy1ib3R0b20ge1xuICAgICRsZWFkaW5nLWJvdHRvbTogLXBsdW1iZXItZ2V0LWRlZmF1bHQobGVhZGluZy1ib3R0b20pO1xuICB9XG4gIEBpZiBub3QgLXBsdW1iZXItaXMtaW50ZWdlcigkbGVhZGluZy1ib3R0b20pIHtcbiAgICBAZXJyb3IgJyRsZWFkaW5nLWJvdHRvbSBwYXJhbWV0ZXIgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyLCBnb3QgI3skbGVhZGluZy1ib3R0b219IGluc3RlYWQnO1xuICB9XG5cbiAgLy8gZ3JpZC1oZWlnaHRcbiAgQGlmIG5vdCAkZ3JpZC1oZWlnaHQge1xuICAgICRncmlkLWhlaWdodDogLXBsdW1iZXItZ2V0LWRlZmF1bHQoZ3JpZC1oZWlnaHQpO1xuICB9XG4gIEBpZiB1bml0bGVzcygkZ3JpZC1oZWlnaHQpIG9yICRncmlkLWhlaWdodCA8IDAge1xuICAgIEBlcnJvciAnJGdyaWQtaGVpZ2h0IHBhcmFtZXRlciBtdXN0IGJlIGEgcG9zaXRpdmUgdW5pdCwgZ290ICN7JGdyaWQtaGVpZ2h0fSBpbnN0ZWFkJztcbiAgfVxuXG4gIC8vIGJhc2VsaW5lXG4gIEBpZiBub3QgJGJhc2VsaW5lIHtcbiAgICAkYmFzZWxpbmU6IC1wbHVtYmVyLWdldC1kZWZhdWx0KGJhc2VsaW5lKTtcbiAgfVxuICBAaWYgbm90ICRiYXNlbGluZSB7XG4gICAgQGVycm9yICckYmFzZWxpbmUgbXVzdCBiZSBwYXNzZWQgYXMgYSBwYXJhbWV0ZXIgb3IgZGVmaW5lZCBpbiBkZWZhdWx0cyc7XG4gIH0gQGVsc2UgaWYgbm90ICh1bml0bGVzcygkYmFzZWxpbmUpIGFuZCAkYmFzZWxpbmUgPj0gMCBhbmQgJGJhc2VsaW5lIDwgMSkge1xuICAgIEBlcnJvciAnJGJhc2VsaW5lIHBhcmFtZXRlciBtdXN0IGJlIGEgdW5pdGxlc3MgZnJhY3Rpb24gYmV0d2VlbiAwIGFuZCAxLCBnb3QgI3skYmFzZWxpbmV9IGluc3RlYWQnO1xuICB9XG5cbiAgLy8gdXNlLWJhc2VsaW5lLW9yaWdpblxuICBAaWYgbm90ICR1c2UtYmFzZWxpbmUtb3JpZ2luIHtcbiAgICAkdXNlLWJhc2VsaW5lLW9yaWdpbjogLXBsdW1iZXItZ2V0LWRlZmF1bHQodXNlLWJhc2VsaW5lLW9yaWdpbik7XG4gIH1cbiAgQGlmIHR5cGUtb2YoJHVzZS1iYXNlbGluZS1vcmlnaW4pICE9IGJvb2wge1xuICAgIEBlcnJvciAnJHVzZS1iYXNlbGluZS1vcmlnaW4gcGFyYW1ldGVyIG11c3QgYmUgQm9vbGVhbiwgZ290ICN7JHVzZS1iYXNlbGluZS1vcmlnaW59IGluc3RlYWQnO1xuICB9XG5cbiAgLy8gYm9yZGVyXG4gIEBpZiBub3QgJGJvcmRlciB7XG4gICAgJGJvcmRlcjogLXBsdW1iZXItZ2V0LWRlZmF1bHQoYm9yZGVyKTtcbiAgfVxuICBAaWYgbm90ICRib3JkZXIge1xuICAgIEBlcnJvciAnJGJvcmRlciBtdXN0IGJlIHBhc3NlZCBhcyBhIHBhcmFtZXRlciBvciBkZWZpbmVkIGluIGRlZmF1bHRzJztcbiAgfVxuXG4gIC8vICoqKiBDQUxDVUxBVEUgQkFTRUxJTkUgQ09SUkVDVElPTiAqKipcbiAgLy8gdGhlIGRpc3RhbmNlIG9mIHRoZSBvcmlnaW5hbCBiYXNlbGluZSBmcm9tIHRoZSBib3R0b21cbiAgJGJhc2VsaW5lLWZyb20tYm90dG9tOiAoJGxpbmUtaGVpZ2h0IC0gJGZvbnQtc2l6ZSkgLyAyICsgKCRmb250LXNpemUgKiAkYmFzZWxpbmUpO1xuICAvLyB0aGUgY29ycmVjdGVkIGJhc2VsaW5lIHdpbGwgYmUgb24gdGhlIG5lYXJlc3QgZ3JpZGxpbmVcbiAgJGNvcnJlY3RlZC1iYXNlbGluZTogcm91bmQoJGJhc2VsaW5lLWZyb20tYm90dG9tKTtcbiAgLy8gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgb3JpZ2luYWwgYW5kIHRoZSBjb3JyZWN0ZWQgYmFzZWxpbmVcbiAgJGJhc2VsaW5lLWRpZmZlcmVuY2U6ICRjb3JyZWN0ZWQtYmFzZWxpbmUgLSAkYmFzZWxpbmUtZnJvbS1ib3R0b207XG5cbiAgLy8gaWYgYmFzZWxpbmUgb3JpZ2luIGlzIHVzZWQgZm9yIGxlYWRpbmdzIHN1YnN0cmFjdCB0aGUgZGlzdGFuY2Ugb2YgdGhlIGJhc2VsaW5lIGZyb20gdGhlIGVkZ2VzXG4gIEBpZiAkdXNlLWJhc2VsaW5lLW9yaWdpbiA9PSB0cnVlIHtcbiAgICAkbGVhZGluZy10b3A6ICRsZWFkaW5nLXRvcCAtICgkbGluZS1oZWlnaHQgLSAkY29ycmVjdGVkLWJhc2VsaW5lKTtcbiAgICAkbGVhZGluZy1ib3R0b206ICRsZWFkaW5nLWJvdHRvbSAtICRjb3JyZWN0ZWQtYmFzZWxpbmU7XG4gIH1cblxuICAvLyAqKiogQ0FMQ1VMQVRFIEZPTlQgU0laRSBBTkQgTElORSBIRUlHSFRcbiAgJGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSAqICRncmlkLWhlaWdodDtcbiAgJGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQgKiAkZ3JpZC1oZWlnaHQ7XG5cbiAgLy8gKioqIENBTENVTEFURSBNQVJHSU5TIEFORCBQQURESU5HUyAqKipcbiAgJHBhZGRpbmctdG9wOiBudWxsO1xuICAkbWFyZ2luLXRvcDogbnVsbDtcbiAgJG1hcmdpbi1ib3R0b206IG51bGw7XG4gICRwYWRkaW5nLWJvdHRvbTogbnVsbDtcblxuICBAaWYgJGJhc2VsaW5lLWRpZmZlcmVuY2UgPCAwIHtcbiAgICAvLyBhZGQgdG9wIGxlYWRpbmdcbiAgICAkbWFyZ2luLXRvcDogJGxlYWRpbmctdG9wICogJGdyaWQtaGVpZ2h0O1xuICAgIC8vIHB1c2ggdGhlIGJhc2VsaW5lIGRvd24gdG8gdGhlIG5leHQgZ3JpZGxpbmVcbiAgICAkcGFkZGluZy10b3A6IC0kYmFzZWxpbmUtZGlmZmVyZW5jZSAqICRncmlkLWhlaWdodCAtICRib3JkZXI7XG4gICAgLy8gYWRkIHRoZSByZW1haW5pbmcgZGlzdGFuY2UgdG8gcmVhY2ggdGhlIG5leHQgZ3JpZGxpbmVcbiAgICAkcGFkZGluZy1ib3R0b206ICgxICsgJGJhc2VsaW5lLWRpZmZlcmVuY2UpICogJGdyaWQtaGVpZ2h0IC0gJGJvcmRlcjtcbiAgICAvLyBhZGQgYm90dG9tIGxlYWRpbmcgYW5kIHJlbW92ZSB0aGUgMSBleGNlc3MgZ3JpZCBoZWlnaHQgdGhhdCBjb21lcyBmcm9tIHB1c2hpbmcgZG93blxuICAgICRtYXJnaW4tYm90dG9tOiAoJGxlYWRpbmctYm90dG9tIC0gMSkgKiAkZ3JpZC1oZWlnaHQ7XG4gIH0gQGVsc2Uge1xuICAgIC8vIGFkZCB0b3AgbGVhZGluZyBhbmQgcmVtb3ZlIHRoZSAxIGV4Y2VzcyBncmlkIGhlaWdodCB0aGF0IGNvbWVzIGZyb20gcHVsbGluZyB1cFxuICAgICRtYXJnaW4tdG9wOiAoJGxlYWRpbmctdG9wIC0gMSkgKiAkZ3JpZC1oZWlnaHQ7XG4gICAgLy8gcHVsbCB0aGUgYmFzZWxpbmUgdXAgdG8gdGhlIHByZXZpb3VzIGdyaWRsaW5lXG4gICAgJHBhZGRpbmctdG9wOiAoMSAtICRiYXNlbGluZS1kaWZmZXJlbmNlKSAqICRncmlkLWhlaWdodCAtICRib3JkZXI7XG4gICAgLy8gYWRkIHRoZSByZW1haW5pbmcgZGlzdGFuY2UgdG8gcmVhY2ggdGhlIG5leHQgZ3JpZGxpbmVcbiAgICAkcGFkZGluZy1ib3R0b206ICRiYXNlbGluZS1kaWZmZXJlbmNlICogJGdyaWQtaGVpZ2h0IC0gJGJvcmRlcjtcbiAgICAvLyBhZGQgYm90dG9tIGxlYWRpbmdcbiAgICAkbWFyZ2luLWJvdHRvbTogJGxlYWRpbmctYm90dG9tICogJGdyaWQtaGVpZ2h0O1xuICB9XG5cbiAgLy8gcm91bmQgcGl4ZWwgdmFsdWVzIHRvIGRlY3JlYXNlIGJyb3dzZXIgaW5jb25zaXN0ZW5jaWVzXG4gIEBpZiB1bml0KCRncmlkLWhlaWdodCkgPT0gJ3B4JyB7XG4gICAgJGxpbmUtaGVpZ2h0OiAtcGx1bWJlci1yb3VuZCgkbGluZS1oZWlnaHQpO1xuICAgICRtYXJnaW4tdG9wOiAtcGx1bWJlci1yb3VuZCgkbWFyZ2luLXRvcCk7XG4gICAgJHBhZGRpbmctdG9wOiAtcGx1bWJlci1yb3VuZCgkcGFkZGluZy10b3ApO1xuICAgICRwYWRkaW5nLWJvdHRvbTogLXBsdW1iZXItcm91bmQoJHBhZGRpbmctYm90dG9tKTtcbiAgICAkbWFyZ2luLWJvdHRvbTogLXBsdW1iZXItcm91bmQoJG1hcmdpbi1ib3R0b20pO1xuICB9XG5cbiAgLy8gKioqIFBST1BFUlRZIE9VVFBVVCAqKipcbiAgQHJldHVybiAoXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLFxuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQsXG4gICAgbWFyZ2luLXRvcDogJG1hcmdpbi10b3AsXG4gICAgcGFkZGluZy10b3A6ICRwYWRkaW5nLXRvcCxcbiAgICBwYWRkaW5nLWJvdHRvbTogJHBhZGRpbmctYm90dG9tLFxuICAgIG1hcmdpbi1ib3R0b206ICRtYXJnaW4tYm90dG9tXG4gICk7XG59XG5cbkBtaXhpbiBwbHVtYmVyKFxuICAkZm9udC1zaXplOiBudWxsLFxuICAkbGluZS1oZWlnaHQ6IG51bGwsXG4gICRsZWFkaW5nLXRvcDogbnVsbCxcbiAgJGxlYWRpbmctYm90dG9tOiBudWxsLFxuICAkZ3JpZC1oZWlnaHQ6IG51bGwsXG4gICRiYXNlbGluZTogbnVsbCxcbiAgJHVzZS1iYXNlbGluZS1vcmlnaW46IG51bGwsXG4gICRib3JkZXI6IG51bGxcbikge1xuICAkcGx1bWJlci1yZXN1bHQ6IHBsdW1iZXItY2FsYyhcbiAgICAkZm9udC1zaXplLFxuICAgICRsaW5lLWhlaWdodCxcbiAgICAkbGVhZGluZy10b3AsXG4gICAgJGxlYWRpbmctYm90dG9tLFxuICAgICRncmlkLWhlaWdodCxcbiAgICAkYmFzZWxpbmUsXG4gICAgJHVzZS1iYXNlbGluZS1vcmlnaW4sXG4gICAgJGJvcmRlclxuICApO1xuXG4gIC8vICoqKiBDU1MgT1VUUFVUICoqKlxuICBmb250LXNpemU6IG1hcC1nZXQoJHBsdW1iZXItcmVzdWx0LCBmb250LXNpemUpO1xuICBsaW5lLWhlaWdodDogbWFwLWdldCgkcGx1bWJlci1yZXN1bHQsIGxpbmUtaGVpZ2h0KTtcbiAgbWFyZ2luLXRvcDogbWFwLWdldCgkcGx1bWJlci1yZXN1bHQsIG1hcmdpbi10b3ApO1xuICBwYWRkaW5nLXRvcDogbWFwLWdldCgkcGx1bWJlci1yZXN1bHQsIHBhZGRpbmctdG9wKTtcbiAgcGFkZGluZy1ib3R0b206IG1hcC1nZXQoJHBsdW1iZXItcmVzdWx0LCBwYWRkaW5nLWJvdHRvbSk7XG4gIG1hcmdpbi1ib3R0b206IG1hcC1nZXQoJHBsdW1iZXItcmVzdWx0LCBtYXJnaW4tYm90dG9tKTtcbn1cbiIsIi8qXG4gKiBQbHVtYmVyIGJhc2VsaW5lIGRlZmluaXRpb24gZmlsZVxuICovXG5cbkBpbmNsdWRlIHBsdW1iZXItc2V0LWRlZmF1bHRzKFxuICAkZm9udC1zaXplOiByZW1vdmUtdW5pdCgkYmFzZS1mb250LXNpemUpIC8gcmVtb3ZlLXVuaXQoJGJhc2VsaW5lLWdyaWQtaGVpZ2h0KSxcbiAgJGJhc2VsaW5lOiAkYmFzZWxpbmUtaGlsdGktcm9tYW4sXG4gICRncmlkLWhlaWdodDogJGJhc2VsaW5lLWdyaWQtaGVpZ2h0LFxuICAkbGVhZGluZy1ib3R0b206IDIsXG4gICRsaW5lLWhlaWdodDogMlxuKTtcblxuQGlmICgkaW5jbHVkZUJhc2VsaW5lKSB7XG4gIC8vIFBsdW1iZXJcbiAgJXBsdW1iZXItZ2VuZXJpYyB7XG4gICAgQGluY2x1ZGUgcGx1bWJlcigpO1xuICB9XG5cbiAgJXBsdW1iZXItZ2VuZXJpYy1sZWFkaW5nLTAtMCB7XG4gICAgQGluY2x1ZGUgcGx1bWJlcigkbGVhZGluZy10b3A6IDAsICRsZWFkaW5nLWJvdHRvbTogMCk7XG4gIH1cblxuICAlcGx1bWJlci1nZW5lcmljLWxlYWRpbmctMS0wIHtcbiAgICBAaW5jbHVkZSBwbHVtYmVyKCRsZWFkaW5nLXRvcDogMSwgJGxlYWRpbmctYm90dG9tOiAwKTtcbiAgfVxuXG4gICVwbHVtYmVyLWdlbmVyaWMtbGVhZGluZy0xLTIge1xuICAgIEBpbmNsdWRlIHBsdW1iZXIoJGxlYWRpbmctdG9wOiAxLCAkbGVhZGluZy1ib3R0b206IDIpO1xuICB9XG5cbiAgJXBsdW1iZXItZ2VuZXJpYy1sZWFkaW5nLTEtMC1ib3JkZXIge1xuICAgIEBpbmNsdWRlIHBsdW1iZXIoJGxlYWRpbmctdG9wOiAxLCAkbGVhZGluZy1ib3R0b206IDAsICRib3JkZXI6ICRib3JkZXItd2lkdGgpO1xuICB9XG5cbiAgJXBsdW1iZXItZ2VuZXJpYy1ib2xkIHtcbiAgICBAaW5jbHVkZSBwbHVtYmVyKCRiYXNlbGluZTogJGJhc2VsaW5lLWhpbHRpLWJvbGQpO1xuICB9XG5cbiAgJXBsdW1iZXItbGkge1xuICAgIEBpbmNsdWRlIHBsdW1iZXIoJGxlYWRpbmctYm90dG9tOiAwKTtcbiAgfVxuXG4gICVwbHVtYmVyLXRleHQtc21hbGwge1xuICAgIEBpbmNsdWRlIHBsdW1iZXIoJGZvbnQtc2l6ZTogMTMgLyByZW1vdmUtdW5pdCgkYmFzZWxpbmUtZ3JpZC1oZWlnaHQpLCAkbGVhZGluZy1ib3R0b206IDApO1xuICB9XG5cbiAgJXBsdW1iZXItdGV4dC1zbWFsbC1ib2xkIHtcbiAgICBAaW5jbHVkZSBwbHVtYmVyKFxuICAgICAgJGZvbnQtc2l6ZTogMTMgLyByZW1vdmUtdW5pdCgkYmFzZWxpbmUtZ3JpZC1oZWlnaHQpLFxuICAgICAgJGxlYWRpbmctYm90dG9tOiAwLFxuICAgICAgJGJhc2VsaW5lOiAkYmFzZWxpbmUtaGlsdGktYm9sZFxuICAgICk7XG4gIH1cblxuICAlcGx1bWJlci1oZWFkaW5nLWxhcmdlIHtcbiAgICBAaW5jbHVkZSBwbHVtYmVyKCRmb250LXNpemU6IDQsICRsaW5lLWhlaWdodDogNCk7XG4gIH1cblxuICAlcGx1bWJlci1oZWFkaW5nLW1lZGl1bSB7XG4gICAgQGluY2x1ZGUgcGx1bWJlcigkZm9udC1zaXplOiAyKTtcbiAgfVxuXG4gICVwbHVtYmVyLWhlYWRpbmctc21hbGwge1xuICAgIEBpbmNsdWRlIHBsdW1iZXIoJGZvbnQtc2l6ZTogMTggLyByZW1vdmUtdW5pdCgkYmFzZWxpbmUtZ3JpZC1oZWlnaHQpKTtcbiAgfVxuXG4gICVwbHVtYmVyLWhlYWRpbmctbWVkaXVtLWJvbGQge1xuICAgIEBpbmNsdWRlIHBsdW1iZXIoJGJhc2VsaW5lOiAkYmFzZWxpbmUtaGlsdGktYm9sZCwgJGZvbnQtc2l6ZTogMik7XG4gIH1cblxuICAlcGx1bWJlci1jdXN0b20taW5wdXQge1xuICAgIEBpbmNsdWRlIHBsdW1iZXIoJGxlYWRpbmctdG9wOiAxLCAkbGVhZGluZy1ib3R0b206IDApO1xuICB9XG5cbiAgJXBsdW1iZXItYnV0dG9uLWJvcmRlciB7XG4gICAgQGluY2x1ZGUgcGx1bWJlcigkbGVhZGluZy10b3A6IDIsICRsZWFkaW5nLWJvdHRvbTogMiwgJGJvcmRlcjogJGJvcmRlci13aWR0aCk7XG4gIH1cbn1cblxuJHBsdW1iZXItY3VzdG9tLWlucHV0LXZhbHVlczogcGx1bWJlci1jYWxjKFxuICAkbGVhZGluZy10b3A6IDEsXG4gICRsZWFkaW5nLWJvdHRvbTogMFxuKSAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0cy91aS1jb3JlLWNvbW1vbic7XG5cbjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcblxuICAudWktY29yZS1zZWFyY2gtZmllbGQtYnRuIHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogJGRhcms7XG4gIH1cblxuICAudWktY29yZS1pbnB1dC1maWVsZC5pcy1kaXNhYmxlZCArIC5pbnB1dC1ncm91cC1hcHBlbmQgLnVpLWNvcmUtc2VhcmNoLWZpZWxkLWJ0biB7XG4gICAgY29sb3I6ICRkaXNhYmxlZDtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cblxuICAmLmhlYWRlci12YXJpYW50IHtcbiAgICAudWktY29yZS1zZWFyY2gtZmllbGQtYnRuIHtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/search-field/search-field.component.ts":
/*!***********************************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/search-field/search-field.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: SearchFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFieldComponent", function() { return SearchFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_input_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form/input-field.component */ "../../libs/shared/ui-core/src/lib/form/input-field.component.ts");



var SearchFieldComponent = /** @class */ (function () {
    function SearchFieldComponent() {
        this.class = '';
        this.placeholder = '';
        this.disabled = false;
        this.headerVariant = false;
        this.buttonTitle = 'Click to search';
        this.classList = 'ui-core-search-field';
    }
    SearchFieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.class) {
            this.classList += " " + this.class;
        }
        if (this.headerVariant) {
            this.classList += ' header-variant';
        }
        this.inpField.registerOnDisabledChange(function (isDisabled) {
            _this.inpField.isDisabled = isDisabled;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchFieldComponent.prototype, "class", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SearchFieldComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SearchFieldComponent.prototype, "inputId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchFieldComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchFieldComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchFieldComponent.prototype, "headerVariant", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchFieldComponent.prototype, "buttonTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchFieldComponent.prototype, "classList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputField'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _form_input_field_component__WEBPACK_IMPORTED_MODULE_2__["InputFieldComponent"])
    ], SearchFieldComponent.prototype, "inpField", void 0);
    SearchFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-core-search-field',
            template: __webpack_require__(/*! ./search-field.component.html */ "../../libs/shared/ui-core/src/lib/search-field/search-field.component.html"),
            styles: [__webpack_require__(/*! ./search-field.component.scss */ "../../libs/shared/ui-core/src/lib/search-field/search-field.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchFieldComponent);
    return SearchFieldComponent;
}());



/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/search-field/search-field.module.ts":
/*!********************************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/search-field/search-field.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: SearchFieldModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFieldModule", function() { return SearchFieldModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _form_form_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form/form.module */ "../../libs/shared/ui-core/src/lib/form/form.module.ts");
/* harmony import */ var _svg_icon_svg_icon_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../svg-icon/svg-icon.module */ "../../libs/shared/ui-core/src/lib/svg-icon/svg-icon.module.ts");
/* harmony import */ var _search_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-field.component */ "../../libs/shared/ui-core/src/lib/search-field/search-field.component.ts");






var SearchFieldModule = /** @class */ (function () {
    function SearchFieldModule() {
    }
    SearchFieldModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_search_field_component__WEBPACK_IMPORTED_MODULE_5__["SearchFieldComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _form_form_module__WEBPACK_IMPORTED_MODULE_3__["FormModule"], _svg_icon_svg_icon_module__WEBPACK_IMPORTED_MODULE_4__["SvgIconModule"]],
            exports: [_search_field_component__WEBPACK_IMPORTED_MODULE_5__["SearchFieldComponent"]]
        })
    ], SearchFieldModule);
    return SearchFieldModule;
}());



/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/svg-icon/svg-icon.component.html":
/*!*****************************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/svg-icon/svg-icon.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg\n  [ngClass]=\"['svg-icon', 'svg-icon-' + icon, classes]\"\n  [attr.width]=\"width\"\n  [attr.height]=\"height || width\"\n  [attr.aria-label]=\"title\"\n  [attr.aria-hidden]=\"!title\"\n  focusable=\"false\"\n  role=\"img\"\n>\n  <use [attr.xlink:href]=\"'assets/sprites/symbol/svg/sprite.symbol.svg#' + icon\"></use>\n</svg>\n"

/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/svg-icon/svg-icon.component.scss":
/*!*****************************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/svg-icon/svg-icon.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * functions definition\n */\n/***\n * original import\n */\n/***\n * Patch / extend\n */\n/*\n * scss helper functions\n * TODO: finish or review implementation / remove if not needed\n */\n/**\n * returns a font value from the definition\n */\n/**\n * returns a color value from the definition\n */\n/**\n * returns a spacing value from the definition\n */\n/**\n * Remove the unit of a value\n */\n/**\n * tests value if integer\n */\n/**\n * retrieve multiple of baseline\n */\n/**\n * helper to return the calc function for baseline with border\n */\n/**\n * convert rem values to px based on default font size of 16px\n */\n/*\n * hdms variable definitions\n */\n/********************\n * Fonts definitions\n * Design spec: Definitions see https://fork.invisionapp.com/d/main#/console/17301588/358610542/preview\n * Documentation: https://confluence.hilti.com/display/pshilti/UI+library+documentation\n */\n/* Not used at the moment.\n$baseline-hilti-extended: 0.185;\n$baseline-hilti-heavy-extended: 0.185;\n$baseline-arial: 0.153320;\n$baseline-monospace: 0.162;\n*/\n/*\n * Color definitions end\n ********************/\n/********************\n * Color definitions\n * Design spec: Definitions see https://fork.invisionapp.com/d/main/#/console/17301588/358610505/preview\n * Documentation: https://confluence.hilti.com/display/pshilti/UI+library+documentation\n */\n/*\n * Color definitions end\n ********************/\n/********************\n * Grid system\n * Design spec:\n * Breakpoints: https://fork.invisionapp.com/d/main#/console/17301588/358610513/preview\n * Mobile: https://fork.invisionapp.com/d/main#/console/17301588/358610515/preview\n * Tablet: https://fork.invisionapp.com/d/main#/console/17301588/358610516/preview\n * Desktop+: https://fork.invisionapp.com/d/main#/console/17301588/358610517/preview\n * Documentation: https://confluence.hilti.com/display/pshilti/UI+library+documentation\n */\n/*\n * Grid system end\n ********************/\n/********************\n * Heights\n */\n/*\n * Heights end\n ********************/\n/********************\n * Sizing\n */\n/*\n * Sizing end\n ********************/\n/********************\n * Spacings\n * Design spec:\n * https://fork.invisionapp.com/d/main#/console/17301588/358610511/preview\n * https://fork.invisionapp.com/d/main#/console/17301588/358610510/preview\n * Documentation: https://confluence.hilti.com/display/pshilti/UI+library+documentation\n */\n/*\n * Spacings end\n ********************/\n/********************\n * Custom forms\n */\n/*\n * Custom forms end\n ********************/\n/********************\n * Layout helper classes\n * Documentation: https://confluence.hilti.com/display/pshilti/Layout\n */\n/*\n * Layout helper classes end\n ********************/\n/*\n * global mixin definitions\n * TODO: finish or review implementation / remove if not needed\n */\n/*\n * variables definition\n */\n/***\n * original import\n */\n/***\n * Patch / extend\n */\n/*\n * mixins definition\n */\n/***\n * original import\n */\n/***\n * Patch / extend\n */\n/**\n * HILTI specific modifications:\n * $border property: if plumber applied on elements with borders, these need to be subtracted from padding\n */\n/*\n * Plumber baseline definition file\n */\n:host {\n  display: inline-block;\n  line-height: 0;\n  color: inherit;\n  fill: currentColor; }\n:host .svg-icon {\n    display: inline-block;\n    line-height: inherit;\n    color: inherit;\n    fill: inherit; }\n:host-context(.ui-core-text) .svg-icon {\n  flex-shrink: 0; }\n:host-context(.ui-core-text):first-child {\n  margin-right: 5px;\n  margin-right: 0.3125rem; }\n:host-context(.ui-core-text):nth-child(n + 2) {\n  margin-left: 5px;\n  margin-left: 0.3125rem; }\n:host-context(.btn):first-child {\n  margin-right: 10px;\n  margin-right: 0.625rem; }\n:host-context(.btn):last-child {\n  margin-left: 10px;\n  margin-left: 0.625rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWwvaG9sbmcvZGV2L2xheW91dC9oZG1zL2xpYnMvc2hhcmVkL3VpLWNvcmUvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2Z1bmN0aW9ucy5zY3NzIiwibGlicy9zaGFyZWQvdWktY29yZS9zcmMvbGliL3N2Zy1pY29uL3N2Zy1pY29uLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21lbC9ob2xuZy9kZXYvbGF5b3V0L2hkbXMvbGlicy9zaGFyZWQvdWktY29yZS9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL2N1c3RvbS9fZnVuY3Rpb25zLnNjc3MiLCIvVXNlcnMvbWVsL2hvbG5nL2Rldi9sYXlvdXQvaGRtcy9saWJzL3NoYXJlZC91aS1jb3JlL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvY3VzdG9tL192YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9tZWwvaG9sbmcvZGV2L2xheW91dC9oZG1zL2xpYnMvc2hhcmVkL3VpLWNvcmUvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9jdXN0b20vX21peGlucy5zY3NzIiwiL1VzZXJzL21lbC9ob2xuZy9kZXYvbGF5b3V0L2hkbXMvbGlicy9zaGFyZWQvdWktY29yZS9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvbWVsL2hvbG5nL2Rldi9sYXlvdXQvaGRtcy9saWJzL3NoYXJlZC91aS1jb3JlL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19taXhpbnMuc2NzcyIsIi9Vc2Vycy9tZWwvaG9sbmcvZGV2L2xheW91dC9oZG1zL2xpYnMvc2hhcmVkL3VpLWNvcmUvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9jdXN0b20vX3BsdW1iZXIuc2NzcyIsIi9Vc2Vycy9tZWwvaG9sbmcvZGV2L2xheW91dC9oZG1zL2xpYnMvc2hhcmVkL3VpLWNvcmUvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9jdXN0b20vX2Jhc2VsaW5lLnNjc3MiLCIvVXNlcnMvbWVsL2hvbG5nL2Rldi9sYXlvdXQvaGRtcy9saWJzL3NoYXJlZC91aS1jb3JlL3NyYy9saWIvc3ZnLWljb24vc3ZnLWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VDRUU7QURFRjs7RUNDRTtBREtGOztFQ0ZFO0FDUkY7OztFRFlFO0FDUEY7O0VEVUU7QUNFRjs7RURDRTtBQ1dGOztFRFJFO0FDb0JGOztFRGpCRTtBQzRCRjs7RUR6QkU7QUNnQ0Y7O0VEN0JFO0FDd0NGOztFRHJDRTtBQ2dERjs7RUQ3Q0U7QUVwQ0Y7O0VGdUNFO0FFaENGOzs7O0VGcUNFO0FFNUJGOzs7OztDRmtDQztBRUpEOztxQkZPcUI7QUVIckI7Ozs7RUZRRTtBRTBERjs7cUJGdkRxQjtBRTJEckI7Ozs7Ozs7O0VGbERFO0FFMEZGOztxQkZ2RnFCO0FFMkZyQjs7RUZ4RkU7QUUrRkY7O3FCRjVGcUI7QUVnR3JCOztFRjdGRTtBRXlHRjs7cUJGdEdxQjtBRTBHckI7Ozs7OztFRm5HRTtBRStJRjs7cUJGNUlxQjtBRTJSckI7O0VGeFJFO0FFcVRGOztxQkZsVHFCO0FFaVZyQjs7O0VGN1VFO0FFcVhGOztxQkZsWHFCO0FHNUdyQjs7O0VIZ0hFO0FJaEhGOztFSm1IRTtBSS9HRjs7RUprSEU7QUk1R0Y7O0VKK0dFO0FLekhGOztFTDRIRTtBS3hIRjs7RUwySEU7QUtySEY7O0VMd0hFO0FNN0hGOzs7RU5pSUU7QU90SUY7O0VQeUlFO0FRdklGO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7QUFKcEI7SUFPSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxhQUFhLEVBQUE7QUFJakI7RUFFSSxjQUFjLEVBQUE7QUFGbEI7RUFNSSxpQkFBaUI7RUFBakIsdUJBQWlCLEVBQUE7QUFOckI7RUFVSSxnQkFBZ0I7RUFBaEIsc0JBQWdCLEVBQUE7QUFJcEI7RUFFSSxrQkFBa0I7RUFBbEIsc0JBQWtCLEVBQUE7QUFGdEI7RUFLSSxpQkFBaUI7RUFBakIscUJBQWlCLEVBQUEiLCJmaWxlIjoibGlicy9zaGFyZWQvdWktY29yZS9zcmMvbGliL3N2Zy1pY29uL3N2Zy1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIGZ1bmN0aW9ucyBkZWZpbml0aW9uXG4gKi9cblxuLyoqKlxuICogb3JpZ2luYWwgaW1wb3J0XG4gKi9cblxuQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XG5cbi8qKipcbiAqIFBhdGNoIC8gZXh0ZW5kXG4gKi9cbiIsIi8qXG4gKiBmdW5jdGlvbnMgZGVmaW5pdGlvblxuICovXG4vKioqXG4gKiBvcmlnaW5hbCBpbXBvcnRcbiAqL1xuLyoqKlxuICogUGF0Y2ggLyBleHRlbmRcbiAqL1xuLypcbiAqIHNjc3MgaGVscGVyIGZ1bmN0aW9uc1xuICogVE9ETzogZmluaXNoIG9yIHJldmlldyBpbXBsZW1lbnRhdGlvbiAvIHJlbW92ZSBpZiBub3QgbmVlZGVkXG4gKi9cbi8qKlxuICogcmV0dXJucyBhIGZvbnQgdmFsdWUgZnJvbSB0aGUgZGVmaW5pdGlvblxuICovXG4vKipcbiAqIHJldHVybnMgYSBjb2xvciB2YWx1ZSBmcm9tIHRoZSBkZWZpbml0aW9uXG4gKi9cbi8qKlxuICogcmV0dXJucyBhIHNwYWNpbmcgdmFsdWUgZnJvbSB0aGUgZGVmaW5pdGlvblxuICovXG4vKipcbiAqIFJlbW92ZSB0aGUgdW5pdCBvZiBhIHZhbHVlXG4gKi9cbi8qKlxuICogdGVzdHMgdmFsdWUgaWYgaW50ZWdlclxuICovXG4vKipcbiAqIHJldHJpZXZlIG11bHRpcGxlIG9mIGJhc2VsaW5lXG4gKi9cbi8qKlxuICogaGVscGVyIHRvIHJldHVybiB0aGUgY2FsYyBmdW5jdGlvbiBmb3IgYmFzZWxpbmUgd2l0aCBib3JkZXJcbiAqL1xuLyoqXG4gKiBjb252ZXJ0IHJlbSB2YWx1ZXMgdG8gcHggYmFzZWQgb24gZGVmYXVsdCBmb250IHNpemUgb2YgMTZweFxuICovXG4vKlxuICogaGRtcyB2YXJpYWJsZSBkZWZpbml0aW9uc1xuICovXG4vKioqKioqKioqKioqKioqKioqKipcbiAqIEZvbnRzIGRlZmluaXRpb25zXG4gKiBEZXNpZ24gc3BlYzogRGVmaW5pdGlvbnMgc2VlIGh0dHBzOi8vZm9yay5pbnZpc2lvbmFwcC5jb20vZC9tYWluIy9jb25zb2xlLzE3MzAxNTg4LzM1ODYxMDU0Mi9wcmV2aWV3XG4gKiBEb2N1bWVudGF0aW9uOiBodHRwczovL2NvbmZsdWVuY2UuaGlsdGkuY29tL2Rpc3BsYXkvcHNoaWx0aS9VSStsaWJyYXJ5K2RvY3VtZW50YXRpb25cbiAqL1xuLyogTm90IHVzZWQgYXQgdGhlIG1vbWVudC5cbiRiYXNlbGluZS1oaWx0aS1leHRlbmRlZDogMC4xODU7XG4kYmFzZWxpbmUtaGlsdGktaGVhdnktZXh0ZW5kZWQ6IDAuMTg1O1xuJGJhc2VsaW5lLWFyaWFsOiAwLjE1MzMyMDtcbiRiYXNlbGluZS1tb25vc3BhY2U6IDAuMTYyO1xuKi9cbi8qXG4gKiBDb2xvciBkZWZpbml0aW9ucyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKlxuICogQ29sb3IgZGVmaW5pdGlvbnNcbiAqIERlc2lnbiBzcGVjOiBEZWZpbml0aW9ucyBzZWUgaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4vIy9jb25zb2xlLzE3MzAxNTg4LzM1ODYxMDUwNS9wcmV2aWV3XG4gKiBEb2N1bWVudGF0aW9uOiBodHRwczovL2NvbmZsdWVuY2UuaGlsdGkuY29tL2Rpc3BsYXkvcHNoaWx0aS9VSStsaWJyYXJ5K2RvY3VtZW50YXRpb25cbiAqL1xuLypcbiAqIENvbG9yIGRlZmluaXRpb25zIGVuZFxuICoqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqXG4gKiBHcmlkIHN5c3RlbVxuICogRGVzaWduIHNwZWM6XG4gKiBCcmVha3BvaW50czogaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTEzL3ByZXZpZXdcbiAqIE1vYmlsZTogaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTE1L3ByZXZpZXdcbiAqIFRhYmxldDogaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTE2L3ByZXZpZXdcbiAqIERlc2t0b3ArOiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbiMvY29uc29sZS8xNzMwMTU4OC8zNTg2MTA1MTcvcHJldmlld1xuICogRG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9jb25mbHVlbmNlLmhpbHRpLmNvbS9kaXNwbGF5L3BzaGlsdGkvVUkrbGlicmFyeStkb2N1bWVudGF0aW9uXG4gKi9cbi8qXG4gKiBHcmlkIHN5c3RlbSBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKlxuICogSGVpZ2h0c1xuICovXG4vKlxuICogSGVpZ2h0cyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKlxuICogU2l6aW5nXG4gKi9cbi8qXG4gKiBTaXppbmcgZW5kXG4gKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKipcbiAqIFNwYWNpbmdzXG4gKiBEZXNpZ24gc3BlYzpcbiAqIGh0dHBzOi8vZm9yay5pbnZpc2lvbmFwcC5jb20vZC9tYWluIy9jb25zb2xlLzE3MzAxNTg4LzM1ODYxMDUxMS9wcmV2aWV3XG4gKiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbiMvY29uc29sZS8xNzMwMTU4OC8zNTg2MTA1MTAvcHJldmlld1xuICogRG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9jb25mbHVlbmNlLmhpbHRpLmNvbS9kaXNwbGF5L3BzaGlsdGkvVUkrbGlicmFyeStkb2N1bWVudGF0aW9uXG4gKi9cbi8qXG4gKiBTcGFjaW5ncyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKlxuICogQ3VzdG9tIGZvcm1zXG4gKi9cbi8qXG4gKiBDdXN0b20gZm9ybXMgZW5kXG4gKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKipcbiAqIExheW91dCBoZWxwZXIgY2xhc3Nlc1xuICogRG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9jb25mbHVlbmNlLmhpbHRpLmNvbS9kaXNwbGF5L3BzaGlsdGkvTGF5b3V0XG4gKi9cbi8qXG4gKiBMYXlvdXQgaGVscGVyIGNsYXNzZXMgZW5kXG4gKioqKioqKioqKioqKioqKioqKiovXG4vKlxuICogZ2xvYmFsIG1peGluIGRlZmluaXRpb25zXG4gKiBUT0RPOiBmaW5pc2ggb3IgcmV2aWV3IGltcGxlbWVudGF0aW9uIC8gcmVtb3ZlIGlmIG5vdCBuZWVkZWRcbiAqL1xuLypcbiAqIHZhcmlhYmxlcyBkZWZpbml0aW9uXG4gKi9cbi8qKipcbiAqIG9yaWdpbmFsIGltcG9ydFxuICovXG4vKioqXG4gKiBQYXRjaCAvIGV4dGVuZFxuICovXG4vKlxuICogbWl4aW5zIGRlZmluaXRpb25cbiAqL1xuLyoqKlxuICogb3JpZ2luYWwgaW1wb3J0XG4gKi9cbi8qKipcbiAqIFBhdGNoIC8gZXh0ZW5kXG4gKi9cbi8qKlxuICogSElMVEkgc3BlY2lmaWMgbW9kaWZpY2F0aW9uczpcbiAqICRib3JkZXIgcHJvcGVydHk6IGlmIHBsdW1iZXIgYXBwbGllZCBvbiBlbGVtZW50cyB3aXRoIGJvcmRlcnMsIHRoZXNlIG5lZWQgdG8gYmUgc3VidHJhY3RlZCBmcm9tIHBhZGRpbmdcbiAqL1xuLypcbiAqIFBsdW1iZXIgYmFzZWxpbmUgZGVmaW5pdGlvbiBmaWxlXG4gKi9cbjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogMDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZpbGw6IGN1cnJlbnRDb2xvcjsgfVxuICA6aG9zdCAuc3ZnLWljb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBmaWxsOiBpbmhlcml0OyB9XG5cbjpob3N0LWNvbnRleHQoLnVpLWNvcmUtdGV4dCkgLnN2Zy1pY29uIHtcbiAgZmxleC1zaHJpbms6IDA7IH1cblxuOmhvc3QtY29udGV4dCgudWktY29yZS10ZXh0KTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogNXB4OyB9XG5cbjpob3N0LWNvbnRleHQoLnVpLWNvcmUtdGV4dCk6bnRoLWNoaWxkKG4gKyAyKSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7IH1cblxuOmhvc3QtY29udGV4dCguYnRuKTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDsgfVxuXG46aG9zdC1jb250ZXh0KC5idG4pOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMTBweDsgfVxuIiwiLypcbiAqIHNjc3MgaGVscGVyIGZ1bmN0aW9uc1xuICogVE9ETzogZmluaXNoIG9yIHJldmlldyBpbXBsZW1lbnRhdGlvbiAvIHJlbW92ZSBpZiBub3QgbmVlZGVkXG4gKi9cblxuLyoqXG4gKiByZXR1cm5zIGEgZm9udCB2YWx1ZSBmcm9tIHRoZSBkZWZpbml0aW9uXG4gKi9cbkBmdW5jdGlvbiBmb250KCRrZXkpIHtcbiAgQGlmIG1hcC1oYXMta2V5KCRmb250cywgJGtleSkge1xuICAgIEByZXR1cm4gbWFwLWdldCgkZm9udHMsICRrZXkpO1xuICB9XG5cbiAgQHdhcm4gXCJVbmtub3duIGAjeyRrZXl9YCBpbiAkZm9udHMuXCI7XG4gIEByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiByZXR1cm5zIGEgY29sb3IgdmFsdWUgZnJvbSB0aGUgZGVmaW5pdGlvblxuICovXG5AZnVuY3Rpb24gY29sb3IoJGtleSkge1xuICBAaWYgbWFwLWhhcy1rZXkoJGNvbG9ycywgJGtleSkge1xuICAgIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAka2V5KTtcbiAgfVxuXG4gIEB3YXJuIFwiVW5rbm93biBgI3ska2V5fWAgaW4gJGNvbG9ycy5cIjtcbiAgQHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIHJldHVybnMgYSBzcGFjaW5nIHZhbHVlIGZyb20gdGhlIGRlZmluaXRpb25cbiAqL1xuQGZ1bmN0aW9uIHNwYWNpbmcoJGtleSkge1xuICBAaWYgbWFwLWhhcy1rZXkoJHNwYWNlcnMsICRrZXkpIHtcbiAgICBAcmV0dXJuIG1hcC1nZXQoJHNwYWNlcnMsICRrZXkpO1xuICB9XG5cbiAgQHdhcm4gXCJVbmtub3duIGAjeyRrZXl9YCBpbiAkc3BhY2Vycy5cIjtcbiAgQHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgdW5pdCBvZiBhIHZhbHVlXG4gKi9cbkBmdW5jdGlvbiByZW1vdmUtdW5pdCgkbnVtYmVyKSB7XG4gIEBpZiB0eXBlLW9mKCRudW1iZXIpID09ICdudW1iZXInIGFuZCBub3QgdW5pdGxlc3MoJG51bWJlcikge1xuICAgIEByZXR1cm4gJG51bWJlciAvICgkbnVtYmVyICogMCArIDEpO1xuICB9XG5cbiAgQHJldHVybiAkbnVtYmVyO1xufVxuXG4vKipcbiAqIHRlc3RzIHZhbHVlIGlmIGludGVnZXJcbiAqL1xuQGZ1bmN0aW9uIGlzLWludGVnZXIoJHZhbHVlKSB7XG4gIEByZXR1cm4gKHVuaXRsZXNzKCR2YWx1ZSkgYW5kICR2YWx1ZSA9PSByb3VuZCgkdmFsdWUpKTtcbn1cblxuLyoqXG4gKiByZXRyaWV2ZSBtdWx0aXBsZSBvZiBiYXNlbGluZVxuICovXG5AZnVuY3Rpb24gYmwoJHZhbHVlKSB7XG4gIEBpZiBub3QgaXMtaW50ZWdlcigkdmFsdWUpIHtcbiAgICBAZXJyb3IgJ3ZhbHVlIG11c3QgYmUgaW50ZWdlciwgZ290ICN7JHZhbHVlfSBpbnN0ZWFkJztcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlICogJGJhc2VsaW5lLWdyaWQtaGVpZ2h0O1xufVxuXG4vKipcbiAqIGhlbHBlciB0byByZXR1cm4gdGhlIGNhbGMgZnVuY3Rpb24gZm9yIGJhc2VsaW5lIHdpdGggYm9yZGVyXG4gKi9cbkBmdW5jdGlvbiBibC1ib3JkZXIoJHBhZGRpbmcpIHtcbiAgQGlmIG5vdCBpcy1pbnRlZ2VyKCRwYWRkaW5nKSBvciAkcGFkZGluZyA8IDAge1xuICAgIEBlcnJvciAncGFkZGluZyBtdXN0IGJlIGludGVnZXIgYW5kIGxhcmdlciAwLCBnb3QgI3skcGFkZGluZ30gaW5zdGVhZCc7XG4gIH1cblxuICBAcmV0dXJuIGJsKCRwYWRkaW5nKSAtICRib3JkZXItd2lkdGg7XG59XG5cbi8qKlxuICogY29udmVydCByZW0gdmFsdWVzIHRvIHB4IGJhc2VkIG9uIGRlZmF1bHQgZm9udCBzaXplIG9mIDE2cHhcbiAqL1xuQGZ1bmN0aW9uIHJlbS10by1weCgkcmVtVmFsdWUpIHtcbiAgLy8gVE9ETzogYXMgMTZweCBpcyBkZXBlbmRlbmQgb24gYnJvd3NlciBzZXR0aW5ncyB0aGlzIGlzIHN0aWxsIHN1YmplY3QgdG8gY2hhbmdlXG4gIEByZXR1cm4gcmVtb3ZlLXVuaXQoJHJlbVZhbHVlKSAqIDE2cHg7XG59XG4iLCIvKlxuICogaGRtcyB2YXJpYWJsZSBkZWZpbml0aW9uc1xuICovXG5cbi8vIEhETVMgY3VzdG9tXG4kYmFzZWxpbmUtZ3JpZC1oZWlnaHQ6IDExcHggIWRlZmF1bHQ7XG5cbi8qKioqKioqKioqKioqKioqKioqKlxuICogRm9udHMgZGVmaW5pdGlvbnNcbiAqIERlc2lnbiBzcGVjOiBEZWZpbml0aW9ucyBzZWUgaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTQyL3ByZXZpZXdcbiAqIERvY3VtZW50YXRpb246IGh0dHBzOi8vY29uZmx1ZW5jZS5oaWx0aS5jb20vZGlzcGxheS9wc2hpbHRpL1VJK2xpYnJhcnkrZG9jdW1lbnRhdGlvblxuICovXG5cbiRiYXNlbGluZS1oaWx0aS1yb21hbjogMC4xNjtcbiRiYXNlbGluZS1oaWx0aS1ib2xkOiAwLjE2O1xuXG4vKiBOb3QgdXNlZCBhdCB0aGUgbW9tZW50LlxuJGJhc2VsaW5lLWhpbHRpLWV4dGVuZGVkOiAwLjE4NTtcbiRiYXNlbGluZS1oaWx0aS1oZWF2eS1leHRlbmRlZDogMC4xODU7XG4kYmFzZWxpbmUtYXJpYWw6IDAuMTUzMzIwO1xuJGJhc2VsaW5lLW1vbm9zcGFjZTogMC4xNjI7XG4qL1xuXG4kZm9udHM6IChcbiAgJ2hpbHRpLXJvbWFuJzogKFxuICAgICdIaWx0aSBSb21hbicsXG4gICAgQXJpYWwsXG4gICAgVmVyZGFuYSxcbiAgICBzYW5zLXNlcmlmXG4gICksXG4gICdoaWx0aS1ib2xkJzogKFxuICAgICdIaWx0aSBCb2xkJyxcbiAgICBBcmlhbCxcbiAgICBWZXJkYW5hLFxuICAgIHNhbnMtc2VyaWZcbiAgKVxuICAvKiBub3QgdXNlZCBhdCB0aGUgbW9tZW50XG4gICAgICAgICdoaWx0aS1leHRlbmRlZCc6ICAgKCAnSGlsdGkgRXh0ZW5kZWQnLCBBcmlhbCwgVmVyZGFuYSwgc2Fucy1zZXJpZiApLFxuICAgICAgICAnaGlsdGktaGVhdnknOiAgICAgICggJ0hpbHRpIEhlYXZ5IEV4dGVuZGVkJywgQXJpYWwsIFZlcmRhbmEsIHNhbnMtc2VyaWYgKSxcbiAgICAgICAgJ2FyaWFsJzogICAgICAgICAgICAgKCBBcmlhbCwgVmVyZGFuYSwgc2Fucy1zZXJpZiApLFxuICAgICAgICAnbW9ub3NwYWNlJzogICAgICAgICAoIG1vbm9zcGFjZSApXG4gICAgICAgICovXG4pO1xuXG4kYmFzZS1mb250LXNpemU6IDE1cHg7XG5cbi8qXG4gKiBDb2xvciBkZWZpbml0aW9ucyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqKioqKioqKioqKioqKioqKioqXG4gKiBDb2xvciBkZWZpbml0aW9uc1xuICogRGVzaWduIHNwZWM6IERlZmluaXRpb25zIHNlZSBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbi8jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTA1L3ByZXZpZXdcbiAqIERvY3VtZW50YXRpb246IGh0dHBzOi8vY29uZmx1ZW5jZS5oaWx0aS5jb20vZGlzcGxheS9wc2hpbHRpL1VJK2xpYnJhcnkrZG9jdW1lbnRhdGlvblxuICovXG4kcmVkOiAjZDIwNTFlO1xuJGJ1cmd1bmR5OiAjNjcxYTNkO1xuJHN0ZWVsLTEwMDogIzUyNGY1MztcbiR3aGl0ZTogI2ZmZjtcbiR3YXJtLWNvbmNyZXRlLTEwMDogI2Q3Y2ViZDtcbiRoZWF2eS1jb25jcmV0ZS0xMDA6ICM4ODdmNmU7XG4kc3RlZWwtNDA6ICNiYWI5YmE7XG4kc3RlZWwtMTA6ICNlZGVkZWQ7XG4kYmxhY2stNjogcmdiYSgwLCAwLCAwLCAwLjA2KTtcblxuJGNvbG9yczogKCk7XG4kY29sb3JzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICAncmVkJzogJHJlZCxcbiAgICAnYnVyZ3VuZHknOiAkYnVyZ3VuZHksXG4gICAgJ3N0ZWVsLTEwMCc6ICRzdGVlbC0xMDAsXG4gICAgJ3doaXRlJzogJHdoaXRlLFxuICAgICd3YXJtLWNvbmNyZXRlLTEwMCc6ICR3YXJtLWNvbmNyZXRlLTEwMCxcbiAgICAnaGVhdnktY29uY3JldGUtMTAwJzogJGhlYXZ5LWNvbmNyZXRlLTEwMCxcbiAgICAnc3RlZWwtNDAnOiAkc3RlZWwtNDAsXG4gICAgJ3N0ZWVsLTEwJzogJHN0ZWVsLTEwIC8vIFdJUDogY29sb3IgZGVmaW5pdGlvbiBmb3IgKHZlcnkpIGxpZ2h0IGdyYXkgbWlzc2luZ1xuICApLFxuICAkY29sb3JzXG4pO1xuXG4kcHJpbWFyeTogJHJlZDtcbiRzZWNvbmRhcnk6ICRidXJndW5keTtcbi8vIFRPRE86IFdJUCAtIHN1Y2Nlc3MsIGluZm8sIHdhcm5pbmcgYW5kIGRhbmdlciBub3QgeWV0IGRlZmluZWRcbi8vIHNlZSBoZXJlOiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbi8jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTA2L3ByZXZpZXdcbiRzdWNjZXNzOiBsaWdodGdyZWVuO1xuJGluZm86IGxpZ2h0Ymx1ZTtcbiR3YXJuaW5nOiBvcmFuZ2U7XG4kZGFuZ2VyOiAkcmVkO1xuJGxpZ2h0OiAkd2hpdGU7XG4kZGFyazogJHN0ZWVsLTEwMDtcblxuLy8gY3VzdG9tIHRoZW1lIGNvbG9yc1xuJG5ldXRyYWwtbGlnaHQ6ICR3YXJtLWNvbmNyZXRlLTEwMDtcbiRuZXV0cmFsLWRhcms6ICRoZWF2eS1jb25jcmV0ZS0xMDA7XG4kZGlzYWJsZWQ6ICRzdGVlbC00MDtcblxuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiR0aGVtZS1jb2xvcnM6ICgpO1xuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxuICAoXG4gICAgJ3ByaW1hcnknOiAkcHJpbWFyeSxcbiAgICAnc2Vjb25kYXJ5JzogJHNlY29uZGFyeSxcbiAgICAnc3VjY2Vzcyc6ICRzdWNjZXNzLFxuICAgICdpbmZvJzogJG5ldXRyYWwtbGlnaHQsXG4gICAgJ3dhcm5pbmcnOiAkd2FybmluZyxcbiAgICAnZGFuZ2VyJzogJGRhbmdlcixcbiAgICAnbGlnaHQnOiAkbGlnaHQsXG4gICAgJ2RhcmsnOiAkZGFyayxcbiAgICAnZGlzYWJsZWQnOiAkZGlzYWJsZWQsXG4gICAgJ25ldXRyYWwtbGlnaHQnOiAkbmV1dHJhbC1saWdodCxcbiAgICAnbmV1dHJhbC1kYXJrJzogJG5ldXRyYWwtZGFyayxcbiAgICAnc3RlZWwtMTAnOiAkc3RlZWwtMTAgLy8gV0lQOiBzZWUgYWJvdmVcbiAgKSxcbiAgJHRoZW1lLWNvbG9yc1xuKTtcblxuLypcbiAqIENvbG9yIGRlZmluaXRpb25zIGVuZFxuICoqKioqKioqKioqKioqKioqKioqL1xuXG4vKioqKioqKioqKioqKioqKioqKipcbiAqIEdyaWQgc3lzdGVtXG4gKiBEZXNpZ24gc3BlYzpcbiAqIEJyZWFrcG9pbnRzOiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbiMvY29uc29sZS8xNzMwMTU4OC8zNTg2MTA1MTMvcHJldmlld1xuICogTW9iaWxlOiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbiMvY29uc29sZS8xNzMwMTU4OC8zNTg2MTA1MTUvcHJldmlld1xuICogVGFibGV0OiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbiMvY29uc29sZS8xNzMwMTU4OC8zNTg2MTA1MTYvcHJldmlld1xuICogRGVza3RvcCs6IGh0dHBzOi8vZm9yay5pbnZpc2lvbmFwcC5jb20vZC9tYWluIy9jb25zb2xlLzE3MzAxNTg4LzM1ODYxMDUxNy9wcmV2aWV3XG4gKiBEb2N1bWVudGF0aW9uOiBodHRwczovL2NvbmZsdWVuY2UuaGlsdGkuY29tL2Rpc3BsYXkvcHNoaWx0aS9VSStsaWJyYXJ5K2RvY3VtZW50YXRpb25cbiAqL1xuXG4kZ3JpZC1icmVha3BvaW50czogKFxuICB4czogMCxcbiAgc206IDc2OHB4LFxuICBtZDogMTAyNHB4LFxuICBsZzogMTQ0MHB4LFxuICB4bDogMjU2MHB4XG4pO1xuXG4kZ3JpZC1icmVha3BvaW50cy1uby1ndXR0ZXI6IHhzLCBzbTtcblxuJGdyaWQtY29sdW1uczogNDg7XG4kZ3JpZC1ndXR0ZXItd2lkdGg6IDEwcHg7XG4kZ3JpZC1ndXR0ZXItd2lkdGgtbm8tZ3V0dGVyOiAwcHg7XG5cbiRtZWRpYS1kaXJlY3Rpb246ICdtaW4nO1xuJG1lZGlhLWRpcmVjdGlvbi12OiAnbWluJztcblxuJGNvbnRhaW5lci1zcGFjaW5nczogKCkgIWRlZmF1bHQ7XG4vLyBoYWxmICRncmlkLWd1dHRlci13aWR0aCB3aWR0aCB3aWxsIGJlIGFkZGVkIHRvIGFsbCBubyBtYXR0ZXIgdGhlIGJyZWFrcG9pbnRcbiRjb250YWluZXItc3BhY2luZ3M6IG1hcC1tZXJnZShcbiAgKFxuICAgIHhzOiAxNXB4LFxuICAgIHNtOiAzNXB4LFxuICAgIG1kOiA1NXB4LFxuICAgIGxnOiA3NXB4LFxuICAgIHhsOiAxMzVweFxuICApLFxuICAkY29udGFpbmVyLXNwYWNpbmdzXG4pO1xuXG4vKlxuICogR3JpZCBzeXN0ZW0gZW5kXG4gKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKioqKioqKioqKioqKioqKioqKlxuICogSGVpZ2h0c1xuICovXG5cbiRibC1oZWlnaHQtc2l6ZXMtZnJvbTogMztcbiRibC1oZWlnaHQtc2l6ZXMtdG86IDIwO1xuXG4vKlxuICogSGVpZ2h0cyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqKioqKioqKioqKioqKioqKioqXG4gKiBTaXppbmdcbiAqL1xuXG4kYm94LXdpZHRoczogKFxuICAnMS02JzogcGVyY2VudGFnZSgxLzYpLFxuICAnMS00JzogcGVyY2VudGFnZSgxLzQpLFxuICAnMS0zJzogcGVyY2VudGFnZSgxLzMpLFxuICAnMS0yJzogcGVyY2VudGFnZSgxLzIpLFxuICAnMi0zJzogcGVyY2VudGFnZSgyLzMpXG4pO1xuXG4vKlxuICogU2l6aW5nIGVuZFxuICoqKioqKioqKioqKioqKioqKioqL1xuXG4vKioqKioqKioqKioqKioqKioqKipcbiAqIFNwYWNpbmdzXG4gKiBEZXNpZ24gc3BlYzpcbiAqIGh0dHBzOi8vZm9yay5pbnZpc2lvbmFwcC5jb20vZC9tYWluIy9jb25zb2xlLzE3MzAxNTg4LzM1ODYxMDUxMS9wcmV2aWV3XG4gKiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbiMvY29uc29sZS8xNzMwMTU4OC8zNTg2MTA1MTAvcHJldmlld1xuICogRG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9jb25mbHVlbmNlLmhpbHRpLmNvbS9kaXNwbGF5L3BzaGlsdGkvVUkrbGlicmFyeStkb2N1bWVudGF0aW9uXG4gKi9cblxuJHNwYWNlcjogJGJhc2VsaW5lLWdyaWQtaGVpZ2h0O1xuXG4kc3BhY2VyczogKFxuICAoXG4gICAgMDogMCxcbiAgICAxOiAoXG4gICAgICAkc3BhY2VyICogMVxuICAgICksXG4gICAgMjogKFxuICAgICAgJHNwYWNlciAqIDJcbiAgICApLFxuICAgIDM6IChcbiAgICAgICRzcGFjZXIgKiAzXG4gICAgKSxcbiAgICA0OiAoXG4gICAgICAkc3BhY2VyICogNFxuICAgICksXG4gICAgNTogKFxuICAgICAgJHNwYWNlciAqIDVcbiAgICApXG4gIClcbik7XG5cbiRob3Jpem9udGFsLXNwYWNlcnM6IChcbiAgKFxuICAgIDA6IDAsXG4gICAgMTogNXB4LFxuICAgIDI6IDEwcHgsXG4gICAgMzogMTVweCxcbiAgICA0OiAyMHB4LFxuICAgIDU6IDI1cHhcbiAgKVxuKTtcblxuJGNvbnRhaW5lci1wYWRkaW5nLXg6IDE1cHg7XG5cbi8qXG4gKiBTcGFjaW5ncyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gT3B0aW9uc1xuJGVuYWJsZS12YWxpZGF0aW9uLWljb25zOiBmYWxzZTtcblxuJGJvZHktYmc6ICR3aGl0ZTtcbiRib2R5LWNvbG9yOiAkc3RlZWwtMTAwO1xuXG4kZm9udC1mYW1pbHktYmFzZTogbWFwLWdldCgkZm9udHMsICdoaWx0aS0tcm9tYW4nKTtcblxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiBtYXAtZ2V0KCRmb250cywgJ2hpbHRpLS1yb21hbicpOyAvLyBUT0RPOiByZXZpZXdcbiRoZWFkaW5ncy1mb250LXdlaWdodDogNDAwOyAvLyBUT0RPOiByZXZpZXdcblxuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiBibCgyKTtcblxuJGgxLWZvbnQtc2l6ZTogMjBweDtcbiRoMi1mb250LXNpemU6IDQ0cHg7XG4kaDMtZm9udC1zaXplOiAyMHB4O1xuXG4kYm9keS1mb250OiBtYXAtZ2V0KCRmb250cywgJ2hpbHRpLXJvbWFuJyk7XG5cbi8vICRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIDAuOTM3NXJlbTtcblxuJGZvbnQtd2VpZ2h0LWJhc2U6IDQwMDtcbiRsaW5lLWhlaWdodC1iYXNlOiAyO1xuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuLy8gVE9ETzogV0lQIC8gcmV2aWV3XG4kYm94LXNoYWRvdy1zbTogMCAwLjEyNXJlbSAwLjEyNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcblxuJGJvcmRlci13aWR0aDogMXB4O1xuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeTtcblxuJGJvcmRlci1yYWRpdXM6IDA7XG4kYm9yZGVyLXJhZGl1cy1sZzogJGJvcmRlci1yYWRpdXM7XG4kYm9yZGVyLXJhZGl1cy1zbTogNnB4O1xuXG4vLyBBbGVydHNcbi8vIFRPRE86IFdJUCAvIHJldmlld1xuJGFsZXJ0LWJvcmRlci13aWR0aDogMXB4O1xuJGFsZXJ0LXBhZGRpbmcteTogJGJhc2VsaW5lLWdyaWQtaGVpZ2h0IC0gJGFsZXJ0LWJvcmRlci13aWR0aDsgLy8gcmVzcGVjdCBib3JkZXIgd2lkdGggdG8gc3RheSB3aXRoaW4gYmFzZWxpbmVcbiRhbGVydC1tYXJnaW4tYm90dG9tOiAkYmFzZWxpbmUtZ3JpZC1oZWlnaHQ7XG5cbi8vIERyb3Bkb3duc1xuLy9cbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cbi8vIFRPRE86IFdJUCAvIHJldmlld1xuJGRyb3Bkb3duLW1pbi13aWR0aDogMjByZW07XG4kZHJvcGRvd24tcGFkZGluZy15OiAwO1xuJGRyb3Bkb3duLXNwYWNlcjogMTdweDtcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAwIDAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcblxuLy8gTGlzdHNcbiRsaXN0LXVsLWJ1bGxldC1kaWFtZXRlcjogNXB4O1xuJGxpc3QtdWwtaWNvbi13aWR0aDogMThweDtcbiRsaXN0LXVsLWljb24tdGV4dC1zcGFjaW5nOiAkZ3JpZC1ndXR0ZXItd2lkdGggLyAyO1xuJGxpc3Qtb2wtbnVtYmVyLXdpZHRoOiAyMXB4O1xuJGxpc3Qtb2wtbnVtYmVyLXRleHQtc3BhY2luZzogJGxpc3QtdWwtaWNvbi10ZXh0LXNwYWNpbmc7XG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuLy8gVE9ETzogV0lQIC8gcmV2aWV3XG4kbGluay1jb2xvcjogJHN0ZWVsLTEwMDtcblxuLy8gTmF2YmFyXG4vLyBUT0RPOiBXSVAgLyByZXZpZXdcbiRuYXZiYXItcGFkZGluZy15OiAwO1xuJG5hdmJhci1uYXYtbGluay1wYWRkaW5nLXg6IDAuNjI1cmVtO1xuJG5hdi1saW5rLXBhZGRpbmcteDogJGNvbnRhaW5lci1wYWRkaW5nLXg7XG5cbi8vIENvbXB1dGUgdGhlIG5hdmJhci1icmFuZCBwYWRkaW5nLXkgc28gdGhlIG5hdmJhci1icmFuZCB3aWxsIGhhdmUgdGhlIHNhbWUgaGVpZ2h0IGFzIG5hdmJhci10ZXh0IGFuZCBuYXYtbGlua1xuJG5hdmJhci1icmFuZC1wYWRkaW5nLXk6IDA7XG4kbmF2YmFyLWxpZ2h0LWNvbG9yOiAkaGVhdnktY29uY3JldGUtMTAwO1xuJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjogJG5hdmJhci1saWdodC1jb2xvcjtcbiRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yOiAkbmF2YmFyLWxpZ2h0LWNvbG9yO1xuXG4vLyBCdXR0b25zICsgRm9ybXNcbi8vXG4vLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cblxuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XG5cbi8vIEZvcm1zXG5cbiRsYWJlbC1tYXJnaW4tYm90dG9tOiBibCgxKTtcbiRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206IGJsKDIpO1xuJGZvcm0tdGV4dC1tYXJnaW4tdG9wOiBibCgxKTtcblxuLy8gVE9ETzogV0lQIC8gcmV2aWV3XG4kaW5wdXQtaGVpZ2h0OiBibCgzKTtcbiRpbnB1dC1oZWlnaHQtc206ICRpbnB1dC1oZWlnaHQ7XG4kaW5wdXQtaGVpZ2h0LWxnOiAkaW5wdXQtaGVpZ2h0O1xuXG4kaW5wdXQtZm9udC1zaXplOiAkYmFzZS1mb250LXNpemU7XG5cbiRpbnB1dC1iZzogdHJhbnNwYXJlbnQ7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICRpbnB1dC1iZztcbiRpbnB1dC1kaXNhYmxlZC1jb2xvcjogJGRpc2FibGVkOyAvLyBjdXN0b20gLSBubyBib290c3RyYXAgc3RhbmRhcmRcblxuJGlucHV0LWNvbG9yOiAkYm9keS1jb2xvcjtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRuZXV0cmFsLWxpZ2h0O1xuJGlucHV0LWJvcmRlci13aWR0aDogJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg7XG4kaW5wdXQtYm94LXNoYWRvdzogbm9uZTtcblxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICRib3JkZXItcmFkaXVzLWxnO1xuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICRib3JkZXItcmFkaXVzLXNtO1xuXG4kaW5wdXQtZm9jdXMtYmc6ICRpbnB1dC1iZztcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICRzZWNvbmRhcnk7XG4kaW5wdXQtZm9jdXMtY29sb3I6ICRpbnB1dC1jb2xvcjtcbiRpbnB1dC1mb2N1cy13aWR0aDogMDtcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xuXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICRuZXV0cmFsLWRhcms7XG4kaW5wdXQtcGxhY2Vob2xkZXItZGlzYWJsZWQtY29sb3I6ICRkaXNhYmxlZDsgLy8gY3VzdG9tIC0gbm8gYm9vdHN0cmFwIHN0YW5kYXJkXG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAkYm9keS1jb2xvcjtcblxuLy8gRm9ybSBWYWxpZGF0aW9uXG4vLyBUT0RPOiBXSVBcbiRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yOiAkc3VjY2VzcztcbiRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I6ICRkYXJrO1xuJGZvcm0tZmVlZGJhY2staW52YWxpZC1tZXNzYWdlLWNvbG9yOiAkZGFuZ2VyOyAvLyBjdXN0b20gLSBubyBib290c3RyYXAgc3RhbmRhcmRcblxuJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6ICgpO1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICAndmFsaWQnOiAoXG4gICAgICAnY29sb3InOiAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvclxuICAgICksXG4gICAgJ2ludmFsaWQnOiAoXG4gICAgICAnY29sb3InOiAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yXG4gICAgKVxuICApLFxuICAkZm9ybS12YWxpZGF0aW9uLXN0YXRlc1xuKTtcblxuLyoqKioqKioqKioqKioqKioqKioqXG4gKiBDdXN0b20gZm9ybXNcbiAqL1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemU6IDEuMTI1cmVtOyAvLzE4cHg7XG4kY3VzdG9tLWNvbnRyb2wtZ3V0dGVyOiAwLjMxMjVyZW07IC8vNXB4O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZzogdHJhbnNwYXJlbnQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci1jb2xvcjogJGRhcms7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtY29sb3I6ICRkaXNhYmxlZDsgLy8gY3VzdG9tIC0gbm8gYm9vdHN0cmFwIHN0YW5kYXJkXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWNoZWNrZWQtZGlzYWJsZWQ6IHN0ci1yZXBsYWNlKFxuICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWRpc2FibGVkLWNvbG9yfScgZD0nTTYuNTY0Ljc1bC0zLjU5IDMuNjEyLTEuNTM4LTEuNTVMMCA0LjI2IDIuOTc0IDcuMjUgOCAyLjE5M3onLyUzZSUzYy9zdmclM2VcIiksXG4gICcjJyxcbiAgJyUyMydcbikgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQtZGlzYWJsZWQ6IHN0ci1yZXBsYWNlKFxuICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4JyUzZSUzY2NpcmNsZSByPSczJyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1kaXNhYmxlZC1jb2xvcn0nLyUzZSUzYy9zdmclM2VcIiksXG4gICcjJyxcbiAgJyUyMydcbikgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtYmc6IHRyYW5zcGFyZW50O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yOiAkZGFyaztcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZzogdHJhbnNwYXJlbnQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkZGFyaztcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3gtc2hhZG93OiBub25lO1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICRkaXNhYmxlZDsgLy8gY3VzdG9tIC0gbm8gYm9vdHN0cmFwIHN0YW5kYXJkXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZzogdHJhbnNwYXJlbnQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRkYXJrO1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm94LXNoYWRvdzogbm9uZTtcbiRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogJGRpc2FibGVkO1xuLypcbiAqIEN1c3RvbSBmb3JtcyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gQnV0dG9uc1xuLy8gVE9ETzogV0lQIC8gcmV2aWV3XG4kYnRuLXBhZGRpbmcteDogMjBweDtcbiRidG4tYm9yZGVyLXdpZHRoOiAwO1xuJGJ0bi1ibG9jay1zcGFjaW5nLXk6ICRiYXNlbGluZS1ncmlkLWhlaWdodDtcblxuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAxO1xuJGJ0bi1ib3JkZXItd2lkdGg6IDFweDtcbiRidG4tZm9udC1mYW1pbHk6IG1hcC1nZXQoJGZvbnRzLCAnaGlsdGktYm9sZCcpO1xuJGJ0bi1saW5rLWZvbnQtZmFtaWx5OiBtYXAtZ2V0KCRmb250cywgJ2hpbHRpLXJvbWFuJyk7XG5cbiRidG4tZm9jdXMtd2lkdGg6IDA7XG4kYnRuLWJveC1zaGFkb3c6IG5vbmU7XG4kYnRuLWZvY3VzLWJveC1zaGFkb3c6IG5vbmU7XG4kYnRuLWFjdGl2ZS1ib3gtc2hhZG93OiBub25lO1xuXG4vLyBCdXR0b24gb3V0bGluZVxuJGJ0bi1vdXRsaW5lLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuJGJ0bi1vdXRsaW5lLWJvcmRlci1yYWRpdXM6IDZweDtcbiRidG4tb3V0bGluZS1ib3gtc2hhZG93OiAwIDdweCA4cHggMCAkYmxhY2stNjtcbiRidG4tb3V0bGluZS1ob3Zlci1ib3gtc2hhZG93OiAwIDNweCAzcHggMCAkYmxhY2stNjtcbiRidG4tb3V0bGluZS1mb2N1cy1ib3gtc2hhZG93OiAkYnRuLW91dGxpbmUtYm94LXNoYWRvdztcblxuLy8gQnV0dG9uIGxpbmtzXG4kbGluay1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiBub25lO1xuXG4vKioqKioqKioqKioqKioqKioqKipcbiAqIExheW91dCBoZWxwZXIgY2xhc3Nlc1xuICogRG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9jb25mbHVlbmNlLmhpbHRpLmNvbS9kaXNwbGF5L3BzaGlsdGkvTGF5b3V0XG4gKi9cblxuJGhkbXMtaGVscGVyLWNvbnRhaW5lci1jb2xvcjogKFxuICBvdXRsaW5lOiAycHggZG91YmxlICMwMDA3ODgsXG4gIGJhY2tncm91bmQ6IHJnYmEoIzAwOTBmZiwgMC4yKSxcbiAgY2xhc3NJbmRpY2F0b3I6ICMwMDkwZmYsXG4gIGNvbG9yOiAjMDAwNzg4XG4pO1xuXG4kaGRtcy1oZWxwZXItcm93LWNvbG9yOiAoXG4gIG91dGxpbmU6IDJweCBkYXNoZWQgIzI4NjEwMCxcbiAgYmFja2dyb3VuZDogcmdiYSgjMDBhYjAwLCAwLjIpLFxuICBjbGFzc0luZGljYXRvcjogIzAwYWIwMCxcbiAgY29sb3I6ICMyODYxMDBcbik7XG5cbiRoZG1zLWhlbHBlci1jb2x1bW5zLWNvbG9yOiAoXG4gIG91dGxpbmU6IDJweCBkb3R0ZWQgIzY2M2MwMCxcbiAgYmFja2dyb3VuZDogcmdiYSgjZGRkNTAwLCAwLjIpLFxuICBjbGFzc0luZGljYXRvcjogI2RkZDUwMCxcbiAgY29sb3I6ICM2NjNjMDBcbik7XG5cbiRoZG1zLWhlbHBlci1ib3gtZ3JvdXAtY29sb3I6IChcbiAgb3V0bGluZTogMnB4IGRhc2hlZCAjZmYwMDAwLFxuICBiYWNrZ3JvdW5kOiByZ2JhKCNmZjAwMDAsIDAuMiksXG4gIGNsYXNzSW5kaWNhdG9yOiAjZmYwMDAwLFxuICBjb2xvcjogI2ZmMDAwMFxuKTtcblxuJGhkbXMtaGVscGVyLWJveC1jb2xvcjogKFxuICBvdXRsaW5lOiAycHggZGFzaGVkICNmZjA1ZmYsXG4gIGJhY2tncm91bmQ6IHJnYmEoI2ZmMDVmZiwgMC4yKSxcbiAgY2xhc3NJbmRpY2F0b3I6ICNmZjA1ZmYsXG4gIGNvbG9yOiAjZmYwNWZmXG4pO1xuXG4vKlxuICogTGF5b3V0IGhlbHBlciBjbGFzc2VzIGVuZFxuICoqKioqKioqKioqKioqKioqKioqL1xuIiwiLypcbiAqIGdsb2JhbCBtaXhpbiBkZWZpbml0aW9uc1xuICogVE9ETzogZmluaXNoIG9yIHJldmlldyBpbXBsZW1lbnRhdGlvbiAvIHJlbW92ZSBpZiBub3QgbmVlZGVkXG4gKi9cblxuQG1peGluIHV0aWxpdHktZGVmaW5pdGlvbigkY2xhc3NGcmFnbWVudCwgJGtleSwgJHZhbHVlLCAkZm9yQWxsQnJlYWtwb2ludHM6IGZhbHNlKSB7XG4gIEBpZiAoJGtleSBhbmQgJHZhbHVlKSB7XG4gICAgJSN7JGNsYXNzRnJhZ21lbnR9IHtcbiAgICAgICN7JGtleX06ICN7JHZhbHVlfTtcbiAgICB9XG5cbiAgICAuI3skY2xhc3NGcmFnbWVudH0ge1xuICAgICAgI3ska2V5fTogI3skdmFsdWV9O1xuICAgIH1cblxuICAgIEBpZiAkZm9yQWxsQnJlYWtwb2ludHMge1xuICAgICAgQGVhY2ggJGJwIGluICRicmVha3BvaW50LWtleXMge1xuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KCRicCkge1xuICAgICAgICAgIC4jeyRicH0tI3skY2xhc3NGcmFnbWVudH0ge1xuICAgICAgICAgICAgI3ska2V5fTogI3skdmFsdWV9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQHdhcm4gXCJObyB2YWx1ZSBmb3IgdXRpbGl0eS1kZWZpbml0aW9uIGdpdmVuXCI7XG4gIH1cbn1cbiIsIi8qXG4gKiB2YXJpYWJsZXMgZGVmaW5pdGlvblxuICovXG5cbi8qKipcbiAqIG9yaWdpbmFsIGltcG9ydFxuICovXG5cbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xuXG4vKioqXG4gKiBQYXRjaCAvIGV4dGVuZFxuICovXG4iLCIvKlxuICogbWl4aW5zIGRlZmluaXRpb25cbiAqL1xuXG4vKioqXG4gKiBvcmlnaW5hbCBpbXBvcnRcbiAqL1xuXG5AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvX21peGlucy5zY3NzJztcblxuLyoqKlxuICogUGF0Y2ggLyBleHRlbmRcbiAqL1xuIiwiLy8gUExVTUJFUiAtIEVhc3kgYmFzZWxpbmUgZ3JpZHMgd2l0aCBTQVNTXG4vLyBodHRwczovL2phbW9uc2VycmFuby5naXRodWIuaW8vcGx1bWJlci1zYXNzXG4vLyBDb3B5cmlnaHQgMjAxNiBWaWt0b3IgSG9udGlcbi8vIE1JVCBMaWNlbnNlXG5cbi8qKlxuICogSElMVEkgc3BlY2lmaWMgbW9kaWZpY2F0aW9uczpcbiAqICRib3JkZXIgcHJvcGVydHk6IGlmIHBsdW1iZXIgYXBwbGllZCBvbiBlbGVtZW50cyB3aXRoIGJvcmRlcnMsIHRoZXNlIG5lZWQgdG8gYmUgc3VidHJhY3RlZCBmcm9tIHBhZGRpbmdcbiAqL1xuXG4vLyAqKiogREVGQVVMVFMgKioqXG4vLyBEbyBub3QgY2hhbmdlIGl0IGhlcmUsIHVzZSB0aGUgcGx1bWJlci1zZXQtZGVmYXVsdHMgbWl4aW4gaW5zdGVhZCFcbiQtcGx1bWJlci1kZWZhdWx0czogKFxuICBmb250LXNpemU6IDIsXG4gIGxpbmUtaGVpZ2h0OiAzLFxuICBsZWFkaW5nLXRvcDogMCxcbiAgbGVhZGluZy1ib3R0b206IDAsXG4gIGdyaWQtaGVpZ2h0OiAxcmVtLFxuICBiYXNlbGluZTogbnVsbCxcbiAgdXNlLWJhc2VsaW5lLW9yaWdpbjogZmFsc2UsXG4gIGJvcmRlcjogMFxuKSAhZGVmYXVsdDtcblxuLy8gTWVyZ2UgcHJvdmlkZWQgc2V0dGluZ3MgaW50byB0aGUgZGVmYXVsdHMgbWFwXG5AbWl4aW4gcGx1bWJlci1zZXQtZGVmYXVsdHMoJGRlZmF1bHRzLi4uKSB7XG4gICQtcGx1bWJlci1kZWZhdWx0czogbWFwLW1lcmdlKCQtcGx1bWJlci1kZWZhdWx0cywga2V5d29yZHMoJGRlZmF1bHRzKSkgIWdsb2JhbDtcbn1cblxuLy8gR2V0IGEgZGVmYXVsdCB2YWx1ZVxuQGZ1bmN0aW9uIC1wbHVtYmVyLWdldC1kZWZhdWx0KCRrZXkpIHtcbiAgQHJldHVybiBtYXAtZ2V0KCQtcGx1bWJlci1kZWZhdWx0cywgJGtleSk7XG59XG5cbi8vIENoZWNrIGlmIGEgdmFsdWUgaXMgYSBub24tbmVnYXRpdmUgaW50ZWdlclxuQGZ1bmN0aW9uIC1wbHVtYmVyLWlzLWludGVnZXIoJHZhbHVlKSB7XG4gIEByZXR1cm4gKHVuaXRsZXNzKCR2YWx1ZSkgYW5kICR2YWx1ZSA9PSByb3VuZCgkdmFsdWUpKTtcbn1cblxuLy8gUm91bmQgdmFsdWUgdG8gdGhlIG5lYXJlc3QgcXVhcnRlciBwaXhlbFxuLy8gVGhpcyBwcm92aWRlcyByZWFzb25hYmxlIHByZWNpc2lvbiBhbmQgcHJldmVudHMgZ3JpZCBjcmVlcCAoYnkgZnJhY3Rpb25zIGFkZGluZyB1cCkgaW4gbW9zdCBicm93c2Vyc1xuQGZ1bmN0aW9uIC1wbHVtYmVyLXJvdW5kKCR2YWx1ZSkge1xuICBAcmV0dXJuIHJvdW5kKCR2YWx1ZSAqIDQpIC8gNDtcbn1cblxuQGZ1bmN0aW9uIHBsdW1iZXItY2FsYyhcbiAgJGZvbnQtc2l6ZTogbnVsbCxcbiAgJGxpbmUtaGVpZ2h0OiBudWxsLFxuICAkbGVhZGluZy10b3A6IG51bGwsXG4gICRsZWFkaW5nLWJvdHRvbTogbnVsbCxcbiAgJGdyaWQtaGVpZ2h0OiBudWxsLFxuICAkYmFzZWxpbmU6IG51bGwsXG4gICR1c2UtYmFzZWxpbmUtb3JpZ2luOiBudWxsLFxuICAkYm9yZGVyOiBudWxsXG4pIHtcbiAgLy8gKioqIFZBTElEQVRFIFBBUkFNRVRFUlMgKioqXG4gIC8vIGZvbnQtc2l6ZVxuICBAaWYgbm90ICRmb250LXNpemUge1xuICAgICRmb250LXNpemU6IC1wbHVtYmVyLWdldC1kZWZhdWx0KGZvbnQtc2l6ZSk7XG4gIH1cbiAgQGlmIG5vdCB1bml0bGVzcygkZm9udC1zaXplKSBvciAkZm9udC1zaXplIDw9IDAge1xuICAgIEBlcnJvciAnJGZvbnQtc2l6ZSBwYXJhbWV0ZXIgbXVzdCBiZSBhIHBvc2l0aXZlIHVuaXRsZXNzIG51bWJlciwgZ290ICN7JGZvbnQtc2l6ZX0gaW5zdGVhZCc7XG4gIH1cblxuICAvLyBsaW5lLWhlaWdodFxuICBAaWYgbm90ICRsaW5lLWhlaWdodCB7XG4gICAgJGxpbmUtaGVpZ2h0OiAtcGx1bWJlci1nZXQtZGVmYXVsdChsaW5lLWhlaWdodCk7XG4gIH1cbiAgQGlmIG5vdCB1bml0bGVzcygkbGluZS1oZWlnaHQpIG9yICRsaW5lLWhlaWdodCAhPSByb3VuZCgkbGluZS1oZWlnaHQpIG9yICRsaW5lLWhlaWdodCA8IDEge1xuICAgIEBlcnJvciAnJGxpbmUtaGVpZ2h0IHBhcmFtZXRlciBtdXN0IGJlIGEgcG9zaXRpdmUgdW5pdGxlc3MgaW50ZWdlciwgZ290ICN7JGxpbmUtaGVpZ2h0fSBpbnN0ZWFkJztcbiAgfVxuXG4gIC8vIGxlYWRpbmctdG9wXG4gIEBpZiBub3QgJGxlYWRpbmctdG9wIHtcbiAgICAkbGVhZGluZy10b3A6IC1wbHVtYmVyLWdldC1kZWZhdWx0KGxlYWRpbmctdG9wKTtcbiAgfVxuICBAaWYgbm90IC1wbHVtYmVyLWlzLWludGVnZXIoJGxlYWRpbmctdG9wKSB7XG4gICAgQGVycm9yICckbGVhZGluZy10b3AgcGFyYW1ldGVyIG11c3QgYmUgYSBub24tbmVnYXRpdmUgaW50ZWdlciwgZ290ICN7JGxlYWRpbmctdG9wfSBpbnN0ZWFkLic7XG4gIH1cblxuICAvLyBsZWFkaW5nLWJvdHRvbVxuICBAaWYgbm90ICRsZWFkaW5nLWJvdHRvbSB7XG4gICAgJGxlYWRpbmctYm90dG9tOiAtcGx1bWJlci1nZXQtZGVmYXVsdChsZWFkaW5nLWJvdHRvbSk7XG4gIH1cbiAgQGlmIG5vdCAtcGx1bWJlci1pcy1pbnRlZ2VyKCRsZWFkaW5nLWJvdHRvbSkge1xuICAgIEBlcnJvciAnJGxlYWRpbmctYm90dG9tIHBhcmFtZXRlciBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIGludGVnZXIsIGdvdCAjeyRsZWFkaW5nLWJvdHRvbX0gaW5zdGVhZCc7XG4gIH1cblxuICAvLyBncmlkLWhlaWdodFxuICBAaWYgbm90ICRncmlkLWhlaWdodCB7XG4gICAgJGdyaWQtaGVpZ2h0OiAtcGx1bWJlci1nZXQtZGVmYXVsdChncmlkLWhlaWdodCk7XG4gIH1cbiAgQGlmIHVuaXRsZXNzKCRncmlkLWhlaWdodCkgb3IgJGdyaWQtaGVpZ2h0IDwgMCB7XG4gICAgQGVycm9yICckZ3JpZC1oZWlnaHQgcGFyYW1ldGVyIG11c3QgYmUgYSBwb3NpdGl2ZSB1bml0LCBnb3QgI3skZ3JpZC1oZWlnaHR9IGluc3RlYWQnO1xuICB9XG5cbiAgLy8gYmFzZWxpbmVcbiAgQGlmIG5vdCAkYmFzZWxpbmUge1xuICAgICRiYXNlbGluZTogLXBsdW1iZXItZ2V0LWRlZmF1bHQoYmFzZWxpbmUpO1xuICB9XG4gIEBpZiBub3QgJGJhc2VsaW5lIHtcbiAgICBAZXJyb3IgJyRiYXNlbGluZSBtdXN0IGJlIHBhc3NlZCBhcyBhIHBhcmFtZXRlciBvciBkZWZpbmVkIGluIGRlZmF1bHRzJztcbiAgfSBAZWxzZSBpZiBub3QgKHVuaXRsZXNzKCRiYXNlbGluZSkgYW5kICRiYXNlbGluZSA+PSAwIGFuZCAkYmFzZWxpbmUgPCAxKSB7XG4gICAgQGVycm9yICckYmFzZWxpbmUgcGFyYW1ldGVyIG11c3QgYmUgYSB1bml0bGVzcyBmcmFjdGlvbiBiZXR3ZWVuIDAgYW5kIDEsIGdvdCAjeyRiYXNlbGluZX0gaW5zdGVhZCc7XG4gIH1cblxuICAvLyB1c2UtYmFzZWxpbmUtb3JpZ2luXG4gIEBpZiBub3QgJHVzZS1iYXNlbGluZS1vcmlnaW4ge1xuICAgICR1c2UtYmFzZWxpbmUtb3JpZ2luOiAtcGx1bWJlci1nZXQtZGVmYXVsdCh1c2UtYmFzZWxpbmUtb3JpZ2luKTtcbiAgfVxuICBAaWYgdHlwZS1vZigkdXNlLWJhc2VsaW5lLW9yaWdpbikgIT0gYm9vbCB7XG4gICAgQGVycm9yICckdXNlLWJhc2VsaW5lLW9yaWdpbiBwYXJhbWV0ZXIgbXVzdCBiZSBCb29sZWFuLCBnb3QgI3skdXNlLWJhc2VsaW5lLW9yaWdpbn0gaW5zdGVhZCc7XG4gIH1cblxuICAvLyBib3JkZXJcbiAgQGlmIG5vdCAkYm9yZGVyIHtcbiAgICAkYm9yZGVyOiAtcGx1bWJlci1nZXQtZGVmYXVsdChib3JkZXIpO1xuICB9XG4gIEBpZiBub3QgJGJvcmRlciB7XG4gICAgQGVycm9yICckYm9yZGVyIG11c3QgYmUgcGFzc2VkIGFzIGEgcGFyYW1ldGVyIG9yIGRlZmluZWQgaW4gZGVmYXVsdHMnO1xuICB9XG5cbiAgLy8gKioqIENBTENVTEFURSBCQVNFTElORSBDT1JSRUNUSU9OICoqKlxuICAvLyB0aGUgZGlzdGFuY2Ugb2YgdGhlIG9yaWdpbmFsIGJhc2VsaW5lIGZyb20gdGhlIGJvdHRvbVxuICAkYmFzZWxpbmUtZnJvbS1ib3R0b206ICgkbGluZS1oZWlnaHQgLSAkZm9udC1zaXplKSAvIDIgKyAoJGZvbnQtc2l6ZSAqICRiYXNlbGluZSk7XG4gIC8vIHRoZSBjb3JyZWN0ZWQgYmFzZWxpbmUgd2lsbCBiZSBvbiB0aGUgbmVhcmVzdCBncmlkbGluZVxuICAkY29ycmVjdGVkLWJhc2VsaW5lOiByb3VuZCgkYmFzZWxpbmUtZnJvbS1ib3R0b20pO1xuICAvLyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBvcmlnaW5hbCBhbmQgdGhlIGNvcnJlY3RlZCBiYXNlbGluZVxuICAkYmFzZWxpbmUtZGlmZmVyZW5jZTogJGNvcnJlY3RlZC1iYXNlbGluZSAtICRiYXNlbGluZS1mcm9tLWJvdHRvbTtcblxuICAvLyBpZiBiYXNlbGluZSBvcmlnaW4gaXMgdXNlZCBmb3IgbGVhZGluZ3Mgc3Vic3RyYWN0IHRoZSBkaXN0YW5jZSBvZiB0aGUgYmFzZWxpbmUgZnJvbSB0aGUgZWRnZXNcbiAgQGlmICR1c2UtYmFzZWxpbmUtb3JpZ2luID09IHRydWUge1xuICAgICRsZWFkaW5nLXRvcDogJGxlYWRpbmctdG9wIC0gKCRsaW5lLWhlaWdodCAtICRjb3JyZWN0ZWQtYmFzZWxpbmUpO1xuICAgICRsZWFkaW5nLWJvdHRvbTogJGxlYWRpbmctYm90dG9tIC0gJGNvcnJlY3RlZC1iYXNlbGluZTtcbiAgfVxuXG4gIC8vICoqKiBDQUxDVUxBVEUgRk9OVCBTSVpFIEFORCBMSU5FIEhFSUdIVFxuICAkZm9udC1zaXplOiAkZm9udC1zaXplICogJGdyaWQtaGVpZ2h0O1xuICAkbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodCAqICRncmlkLWhlaWdodDtcblxuICAvLyAqKiogQ0FMQ1VMQVRFIE1BUkdJTlMgQU5EIFBBRERJTkdTICoqKlxuICAkcGFkZGluZy10b3A6IG51bGw7XG4gICRtYXJnaW4tdG9wOiBudWxsO1xuICAkbWFyZ2luLWJvdHRvbTogbnVsbDtcbiAgJHBhZGRpbmctYm90dG9tOiBudWxsO1xuXG4gIEBpZiAkYmFzZWxpbmUtZGlmZmVyZW5jZSA8IDAge1xuICAgIC8vIGFkZCB0b3AgbGVhZGluZ1xuICAgICRtYXJnaW4tdG9wOiAkbGVhZGluZy10b3AgKiAkZ3JpZC1oZWlnaHQ7XG4gICAgLy8gcHVzaCB0aGUgYmFzZWxpbmUgZG93biB0byB0aGUgbmV4dCBncmlkbGluZVxuICAgICRwYWRkaW5nLXRvcDogLSRiYXNlbGluZS1kaWZmZXJlbmNlICogJGdyaWQtaGVpZ2h0IC0gJGJvcmRlcjtcbiAgICAvLyBhZGQgdGhlIHJlbWFpbmluZyBkaXN0YW5jZSB0byByZWFjaCB0aGUgbmV4dCBncmlkbGluZVxuICAgICRwYWRkaW5nLWJvdHRvbTogKDEgKyAkYmFzZWxpbmUtZGlmZmVyZW5jZSkgKiAkZ3JpZC1oZWlnaHQgLSAkYm9yZGVyO1xuICAgIC8vIGFkZCBib3R0b20gbGVhZGluZyBhbmQgcmVtb3ZlIHRoZSAxIGV4Y2VzcyBncmlkIGhlaWdodCB0aGF0IGNvbWVzIGZyb20gcHVzaGluZyBkb3duXG4gICAgJG1hcmdpbi1ib3R0b206ICgkbGVhZGluZy1ib3R0b20gLSAxKSAqICRncmlkLWhlaWdodDtcbiAgfSBAZWxzZSB7XG4gICAgLy8gYWRkIHRvcCBsZWFkaW5nIGFuZCByZW1vdmUgdGhlIDEgZXhjZXNzIGdyaWQgaGVpZ2h0IHRoYXQgY29tZXMgZnJvbSBwdWxsaW5nIHVwXG4gICAgJG1hcmdpbi10b3A6ICgkbGVhZGluZy10b3AgLSAxKSAqICRncmlkLWhlaWdodDtcbiAgICAvLyBwdWxsIHRoZSBiYXNlbGluZSB1cCB0byB0aGUgcHJldmlvdXMgZ3JpZGxpbmVcbiAgICAkcGFkZGluZy10b3A6ICgxIC0gJGJhc2VsaW5lLWRpZmZlcmVuY2UpICogJGdyaWQtaGVpZ2h0IC0gJGJvcmRlcjtcbiAgICAvLyBhZGQgdGhlIHJlbWFpbmluZyBkaXN0YW5jZSB0byByZWFjaCB0aGUgbmV4dCBncmlkbGluZVxuICAgICRwYWRkaW5nLWJvdHRvbTogJGJhc2VsaW5lLWRpZmZlcmVuY2UgKiAkZ3JpZC1oZWlnaHQgLSAkYm9yZGVyO1xuICAgIC8vIGFkZCBib3R0b20gbGVhZGluZ1xuICAgICRtYXJnaW4tYm90dG9tOiAkbGVhZGluZy1ib3R0b20gKiAkZ3JpZC1oZWlnaHQ7XG4gIH1cblxuICAvLyByb3VuZCBwaXhlbCB2YWx1ZXMgdG8gZGVjcmVhc2UgYnJvd3NlciBpbmNvbnNpc3RlbmNpZXNcbiAgQGlmIHVuaXQoJGdyaWQtaGVpZ2h0KSA9PSAncHgnIHtcbiAgICAkbGluZS1oZWlnaHQ6IC1wbHVtYmVyLXJvdW5kKCRsaW5lLWhlaWdodCk7XG4gICAgJG1hcmdpbi10b3A6IC1wbHVtYmVyLXJvdW5kKCRtYXJnaW4tdG9wKTtcbiAgICAkcGFkZGluZy10b3A6IC1wbHVtYmVyLXJvdW5kKCRwYWRkaW5nLXRvcCk7XG4gICAgJHBhZGRpbmctYm90dG9tOiAtcGx1bWJlci1yb3VuZCgkcGFkZGluZy1ib3R0b20pO1xuICAgICRtYXJnaW4tYm90dG9tOiAtcGx1bWJlci1yb3VuZCgkbWFyZ2luLWJvdHRvbSk7XG4gIH1cblxuICAvLyAqKiogUFJPUEVSVFkgT1VUUFVUICoqKlxuICBAcmV0dXJuIChcbiAgICBmb250LXNpemU6ICRmb250LXNpemUsXG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodCxcbiAgICBtYXJnaW4tdG9wOiAkbWFyZ2luLXRvcCxcbiAgICBwYWRkaW5nLXRvcDogJHBhZGRpbmctdG9wLFxuICAgIHBhZGRpbmctYm90dG9tOiAkcGFkZGluZy1ib3R0b20sXG4gICAgbWFyZ2luLWJvdHRvbTogJG1hcmdpbi1ib3R0b21cbiAgKTtcbn1cblxuQG1peGluIHBsdW1iZXIoXG4gICRmb250LXNpemU6IG51bGwsXG4gICRsaW5lLWhlaWdodDogbnVsbCxcbiAgJGxlYWRpbmctdG9wOiBudWxsLFxuICAkbGVhZGluZy1ib3R0b206IG51bGwsXG4gICRncmlkLWhlaWdodDogbnVsbCxcbiAgJGJhc2VsaW5lOiBudWxsLFxuICAkdXNlLWJhc2VsaW5lLW9yaWdpbjogbnVsbCxcbiAgJGJvcmRlcjogbnVsbFxuKSB7XG4gICRwbHVtYmVyLXJlc3VsdDogcGx1bWJlci1jYWxjKFxuICAgICRmb250LXNpemUsXG4gICAgJGxpbmUtaGVpZ2h0LFxuICAgICRsZWFkaW5nLXRvcCxcbiAgICAkbGVhZGluZy1ib3R0b20sXG4gICAgJGdyaWQtaGVpZ2h0LFxuICAgICRiYXNlbGluZSxcbiAgICAkdXNlLWJhc2VsaW5lLW9yaWdpbixcbiAgICAkYm9yZGVyXG4gICk7XG5cbiAgLy8gKioqIENTUyBPVVRQVVQgKioqXG4gIGZvbnQtc2l6ZTogbWFwLWdldCgkcGx1bWJlci1yZXN1bHQsIGZvbnQtc2l6ZSk7XG4gIGxpbmUtaGVpZ2h0OiBtYXAtZ2V0KCRwbHVtYmVyLXJlc3VsdCwgbGluZS1oZWlnaHQpO1xuICBtYXJnaW4tdG9wOiBtYXAtZ2V0KCRwbHVtYmVyLXJlc3VsdCwgbWFyZ2luLXRvcCk7XG4gIHBhZGRpbmctdG9wOiBtYXAtZ2V0KCRwbHVtYmVyLXJlc3VsdCwgcGFkZGluZy10b3ApO1xuICBwYWRkaW5nLWJvdHRvbTogbWFwLWdldCgkcGx1bWJlci1yZXN1bHQsIHBhZGRpbmctYm90dG9tKTtcbiAgbWFyZ2luLWJvdHRvbTogbWFwLWdldCgkcGx1bWJlci1yZXN1bHQsIG1hcmdpbi1ib3R0b20pO1xufVxuIiwiLypcbiAqIFBsdW1iZXIgYmFzZWxpbmUgZGVmaW5pdGlvbiBmaWxlXG4gKi9cblxuQGluY2x1ZGUgcGx1bWJlci1zZXQtZGVmYXVsdHMoXG4gICRmb250LXNpemU6IHJlbW92ZS11bml0KCRiYXNlLWZvbnQtc2l6ZSkgLyByZW1vdmUtdW5pdCgkYmFzZWxpbmUtZ3JpZC1oZWlnaHQpLFxuICAkYmFzZWxpbmU6ICRiYXNlbGluZS1oaWx0aS1yb21hbixcbiAgJGdyaWQtaGVpZ2h0OiAkYmFzZWxpbmUtZ3JpZC1oZWlnaHQsXG4gICRsZWFkaW5nLWJvdHRvbTogMixcbiAgJGxpbmUtaGVpZ2h0OiAyXG4pO1xuXG5AaWYgKCRpbmNsdWRlQmFzZWxpbmUpIHtcbiAgLy8gUGx1bWJlclxuICAlcGx1bWJlci1nZW5lcmljIHtcbiAgICBAaW5jbHVkZSBwbHVtYmVyKCk7XG4gIH1cblxuICAlcGx1bWJlci1nZW5lcmljLWxlYWRpbmctMC0wIHtcbiAgICBAaW5jbHVkZSBwbHVtYmVyKCRsZWFkaW5nLXRvcDogMCwgJGxlYWRpbmctYm90dG9tOiAwKTtcbiAgfVxuXG4gICVwbHVtYmVyLWdlbmVyaWMtbGVhZGluZy0xLTAge1xuICAgIEBpbmNsdWRlIHBsdW1iZXIoJGxlYWRpbmctdG9wOiAxLCAkbGVhZGluZy1ib3R0b206IDApO1xuICB9XG5cbiAgJXBsdW1iZXItZ2VuZXJpYy1sZWFkaW5nLTEtMiB7XG4gICAgQGluY2x1ZGUgcGx1bWJlcigkbGVhZGluZy10b3A6IDEsICRsZWFkaW5nLWJvdHRvbTogMik7XG4gIH1cblxuICAlcGx1bWJlci1nZW5lcmljLWxlYWRpbmctMS0wLWJvcmRlciB7XG4gICAgQGluY2x1ZGUgcGx1bWJlcigkbGVhZGluZy10b3A6IDEsICRsZWFkaW5nLWJvdHRvbTogMCwgJGJvcmRlcjogJGJvcmRlci13aWR0aCk7XG4gIH1cblxuICAlcGx1bWJlci1nZW5lcmljLWJvbGQge1xuICAgIEBpbmNsdWRlIHBsdW1iZXIoJGJhc2VsaW5lOiAkYmFzZWxpbmUtaGlsdGktYm9sZCk7XG4gIH1cblxuICAlcGx1bWJlci1saSB7XG4gICAgQGluY2x1ZGUgcGx1bWJlcigkbGVhZGluZy1ib3R0b206IDApO1xuICB9XG5cbiAgJXBsdW1iZXItdGV4dC1zbWFsbCB7XG4gICAgQGluY2x1ZGUgcGx1bWJlcigkZm9udC1zaXplOiAxMyAvIHJlbW92ZS11bml0KCRiYXNlbGluZS1ncmlkLWhlaWdodCksICRsZWFkaW5nLWJvdHRvbTogMCk7XG4gIH1cblxuICAlcGx1bWJlci10ZXh0LXNtYWxsLWJvbGQge1xuICAgIEBpbmNsdWRlIHBsdW1iZXIoXG4gICAgICAkZm9udC1zaXplOiAxMyAvIHJlbW92ZS11bml0KCRiYXNlbGluZS1ncmlkLWhlaWdodCksXG4gICAgICAkbGVhZGluZy1ib3R0b206IDAsXG4gICAgICAkYmFzZWxpbmU6ICRiYXNlbGluZS1oaWx0aS1ib2xkXG4gICAgKTtcbiAgfVxuXG4gICVwbHVtYmVyLWhlYWRpbmctbGFyZ2Uge1xuICAgIEBpbmNsdWRlIHBsdW1iZXIoJGZvbnQtc2l6ZTogNCwgJGxpbmUtaGVpZ2h0OiA0KTtcbiAgfVxuXG4gICVwbHVtYmVyLWhlYWRpbmctbWVkaXVtIHtcbiAgICBAaW5jbHVkZSBwbHVtYmVyKCRmb250LXNpemU6IDIpO1xuICB9XG5cbiAgJXBsdW1iZXItaGVhZGluZy1zbWFsbCB7XG4gICAgQGluY2x1ZGUgcGx1bWJlcigkZm9udC1zaXplOiAxOCAvIHJlbW92ZS11bml0KCRiYXNlbGluZS1ncmlkLWhlaWdodCkpO1xuICB9XG5cbiAgJXBsdW1iZXItaGVhZGluZy1tZWRpdW0tYm9sZCB7XG4gICAgQGluY2x1ZGUgcGx1bWJlcigkYmFzZWxpbmU6ICRiYXNlbGluZS1oaWx0aS1ib2xkLCAkZm9udC1zaXplOiAyKTtcbiAgfVxuXG4gICVwbHVtYmVyLWN1c3RvbS1pbnB1dCB7XG4gICAgQGluY2x1ZGUgcGx1bWJlcigkbGVhZGluZy10b3A6IDEsICRsZWFkaW5nLWJvdHRvbTogMCk7XG4gIH1cblxuICAlcGx1bWJlci1idXR0b24tYm9yZGVyIHtcbiAgICBAaW5jbHVkZSBwbHVtYmVyKCRsZWFkaW5nLXRvcDogMiwgJGxlYWRpbmctYm90dG9tOiAyLCAkYm9yZGVyOiAkYm9yZGVyLXdpZHRoKTtcbiAgfVxufVxuXG4kcGx1bWJlci1jdXN0b20taW5wdXQtdmFsdWVzOiBwbHVtYmVyLWNhbGMoXG4gICRsZWFkaW5nLXRvcDogMSxcbiAgJGxlYWRpbmctYm90dG9tOiAwXG4pICFkZWZhdWx0O1xuIiwiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3N0eWxlc2hlZXRzL3VpLWNvcmUtY29tbW9uJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZmlsbDogY3VycmVudENvbG9yO1xuXG4gIC5zdmctaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGZpbGw6IGluaGVyaXQ7XG4gIH1cbn1cblxuOmhvc3QtY29udGV4dCgudWktY29yZS10ZXh0KSB7XG4gIC5zdmctaWNvbiB7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gIH1cblxuICAmOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuXG4gICY6bnRoLWNoaWxkKG4gKyAyKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxufVxuXG46aG9zdC1jb250ZXh0KC5idG4pIHtcbiAgJjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gICY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/svg-icon/svg-icon.component.ts":
/*!***************************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/svg-icon/svg-icon.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: SvgIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgIconComponent", function() { return SvgIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var SvgIconComponent = /** @class */ (function () {
    function SvgIconComponent() {
        this.classes = '';
        this.width = '16px';
    }
    SvgIconComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SvgIconComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SvgIconComponent.prototype, "classes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SvgIconComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SvgIconComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SvgIconComponent.prototype, "title", void 0);
    SvgIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-core-svg-icon',
            template: __webpack_require__(/*! ./svg-icon.component.html */ "../../libs/shared/ui-core/src/lib/svg-icon/svg-icon.component.html"),
            styles: [__webpack_require__(/*! ./svg-icon.component.scss */ "../../libs/shared/ui-core/src/lib/svg-icon/svg-icon.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SvgIconComponent);
    return SvgIconComponent;
}());



/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/svg-icon/svg-icon.module.ts":
/*!************************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/svg-icon/svg-icon.module.ts ***!
  \************************************************************************************************/
/*! exports provided: SvgIconModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgIconModule", function() { return SvgIconModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _svg_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg-icon.component */ "../../libs/shared/ui-core/src/lib/svg-icon/svg-icon.component.ts");




var SvgIconModule = /** @class */ (function () {
    function SvgIconModule() {
    }
    SvgIconModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_svg_icon_component__WEBPACK_IMPORTED_MODULE_3__["SvgIconComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_svg_icon_component__WEBPACK_IMPORTED_MODULE_3__["SvgIconComponent"]]
        })
    ], SvgIconModule);
    return SvgIconModule;
}());



/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/text/text.component.html":
/*!*********************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/text/text.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content select=\"[icon-before]\"></ng-content>\n<span [ngClass]=\"['ui-core-text-content']\">\n  <ng-content select=\"[content]\"></ng-content>\n</span>\n<ng-content select=\"[icon-after-1]\"></ng-content>\n<ng-content select=\"[icon-after-2]\"></ng-content>\n<ng-content select=\"[icon-after-3]\"></ng-content>\n"

/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/text/text.component.scss":
/*!*********************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/text/text.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * functions definition\n */\n/***\n * original import\n */\n/***\n * Patch / extend\n */\n/*\n * scss helper functions\n * TODO: finish or review implementation / remove if not needed\n */\n/**\n * returns a font value from the definition\n */\n/**\n * returns a color value from the definition\n */\n/**\n * returns a spacing value from the definition\n */\n/**\n * Remove the unit of a value\n */\n/**\n * tests value if integer\n */\n/**\n * retrieve multiple of baseline\n */\n/**\n * helper to return the calc function for baseline with border\n */\n/**\n * convert rem values to px based on default font size of 16px\n */\n/*\n * hdms variable definitions\n */\n/********************\n * Fonts definitions\n * Design spec: Definitions see https://fork.invisionapp.com/d/main#/console/17301588/358610542/preview\n * Documentation: https://confluence.hilti.com/display/pshilti/UI+library+documentation\n */\n/* Not used at the moment.\n$baseline-hilti-extended: 0.185;\n$baseline-hilti-heavy-extended: 0.185;\n$baseline-arial: 0.153320;\n$baseline-monospace: 0.162;\n*/\n/*\n * Color definitions end\n ********************/\n/********************\n * Color definitions\n * Design spec: Definitions see https://fork.invisionapp.com/d/main/#/console/17301588/358610505/preview\n * Documentation: https://confluence.hilti.com/display/pshilti/UI+library+documentation\n */\n/*\n * Color definitions end\n ********************/\n/********************\n * Grid system\n * Design spec:\n * Breakpoints: https://fork.invisionapp.com/d/main#/console/17301588/358610513/preview\n * Mobile: https://fork.invisionapp.com/d/main#/console/17301588/358610515/preview\n * Tablet: https://fork.invisionapp.com/d/main#/console/17301588/358610516/preview\n * Desktop+: https://fork.invisionapp.com/d/main#/console/17301588/358610517/preview\n * Documentation: https://confluence.hilti.com/display/pshilti/UI+library+documentation\n */\n/*\n * Grid system end\n ********************/\n/********************\n * Heights\n */\n/*\n * Heights end\n ********************/\n/********************\n * Sizing\n */\n/*\n * Sizing end\n ********************/\n/********************\n * Spacings\n * Design spec:\n * https://fork.invisionapp.com/d/main#/console/17301588/358610511/preview\n * https://fork.invisionapp.com/d/main#/console/17301588/358610510/preview\n * Documentation: https://confluence.hilti.com/display/pshilti/UI+library+documentation\n */\n/*\n * Spacings end\n ********************/\n/********************\n * Custom forms\n */\n/*\n * Custom forms end\n ********************/\n/********************\n * Layout helper classes\n * Documentation: https://confluence.hilti.com/display/pshilti/Layout\n */\n/*\n * Layout helper classes end\n ********************/\n/*\n * global mixin definitions\n * TODO: finish or review implementation / remove if not needed\n */\n/*\n * variables definition\n */\n/***\n * original import\n */\n/***\n * Patch / extend\n */\n/*\n * mixins definition\n */\n/***\n * original import\n */\n/***\n * Patch / extend\n */\n/**\n * HILTI specific modifications:\n * $border property: if plumber applied on elements with borders, these need to be subtracted from padding\n */\n/*\n * Plumber baseline definition file\n */\n:host {\n  font-size: 15px;\n  font-size: 0.9375rem;\n  line-height: 22px;\n  line-height: 1.375rem;\n  margin-top: -11px;\n  margin-top: -0.6875rem;\n  padding-top: 6px;\n  padding-top: 0.375rem;\n  padding-bottom: 5px;\n  padding-bottom: 0.3125rem;\n  margin-bottom: 0px;\n  margin-bottom: 0; }\n.has-bg:host {\n  font-size: 15px;\n  font-size: 0.9375rem;\n  line-height: 22px;\n  line-height: 1.375rem;\n  margin-top: 0px;\n  margin-top: 0;\n  padding-top: 6px;\n  padding-top: 0.375rem;\n  padding-bottom: 5px;\n  padding-bottom: 0.3125rem;\n  margin-bottom: 22px;\n  margin-bottom: 1.375rem; }\n:host {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between; }\n:host.has-bg {\n    padding-left: 10px;\n    padding-left: 0.625rem;\n    padding-right: 10px;\n    padding-right: 0.625rem;\n    color: #fff; }\n.ui-core-text-content {\n  display: block;\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWwvaG9sbmcvZGV2L2xheW91dC9oZG1zL2xpYnMvc2hhcmVkL3VpLWNvcmUvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2Z1bmN0aW9ucy5zY3NzIiwibGlicy9zaGFyZWQvdWktY29yZS9zcmMvbGliL3RleHQvdGV4dC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9tZWwvaG9sbmcvZGV2L2xheW91dC9oZG1zL2xpYnMvc2hhcmVkL3VpLWNvcmUvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9jdXN0b20vX2Z1bmN0aW9ucy5zY3NzIiwiL1VzZXJzL21lbC9ob2xuZy9kZXYvbGF5b3V0L2hkbXMvbGlicy9zaGFyZWQvdWktY29yZS9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL2N1c3RvbS9fdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvbWVsL2hvbG5nL2Rldi9sYXlvdXQvaGRtcy9saWJzL3NoYXJlZC91aS1jb3JlL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvY3VzdG9tL19taXhpbnMuc2NzcyIsIi9Vc2Vycy9tZWwvaG9sbmcvZGV2L2xheW91dC9oZG1zL2xpYnMvc2hhcmVkL3VpLWNvcmUvc3JjL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL21lbC9ob2xuZy9kZXYvbGF5b3V0L2hkbXMvbGlicy9zaGFyZWQvdWktY29yZS9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fbWl4aW5zLnNjc3MiLCIvVXNlcnMvbWVsL2hvbG5nL2Rldi9sYXlvdXQvaGRtcy9saWJzL3NoYXJlZC91aS1jb3JlL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvY3VzdG9tL19wbHVtYmVyLnNjc3MiLCIvVXNlcnMvbWVsL2hvbG5nL2Rldi9sYXlvdXQvaGRtcy9saWJzL3NoYXJlZC91aS1jb3JlL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvY3VzdG9tL19iYXNlbGluZS5zY3NzIiwiL1VzZXJzL21lbC9ob2xuZy9kZXYvbGF5b3V0L2hkbXMvbGlicy9zaGFyZWQvdWktY29yZS9zcmMvbGliL3RleHQvdGV4dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUNFRTtBREVGOztFQ0NFO0FES0Y7O0VDRkU7QUNSRjs7O0VEWUU7QUNQRjs7RURVRTtBQ0VGOztFRENFO0FDV0Y7O0VEUkU7QUNvQkY7O0VEakJFO0FDNEJGOztFRHpCRTtBQ2dDRjs7RUQ3QkU7QUN3Q0Y7O0VEckNFO0FDZ0RGOztFRDdDRTtBRXBDRjs7RUZ1Q0U7QUVoQ0Y7Ozs7RUZxQ0U7QUU1QkY7Ozs7O0NGa0NDO0FFSkQ7O3FCRk9xQjtBRUhyQjs7OztFRlFFO0FFMERGOztxQkZ2RHFCO0FFMkRyQjs7Ozs7Ozs7RUZsREU7QUUwRkY7O3FCRnZGcUI7QUUyRnJCOztFRnhGRTtBRStGRjs7cUJGNUZxQjtBRWdHckI7O0VGN0ZFO0FFeUdGOztxQkZ0R3FCO0FFMEdyQjs7Ozs7O0VGbkdFO0FFK0lGOztxQkY1SXFCO0FFMlJyQjs7RUZ4UkU7QUVxVEY7O3FCRmxUcUI7QUVpVnJCOzs7RUY3VUU7QUVxWEY7O3FCRmxYcUI7QUc1R3JCOzs7RUhnSEU7QUloSEY7O0VKbUhFO0FJL0dGOztFSmtIRTtBSTVHRjs7RUorR0U7QUt6SEY7O0VMNEhFO0FLeEhGOztFTDJIRTtBS3JIRjs7RUx3SEU7QU03SEY7OztFTmlJRTtBT3RJRjs7RVB5SUU7QVFsSUY7RUZ3TUUsZUF2RXFDO0VBdUVyQyxvQkF2RXFDO0VBd0VyQyxpQkF2SzZCO0VBdUs3QixxQkF2SzZCO0VBd0s3QixpQkF4SzZCO0VBd0s3QixzQkF4SzZCO0VBeUs3QixnQkF6SzZCO0VBeUs3QixxQkF6SzZCO0VBMEs3QixtQkExSzZCO0VBMEs3Qix5QkExSzZCO0VBMks3QixrQkEzSzZCO0VBMks3QixnQkEzSzZCLEVBQUE7QUUxQjVCO0VGZ01ELGVBdkVxQztFQXVFckMsb0JBdkVxQztFQXdFckMsaUJBdks2QjtFQXVLN0IscUJBdks2QjtFQXdLN0IsZUF4SzZCO0VBd0s3QixhQXhLNkI7RUF5SzdCLGdCQXpLNkI7RUF5SzdCLHFCQXpLNkI7RUEwSzdCLG1CQTFLNkI7RUEwSzdCLHlCQTFLNkI7RUEySzdCLG1CQTNLNkI7RUEySzdCLHVCQTNLNkIsRUFBQTtBRWxDL0I7RUFFRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOEJBQThCLEVBQUE7QUFOaEM7SUFVSSxrQkFaZ0M7SUFZaEMsc0JBWmdDO0lBYWhDLG1CQWJnQztJQWFoQyx1QkFiZ0M7SUFjaEMsV051Q1EsRUFBQTtBTW5DWjtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6ImxpYnMvc2hhcmVkL3VpLWNvcmUvc3JjL2xpYi90ZXh0L3RleHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogZnVuY3Rpb25zIGRlZmluaXRpb25cbiAqL1xuXG4vKioqXG4gKiBvcmlnaW5hbCBpbXBvcnRcbiAqL1xuXG5AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJztcblxuLyoqKlxuICogUGF0Y2ggLyBleHRlbmRcbiAqL1xuIiwiLypcbiAqIGZ1bmN0aW9ucyBkZWZpbml0aW9uXG4gKi9cbi8qKipcbiAqIG9yaWdpbmFsIGltcG9ydFxuICovXG4vKioqXG4gKiBQYXRjaCAvIGV4dGVuZFxuICovXG4vKlxuICogc2NzcyBoZWxwZXIgZnVuY3Rpb25zXG4gKiBUT0RPOiBmaW5pc2ggb3IgcmV2aWV3IGltcGxlbWVudGF0aW9uIC8gcmVtb3ZlIGlmIG5vdCBuZWVkZWRcbiAqL1xuLyoqXG4gKiByZXR1cm5zIGEgZm9udCB2YWx1ZSBmcm9tIHRoZSBkZWZpbml0aW9uXG4gKi9cbi8qKlxuICogcmV0dXJucyBhIGNvbG9yIHZhbHVlIGZyb20gdGhlIGRlZmluaXRpb25cbiAqL1xuLyoqXG4gKiByZXR1cm5zIGEgc3BhY2luZyB2YWx1ZSBmcm9tIHRoZSBkZWZpbml0aW9uXG4gKi9cbi8qKlxuICogUmVtb3ZlIHRoZSB1bml0IG9mIGEgdmFsdWVcbiAqL1xuLyoqXG4gKiB0ZXN0cyB2YWx1ZSBpZiBpbnRlZ2VyXG4gKi9cbi8qKlxuICogcmV0cmlldmUgbXVsdGlwbGUgb2YgYmFzZWxpbmVcbiAqL1xuLyoqXG4gKiBoZWxwZXIgdG8gcmV0dXJuIHRoZSBjYWxjIGZ1bmN0aW9uIGZvciBiYXNlbGluZSB3aXRoIGJvcmRlclxuICovXG4vKipcbiAqIGNvbnZlcnQgcmVtIHZhbHVlcyB0byBweCBiYXNlZCBvbiBkZWZhdWx0IGZvbnQgc2l6ZSBvZiAxNnB4XG4gKi9cbi8qXG4gKiBoZG1zIHZhcmlhYmxlIGRlZmluaXRpb25zXG4gKi9cbi8qKioqKioqKioqKioqKioqKioqKlxuICogRm9udHMgZGVmaW5pdGlvbnNcbiAqIERlc2lnbiBzcGVjOiBEZWZpbml0aW9ucyBzZWUgaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTQyL3ByZXZpZXdcbiAqIERvY3VtZW50YXRpb246IGh0dHBzOi8vY29uZmx1ZW5jZS5oaWx0aS5jb20vZGlzcGxheS9wc2hpbHRpL1VJK2xpYnJhcnkrZG9jdW1lbnRhdGlvblxuICovXG4vKiBOb3QgdXNlZCBhdCB0aGUgbW9tZW50LlxuJGJhc2VsaW5lLWhpbHRpLWV4dGVuZGVkOiAwLjE4NTtcbiRiYXNlbGluZS1oaWx0aS1oZWF2eS1leHRlbmRlZDogMC4xODU7XG4kYmFzZWxpbmUtYXJpYWw6IDAuMTUzMzIwO1xuJGJhc2VsaW5lLW1vbm9zcGFjZTogMC4xNjI7XG4qL1xuLypcbiAqIENvbG9yIGRlZmluaXRpb25zIGVuZFxuICoqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqXG4gKiBDb2xvciBkZWZpbml0aW9uc1xuICogRGVzaWduIHNwZWM6IERlZmluaXRpb25zIHNlZSBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbi8jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTA1L3ByZXZpZXdcbiAqIERvY3VtZW50YXRpb246IGh0dHBzOi8vY29uZmx1ZW5jZS5oaWx0aS5jb20vZGlzcGxheS9wc2hpbHRpL1VJK2xpYnJhcnkrZG9jdW1lbnRhdGlvblxuICovXG4vKlxuICogQ29sb3IgZGVmaW5pdGlvbnMgZW5kXG4gKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKipcbiAqIEdyaWQgc3lzdGVtXG4gKiBEZXNpZ24gc3BlYzpcbiAqIEJyZWFrcG9pbnRzOiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbiMvY29uc29sZS8xNzMwMTU4OC8zNTg2MTA1MTMvcHJldmlld1xuICogTW9iaWxlOiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbiMvY29uc29sZS8xNzMwMTU4OC8zNTg2MTA1MTUvcHJldmlld1xuICogVGFibGV0OiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbiMvY29uc29sZS8xNzMwMTU4OC8zNTg2MTA1MTYvcHJldmlld1xuICogRGVza3RvcCs6IGh0dHBzOi8vZm9yay5pbnZpc2lvbmFwcC5jb20vZC9tYWluIy9jb25zb2xlLzE3MzAxNTg4LzM1ODYxMDUxNy9wcmV2aWV3XG4gKiBEb2N1bWVudGF0aW9uOiBodHRwczovL2NvbmZsdWVuY2UuaGlsdGkuY29tL2Rpc3BsYXkvcHNoaWx0aS9VSStsaWJyYXJ5K2RvY3VtZW50YXRpb25cbiAqL1xuLypcbiAqIEdyaWQgc3lzdGVtIGVuZFxuICoqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqXG4gKiBIZWlnaHRzXG4gKi9cbi8qXG4gKiBIZWlnaHRzIGVuZFxuICoqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqXG4gKiBTaXppbmdcbiAqL1xuLypcbiAqIFNpemluZyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKlxuICogU3BhY2luZ3NcbiAqIERlc2lnbiBzcGVjOlxuICogaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTExL3ByZXZpZXdcbiAqIGh0dHBzOi8vZm9yay5pbnZpc2lvbmFwcC5jb20vZC9tYWluIy9jb25zb2xlLzE3MzAxNTg4LzM1ODYxMDUxMC9wcmV2aWV3XG4gKiBEb2N1bWVudGF0aW9uOiBodHRwczovL2NvbmZsdWVuY2UuaGlsdGkuY29tL2Rpc3BsYXkvcHNoaWx0aS9VSStsaWJyYXJ5K2RvY3VtZW50YXRpb25cbiAqL1xuLypcbiAqIFNwYWNpbmdzIGVuZFxuICoqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqXG4gKiBDdXN0b20gZm9ybXNcbiAqL1xuLypcbiAqIEN1c3RvbSBmb3JtcyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKlxuICogTGF5b3V0IGhlbHBlciBjbGFzc2VzXG4gKiBEb2N1bWVudGF0aW9uOiBodHRwczovL2NvbmZsdWVuY2UuaGlsdGkuY29tL2Rpc3BsYXkvcHNoaWx0aS9MYXlvdXRcbiAqL1xuLypcbiAqIExheW91dCBoZWxwZXIgY2xhc3NlcyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cbi8qXG4gKiBnbG9iYWwgbWl4aW4gZGVmaW5pdGlvbnNcbiAqIFRPRE86IGZpbmlzaCBvciByZXZpZXcgaW1wbGVtZW50YXRpb24gLyByZW1vdmUgaWYgbm90IG5lZWRlZFxuICovXG4vKlxuICogdmFyaWFibGVzIGRlZmluaXRpb25cbiAqL1xuLyoqKlxuICogb3JpZ2luYWwgaW1wb3J0XG4gKi9cbi8qKipcbiAqIFBhdGNoIC8gZXh0ZW5kXG4gKi9cbi8qXG4gKiBtaXhpbnMgZGVmaW5pdGlvblxuICovXG4vKioqXG4gKiBvcmlnaW5hbCBpbXBvcnRcbiAqL1xuLyoqKlxuICogUGF0Y2ggLyBleHRlbmRcbiAqL1xuLyoqXG4gKiBISUxUSSBzcGVjaWZpYyBtb2RpZmljYXRpb25zOlxuICogJGJvcmRlciBwcm9wZXJ0eTogaWYgcGx1bWJlciBhcHBsaWVkIG9uIGVsZW1lbnRzIHdpdGggYm9yZGVycywgdGhlc2UgbmVlZCB0byBiZSBzdWJ0cmFjdGVkIGZyb20gcGFkZGluZ1xuICovXG4vKlxuICogUGx1bWJlciBiYXNlbGluZSBkZWZpbml0aW9uIGZpbGVcbiAqL1xuOmhvc3Qge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tdG9wOiAtMTFweDtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4OyB9XG5cbi5oYXMtYmc6aG9zdCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDsgfVxuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cbiAgOmhvc3QuaGFzLWJnIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBjb2xvcjogI2ZmZjsgfVxuXG4udWktY29yZS10ZXh0LWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTsgfVxuIiwiLypcbiAqIHNjc3MgaGVscGVyIGZ1bmN0aW9uc1xuICogVE9ETzogZmluaXNoIG9yIHJldmlldyBpbXBsZW1lbnRhdGlvbiAvIHJlbW92ZSBpZiBub3QgbmVlZGVkXG4gKi9cblxuLyoqXG4gKiByZXR1cm5zIGEgZm9udCB2YWx1ZSBmcm9tIHRoZSBkZWZpbml0aW9uXG4gKi9cbkBmdW5jdGlvbiBmb250KCRrZXkpIHtcbiAgQGlmIG1hcC1oYXMta2V5KCRmb250cywgJGtleSkge1xuICAgIEByZXR1cm4gbWFwLWdldCgkZm9udHMsICRrZXkpO1xuICB9XG5cbiAgQHdhcm4gXCJVbmtub3duIGAjeyRrZXl9YCBpbiAkZm9udHMuXCI7XG4gIEByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiByZXR1cm5zIGEgY29sb3IgdmFsdWUgZnJvbSB0aGUgZGVmaW5pdGlvblxuICovXG5AZnVuY3Rpb24gY29sb3IoJGtleSkge1xuICBAaWYgbWFwLWhhcy1rZXkoJGNvbG9ycywgJGtleSkge1xuICAgIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAka2V5KTtcbiAgfVxuXG4gIEB3YXJuIFwiVW5rbm93biBgI3ska2V5fWAgaW4gJGNvbG9ycy5cIjtcbiAgQHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIHJldHVybnMgYSBzcGFjaW5nIHZhbHVlIGZyb20gdGhlIGRlZmluaXRpb25cbiAqL1xuQGZ1bmN0aW9uIHNwYWNpbmcoJGtleSkge1xuICBAaWYgbWFwLWhhcy1rZXkoJHNwYWNlcnMsICRrZXkpIHtcbiAgICBAcmV0dXJuIG1hcC1nZXQoJHNwYWNlcnMsICRrZXkpO1xuICB9XG5cbiAgQHdhcm4gXCJVbmtub3duIGAjeyRrZXl9YCBpbiAkc3BhY2Vycy5cIjtcbiAgQHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgdW5pdCBvZiBhIHZhbHVlXG4gKi9cbkBmdW5jdGlvbiByZW1vdmUtdW5pdCgkbnVtYmVyKSB7XG4gIEBpZiB0eXBlLW9mKCRudW1iZXIpID09ICdudW1iZXInIGFuZCBub3QgdW5pdGxlc3MoJG51bWJlcikge1xuICAgIEByZXR1cm4gJG51bWJlciAvICgkbnVtYmVyICogMCArIDEpO1xuICB9XG5cbiAgQHJldHVybiAkbnVtYmVyO1xufVxuXG4vKipcbiAqIHRlc3RzIHZhbHVlIGlmIGludGVnZXJcbiAqL1xuQGZ1bmN0aW9uIGlzLWludGVnZXIoJHZhbHVlKSB7XG4gIEByZXR1cm4gKHVuaXRsZXNzKCR2YWx1ZSkgYW5kICR2YWx1ZSA9PSByb3VuZCgkdmFsdWUpKTtcbn1cblxuLyoqXG4gKiByZXRyaWV2ZSBtdWx0aXBsZSBvZiBiYXNlbGluZVxuICovXG5AZnVuY3Rpb24gYmwoJHZhbHVlKSB7XG4gIEBpZiBub3QgaXMtaW50ZWdlcigkdmFsdWUpIHtcbiAgICBAZXJyb3IgJ3ZhbHVlIG11c3QgYmUgaW50ZWdlciwgZ290ICN7JHZhbHVlfSBpbnN0ZWFkJztcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlICogJGJhc2VsaW5lLWdyaWQtaGVpZ2h0O1xufVxuXG4vKipcbiAqIGhlbHBlciB0byByZXR1cm4gdGhlIGNhbGMgZnVuY3Rpb24gZm9yIGJhc2VsaW5lIHdpdGggYm9yZGVyXG4gKi9cbkBmdW5jdGlvbiBibC1ib3JkZXIoJHBhZGRpbmcpIHtcbiAgQGlmIG5vdCBpcy1pbnRlZ2VyKCRwYWRkaW5nKSBvciAkcGFkZGluZyA8IDAge1xuICAgIEBlcnJvciAncGFkZGluZyBtdXN0IGJlIGludGVnZXIgYW5kIGxhcmdlciAwLCBnb3QgI3skcGFkZGluZ30gaW5zdGVhZCc7XG4gIH1cblxuICBAcmV0dXJuIGJsKCRwYWRkaW5nKSAtICRib3JkZXItd2lkdGg7XG59XG5cbi8qKlxuICogY29udmVydCByZW0gdmFsdWVzIHRvIHB4IGJhc2VkIG9uIGRlZmF1bHQgZm9udCBzaXplIG9mIDE2cHhcbiAqL1xuQGZ1bmN0aW9uIHJlbS10by1weCgkcmVtVmFsdWUpIHtcbiAgLy8gVE9ETzogYXMgMTZweCBpcyBkZXBlbmRlbmQgb24gYnJvd3NlciBzZXR0aW5ncyB0aGlzIGlzIHN0aWxsIHN1YmplY3QgdG8gY2hhbmdlXG4gIEByZXR1cm4gcmVtb3ZlLXVuaXQoJHJlbVZhbHVlKSAqIDE2cHg7XG59XG4iLCIvKlxuICogaGRtcyB2YXJpYWJsZSBkZWZpbml0aW9uc1xuICovXG5cbi8vIEhETVMgY3VzdG9tXG4kYmFzZWxpbmUtZ3JpZC1oZWlnaHQ6IDExcHggIWRlZmF1bHQ7XG5cbi8qKioqKioqKioqKioqKioqKioqKlxuICogRm9udHMgZGVmaW5pdGlvbnNcbiAqIERlc2lnbiBzcGVjOiBEZWZpbml0aW9ucyBzZWUgaHR0cHM6Ly9mb3JrLmludmlzaW9uYXBwLmNvbS9kL21haW4jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTQyL3ByZXZpZXdcbiAqIERvY3VtZW50YXRpb246IGh0dHBzOi8vY29uZmx1ZW5jZS5oaWx0aS5jb20vZGlzcGxheS9wc2hpbHRpL1VJK2xpYnJhcnkrZG9jdW1lbnRhdGlvblxuICovXG5cbiRiYXNlbGluZS1oaWx0aS1yb21hbjogMC4xNjtcbiRiYXNlbGluZS1oaWx0aS1ib2xkOiAwLjE2O1xuXG4vKiBOb3QgdXNlZCBhdCB0aGUgbW9tZW50LlxuJGJhc2VsaW5lLWhpbHRpLWV4dGVuZGVkOiAwLjE4NTtcbiRiYXNlbGluZS1oaWx0aS1oZWF2eS1leHRlbmRlZDogMC4xODU7XG4kYmFzZWxpbmUtYXJpYWw6IDAuMTUzMzIwO1xuJGJhc2VsaW5lLW1vbm9zcGFjZTogMC4xNjI7XG4qL1xuXG4kZm9udHM6IChcbiAgJ2hpbHRpLXJvbWFuJzogKFxuICAgICdIaWx0aSBSb21hbicsXG4gICAgQXJpYWwsXG4gICAgVmVyZGFuYSxcbiAgICBzYW5zLXNlcmlmXG4gICksXG4gICdoaWx0aS1ib2xkJzogKFxuICAgICdIaWx0aSBCb2xkJyxcbiAgICBBcmlhbCxcbiAgICBWZXJkYW5hLFxuICAgIHNhbnMtc2VyaWZcbiAgKVxuICAvKiBub3QgdXNlZCBhdCB0aGUgbW9tZW50XG4gICAgICAgICdoaWx0aS1leHRlbmRlZCc6ICAgKCAnSGlsdGkgRXh0ZW5kZWQnLCBBcmlhbCwgVmVyZGFuYSwgc2Fucy1zZXJpZiApLFxuICAgICAgICAnaGlsdGktaGVhdnknOiAgICAgICggJ0hpbHRpIEhlYXZ5IEV4dGVuZGVkJywgQXJpYWwsIFZlcmRhbmEsIHNhbnMtc2VyaWYgKSxcbiAgICAgICAgJ2FyaWFsJzogICAgICAgICAgICAgKCBBcmlhbCwgVmVyZGFuYSwgc2Fucy1zZXJpZiApLFxuICAgICAgICAnbW9ub3NwYWNlJzogICAgICAgICAoIG1vbm9zcGFjZSApXG4gICAgICAgICovXG4pO1xuXG4kYmFzZS1mb250LXNpemU6IDE1cHg7XG5cbi8qXG4gKiBDb2xvciBkZWZpbml0aW9ucyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqKioqKioqKioqKioqKioqKioqXG4gKiBDb2xvciBkZWZpbml0aW9uc1xuICogRGVzaWduIHNwZWM6IERlZmluaXRpb25zIHNlZSBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbi8jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTA1L3ByZXZpZXdcbiAqIERvY3VtZW50YXRpb246IGh0dHBzOi8vY29uZmx1ZW5jZS5oaWx0aS5jb20vZGlzcGxheS9wc2hpbHRpL1VJK2xpYnJhcnkrZG9jdW1lbnRhdGlvblxuICovXG4kcmVkOiAjZDIwNTFlO1xuJGJ1cmd1bmR5OiAjNjcxYTNkO1xuJHN0ZWVsLTEwMDogIzUyNGY1MztcbiR3aGl0ZTogI2ZmZjtcbiR3YXJtLWNvbmNyZXRlLTEwMDogI2Q3Y2ViZDtcbiRoZWF2eS1jb25jcmV0ZS0xMDA6ICM4ODdmNmU7XG4kc3RlZWwtNDA6ICNiYWI5YmE7XG4kc3RlZWwtMTA6ICNlZGVkZWQ7XG4kYmxhY2stNjogcmdiYSgwLCAwLCAwLCAwLjA2KTtcblxuJGNvbG9yczogKCk7XG4kY29sb3JzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICAncmVkJzogJHJlZCxcbiAgICAnYnVyZ3VuZHknOiAkYnVyZ3VuZHksXG4gICAgJ3N0ZWVsLTEwMCc6ICRzdGVlbC0xMDAsXG4gICAgJ3doaXRlJzogJHdoaXRlLFxuICAgICd3YXJtLWNvbmNyZXRlLTEwMCc6ICR3YXJtLWNvbmNyZXRlLTEwMCxcbiAgICAnaGVhdnktY29uY3JldGUtMTAwJzogJGhlYXZ5LWNvbmNyZXRlLTEwMCxcbiAgICAnc3RlZWwtNDAnOiAkc3RlZWwtNDAsXG4gICAgJ3N0ZWVsLTEwJzogJHN0ZWVsLTEwIC8vIFdJUDogY29sb3IgZGVmaW5pdGlvbiBmb3IgKHZlcnkpIGxpZ2h0IGdyYXkgbWlzc2luZ1xuICApLFxuICAkY29sb3JzXG4pO1xuXG4kcHJpbWFyeTogJHJlZDtcbiRzZWNvbmRhcnk6ICRidXJndW5keTtcbi8vIFRPRE86IFdJUCAtIHN1Y2Nlc3MsIGluZm8sIHdhcm5pbmcgYW5kIGRhbmdlciBub3QgeWV0IGRlZmluZWRcbi8vIHNlZSBoZXJlOiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbi8jL2NvbnNvbGUvMTczMDE1ODgvMzU4NjEwNTA2L3ByZXZpZXdcbiRzdWNjZXNzOiBsaWdodGdyZWVuO1xuJGluZm86IGxpZ2h0Ymx1ZTtcbiR3YXJuaW5nOiBvcmFuZ2U7XG4kZGFuZ2VyOiAkcmVkO1xuJGxpZ2h0OiAkd2hpdGU7XG4kZGFyazogJHN0ZWVsLTEwMDtcblxuLy8gY3VzdG9tIHRoZW1lIGNvbG9yc1xuJG5ldXRyYWwtbGlnaHQ6ICR3YXJtLWNvbmNyZXRlLTEwMDtcbiRuZXV0cmFsLWRhcms6ICRoZWF2eS1jb25jcmV0ZS0xMDA7XG4kZGlzYWJsZWQ6ICRzdGVlbC00MDtcblxuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiR0aGVtZS1jb2xvcnM6ICgpO1xuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxuICAoXG4gICAgJ3ByaW1hcnknOiAkcHJpbWFyeSxcbiAgICAnc2Vjb25kYXJ5JzogJHNlY29uZGFyeSxcbiAgICAnc3VjY2Vzcyc6ICRzdWNjZXNzLFxuICAgICdpbmZvJzogJG5ldXRyYWwtbGlnaHQsXG4gICAgJ3dhcm5pbmcnOiAkd2FybmluZyxcbiAgICAnZGFuZ2VyJzogJGRhbmdlcixcbiAgICAnbGlnaHQnOiAkbGlnaHQsXG4gICAgJ2RhcmsnOiAkZGFyayxcbiAgICAnZGlzYWJsZWQnOiAkZGlzYWJsZWQsXG4gICAgJ25ldXRyYWwtbGlnaHQnOiAkbmV1dHJhbC1saWdodCxcbiAgICAnbmV1dHJhbC1kYXJrJzogJG5ldXRyYWwtZGFyayxcbiAgICAnc3RlZWwtMTAnOiAkc3RlZWwtMTAgLy8gV0lQOiBzZWUgYWJvdmVcbiAgKSxcbiAgJHRoZW1lLWNvbG9yc1xuKTtcblxuLypcbiAqIENvbG9yIGRlZmluaXRpb25zIGVuZFxuICoqKioqKioqKioqKioqKioqKioqL1xuXG4vKioqKioqKioqKioqKioqKioqKipcbiAqIEdyaWQgc3lzdGVtXG4gKiBEZXNpZ24gc3BlYzpcbiAqIEJyZWFrcG9pbnRzOiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbiMvY29uc29sZS8xNzMwMTU4OC8zNTg2MTA1MTMvcHJldmlld1xuICogTW9iaWxlOiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbiMvY29uc29sZS8xNzMwMTU4OC8zNTg2MTA1MTUvcHJldmlld1xuICogVGFibGV0OiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbiMvY29uc29sZS8xNzMwMTU4OC8zNTg2MTA1MTYvcHJldmlld1xuICogRGVza3RvcCs6IGh0dHBzOi8vZm9yay5pbnZpc2lvbmFwcC5jb20vZC9tYWluIy9jb25zb2xlLzE3MzAxNTg4LzM1ODYxMDUxNy9wcmV2aWV3XG4gKiBEb2N1bWVudGF0aW9uOiBodHRwczovL2NvbmZsdWVuY2UuaGlsdGkuY29tL2Rpc3BsYXkvcHNoaWx0aS9VSStsaWJyYXJ5K2RvY3VtZW50YXRpb25cbiAqL1xuXG4kZ3JpZC1icmVha3BvaW50czogKFxuICB4czogMCxcbiAgc206IDc2OHB4LFxuICBtZDogMTAyNHB4LFxuICBsZzogMTQ0MHB4LFxuICB4bDogMjU2MHB4XG4pO1xuXG4kZ3JpZC1icmVha3BvaW50cy1uby1ndXR0ZXI6IHhzLCBzbTtcblxuJGdyaWQtY29sdW1uczogNDg7XG4kZ3JpZC1ndXR0ZXItd2lkdGg6IDEwcHg7XG4kZ3JpZC1ndXR0ZXItd2lkdGgtbm8tZ3V0dGVyOiAwcHg7XG5cbiRtZWRpYS1kaXJlY3Rpb246ICdtaW4nO1xuJG1lZGlhLWRpcmVjdGlvbi12OiAnbWluJztcblxuJGNvbnRhaW5lci1zcGFjaW5nczogKCkgIWRlZmF1bHQ7XG4vLyBoYWxmICRncmlkLWd1dHRlci13aWR0aCB3aWR0aCB3aWxsIGJlIGFkZGVkIHRvIGFsbCBubyBtYXR0ZXIgdGhlIGJyZWFrcG9pbnRcbiRjb250YWluZXItc3BhY2luZ3M6IG1hcC1tZXJnZShcbiAgKFxuICAgIHhzOiAxNXB4LFxuICAgIHNtOiAzNXB4LFxuICAgIG1kOiA1NXB4LFxuICAgIGxnOiA3NXB4LFxuICAgIHhsOiAxMzVweFxuICApLFxuICAkY29udGFpbmVyLXNwYWNpbmdzXG4pO1xuXG4vKlxuICogR3JpZCBzeXN0ZW0gZW5kXG4gKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKioqKioqKioqKioqKioqKioqKlxuICogSGVpZ2h0c1xuICovXG5cbiRibC1oZWlnaHQtc2l6ZXMtZnJvbTogMztcbiRibC1oZWlnaHQtc2l6ZXMtdG86IDIwO1xuXG4vKlxuICogSGVpZ2h0cyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqKioqKioqKioqKioqKioqKioqXG4gKiBTaXppbmdcbiAqL1xuXG4kYm94LXdpZHRoczogKFxuICAnMS02JzogcGVyY2VudGFnZSgxLzYpLFxuICAnMS00JzogcGVyY2VudGFnZSgxLzQpLFxuICAnMS0zJzogcGVyY2VudGFnZSgxLzMpLFxuICAnMS0yJzogcGVyY2VudGFnZSgxLzIpLFxuICAnMi0zJzogcGVyY2VudGFnZSgyLzMpXG4pO1xuXG4vKlxuICogU2l6aW5nIGVuZFxuICoqKioqKioqKioqKioqKioqKioqL1xuXG4vKioqKioqKioqKioqKioqKioqKipcbiAqIFNwYWNpbmdzXG4gKiBEZXNpZ24gc3BlYzpcbiAqIGh0dHBzOi8vZm9yay5pbnZpc2lvbmFwcC5jb20vZC9tYWluIy9jb25zb2xlLzE3MzAxNTg4LzM1ODYxMDUxMS9wcmV2aWV3XG4gKiBodHRwczovL2ZvcmsuaW52aXNpb25hcHAuY29tL2QvbWFpbiMvY29uc29sZS8xNzMwMTU4OC8zNTg2MTA1MTAvcHJldmlld1xuICogRG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9jb25mbHVlbmNlLmhpbHRpLmNvbS9kaXNwbGF5L3BzaGlsdGkvVUkrbGlicmFyeStkb2N1bWVudGF0aW9uXG4gKi9cblxuJHNwYWNlcjogJGJhc2VsaW5lLWdyaWQtaGVpZ2h0O1xuXG4kc3BhY2VyczogKFxuICAoXG4gICAgMDogMCxcbiAgICAxOiAoXG4gICAgICAkc3BhY2VyICogMVxuICAgICksXG4gICAgMjogKFxuICAgICAgJHNwYWNlciAqIDJcbiAgICApLFxuICAgIDM6IChcbiAgICAgICRzcGFjZXIgKiAzXG4gICAgKSxcbiAgICA0OiAoXG4gICAgICAkc3BhY2VyICogNFxuICAgICksXG4gICAgNTogKFxuICAgICAgJHNwYWNlciAqIDVcbiAgICApXG4gIClcbik7XG5cbiRob3Jpem9udGFsLXNwYWNlcnM6IChcbiAgKFxuICAgIDA6IDAsXG4gICAgMTogNXB4LFxuICAgIDI6IDEwcHgsXG4gICAgMzogMTVweCxcbiAgICA0OiAyMHB4LFxuICAgIDU6IDI1cHhcbiAgKVxuKTtcblxuJGNvbnRhaW5lci1wYWRkaW5nLXg6IDE1cHg7XG5cbi8qXG4gKiBTcGFjaW5ncyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gT3B0aW9uc1xuJGVuYWJsZS12YWxpZGF0aW9uLWljb25zOiBmYWxzZTtcblxuJGJvZHktYmc6ICR3aGl0ZTtcbiRib2R5LWNvbG9yOiAkc3RlZWwtMTAwO1xuXG4kZm9udC1mYW1pbHktYmFzZTogbWFwLWdldCgkZm9udHMsICdoaWx0aS0tcm9tYW4nKTtcblxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiBtYXAtZ2V0KCRmb250cywgJ2hpbHRpLS1yb21hbicpOyAvLyBUT0RPOiByZXZpZXdcbiRoZWFkaW5ncy1mb250LXdlaWdodDogNDAwOyAvLyBUT0RPOiByZXZpZXdcblxuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiBibCgyKTtcblxuJGgxLWZvbnQtc2l6ZTogMjBweDtcbiRoMi1mb250LXNpemU6IDQ0cHg7XG4kaDMtZm9udC1zaXplOiAyMHB4O1xuXG4kYm9keS1mb250OiBtYXAtZ2V0KCRmb250cywgJ2hpbHRpLXJvbWFuJyk7XG5cbi8vICRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIDAuOTM3NXJlbTtcblxuJGZvbnQtd2VpZ2h0LWJhc2U6IDQwMDtcbiRsaW5lLWhlaWdodC1iYXNlOiAyO1xuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuLy8gVE9ETzogV0lQIC8gcmV2aWV3XG4kYm94LXNoYWRvdy1zbTogMCAwLjEyNXJlbSAwLjEyNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcblxuJGJvcmRlci13aWR0aDogMXB4O1xuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeTtcblxuJGJvcmRlci1yYWRpdXM6IDA7XG4kYm9yZGVyLXJhZGl1cy1sZzogJGJvcmRlci1yYWRpdXM7XG4kYm9yZGVyLXJhZGl1cy1zbTogNnB4O1xuXG4vLyBBbGVydHNcbi8vIFRPRE86IFdJUCAvIHJldmlld1xuJGFsZXJ0LWJvcmRlci13aWR0aDogMXB4O1xuJGFsZXJ0LXBhZGRpbmcteTogJGJhc2VsaW5lLWdyaWQtaGVpZ2h0IC0gJGFsZXJ0LWJvcmRlci13aWR0aDsgLy8gcmVzcGVjdCBib3JkZXIgd2lkdGggdG8gc3RheSB3aXRoaW4gYmFzZWxpbmVcbiRhbGVydC1tYXJnaW4tYm90dG9tOiAkYmFzZWxpbmUtZ3JpZC1oZWlnaHQ7XG5cbi8vIERyb3Bkb3duc1xuLy9cbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cbi8vIFRPRE86IFdJUCAvIHJldmlld1xuJGRyb3Bkb3duLW1pbi13aWR0aDogMjByZW07XG4kZHJvcGRvd24tcGFkZGluZy15OiAwO1xuJGRyb3Bkb3duLXNwYWNlcjogMTdweDtcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAwIDAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcblxuLy8gTGlzdHNcbiRsaXN0LXVsLWJ1bGxldC1kaWFtZXRlcjogNXB4O1xuJGxpc3QtdWwtaWNvbi13aWR0aDogMThweDtcbiRsaXN0LXVsLWljb24tdGV4dC1zcGFjaW5nOiAkZ3JpZC1ndXR0ZXItd2lkdGggLyAyO1xuJGxpc3Qtb2wtbnVtYmVyLXdpZHRoOiAyMXB4O1xuJGxpc3Qtb2wtbnVtYmVyLXRleHQtc3BhY2luZzogJGxpc3QtdWwtaWNvbi10ZXh0LXNwYWNpbmc7XG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuLy8gVE9ETzogV0lQIC8gcmV2aWV3XG4kbGluay1jb2xvcjogJHN0ZWVsLTEwMDtcblxuLy8gTmF2YmFyXG4vLyBUT0RPOiBXSVAgLyByZXZpZXdcbiRuYXZiYXItcGFkZGluZy15OiAwO1xuJG5hdmJhci1uYXYtbGluay1wYWRkaW5nLXg6IDAuNjI1cmVtO1xuJG5hdi1saW5rLXBhZGRpbmcteDogJGNvbnRhaW5lci1wYWRkaW5nLXg7XG5cbi8vIENvbXB1dGUgdGhlIG5hdmJhci1icmFuZCBwYWRkaW5nLXkgc28gdGhlIG5hdmJhci1icmFuZCB3aWxsIGhhdmUgdGhlIHNhbWUgaGVpZ2h0IGFzIG5hdmJhci10ZXh0IGFuZCBuYXYtbGlua1xuJG5hdmJhci1icmFuZC1wYWRkaW5nLXk6IDA7XG4kbmF2YmFyLWxpZ2h0LWNvbG9yOiAkaGVhdnktY29uY3JldGUtMTAwO1xuJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjogJG5hdmJhci1saWdodC1jb2xvcjtcbiRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yOiAkbmF2YmFyLWxpZ2h0LWNvbG9yO1xuXG4vLyBCdXR0b25zICsgRm9ybXNcbi8vXG4vLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cblxuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XG5cbi8vIEZvcm1zXG5cbiRsYWJlbC1tYXJnaW4tYm90dG9tOiBibCgxKTtcbiRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206IGJsKDIpO1xuJGZvcm0tdGV4dC1tYXJnaW4tdG9wOiBibCgxKTtcblxuLy8gVE9ETzogV0lQIC8gcmV2aWV3XG4kaW5wdXQtaGVpZ2h0OiBibCgzKTtcbiRpbnB1dC1oZWlnaHQtc206ICRpbnB1dC1oZWlnaHQ7XG4kaW5wdXQtaGVpZ2h0LWxnOiAkaW5wdXQtaGVpZ2h0O1xuXG4kaW5wdXQtZm9udC1zaXplOiAkYmFzZS1mb250LXNpemU7XG5cbiRpbnB1dC1iZzogdHJhbnNwYXJlbnQ7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICRpbnB1dC1iZztcbiRpbnB1dC1kaXNhYmxlZC1jb2xvcjogJGRpc2FibGVkOyAvLyBjdXN0b20gLSBubyBib290c3RyYXAgc3RhbmRhcmRcblxuJGlucHV0LWNvbG9yOiAkYm9keS1jb2xvcjtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRuZXV0cmFsLWxpZ2h0O1xuJGlucHV0LWJvcmRlci13aWR0aDogJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg7XG4kaW5wdXQtYm94LXNoYWRvdzogbm9uZTtcblxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICRib3JkZXItcmFkaXVzLWxnO1xuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICRib3JkZXItcmFkaXVzLXNtO1xuXG4kaW5wdXQtZm9jdXMtYmc6ICRpbnB1dC1iZztcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICRzZWNvbmRhcnk7XG4kaW5wdXQtZm9jdXMtY29sb3I6ICRpbnB1dC1jb2xvcjtcbiRpbnB1dC1mb2N1cy13aWR0aDogMDtcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xuXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICRuZXV0cmFsLWRhcms7XG4kaW5wdXQtcGxhY2Vob2xkZXItZGlzYWJsZWQtY29sb3I6ICRkaXNhYmxlZDsgLy8gY3VzdG9tIC0gbm8gYm9vdHN0cmFwIHN0YW5kYXJkXG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAkYm9keS1jb2xvcjtcblxuLy8gRm9ybSBWYWxpZGF0aW9uXG4vLyBUT0RPOiBXSVBcbiRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yOiAkc3VjY2VzcztcbiRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I6ICRkYXJrO1xuJGZvcm0tZmVlZGJhY2staW52YWxpZC1tZXNzYWdlLWNvbG9yOiAkZGFuZ2VyOyAvLyBjdXN0b20gLSBubyBib290c3RyYXAgc3RhbmRhcmRcblxuJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6ICgpO1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICAndmFsaWQnOiAoXG4gICAgICAnY29sb3InOiAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvclxuICAgICksXG4gICAgJ2ludmFsaWQnOiAoXG4gICAgICAnY29sb3InOiAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yXG4gICAgKVxuICApLFxuICAkZm9ybS12YWxpZGF0aW9uLXN0YXRlc1xuKTtcblxuLyoqKioqKioqKioqKioqKioqKioqXG4gKiBDdXN0b20gZm9ybXNcbiAqL1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemU6IDEuMTI1cmVtOyAvLzE4cHg7XG4kY3VzdG9tLWNvbnRyb2wtZ3V0dGVyOiAwLjMxMjVyZW07IC8vNXB4O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZzogdHJhbnNwYXJlbnQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci1jb2xvcjogJGRhcms7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtY29sb3I6ICRkaXNhYmxlZDsgLy8gY3VzdG9tIC0gbm8gYm9vdHN0cmFwIHN0YW5kYXJkXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWNoZWNrZWQtZGlzYWJsZWQ6IHN0ci1yZXBsYWNlKFxuICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWRpc2FibGVkLWNvbG9yfScgZD0nTTYuNTY0Ljc1bC0zLjU5IDMuNjEyLTEuNTM4LTEuNTVMMCA0LjI2IDIuOTc0IDcuMjUgOCAyLjE5M3onLyUzZSUzYy9zdmclM2VcIiksXG4gICcjJyxcbiAgJyUyMydcbikgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQtZGlzYWJsZWQ6IHN0ci1yZXBsYWNlKFxuICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4JyUzZSUzY2NpcmNsZSByPSczJyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1kaXNhYmxlZC1jb2xvcn0nLyUzZSUzYy9zdmclM2VcIiksXG4gICcjJyxcbiAgJyUyMydcbikgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtYmc6IHRyYW5zcGFyZW50O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yOiAkZGFyaztcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZzogdHJhbnNwYXJlbnQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkZGFyaztcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3gtc2hhZG93OiBub25lO1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICRkaXNhYmxlZDsgLy8gY3VzdG9tIC0gbm8gYm9vdHN0cmFwIHN0YW5kYXJkXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZzogdHJhbnNwYXJlbnQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRkYXJrO1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm94LXNoYWRvdzogbm9uZTtcbiRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogJGRpc2FibGVkO1xuLypcbiAqIEN1c3RvbSBmb3JtcyBlbmRcbiAqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gQnV0dG9uc1xuLy8gVE9ETzogV0lQIC8gcmV2aWV3XG4kYnRuLXBhZGRpbmcteDogMjBweDtcbiRidG4tYm9yZGVyLXdpZHRoOiAwO1xuJGJ0bi1ibG9jay1zcGFjaW5nLXk6ICRiYXNlbGluZS1ncmlkLWhlaWdodDtcblxuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAxO1xuJGJ0bi1ib3JkZXItd2lkdGg6IDFweDtcbiRidG4tZm9udC1mYW1pbHk6IG1hcC1nZXQoJGZvbnRzLCAnaGlsdGktYm9sZCcpO1xuJGJ0bi1saW5rLWZvbnQtZmFtaWx5OiBtYXAtZ2V0KCRmb250cywgJ2hpbHRpLXJvbWFuJyk7XG5cbiRidG4tZm9jdXMtd2lkdGg6IDA7XG4kYnRuLWJveC1zaGFkb3c6IG5vbmU7XG4kYnRuLWZvY3VzLWJveC1zaGFkb3c6IG5vbmU7XG4kYnRuLWFjdGl2ZS1ib3gtc2hhZG93OiBub25lO1xuXG4vLyBCdXR0b24gb3V0bGluZVxuJGJ0bi1vdXRsaW5lLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuJGJ0bi1vdXRsaW5lLWJvcmRlci1yYWRpdXM6IDZweDtcbiRidG4tb3V0bGluZS1ib3gtc2hhZG93OiAwIDdweCA4cHggMCAkYmxhY2stNjtcbiRidG4tb3V0bGluZS1ob3Zlci1ib3gtc2hhZG93OiAwIDNweCAzcHggMCAkYmxhY2stNjtcbiRidG4tb3V0bGluZS1mb2N1cy1ib3gtc2hhZG93OiAkYnRuLW91dGxpbmUtYm94LXNoYWRvdztcblxuLy8gQnV0dG9uIGxpbmtzXG4kbGluay1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiBub25lO1xuXG4vKioqKioqKioqKioqKioqKioqKipcbiAqIExheW91dCBoZWxwZXIgY2xhc3Nlc1xuICogRG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9jb25mbHVlbmNlLmhpbHRpLmNvbS9kaXNwbGF5L3BzaGlsdGkvTGF5b3V0XG4gKi9cblxuJGhkbXMtaGVscGVyLWNvbnRhaW5lci1jb2xvcjogKFxuICBvdXRsaW5lOiAycHggZG91YmxlICMwMDA3ODgsXG4gIGJhY2tncm91bmQ6IHJnYmEoIzAwOTBmZiwgMC4yKSxcbiAgY2xhc3NJbmRpY2F0b3I6ICMwMDkwZmYsXG4gIGNvbG9yOiAjMDAwNzg4XG4pO1xuXG4kaGRtcy1oZWxwZXItcm93LWNvbG9yOiAoXG4gIG91dGxpbmU6IDJweCBkYXNoZWQgIzI4NjEwMCxcbiAgYmFja2dyb3VuZDogcmdiYSgjMDBhYjAwLCAwLjIpLFxuICBjbGFzc0luZGljYXRvcjogIzAwYWIwMCxcbiAgY29sb3I6ICMyODYxMDBcbik7XG5cbiRoZG1zLWhlbHBlci1jb2x1bW5zLWNvbG9yOiAoXG4gIG91dGxpbmU6IDJweCBkb3R0ZWQgIzY2M2MwMCxcbiAgYmFja2dyb3VuZDogcmdiYSgjZGRkNTAwLCAwLjIpLFxuICBjbGFzc0luZGljYXRvcjogI2RkZDUwMCxcbiAgY29sb3I6ICM2NjNjMDBcbik7XG5cbiRoZG1zLWhlbHBlci1ib3gtZ3JvdXAtY29sb3I6IChcbiAgb3V0bGluZTogMnB4IGRhc2hlZCAjZmYwMDAwLFxuICBiYWNrZ3JvdW5kOiByZ2JhKCNmZjAwMDAsIDAuMiksXG4gIGNsYXNzSW5kaWNhdG9yOiAjZmYwMDAwLFxuICBjb2xvcjogI2ZmMDAwMFxuKTtcblxuJGhkbXMtaGVscGVyLWJveC1jb2xvcjogKFxuICBvdXRsaW5lOiAycHggZGFzaGVkICNmZjA1ZmYsXG4gIGJhY2tncm91bmQ6IHJnYmEoI2ZmMDVmZiwgMC4yKSxcbiAgY2xhc3NJbmRpY2F0b3I6ICNmZjA1ZmYsXG4gIGNvbG9yOiAjZmYwNWZmXG4pO1xuXG4vKlxuICogTGF5b3V0IGhlbHBlciBjbGFzc2VzIGVuZFxuICoqKioqKioqKioqKioqKioqKioqL1xuIiwiLypcbiAqIGdsb2JhbCBtaXhpbiBkZWZpbml0aW9uc1xuICogVE9ETzogZmluaXNoIG9yIHJldmlldyBpbXBsZW1lbnRhdGlvbiAvIHJlbW92ZSBpZiBub3QgbmVlZGVkXG4gKi9cblxuQG1peGluIHV0aWxpdHktZGVmaW5pdGlvbigkY2xhc3NGcmFnbWVudCwgJGtleSwgJHZhbHVlLCAkZm9yQWxsQnJlYWtwb2ludHM6IGZhbHNlKSB7XG4gIEBpZiAoJGtleSBhbmQgJHZhbHVlKSB7XG4gICAgJSN7JGNsYXNzRnJhZ21lbnR9IHtcbiAgICAgICN7JGtleX06ICN7JHZhbHVlfTtcbiAgICB9XG5cbiAgICAuI3skY2xhc3NGcmFnbWVudH0ge1xuICAgICAgI3ska2V5fTogI3skdmFsdWV9O1xuICAgIH1cblxuICAgIEBpZiAkZm9yQWxsQnJlYWtwb2ludHMge1xuICAgICAgQGVhY2ggJGJwIGluICRicmVha3BvaW50LWtleXMge1xuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KCRicCkge1xuICAgICAgICAgIC4jeyRicH0tI3skY2xhc3NGcmFnbWVudH0ge1xuICAgICAgICAgICAgI3ska2V5fTogI3skdmFsdWV9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQHdhcm4gXCJObyB2YWx1ZSBmb3IgdXRpbGl0eS1kZWZpbml0aW9uIGdpdmVuXCI7XG4gIH1cbn1cbiIsIi8qXG4gKiB2YXJpYWJsZXMgZGVmaW5pdGlvblxuICovXG5cbi8qKipcbiAqIG9yaWdpbmFsIGltcG9ydFxuICovXG5cbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xuXG4vKioqXG4gKiBQYXRjaCAvIGV4dGVuZFxuICovXG4iLCIvKlxuICogbWl4aW5zIGRlZmluaXRpb25cbiAqL1xuXG4vKioqXG4gKiBvcmlnaW5hbCBpbXBvcnRcbiAqL1xuXG5AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvX21peGlucy5zY3NzJztcblxuLyoqKlxuICogUGF0Y2ggLyBleHRlbmRcbiAqL1xuIiwiLy8gUExVTUJFUiAtIEVhc3kgYmFzZWxpbmUgZ3JpZHMgd2l0aCBTQVNTXG4vLyBodHRwczovL2phbW9uc2VycmFuby5naXRodWIuaW8vcGx1bWJlci1zYXNzXG4vLyBDb3B5cmlnaHQgMjAxNiBWaWt0b3IgSG9udGlcbi8vIE1JVCBMaWNlbnNlXG5cbi8qKlxuICogSElMVEkgc3BlY2lmaWMgbW9kaWZpY2F0aW9uczpcbiAqICRib3JkZXIgcHJvcGVydHk6IGlmIHBsdW1iZXIgYXBwbGllZCBvbiBlbGVtZW50cyB3aXRoIGJvcmRlcnMsIHRoZXNlIG5lZWQgdG8gYmUgc3VidHJhY3RlZCBmcm9tIHBhZGRpbmdcbiAqL1xuXG4vLyAqKiogREVGQVVMVFMgKioqXG4vLyBEbyBub3QgY2hhbmdlIGl0IGhlcmUsIHVzZSB0aGUgcGx1bWJlci1zZXQtZGVmYXVsdHMgbWl4aW4gaW5zdGVhZCFcbiQtcGx1bWJlci1kZWZhdWx0czogKFxuICBmb250LXNpemU6IDIsXG4gIGxpbmUtaGVpZ2h0OiAzLFxuICBsZWFkaW5nLXRvcDogMCxcbiAgbGVhZGluZy1ib3R0b206IDAsXG4gIGdyaWQtaGVpZ2h0OiAxcmVtLFxuICBiYXNlbGluZTogbnVsbCxcbiAgdXNlLWJhc2VsaW5lLW9yaWdpbjogZmFsc2UsXG4gIGJvcmRlcjogMFxuKSAhZGVmYXVsdDtcblxuLy8gTWVyZ2UgcHJvdmlkZWQgc2V0dGluZ3MgaW50byB0aGUgZGVmYXVsdHMgbWFwXG5AbWl4aW4gcGx1bWJlci1zZXQtZGVmYXVsdHMoJGRlZmF1bHRzLi4uKSB7XG4gICQtcGx1bWJlci1kZWZhdWx0czogbWFwLW1lcmdlKCQtcGx1bWJlci1kZWZhdWx0cywga2V5d29yZHMoJGRlZmF1bHRzKSkgIWdsb2JhbDtcbn1cblxuLy8gR2V0IGEgZGVmYXVsdCB2YWx1ZVxuQGZ1bmN0aW9uIC1wbHVtYmVyLWdldC1kZWZhdWx0KCRrZXkpIHtcbiAgQHJldHVybiBtYXAtZ2V0KCQtcGx1bWJlci1kZWZhdWx0cywgJGtleSk7XG59XG5cbi8vIENoZWNrIGlmIGEgdmFsdWUgaXMgYSBub24tbmVnYXRpdmUgaW50ZWdlclxuQGZ1bmN0aW9uIC1wbHVtYmVyLWlzLWludGVnZXIoJHZhbHVlKSB7XG4gIEByZXR1cm4gKHVuaXRsZXNzKCR2YWx1ZSkgYW5kICR2YWx1ZSA9PSByb3VuZCgkdmFsdWUpKTtcbn1cblxuLy8gUm91bmQgdmFsdWUgdG8gdGhlIG5lYXJlc3QgcXVhcnRlciBwaXhlbFxuLy8gVGhpcyBwcm92aWRlcyByZWFzb25hYmxlIHByZWNpc2lvbiBhbmQgcHJldmVudHMgZ3JpZCBjcmVlcCAoYnkgZnJhY3Rpb25zIGFkZGluZyB1cCkgaW4gbW9zdCBicm93c2Vyc1xuQGZ1bmN0aW9uIC1wbHVtYmVyLXJvdW5kKCR2YWx1ZSkge1xuICBAcmV0dXJuIHJvdW5kKCR2YWx1ZSAqIDQpIC8gNDtcbn1cblxuQGZ1bmN0aW9uIHBsdW1iZXItY2FsYyhcbiAgJGZvbnQtc2l6ZTogbnVsbCxcbiAgJGxpbmUtaGVpZ2h0OiBudWxsLFxuICAkbGVhZGluZy10b3A6IG51bGwsXG4gICRsZWFkaW5nLWJvdHRvbTogbnVsbCxcbiAgJGdyaWQtaGVpZ2h0OiBudWxsLFxuICAkYmFzZWxpbmU6IG51bGwsXG4gICR1c2UtYmFzZWxpbmUtb3JpZ2luOiBudWxsLFxuICAkYm9yZGVyOiBudWxsXG4pIHtcbiAgLy8gKioqIFZBTElEQVRFIFBBUkFNRVRFUlMgKioqXG4gIC8vIGZvbnQtc2l6ZVxuICBAaWYgbm90ICRmb250LXNpemUge1xuICAgICRmb250LXNpemU6IC1wbHVtYmVyLWdldC1kZWZhdWx0KGZvbnQtc2l6ZSk7XG4gIH1cbiAgQGlmIG5vdCB1bml0bGVzcygkZm9udC1zaXplKSBvciAkZm9udC1zaXplIDw9IDAge1xuICAgIEBlcnJvciAnJGZvbnQtc2l6ZSBwYXJhbWV0ZXIgbXVzdCBiZSBhIHBvc2l0aXZlIHVuaXRsZXNzIG51bWJlciwgZ290ICN7JGZvbnQtc2l6ZX0gaW5zdGVhZCc7XG4gIH1cblxuICAvLyBsaW5lLWhlaWdodFxuICBAaWYgbm90ICRsaW5lLWhlaWdodCB7XG4gICAgJGxpbmUtaGVpZ2h0OiAtcGx1bWJlci1nZXQtZGVmYXVsdChsaW5lLWhlaWdodCk7XG4gIH1cbiAgQGlmIG5vdCB1bml0bGVzcygkbGluZS1oZWlnaHQpIG9yICRsaW5lLWhlaWdodCAhPSByb3VuZCgkbGluZS1oZWlnaHQpIG9yICRsaW5lLWhlaWdodCA8IDEge1xuICAgIEBlcnJvciAnJGxpbmUtaGVpZ2h0IHBhcmFtZXRlciBtdXN0IGJlIGEgcG9zaXRpdmUgdW5pdGxlc3MgaW50ZWdlciwgZ290ICN7JGxpbmUtaGVpZ2h0fSBpbnN0ZWFkJztcbiAgfVxuXG4gIC8vIGxlYWRpbmctdG9wXG4gIEBpZiBub3QgJGxlYWRpbmctdG9wIHtcbiAgICAkbGVhZGluZy10b3A6IC1wbHVtYmVyLWdldC1kZWZhdWx0KGxlYWRpbmctdG9wKTtcbiAgfVxuICBAaWYgbm90IC1wbHVtYmVyLWlzLWludGVnZXIoJGxlYWRpbmctdG9wKSB7XG4gICAgQGVycm9yICckbGVhZGluZy10b3AgcGFyYW1ldGVyIG11c3QgYmUgYSBub24tbmVnYXRpdmUgaW50ZWdlciwgZ290ICN7JGxlYWRpbmctdG9wfSBpbnN0ZWFkLic7XG4gIH1cblxuICAvLyBsZWFkaW5nLWJvdHRvbVxuICBAaWYgbm90ICRsZWFkaW5nLWJvdHRvbSB7XG4gICAgJGxlYWRpbmctYm90dG9tOiAtcGx1bWJlci1nZXQtZGVmYXVsdChsZWFkaW5nLWJvdHRvbSk7XG4gIH1cbiAgQGlmIG5vdCAtcGx1bWJlci1pcy1pbnRlZ2VyKCRsZWFkaW5nLWJvdHRvbSkge1xuICAgIEBlcnJvciAnJGxlYWRpbmctYm90dG9tIHBhcmFtZXRlciBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIGludGVnZXIsIGdvdCAjeyRsZWFkaW5nLWJvdHRvbX0gaW5zdGVhZCc7XG4gIH1cblxuICAvLyBncmlkLWhlaWdodFxuICBAaWYgbm90ICRncmlkLWhlaWdodCB7XG4gICAgJGdyaWQtaGVpZ2h0OiAtcGx1bWJlci1nZXQtZGVmYXVsdChncmlkLWhlaWdodCk7XG4gIH1cbiAgQGlmIHVuaXRsZXNzKCRncmlkLWhlaWdodCkgb3IgJGdyaWQtaGVpZ2h0IDwgMCB7XG4gICAgQGVycm9yICckZ3JpZC1oZWlnaHQgcGFyYW1ldGVyIG11c3QgYmUgYSBwb3NpdGl2ZSB1bml0LCBnb3QgI3skZ3JpZC1oZWlnaHR9IGluc3RlYWQnO1xuICB9XG5cbiAgLy8gYmFzZWxpbmVcbiAgQGlmIG5vdCAkYmFzZWxpbmUge1xuICAgICRiYXNlbGluZTogLXBsdW1iZXItZ2V0LWRlZmF1bHQoYmFzZWxpbmUpO1xuICB9XG4gIEBpZiBub3QgJGJhc2VsaW5lIHtcbiAgICBAZXJyb3IgJyRiYXNlbGluZSBtdXN0IGJlIHBhc3NlZCBhcyBhIHBhcmFtZXRlciBvciBkZWZpbmVkIGluIGRlZmF1bHRzJztcbiAgfSBAZWxzZSBpZiBub3QgKHVuaXRsZXNzKCRiYXNlbGluZSkgYW5kICRiYXNlbGluZSA+PSAwIGFuZCAkYmFzZWxpbmUgPCAxKSB7XG4gICAgQGVycm9yICckYmFzZWxpbmUgcGFyYW1ldGVyIG11c3QgYmUgYSB1bml0bGVzcyBmcmFjdGlvbiBiZXR3ZWVuIDAgYW5kIDEsIGdvdCAjeyRiYXNlbGluZX0gaW5zdGVhZCc7XG4gIH1cblxuICAvLyB1c2UtYmFzZWxpbmUtb3JpZ2luXG4gIEBpZiBub3QgJHVzZS1iYXNlbGluZS1vcmlnaW4ge1xuICAgICR1c2UtYmFzZWxpbmUtb3JpZ2luOiAtcGx1bWJlci1nZXQtZGVmYXVsdCh1c2UtYmFzZWxpbmUtb3JpZ2luKTtcbiAgfVxuICBAaWYgdHlwZS1vZigkdXNlLWJhc2VsaW5lLW9yaWdpbikgIT0gYm9vbCB7XG4gICAgQGVycm9yICckdXNlLWJhc2VsaW5lLW9yaWdpbiBwYXJhbWV0ZXIgbXVzdCBiZSBCb29sZWFuLCBnb3QgI3skdXNlLWJhc2VsaW5lLW9yaWdpbn0gaW5zdGVhZCc7XG4gIH1cblxuICAvLyBib3JkZXJcbiAgQGlmIG5vdCAkYm9yZGVyIHtcbiAgICAkYm9yZGVyOiAtcGx1bWJlci1nZXQtZGVmYXVsdChib3JkZXIpO1xuICB9XG4gIEBpZiBub3QgJGJvcmRlciB7XG4gICAgQGVycm9yICckYm9yZGVyIG11c3QgYmUgcGFzc2VkIGFzIGEgcGFyYW1ldGVyIG9yIGRlZmluZWQgaW4gZGVmYXVsdHMnO1xuICB9XG5cbiAgLy8gKioqIENBTENVTEFURSBCQVNFTElORSBDT1JSRUNUSU9OICoqKlxuICAvLyB0aGUgZGlzdGFuY2Ugb2YgdGhlIG9yaWdpbmFsIGJhc2VsaW5lIGZyb20gdGhlIGJvdHRvbVxuICAkYmFzZWxpbmUtZnJvbS1ib3R0b206ICgkbGluZS1oZWlnaHQgLSAkZm9udC1zaXplKSAvIDIgKyAoJGZvbnQtc2l6ZSAqICRiYXNlbGluZSk7XG4gIC8vIHRoZSBjb3JyZWN0ZWQgYmFzZWxpbmUgd2lsbCBiZSBvbiB0aGUgbmVhcmVzdCBncmlkbGluZVxuICAkY29ycmVjdGVkLWJhc2VsaW5lOiByb3VuZCgkYmFzZWxpbmUtZnJvbS1ib3R0b20pO1xuICAvLyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBvcmlnaW5hbCBhbmQgdGhlIGNvcnJlY3RlZCBiYXNlbGluZVxuICAkYmFzZWxpbmUtZGlmZmVyZW5jZTogJGNvcnJlY3RlZC1iYXNlbGluZSAtICRiYXNlbGluZS1mcm9tLWJvdHRvbTtcblxuICAvLyBpZiBiYXNlbGluZSBvcmlnaW4gaXMgdXNlZCBmb3IgbGVhZGluZ3Mgc3Vic3RyYWN0IHRoZSBkaXN0YW5jZSBvZiB0aGUgYmFzZWxpbmUgZnJvbSB0aGUgZWRnZXNcbiAgQGlmICR1c2UtYmFzZWxpbmUtb3JpZ2luID09IHRydWUge1xuICAgICRsZWFkaW5nLXRvcDogJGxlYWRpbmctdG9wIC0gKCRsaW5lLWhlaWdodCAtICRjb3JyZWN0ZWQtYmFzZWxpbmUpO1xuICAgICRsZWFkaW5nLWJvdHRvbTogJGxlYWRpbmctYm90dG9tIC0gJGNvcnJlY3RlZC1iYXNlbGluZTtcbiAgfVxuXG4gIC8vICoqKiBDQUxDVUxBVEUgRk9OVCBTSVpFIEFORCBMSU5FIEhFSUdIVFxuICAkZm9udC1zaXplOiAkZm9udC1zaXplICogJGdyaWQtaGVpZ2h0O1xuICAkbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodCAqICRncmlkLWhlaWdodDtcblxuICAvLyAqKiogQ0FMQ1VMQVRFIE1BUkdJTlMgQU5EIFBBRERJTkdTICoqKlxuICAkcGFkZGluZy10b3A6IG51bGw7XG4gICRtYXJnaW4tdG9wOiBudWxsO1xuICAkbWFyZ2luLWJvdHRvbTogbnVsbDtcbiAgJHBhZGRpbmctYm90dG9tOiBudWxsO1xuXG4gIEBpZiAkYmFzZWxpbmUtZGlmZmVyZW5jZSA8IDAge1xuICAgIC8vIGFkZCB0b3AgbGVhZGluZ1xuICAgICRtYXJnaW4tdG9wOiAkbGVhZGluZy10b3AgKiAkZ3JpZC1oZWlnaHQ7XG4gICAgLy8gcHVzaCB0aGUgYmFzZWxpbmUgZG93biB0byB0aGUgbmV4dCBncmlkbGluZVxuICAgICRwYWRkaW5nLXRvcDogLSRiYXNlbGluZS1kaWZmZXJlbmNlICogJGdyaWQtaGVpZ2h0IC0gJGJvcmRlcjtcbiAgICAvLyBhZGQgdGhlIHJlbWFpbmluZyBkaXN0YW5jZSB0byByZWFjaCB0aGUgbmV4dCBncmlkbGluZVxuICAgICRwYWRkaW5nLWJvdHRvbTogKDEgKyAkYmFzZWxpbmUtZGlmZmVyZW5jZSkgKiAkZ3JpZC1oZWlnaHQgLSAkYm9yZGVyO1xuICAgIC8vIGFkZCBib3R0b20gbGVhZGluZyBhbmQgcmVtb3ZlIHRoZSAxIGV4Y2VzcyBncmlkIGhlaWdodCB0aGF0IGNvbWVzIGZyb20gcHVzaGluZyBkb3duXG4gICAgJG1hcmdpbi1ib3R0b206ICgkbGVhZGluZy1ib3R0b20gLSAxKSAqICRncmlkLWhlaWdodDtcbiAgfSBAZWxzZSB7XG4gICAgLy8gYWRkIHRvcCBsZWFkaW5nIGFuZCByZW1vdmUgdGhlIDEgZXhjZXNzIGdyaWQgaGVpZ2h0IHRoYXQgY29tZXMgZnJvbSBwdWxsaW5nIHVwXG4gICAgJG1hcmdpbi10b3A6ICgkbGVhZGluZy10b3AgLSAxKSAqICRncmlkLWhlaWdodDtcbiAgICAvLyBwdWxsIHRoZSBiYXNlbGluZSB1cCB0byB0aGUgcHJldmlvdXMgZ3JpZGxpbmVcbiAgICAkcGFkZGluZy10b3A6ICgxIC0gJGJhc2VsaW5lLWRpZmZlcmVuY2UpICogJGdyaWQtaGVpZ2h0IC0gJGJvcmRlcjtcbiAgICAvLyBhZGQgdGhlIHJlbWFpbmluZyBkaXN0YW5jZSB0byByZWFjaCB0aGUgbmV4dCBncmlkbGluZVxuICAgICRwYWRkaW5nLWJvdHRvbTogJGJhc2VsaW5lLWRpZmZlcmVuY2UgKiAkZ3JpZC1oZWlnaHQgLSAkYm9yZGVyO1xuICAgIC8vIGFkZCBib3R0b20gbGVhZGluZ1xuICAgICRtYXJnaW4tYm90dG9tOiAkbGVhZGluZy1ib3R0b20gKiAkZ3JpZC1oZWlnaHQ7XG4gIH1cblxuICAvLyByb3VuZCBwaXhlbCB2YWx1ZXMgdG8gZGVjcmVhc2UgYnJvd3NlciBpbmNvbnNpc3RlbmNpZXNcbiAgQGlmIHVuaXQoJGdyaWQtaGVpZ2h0KSA9PSAncHgnIHtcbiAgICAkbGluZS1oZWlnaHQ6IC1wbHVtYmVyLXJvdW5kKCRsaW5lLWhlaWdodCk7XG4gICAgJG1hcmdpbi10b3A6IC1wbHVtYmVyLXJvdW5kKCRtYXJnaW4tdG9wKTtcbiAgICAkcGFkZGluZy10b3A6IC1wbHVtYmVyLXJvdW5kKCRwYWRkaW5nLXRvcCk7XG4gICAgJHBhZGRpbmctYm90dG9tOiAtcGx1bWJlci1yb3VuZCgkcGFkZGluZy1ib3R0b20pO1xuICAgICRtYXJnaW4tYm90dG9tOiAtcGx1bWJlci1yb3VuZCgkbWFyZ2luLWJvdHRvbSk7XG4gIH1cblxuICAvLyAqKiogUFJPUEVSVFkgT1VUUFVUICoqKlxuICBAcmV0dXJuIChcbiAgICBmb250LXNpemU6ICRmb250LXNpemUsXG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodCxcbiAgICBtYXJnaW4tdG9wOiAkbWFyZ2luLXRvcCxcbiAgICBwYWRkaW5nLXRvcDogJHBhZGRpbmctdG9wLFxuICAgIHBhZGRpbmctYm90dG9tOiAkcGFkZGluZy1ib3R0b20sXG4gICAgbWFyZ2luLWJvdHRvbTogJG1hcmdpbi1ib3R0b21cbiAgKTtcbn1cblxuQG1peGluIHBsdW1iZXIoXG4gICRmb250LXNpemU6IG51bGwsXG4gICRsaW5lLWhlaWdodDogbnVsbCxcbiAgJGxlYWRpbmctdG9wOiBudWxsLFxuICAkbGVhZGluZy1ib3R0b206IG51bGwsXG4gICRncmlkLWhlaWdodDogbnVsbCxcbiAgJGJhc2VsaW5lOiBudWxsLFxuICAkdXNlLWJhc2VsaW5lLW9yaWdpbjogbnVsbCxcbiAgJGJvcmRlcjogbnVsbFxuKSB7XG4gICRwbHVtYmVyLXJlc3VsdDogcGx1bWJlci1jYWxjKFxuICAgICRmb250LXNpemUsXG4gICAgJGxpbmUtaGVpZ2h0LFxuICAgICRsZWFkaW5nLXRvcCxcbiAgICAkbGVhZGluZy1ib3R0b20sXG4gICAgJGdyaWQtaGVpZ2h0LFxuICAgICRiYXNlbGluZSxcbiAgICAkdXNlLWJhc2VsaW5lLW9yaWdpbixcbiAgICAkYm9yZGVyXG4gICk7XG5cbiAgLy8gKioqIENTUyBPVVRQVVQgKioqXG4gIGZvbnQtc2l6ZTogbWFwLWdldCgkcGx1bWJlci1yZXN1bHQsIGZvbnQtc2l6ZSk7XG4gIGxpbmUtaGVpZ2h0OiBtYXAtZ2V0KCRwbHVtYmVyLXJlc3VsdCwgbGluZS1oZWlnaHQpO1xuICBtYXJnaW4tdG9wOiBtYXAtZ2V0KCRwbHVtYmVyLXJlc3VsdCwgbWFyZ2luLXRvcCk7XG4gIHBhZGRpbmctdG9wOiBtYXAtZ2V0KCRwbHVtYmVyLXJlc3VsdCwgcGFkZGluZy10b3ApO1xuICBwYWRkaW5nLWJvdHRvbTogbWFwLWdldCgkcGx1bWJlci1yZXN1bHQsIHBhZGRpbmctYm90dG9tKTtcbiAgbWFyZ2luLWJvdHRvbTogbWFwLWdldCgkcGx1bWJlci1yZXN1bHQsIG1hcmdpbi1ib3R0b20pO1xufVxuIiwiLypcbiAqIFBsdW1iZXIgYmFzZWxpbmUgZGVmaW5pdGlvbiBmaWxlXG4gKi9cblxuQGluY2x1ZGUgcGx1bWJlci1zZXQtZGVmYXVsdHMoXG4gICRmb250LXNpemU6IHJlbW92ZS11bml0KCRiYXNlLWZvbnQtc2l6ZSkgLyByZW1vdmUtdW5pdCgkYmFzZWxpbmUtZ3JpZC1oZWlnaHQpLFxuICAkYmFzZWxpbmU6ICRiYXNlbGluZS1oaWx0aS1yb21hbixcbiAgJGdyaWQtaGVpZ2h0OiAkYmFzZWxpbmUtZ3JpZC1oZWlnaHQsXG4gICRsZWFkaW5nLWJvdHRvbTogMixcbiAgJGxpbmUtaGVpZ2h0OiAyXG4pO1xuXG5AaWYgKCRpbmNsdWRlQmFzZWxpbmUpIHtcbiAgLy8gUGx1bWJlclxuICAlcGx1bWJlci1nZW5lcmljIHtcbiAgICBAaW5jbHVkZSBwbHVtYmVyKCk7XG4gIH1cblxuICAlcGx1bWJlci1nZW5lcmljLWxlYWRpbmctMC0wIHtcbiAgICBAaW5jbHVkZSBwbHVtYmVyKCRsZWFkaW5nLXRvcDogMCwgJGxlYWRpbmctYm90dG9tOiAwKTtcbiAgfVxuXG4gICVwbHVtYmVyLWdlbmVyaWMtbGVhZGluZy0xLTAge1xuICAgIEBpbmNsdWRlIHBsdW1iZXIoJGxlYWRpbmctdG9wOiAxLCAkbGVhZGluZy1ib3R0b206IDApO1xuICB9XG5cbiAgJXBsdW1iZXItZ2VuZXJpYy1sZWFkaW5nLTEtMiB7XG4gICAgQGluY2x1ZGUgcGx1bWJlcigkbGVhZGluZy10b3A6IDEsICRsZWFkaW5nLWJvdHRvbTogMik7XG4gIH1cblxuICAlcGx1bWJlci1nZW5lcmljLWxlYWRpbmctMS0wLWJvcmRlciB7XG4gICAgQGluY2x1ZGUgcGx1bWJlcigkbGVhZGluZy10b3A6IDEsICRsZWFkaW5nLWJvdHRvbTogMCwgJGJvcmRlcjogJGJvcmRlci13aWR0aCk7XG4gIH1cblxuICAlcGx1bWJlci1nZW5lcmljLWJvbGQge1xuICAgIEBpbmNsdWRlIHBsdW1iZXIoJGJhc2VsaW5lOiAkYmFzZWxpbmUtaGlsdGktYm9sZCk7XG4gIH1cblxuICAlcGx1bWJlci1saSB7XG4gICAgQGluY2x1ZGUgcGx1bWJlcigkbGVhZGluZy1ib3R0b206IDApO1xuICB9XG5cbiAgJXBsdW1iZXItdGV4dC1zbWFsbCB7XG4gICAgQGluY2x1ZGUgcGx1bWJlcigkZm9udC1zaXplOiAxMyAvIHJlbW92ZS11bml0KCRiYXNlbGluZS1ncmlkLWhlaWdodCksICRsZWFkaW5nLWJvdHRvbTogMCk7XG4gIH1cblxuICAlcGx1bWJlci10ZXh0LXNtYWxsLWJvbGQge1xuICAgIEBpbmNsdWRlIHBsdW1iZXIoXG4gICAgICAkZm9udC1zaXplOiAxMyAvIHJlbW92ZS11bml0KCRiYXNlbGluZS1ncmlkLWhlaWdodCksXG4gICAgICAkbGVhZGluZy1ib3R0b206IDAsXG4gICAgICAkYmFzZWxpbmU6ICRiYXNlbGluZS1oaWx0aS1ib2xkXG4gICAgKTtcbiAgfVxuXG4gICVwbHVtYmVyLWhlYWRpbmctbGFyZ2Uge1xuICAgIEBpbmNsdWRlIHBsdW1iZXIoJGZvbnQtc2l6ZTogNCwgJGxpbmUtaGVpZ2h0OiA0KTtcbiAgfVxuXG4gICVwbHVtYmVyLWhlYWRpbmctbWVkaXVtIHtcbiAgICBAaW5jbHVkZSBwbHVtYmVyKCRmb250LXNpemU6IDIpO1xuICB9XG5cbiAgJXBsdW1iZXItaGVhZGluZy1zbWFsbCB7XG4gICAgQGluY2x1ZGUgcGx1bWJlcigkZm9udC1zaXplOiAxOCAvIHJlbW92ZS11bml0KCRiYXNlbGluZS1ncmlkLWhlaWdodCkpO1xuICB9XG5cbiAgJXBsdW1iZXItaGVhZGluZy1tZWRpdW0tYm9sZCB7XG4gICAgQGluY2x1ZGUgcGx1bWJlcigkYmFzZWxpbmU6ICRiYXNlbGluZS1oaWx0aS1ib2xkLCAkZm9udC1zaXplOiAyKTtcbiAgfVxuXG4gICVwbHVtYmVyLWN1c3RvbS1pbnB1dCB7XG4gICAgQGluY2x1ZGUgcGx1bWJlcigkbGVhZGluZy10b3A6IDEsICRsZWFkaW5nLWJvdHRvbTogMCk7XG4gIH1cblxuICAlcGx1bWJlci1idXR0b24tYm9yZGVyIHtcbiAgICBAaW5jbHVkZSBwbHVtYmVyKCRsZWFkaW5nLXRvcDogMiwgJGxlYWRpbmctYm90dG9tOiAyLCAkYm9yZGVyOiAkYm9yZGVyLXdpZHRoKTtcbiAgfVxufVxuXG4kcGx1bWJlci1jdXN0b20taW5wdXQtdmFsdWVzOiBwbHVtYmVyLWNhbGMoXG4gICRsZWFkaW5nLXRvcDogMSxcbiAgJGxlYWRpbmctYm90dG9tOiAwXG4pICFkZWZhdWx0O1xuIiwiLy8gVE9ETzogSW5jbHVkZXMgMi4wIHZlcnNpb25cblxuQGltcG9ydCAnLi4vLi4vYXNzZXRzL3N0eWxlc2hlZXRzL3VpLWNvcmUtY29tbW9uJztcblxuJHRleHQtYmxvY2staWNvbi1zaXplOiAxOHB4O1xuJHRleHQtYmxvY2staG9yaXpvbnRhbC1zcGFjaW5nOiAxMHB4O1xuXG46aG9zdCB7XG4gIEBleHRlbmQgJXBsdW1iZXItZ2VuZXJpYy1sZWFkaW5nLTAtMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAmLmhhcy1iZyB7XG4gICAgQGV4dGVuZCAlcGx1bWJlci1nZW5lcmljLWxlYWRpbmctMS0yO1xuICAgIHBhZGRpbmctbGVmdDogJHRleHQtYmxvY2staG9yaXpvbnRhbC1zcGFjaW5nO1xuICAgIHBhZGRpbmctcmlnaHQ6ICR0ZXh0LWJsb2NrLWhvcml6b250YWwtc3BhY2luZztcbiAgICBjb2xvcjogJHdoaXRlO1xuICB9XG59XG5cbi51aS1jb3JlLXRleHQtY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/text/text.component.ts":
/*!*******************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/text/text.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var TextComponent = /** @class */ (function () {
    function TextComponent() {
        this.class = '';
        this.bgColor = '';
        this.classList = 'ui-core-text';
    }
    TextComponent.prototype.ngOnInit = function () {
        if (this.class) {
            this.classList += " " + this.class;
        }
        if (this.bgColor) {
            this.classList += " " + this.bgColor + " has-bg";
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextComponent.prototype, "class", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextComponent.prototype, "bgColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextComponent.prototype, "classList", void 0);
    TextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ui-core-text',
            template: __webpack_require__(/*! ./text.component.html */ "../../libs/shared/ui-core/src/lib/text/text.component.html"),
            styles: [__webpack_require__(/*! ./text.component.scss */ "../../libs/shared/ui-core/src/lib/text/text.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TextComponent);
    return TextComponent;
}());



/***/ }),

/***/ "../../libs/shared/ui-core/src/lib/text/text.module.ts":
/*!****************************************************************************************!*\
  !*** /Users/mel/holng/dev/layout/hdms/libs/shared/ui-core/src/lib/text/text.module.ts ***!
  \****************************************************************************************/
/*! exports provided: TextModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextModule", function() { return TextModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text.component */ "../../libs/shared/ui-core/src/lib/text/text.component.ts");




var TextModule = /** @class */ (function () {
    function TextModule() {
    }
    TextModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_text_component__WEBPACK_IMPORTED_MODULE_3__["TextComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_text_component__WEBPACK_IMPORTED_MODULE_3__["TextComponent"]]
        })
    ], TextModule);
    return TextModule;
}());



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TEXT COMPONENT -->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-48\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <h3 class=\"heading-sm text-uppercase text-red\">Text component</h3>\n\n          <ui-core-text>\n            <span content>\n              Simple\n              <strong>text</strong>\n              component\n            </span>\n            <ui-core-svg-icon icon-before icon=\"arrow_down\" width=\"18\"></ui-core-svg-icon>\n            <ui-core-svg-icon icon-after-1 icon=\"clock\" width=\"18\" title=\"ARIA friendly title\"></ui-core-svg-icon>\n            <ui-core-svg-icon icon-after-2 icon=\"clock\" width=\"18\" title=\"ARIA friendly title\"></ui-core-svg-icon>\n            <ui-core-svg-icon icon-after-3 icon=\"clock\" width=\"18\" title=\"ARIA friendly title\"></ui-core-svg-icon>\n          </ui-core-text>\n\n          <ui-core-text>\n            <span content>\n              Simple\n              <strong>text</strong>\n              component\n            </span>\n            <ui-core-svg-icon icon-before icon=\"arrow_down\" width=\"18\"></ui-core-svg-icon>\n            <ui-core-svg-icon icon-after-1 icon=\"clock\" width=\"18\" title=\"ARIA friendly title\"></ui-core-svg-icon>\n            <ui-core-svg-icon icon-after-2 icon=\"clock\" width=\"18\" title=\"ARIA friendly title\"></ui-core-svg-icon>\n            <ui-core-svg-icon icon-after-3 icon=\"clock\" width=\"18\" title=\"ARIA friendly title\"></ui-core-svg-icon>\n          </ui-core-text>\n\n          <ui-core-text contentClasses=\"text-white\" bgColor=\"bg-primary\" class=\"mb-2\">\n            <span content>\n              Simple\n              <strong>text</strong>\n              component\n            </span>\n            <ui-core-svg-icon icon-before icon=\"arrow_down\" width=\"18\"></ui-core-svg-icon>\n            <ui-core-svg-icon icon-after-1 icon=\"arrow_down\" width=\"18\"></ui-core-svg-icon>\n            <ui-core-svg-icon icon-after-2 icon=\"clock\" width=\"18\" title=\"ARIA friendly title\"></ui-core-svg-icon>\n            <ui-core-svg-icon icon-after-3 icon=\"clock\" width=\"18\" title=\"ARIA friendly title\"></ui-core-svg-icon>\n          </ui-core-text>\n        </div>\n\n        <div class=\"box bg-disabled d-flex align-items-center bl-h-10\">\n          <ui-core-text class=\"my-0\">\n            <span content>\n              Simple\n              <strong>text</strong>\n              component\n            </span>\n            <ui-core-svg-icon icon-before icon=\"arrow_down\" width=\"18\"></ui-core-svg-icon>\n            <ui-core-svg-icon icon-after-1 icon=\"clock\" width=\"18\" title=\"ARIA friendly title\"></ui-core-svg-icon>\n            <ui-core-svg-icon icon-after-2 icon=\"clock\" width=\"18\" title=\"ARIA friendly title\"></ui-core-svg-icon>\n            <ui-core-svg-icon icon-after-3 icon=\"clock\" width=\"18\" title=\"ARIA friendly title\"></ui-core-svg-icon>\n          </ui-core-text>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- LIST STYLES -->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-10\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <p class=\"mb-0\">Some copy. Some copy for reference. Some copy. Some copy for reference.</p>\n          <ul>\n            <li>Some text</li>\n            <li>Some text that goes beyond two lines</li>\n          </ul>\n\n          <h4 class=\"heading-sm text-bold mb-0\">Heading reference</h4>\n          <ul>\n            <li>Some text</li>\n            <li>Some text that goes beyond two lines</li>\n          </ul>\n          <ul>\n            <li>\n              Bullet can have\n              <a href=\"#\">link</a>\n              or\n              <strong>bold</strong>\n              or\n              <em>italic</em>\n              inside it\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-10\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <p class=\"mb-0\">Some copy. Some copy for reference. Some copy. Some copy for reference.</p>\n          <ol>\n            <li>Some text</li>\n            <li>Some text that goes beyond two lines</li>\n          </ol>\n\n          <h4 class=\"heading-sm text-bold mb-0\">Heading reference</h4>\n          <ol>\n            <li>Some text</li>\n            <li>Some text that goes beyond two lines</li>\n          </ol>\n          <ol>\n            <li>\n              Bullet can have\n              <a href=\"#\">link</a>\n              or\n              <strong>bold</strong>\n              or\n              <em>italic</em>\n              inside it\n            </li>\n          </ol>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- container height -->\n<div class=\"container-fluid bg-secondary bl-h-10 bl-h-md-5\">\n  <div class=\"row\">\n    <div class=\"col-48\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <p>\n            <strong>\n              box within 48 column which is 10 lines high on xs upwards and 5 high md upwards\n            </strong>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- container height overflow hidden -->\n<div class=\"container-fluid bg-success bl-h-20 bl-h-md-10\">\n  <div class=\"row\">\n    <div class=\"col-48\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <p>\n            <strong>\n              box within 48 column which is 20 lines high on xs upwards and 10 high md upwards (overfow hidden) default\n            </strong>\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- container height overflow auto -->\n<div class=\"container-fluid bg-success bl-h-20 bl-h-md-10 overflow-auto\">\n  <div class=\"row\">\n    <div class=\"col-48\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <p>\n            <strong>\n              box within 48 column which is 20 lines high on xs upwards and 10 high md upwards with overflow auto\n            </strong>\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- box height -->\n<div class=\"container-fluid \">\n  <div class=\"row\">\n    <div class=\"col-48\">\n      <div class=\"box-group\">\n        <div class=\"box bg-secondary bl-h-10 bl-h-md-5\">\n          <p>\n            <strong>\n              box which is 10 lines high on xs upwards and 5 high md upwards within 48 column\n            </strong>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- box height overflow hidden -->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-48\">\n      <div class=\"box-group\">\n        <div class=\"box bg-success bl-h-20 bl-h-md-10\">\n          <p>\n            <strong>\n              box which is 20 lines high on xs upwards and 10 high md upwards (overfow hidden) default within 48 column\n            </strong>\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- box height overflow auto -->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-48\">\n      <div class=\"box-group\">\n        <div class=\"box  bg-success bl-h-20 bl-h-md-10 overflow-auto\">\n          <p>\n            <strong>\n              box which is 20 lines high on xs upwards and 10 high md upwards with overflow auto within 48 column\n            </strong>\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n            new line\n            <br />\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- container height -->\n<div class=\"container-fluid bg-secondary bl-h-10 bl-h-md-5\">\n  <div class=\"row\">\n    <div class=\"col-48\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <p>\n            <strong>\n              box within 48 column which is 10 lines high on xs upwards and 5 high md upwards\n            </strong>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- container - box relation -->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-48\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <p><strong>box within 48 column</strong></p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-48\">\n      <div class=\"box-group\">\n        <div class=\"box bg-disabled\">\n          <p><strong>box with background within 48 column</strong></p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-48\">\n      <div class=\"box-group\">\n        <div class=\"box bg-disabled\">\n          <p>\n            <strong>\n              2 boxes with background within 48 column (box 1) no width definitions\n            </strong>\n          </p>\n        </div>\n        <div class=\"box bg-secondary\">\n          <p>\n            <strong>\n              2 boxes with background within 48 column (box 2) no width definitions\n            </strong>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- container - box width -->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-48\">\n      <div class=\"box-group\">\n        <div class=\"box box-w-1-2 bg-disabled\">\n          <p>50% box</p>\n        </div>\n\n        <div class=\"box box-w-1-2 bg-disabled\">\n          <p>50% box</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-48\">\n      <div class=\"box-group\">\n        <div class=\"box bg-disabled\">\n          <p>100% box</p>\n        </div>\n        <div class=\"box box-w-1-2 bg-disabled\">\n          <p>50% box</p>\n        </div>\n        <div class=\"box box-w-1-4 bg-disabled\">\n          <p>25% box</p>\n        </div>\n        <div class=\"box box-w-1-4 bg-disabled\">\n          <p>25% box</p>\n        </div>\n        <div class=\"box box-w-1-3 bg-disabled\">\n          <p>1/3 box</p>\n        </div>\n        <div class=\"box box-w-2-3 bg-secondary\">\n          <p>2/3 box</p>\n        </div>\n        <div class=\"box box-w-1-6 bg-disabled\">\n          <p>1/6 box</p>\n        </div>\n        <div class=\"box box-w-1-6 bg-info\">\n          <p>1/6 box</p>\n        </div>\n        <div class=\"box box-w-1-6 bg-success\">\n          <p>1/6 box</p>\n        </div>\n        <div class=\"box box-w-1-6 bg-warning\">\n          <p>1/6 box</p>\n        </div>\n        <div class=\"box box-w-1-6 bg-danger\">\n          <p>1/6 box</p>\n        </div>\n        <div class=\"box box-w-1-6 bg-dark\">\n          <p>1/6 box</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- container - dynamic boxes -->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-48\">\n      <div class=\"box-group flex-nowrap\">\n        <div class=\"box box-w-content bg-disabled\">\n          <p>\n            fit to content box\n            <br />\n            can occur only within column with flex-nowrap\n          </p>\n        </div>\n        <div class=\"box bg-warning\">\n          <p>fill up box - default behaviour without width in a nowrap column</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-48\">\n      <div class=\"box-group flex-nowrap\">\n        <div class=\"box box-w-1-6 bg-disabled\">\n          <p>1/6 box</p>\n        </div>\n        <div class=\"box bg-warning\">\n          <p>fill up box - default behaviour without width in a nowrap column</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- container backgrounds -->\n<div class=\"container-fluid bg-secondary\">\n  <div class=\"row\">\n    <div class=\"col-24\">\n      <div class=\"box-group\">\n        <div class=\"box bg-disabled\">\n          <p>\n            <strong>\n              box with background within a 24 col in a container fluid with background\n            </strong>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- container backgrounds -->\n<div class=\"container-fluid bg-image\">\n  <div class=\"bg-image-container\">\n    <img\n      alt=\"this is a placeholder\"\n      src=\"https://www.hilti.de/content/hilti/E3/DE/de/homepage/jcr:content/teaserSet3ItemsWrapper/defaultVariant/teaser2.img.1920.medium.jpg/1557213898681.jpg\"\n    />\n  </div>\n  <div class=\"row\">\n    <div class=\"col-24 offset-24\">\n      <div class=\"box-group\">\n        <div class=\"box bg-disabled\">\n          <p>\n            <strong>\n              box with background within a 24 col with 24 offset in a container fluid with background image\n            </strong>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- TEXT & COLORS -->\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-48\">\n      <div class=\"box-group\">\n        <div class=\"box py-0 my-0\">\n          <p><strong>Boxes with Background</strong></p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <!-- paddings -->\n    <div class=\"col-12\">\n      <div class=\"box-group\">\n        <div class=\"box bg-disabled\">\n          <p>Box with bg-disabled</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-12\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <p>Box without background</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-12\">\n      <div class=\"box-group\">\n        <div class=\"box bg-image\">\n          <div class=\"bg-image-container\">\n            <img\n              alt=\"this is a placeholder\"\n              src=\"https://www.hilti.de/content/hilti/E3/DE/de/homepage/jcr:content/teaserSet3ItemsWrapper/defaultVariant/teaser2.img.1920.medium.jpg/1557213898681.jpg\"\n            />\n          </div>\n          <div class=\"position-relative\">\n            <p>\n              Box with image background - image rules apply TBD - required an additional relative container\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-48\">\n      <div class=\"box-group\">\n        <div class=\"box py-0 my-0\">\n          <p><strong>Boxes - Padding (bg-disabled applied to boxes)</strong></p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <!-- paddings -->\n    <div class=\"col-12\">\n      <div class=\"box-group\">\n        <div class=\"box bg-disabled\">\n          <p>\n            Default box:\n            <strong>box</strong>\n            <br />\n            0 padding (default),\n            <br />\n            0 margin (default),\n            <br />\n            0 border (default)\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"box-group\">\n        <div class=\"box py-0 bg-disabled\">\n          <p>\n            Box:\n            <strong>box py-0</strong>\n            <br />\n            0 padding,\n            <br />\n            0 margin (default),\n            <br />\n            0 border (default)\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12\">\n      <div class=\"box-group\">\n        <div class=\"box py-1 bg-disabled\">\n          <p>\n            Box:\n            <strong>box py-1</strong>\n            <br />\n            1 padding,\n            <br />\n            0 margin (default),\n            <br />\n            0 border (default)\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12\">\n      <div class=\"box-group\">\n        <div class=\"box py-2 bg-disabled\">\n          <p>\n            Box:\n            <strong>box py-2</strong>\n            <br />\n            2 padding,\n            <br />\n            0 margin (default),\n            <br />\n            0 border (default)\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"box-group\">\n        <div class=\"box pt-1 bg-disabled\">\n          <p>\n            Box:\n            <strong>box pt-1</strong>\n            <br />\n            1 padding top,\n            <br />\n            0 padding bottom,\n            <br />\n            0 margin (default),\n            <br />\n            0 border (default)\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12\">\n      <div class=\"box-group\">\n        <div class=\"box pt-2 bg-disabled\">\n          <p>\n            Box:\n            <strong>box pt-2</strong>\n            <br />\n            2 padding top,\n            <br />\n            0 padding bottom,\n            <br />\n            0 margin (default),\n            <br />\n            0 border (default)\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"box-group\">\n        <div class=\"box pb-1 bg-disabled\">\n          <p>\n            Box:\n            <strong>box pb-1</strong>\n            <br />\n            0 padding top,\n            <br />\n            1 padding bottom,\n            <br />\n            0 margin (default),\n            <br />\n            0 border (default)\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12\">\n      <div class=\"box-group\">\n        <div class=\"box pb-2 bg-disabled\">\n          <p>\n            Box:\n            <strong>box pb-2</strong>\n            <br />\n            0 padding top,\n            <br />\n            2 padding bottom,\n            <br />\n            0 margin (default),\n            <br />\n            0 border (default)\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <!-- margins -->\n  <div class=\"row\">\n    <div class=\"col-48\">\n      <div class=\"box-group\">\n        <div class=\"box py-0 my-0\">\n          <p><strong>Boxes - Margins (bg-disabled applied to boxes)</strong></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid bg-info\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"box-group\">\n        <div class=\"box bg-disabled\">\n          <p>\n            Default box:\n            <strong>box</strong>\n            <br />\n            0 padding (default),\n            <br />\n            0 margin (default),\n            <br />\n            0 border (default)\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-12\">\n      <div class=\"box-group\">\n        <div class=\"box mb-4 bg-disabled\">\n          <p>\n            Box:\n            <strong>box mb-4</strong>\n            <br />\n            0 padding (default),\n            <br />\n            4 margin bottom,\n            <br />\n            0 border (default)\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-12\">\n      <div class=\"box-group\">\n        <div class=\"box mb-2 bg-disabled\">\n          <p>\n            Box:\n            <strong>box mb-2</strong>\n            <br />\n            0 padding (default),\n            <br />\n            2 margin bottom,\n            <br />\n            0 border (default)\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-12\">\n      <div class=\"box-group\">\n        <div class=\"box mb-1 bg-disabled\">\n          <p>\n            Box:\n            <strong>box mb-1</strong>\n            <br />\n            0 padding (default),\n            <br />\n            1 margin,\n            <br />\n            0 border (default)\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid bg-info\">\n  <!-- borders -->\n  <div class=\"row\">\n    <div class=\"col-48\">\n      <div class=\"box-group\">\n        <div class=\"box py-0 my-0\">\n          <p>\n            <strong>\n              Boxes - Borders\n              <br />\n              It is not allowed to combine 0 padding (y/t/b) with border!\n              <br />\n              bg-disabled applied to boxes\n            </strong>\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12\">\n      <div class=\"box-group\">\n        <div class=\"box bg-disabled\">\n          <p>\n            Default box:\n            <strong>box</strong>\n            <br />\n            0 padding (default),\n            <br />\n            0 margin (default),\n            <br />\n            0 border (default)\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-12\">\n      <div class=\"box-group\">\n        <div class=\"box border border-primary bg-disabled\">\n          <p>\n            Default box:\n            <strong>box border</strong>\n            <br />\n            0 padding (default),\n            <br />\n            0 margin (default),\n            <br />\n            1 border\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-12\">\n      <div class=\"box-group\">\n        <div class=\"box py-1 border border-primary bg-disabled\">\n          <p>\n            Box:\n            <strong>box py-1 border</strong>\n            <br />\n            1 padding,\n            <br />\n            0 margin (default),\n            <br />\n            1 border\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col col-48\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <h3 class=\"heading-sm text-uppercase text-red\">Core text rules</h3>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-20\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <h1 class=\"heading-lg\">Heading Large</h1>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-14\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <h1 class=\"heading-md\">Heading Medium</h1>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-14\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <h1 class=\"heading-sm\">Heading Small</h1>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-20\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <h1 class=\"heading-lg text-uppercase text-red\">\n            Heading Large Marketing\n          </h1>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-14\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <h1 class=\"heading-md text-bold text-burgundy\">Heading Marketing 2</h1>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-14\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <h1 class=\"heading-md text-uppercase text-red\">Heading Utility</h1>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-20\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <p>\n            Text Regular/Body &mdash; Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam doloribus aut est\n            delectus voluptatum natus placeat eveniet magnam asperiores laborum molestias magni commodi et id quis sit,\n            eum nulla quam.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"offset-4 col-16\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <small class=\"text-sm\">\n            DO NOT USE &lt;small&gt; TAG NESTED AND WITHOUT CLASS\n            <br />\n            Sub-Text &mdash; Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam doloribus aut est delectus\n            voluptatum natus.\n          </small>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-20\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <div class=\"text\">\n            <strong>\n              Text bold/Body bold &mdash; Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam doloribus aut\n              est delectus voluptatum natus placeat eveniet magnam asperiores laborum molestias magni commodi et id quis\n              sit, eum nulla quam.\n            </strong>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"offset-4 col-16\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <div class=\"text text-sm\">\n            <strong>\n              Sub-Text Bold &mdash; Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam doloribus aut est\n              delectus voluptatum natus.\n            </strong>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- COLORS -->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col col-48\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <h3 class=\"heading-sm text-uppercase text-red\">Colors</h3>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-24 col-sm-16 col-md-12 mb-1\">\n      <div class=\"box-group\">\n        <div class=\"box bg-primary text-light\">\n          <p>\n            <strong>Primary</strong>\n            <br />\n            Red #d2051e\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-24 col-sm-16 col-md-12 mb-1\">\n      <div class=\"box-group\">\n        <div class=\"box bg-secondary text-light\">\n          <p>\n            <strong>Secondary</strong>\n            <br />\n            Burgundy #671a3d\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-24 col-sm-16 col-md-12 mb-1\">\n      <div class=\"box-group\">\n        <div class=\"box bg-dark text-light\">\n          <p>\n            <strong>Dark</strong>\n            <br />\n            Steel 100% #524f53\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-24 col-sm-16 col-md-12 mb-1\">\n      <div class=\"box-group\">\n        <div class=\"box bg-light text-dark border\">\n          <p>\n            <strong>Light</strong>\n            <br />\n            White #ffffff\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-24 col-sm-16 col-md-12 mb-1\">\n      <div class=\"box-group\">\n        <div class=\"box bg-neutral-light text-light\">\n          <p>\n            <strong>Neutral light</strong>\n            <br />\n            Warm Concrete 100% #d7cebd\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-24 col-sm-16 col-md-12 mb-1\">\n      <div class=\"box-group\">\n        <div class=\"box bg-neutral-dark text-light\">\n          <p>\n            <strong>Neutral dark</strong>\n            <br />\n            Heavy Concrete 100% #887f6e\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-24 col-sm-16 col-md-12 mb-1\">\n      <div class=\"box-group\">\n        <div class=\"box bg-disabled text-light\">\n          <p>\n            <strong>Disabled</strong>\n            <br />\n            Steel 40% #bab9ba\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col col-24 col-sm-16 col-md-12 mb-1\">\n      <div class=\"box-group\">\n        <div class=\"box border border-primary text-dark\">\n          <p>\n            .border-primary\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-24 col-sm-16 col-md-12 mb-1\">\n      <div class=\"box-group\">\n        <div class=\"box border border-secondary text-dark\">\n          <p>\n            .border-secondary\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-24 col-sm-16 col-md-12 mb-1\">\n      <div class=\"box-group\">\n        <div class=\"box border border-dark text-dark\">\n          <p>\n            .border-dark\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-24 col-sm-16 col-md-12 mb-1\">\n      <div class=\"box-group\">\n        <div class=\"box bg-disabled border-light text-light\">\n          <p>\n            .border-light\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-24 col-sm-16 col-md-12 mb-1\">\n      <div class=\"box-group\">\n        <div class=\"box border border-neutral-light text-dark\">\n          <p>\n            .border-neutral-light\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-24 col-sm-16 col-md-12 mb-1\">\n      <div class=\"box-group\">\n        <div class=\"box border border-neutral-dark text-dark\">\n          <p>\n            .border-neutral-dark\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-24 col-sm-16 col-md-12 mb-1\">\n      <div class=\"box-group\">\n        <div class=\"box border border-disabled text-dark\">\n          <p>\n            .border-disabled\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col col-24 col-sm-16 col-md-12 mb-1\">\n      <div class=\"box-group\">\n        <div class=\"box text-primary\">\n          <p>\n            .text-primary\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-24 col-sm-16 col-md-12 mb-1\">\n      <div class=\"box-group\">\n        <div class=\"box text-secondary\">\n          <p>\n            .text-secondary\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-24 col-sm-16 col-md-12 mb-1\">\n      <div class=\"box-group\">\n        <div class=\"box text-dark\">\n          <p>\n            .text-dark\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-24 col-sm-16 col-md-12 mb-1\">\n      <div class=\"box-group\">\n        <div class=\"box bg-disabled text-light\">\n          <p>\n            .text-light\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-24 col-sm-16 col-md-12 mb-1\">\n      <div class=\"box-group\">\n        <div class=\"box text-neutral-light\">\n          <p>\n            .text-neutral-light\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-24 col-sm-16 col-md-12 mb-1\">\n      <div class=\"box-group\">\n        <div class=\"box text-neutral-dark\">\n          <p>\n            .text-neutral-dark\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-24 col-sm-16 col-md-12 mb-1\">\n      <div class=\"box-group\">\n        <div class=\"box text-disabled\">\n          <p>\n            .text-disabled\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- ICON SYSTEM -->\n<div class=\"container-fluid mt-2\">\n  <div class=\"row\">\n    <div class=\"col col-48\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <h3 class=\"heading-sm text-uppercase text-red\">Icon system</h3>\n          <div class=\"bl-h-10\">\n            <ui-core-svg-icon icon=\"arrow_down\" width=\"32\"></ui-core-svg-icon>\n            <ui-core-svg-icon\n              icon=\"clock\"\n              classes=\"custom-class fill-red\"\n              width=\"48\"\n              title=\"ARIA friendly title\"\n            ></ui-core-svg-icon>\n\n            <ui-core-svg-icon icon=\"search\" width=\"72\"></ui-core-svg-icon>\n          </div>\n          <p>\n            Some text with icon\n            <ui-core-svg-icon icon=\"arrow_down\" verticalAlign=\"middle\"></ui-core-svg-icon>\n          </p>\n          <p>\n            Another text with icon\n            <ui-core-svg-icon icon=\"clock\" verticalAlign=\"middle\"></ui-core-svg-icon>\n          </p>\n          <button class=\"btn btn-primary mr-2\">\n            Search\n            <ui-core-svg-icon icon=\"search\" verticalAlign=\"middle\"></ui-core-svg-icon>\n          </button>\n          <button class=\"btn btn-secondary\">\n            Dropdown\n            <ui-core-svg-icon icon=\"arrow_down\" verticalAlign=\"middle\"></ui-core-svg-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- FORM STYLES -->\n<div class=\"container-fluid mt-5\">\n  <div class=\"row\">\n    <div class=\"col col-48\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <h3 class=\"heading-sm text-uppercase text-red\">Form styles</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n  <form>\n    <div class=\"row\">\n      <div class=\"form-group col-md-16\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <label for=\"inputA\" class=\"mb-0\">Input Label Top</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"inputA\"\n              aria-describedby=\"emailHelp\"\n              placeholder=\"Placeholder text\"\n            />\n            <small id=\"emailHelp\" class=\"form-text text-neutral-dark mt-0\">\n              Input subtext default\n            </small>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group col-md-16\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <label class=\"text-disabled mb-0\" for=\"inputB\">\n              Input Label Top Disabled\n            </label>\n            <input type=\"text\" class=\"form-control\" id=\"inputB\" placeholder=\"Placeholder text\" disabled />\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group col-md-16\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <label class=\"mb-0\" for=\"inputC\">Input Label Top Error</label>\n            <input type=\"text\" class=\"form-control is-invalid\" id=\"inputC\" placeholder=\"Placeholder text\" />\n            <div class=\"invalid-feedback mt-0\">\n              Input Inline Error\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n\n  <!-- horizontal form -->\n  <form>\n    <div class=\"form-group row\">\n      <label for=\"inputEmail3\" class=\"col-sm-16 mb-0 mt-0\">\n        <div class=\"box-group\">\n          <div class=\"box\">Input Label Left</div>\n        </div>\n      </label>\n      <div class=\"col col-sm-32\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" value=\"Typed text\" />\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"inputPassword3\" class=\"text-disabled col-sm-16 mb-0 mt-0\">\n        <div class=\"box-group\">\n          <div class=\"box\">Input Label Left Disabled</div>\n        </div>\n      </label>\n      <div class=\"col col-sm-32\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Placeholder text\" disabled />\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col col-md-24\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <h3 class=\"heading-sm text-red\">Radios</h3>\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" id=\"customRadio1\" name=\"customRadio\" class=\"custom-control-input\" />\n\n              <label class=\"custom-control-label\" for=\"customRadio1\">\n                Radio value default\n              </label>\n            </div>\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" id=\"customRadio2\" name=\"customRadio\" class=\"custom-control-input\" checked />\n              <label class=\"custom-control-label\" for=\"customRadio2\">\n                Radio value active\n              </label>\n            </div>\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" id=\"customRadio3\" name=\"customRadioDisabled\" class=\"custom-control-input\" disabled />\n              <label class=\"custom-control-label\" for=\"customRadio3\">\n                Radio value disabled\n              </label>\n            </div>\n            <div class=\"custom-control custom-radio\">\n              <input\n                type=\"radio\"\n                id=\"customRadio4\"\n                name=\"customRadioDisabled\"\n                class=\"custom-control-input\"\n                checked\n                disabled\n              />\n              <label class=\"custom-control-label\" for=\"customRadio4\">\n                Radio value active disabled\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col col-md-24\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <h3 class=\"heading-sm text-red\">Checkboxes</h3>\n            <div class=\"custom-control custom-checkbox\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\" />\n\n              <label class=\"custom-control-label\" for=\"customCheck1\">\n                Checkbox value default\n              </label>\n            </div>\n            <div class=\"custom-control custom-checkbox\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck2\" checked />\n\n              <label class=\"custom-control-label\" for=\"customCheck2\">\n                Checkbox value active\n              </label>\n            </div>\n            <div class=\"custom-control custom-checkbox\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck2Disabled\" disabled checked />\n\n              <label class=\"custom-control-label\" for=\"customCheck2Disabled\">\n                Checkbox value active disabled\n              </label>\n            </div>\n            <div class=\"custom-control custom-checkbox\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheckDisabled\" disabled />\n              <label class=\"custom-control-label\" for=\"customCheckDisabled\">\n                Checkbox value disabled\n              </label>\n            </div>\n            <div class=\"custom-control custom-checkbox\">\n              <input type=\"checkbox\" class=\"custom-control-input is-invalid\" id=\"customCheckError\" required />\n              <label class=\"custom-control-label\" for=\"customCheckError\">\n                Checkbox value error\n              </label>\n              <div class=\"invalid-feedback\">\n                Error - required field.\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n\n<!-- INPUT FIELD COMPONENT -->\n<div class=\"container-fluid mt-5\">\n  <div class=\"row\">\n    <div class=\"col col-48\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <h3 class=\"heading-sm text-uppercase text-red\">Form components</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <form #form=\"ngForm\" novalidate (ngSubmit)=\"onSubmit(form)\">\n    <div class=\"row\">\n      <div class=\"form-group col-md-16\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <label class=\"mb-0\" for=\"input1\">Input Field (input1)</label>\n            <ui-core-input-field\n              name=\"input1\"\n              inputId=\"input1\"\n              placeholder=\"Placeholder input1\"\n              [(ngModel)]=\"formData.input1.value\"\n              [disabled]=\"formData.input1.disabled\"\n            ></ui-core-input-field>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group col-md-16\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <span class=\"btn btn-primary mt-2\" (click)=\"formData.input1.disabled = !formData.input1.disabled\">\n              Toggle input1 disabled\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-16 mb-0 mt-0\" for=\"input2\">\n        <div class=\"box-group\">\n          <div class=\"box\">Input Field (input2)</div>\n        </div>\n      </label>\n      <div class=\"col-sm-16\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <ui-core-input-field\n              name=\"input2\"\n              inputId=\"input2\"\n              placeholder=\"Placeholder input2\"\n              [(ngModel)]=\"formData.input2.value\"\n              [disabled]=\"formData.input2.disabled\"\n            ></ui-core-input-field>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-16\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <span class=\"btn btn-primary mt-0\" (click)=\"formData.input2.disabled = !formData.input2.disabled\">\n              Toggle input2 disabled\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\"container-fluid\">\n  <form #form=\"ngForm\" novalidate (ngSubmit)=\"onSubmit(form)\">\n    <div class=\"row\">\n      <div class=\"form-group col-md-16\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <label class=\"mb-0\" for=\"textarea1\">Textarea (textarea1)</label>\n            <ui-core-textarea\n              name=\"textarea1\"\n              inputId=\"textarea1\"\n              placeholder=\"Placeholder textarea1\"\n              [(ngModel)]=\"formData.textarea1.value\"\n              [disabled]=\"formData.textarea1.disabled\"\n              rows=\"5\"\n              resizable=\"false\"\n              expandOnFocus=\"true\"\n              maxlength=\"20\"\n              labelCharsLeft=\"{0} characters remaining\"\n            ></ui-core-textarea>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group col-md-16\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <span class=\"btn btn-primary mt-2\" (click)=\"formData.textarea1.disabled = !formData.textarea1.disabled\">\n              Toggle textarea1 disabled\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\"container-fluid\">\n  <form #form=\"ngForm\" novalidate (ngSubmit)=\"onSubmit(form)\">\n    <div class=\"row\">\n      <div class=\"form-group col-md-16\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <label class=\"mb-0\">Checkboxes (checkbox1 + checkbox2)</label>\n            <ui-core-checkbox\n              name=\"checkbox1\"\n              inputId=\"checkbox1\"\n              [(ngModel)]=\"formData.checkbox1.value\"\n              [disabled]=\"formData.checkbox1.disabled\"\n            >\n              Checkbox 1 label\n            </ui-core-checkbox>\n            <ui-core-checkbox\n              name=\"checkbox2\"\n              inputId=\"checkbox2\"\n              [(ngModel)]=\"formData.checkbox2.value\"\n              [disabled]=\"formData.checkbox2.disabled\"\n            >\n              Checkbox 2 label\n            </ui-core-checkbox>\n            <span class=\"btn btn-primary mt-0\" (click)=\"formData.checkbox1.disabled = !formData.checkbox1.disabled\">\n              Toggle checkbox1 disabled\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\"container-fluid\">\n  <form #form=\"ngForm\" novalidate (ngSubmit)=\"onSubmit(form)\">\n    <div class=\"row\">\n      <div class=\"form-group col-md-16\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <div class=\"col col-md-24\">\n              <label class=\"mb-0\">Radio (radio1)</label>\n              <ui-core-radiobutton\n                name=\"radio1\"\n                value=\"one\"\n                inputId=\"radio1-1\"\n                [(ngModel)]=\"formData.radio1.value\"\n                [disabled]=\"formData.radio1.disabled\"\n              >\n                Radio one\n              </ui-core-radiobutton>\n              <ui-core-radiobutton\n                name=\"radio1\"\n                value=\"two\"\n                inputId=\"radio1-2\"\n                [(ngModel)]=\"formData.radio1.value\"\n                [disabled]=\"formData.radio1.disabled\"\n              >\n                Radio two\n              </ui-core-radiobutton>\n              <ui-core-radiobutton\n                name=\"radio1\"\n                value=\"three\"\n                inputId=\"radio1-3\"\n                [(ngModel)]=\"formData.radio1.value\"\n                [disabled]=\"formData.radio1.disabled\"\n              >\n                Radio three\n              </ui-core-radiobutton>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group col-md-16\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <span class=\"btn btn-primary mt-2\" (click)=\"formData.radio1.disabled = !formData.radio1.disabled\">\n              Toggle radio1 disabled\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\"container-fluid\">\n  <form #form=\"ngForm\" novalidate (ngSubmit)=\"onSubmit(form)\">\n    <div class=\"row\">\n      <div class=\"form-group col-md-12\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <button class=\"btn btn-secondary mt-0\">Submit</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"form-group col-md-48\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <p>form data:</p>\n\n            <pre class=\"text\">{{ formData | json }}</pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n\n<form #formElementForm=\"ngForm\" novalidate (ngSubmit)=\"onSubmit(formElementForm)\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-48\">\n        <ui-core-form-element label=\"Input Field (label top)\">\n          <ui-core-input-field\n            [(ngModel)]=\"fData.labelTop\"\n            name=\"labelTop\"\n            placeholder=\"Input placeholder\"\n            required\n          ></ui-core-input-field>\n        </ui-core-form-element>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-48\">\n        <ui-core-form-element label=\"Input Field\" labelColumnClasses=\"box-w-1-3\" inputColumnClasses=\"box-w-2-3\">\n          <ui-core-input-field\n            [(ngModel)]=\"fData.labelLeft\"\n            name=\"labelLeft\"\n            placeholder=\"Input placeholder\"\n            required\n            minlength=\"10\"\n            pattern=\"[a-zA-Z]*\"\n          ></ui-core-input-field>\n        </ui-core-form-element>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-48\">\n        <ui-core-form-element\n          label=\"Your address\"\n          labelColumnClasses=\"box-w-1-3\"\n          inputColumnClasses=\"box-w-2-3\"\n          ngModelGroup=\"address\"\n        >\n          <div class=\"d-flex\">\n            <div class=\"w-25 mr-2\">\n              <ui-core-input-field\n                [(ngModel)]=\"fData.postcode\"\n                name=\"postcode\"\n                placeholder=\"Postcode\"\n                required\n                minlength=\"5\"\n                pattern=\"\\d*\"\n              ></ui-core-input-field>\n            </div>\n            <div class=\"w-75\">\n              <ui-core-input-field\n                [(ngModel)]=\"fData.city\"\n                name=\"city\"\n                placeholder=\"City\"\n                disabled\n                required\n                minlength=\"4\"\n                pattern=\"[a-zA-Z]*\"\n              ></ui-core-input-field>\n            </div>\n          </div>\n        </ui-core-form-element>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-24\">\n        <ui-core-form-element label=\"Radio Group\">\n          <ui-core-radiobutton\n            *ngFor=\"let label of ['one', 'two', 'three', 'infinity']\"\n            [(ngModel)]=\"fData.counter\"\n            name=\"counter\"\n            [value]=\"label\"\n            required\n          >\n            {{ label }}\n          </ui-core-radiobutton>\n        </ui-core-form-element>\n      </div>\n      <div class=\"col-md-24\">\n        <ui-core-form-element label=\"Checkbox Group\">\n          <ui-core-checkbox\n            *ngFor=\"let label of ['check 1', 'check 2', 'check 3']; index as i\"\n            [(ngModel)]=\"fData['check' + i]\"\n            [name]=\"'check-' + i\"\n            uiCoreRequiredTrue\n          >\n            {{ label }}\n          </ui-core-checkbox>\n        </ui-core-form-element>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-48\">\n        <ui-core-form-element label=\"Text Area\">\n          <ui-core-textarea\n            [(ngModel)]=\"fData.message\"\n            name=\"message\"\n            rows=\"5\"\n            expandOnFocus=\"true\"\n            maxlength=\"100\"\n            labelCharsLeft=\"You got {0} chars left.\"\n            placeholder=\"Textarea placeholder\"\n            required\n          ></ui-core-textarea>\n        </ui-core-form-element>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-16\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <button class=\"btn btn-secondary mt-0\">Submit</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-32\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <p>form data:</p>\n            <pre class=\"text\">{{ formElementForm.value | json }} {{ formElementForm.valid | json }}</pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n<div class=\"container-fluid\">\n  <form #searchForm=\"ngForm\" novalidate (ngSubmit)=\"onSearch(searchForm)\">\n    <div class=\"row\">\n      <div class=\"form-group col-md-16\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <label class=\"mb-0\" for=\"search_field\">Search Field</label>\n            <ui-core-search-field\n              name=\"search_field\"\n              inputId=\"search_field\"\n              placeholder=\"Search field\"\n              buttonTitle=\"Search field button\"\n            ></ui-core-search-field>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"form-group col-md-16\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <label class=\"mb-0\" for=\"search_field_header\">\n              Search Field (Header variant)\n            </label>\n            <ui-core-search-field\n              headerVariant=\"true\"\n              name=\"search_field_header\"\n              inputId=\"search_field_header\"\n              placeholder=\"Search field\"\n              buttonTitle=\"Header search field button\"\n            ></ui-core-search-field>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"form-group col-md-16\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <label class=\"mb-0\" for=\"search_field_disabled\">\n              Search Field (Disabled)\n            </label>\n            <ui-core-search-field\n              disabled=\"true\"\n              name=\"search_field_disabled\"\n              inputId=\"search_field_disabled\"\n              placeholder=\"Search field\"\n              buttonTitle=\"Search field button\"\n            ></ui-core-search-field>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n\n<!-- BUTTON STYLES -->\n<div class=\"container-fluid\">\n  <h3 class=\"heading-sm text-uppercase text-red\">Button Styles</h3>\n\n  <div class=\"row\">\n    <div class=\"col-10\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <button class=\"btn btn-primary has-icon-after\">\n            <span>Primary Button</span>\n            <ui-core-svg-icon icon=\"clock\" width=\"18\" title=\"ARIA friendly title\"></ui-core-svg-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-10\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <button class=\"btn btn-primary\" disabled>\n            Primary Button (Disabled)\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-10\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <button class=\"btn btn-outline-secondary has-icon-before\">\n            <ui-core-svg-icon icon=\"clock\" width=\"18\" title=\"ARIA friendly title\"></ui-core-svg-icon>\n            <span>Secondary Button</span>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <button class=\"btn btn-outline-secondary\" disabled>\n            Secondary Button (Disabled)\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-10\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <button class=\"btn btn-outline-tertiary\">Tertiary Button</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-10\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <button class=\"btn btn-outline-tertiary\" disabled>\n            Tertiary Button (Disabled)\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-10\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <button class=\"btn btn-outline-tertiary-alt\">\n            Tertiary-Alt Button\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-10\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <button class=\"btn btn-outline-tertiary-alt\" disabled>\n            Tertiary-Alt Button (Disabled)\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-10\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <button class=\"btn btn-link\">Link Button</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-10\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <button class=\"btn btn-dropdown\">\n            <span>Dropdown Button</span>\n            <ui-core-svg-icon icon=\"arrow_down\" width=\"18\"></ui-core-svg-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-10\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <button class=\"btn btn-dropdown-alt\">Dropdown-Alt Button</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"bg-primary py-2 px-2\">\n    <div class=\"row\">\n      <div class=\"col-10\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <button class=\"btn btn-primary-inverse\">\n              Primary Inversed Button\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-10\">\n        <div class=\"box-group\">\n          <div class=\"box\">\n            <button class=\"btn btn-primary-inverse\" disabled>\n              Primary Inversed Button (Disabled)\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- BUTTON COMPONENT -->\n<div class=\"container-fluid mt-5\">\n  <h3 class=\"heading-sm text-uppercase text-red\">Button component</h3>\n\n  <div class=\"row\">\n    <div class=\"col col-24 col-md-12 col-lg-10\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <ui-core-button variant=\"primary\" [disabled]=\"formData.buttonPrimary.disabled\">\n            <ui-core-svg-icon iconBefore icon=\"clock\" width=\"18\" title=\"ARIA friendly title\"></ui-core-svg-icon>\n            <span label>Primary Button</span>\n          </ui-core-button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-24\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <ui-core-button variant=\"tertiaryAlt\" (click)=\"toggleDisabled(formData.buttonPrimary)\">\n            <span label>Toggle</span>\n          </ui-core-button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col col-24 col-md-12 col-lg-10\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <ui-core-button variant=\"secondary\" [disabled]=\"formData.buttonSecondary.disabled\">\n            <span label>Secondary Button</span>\n            <ui-core-svg-icon iconAfter icon=\"clock\" width=\"18\" title=\"ARIA friendly title\"></ui-core-svg-icon>\n          </ui-core-button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-24\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <ui-core-button variant=\"tertiaryAlt\" (click)=\"toggleDisabled(formData.buttonSecondary)\">\n            <span label>Toggle</span>\n          </ui-core-button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col col-24 col-md-12 col-lg-10\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <ui-core-button variant=\"tertiary\" [disabled]=\"formData.buttonTertiary.disabled\">\n            <span label>Tertiary Button</span>\n          </ui-core-button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-24\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <ui-core-button variant=\"tertiaryAlt\" (click)=\"toggleDisabled(formData.buttonTertiary)\">\n            <span label>Toggle</span>\n          </ui-core-button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col col-24 col-md-12 col-lg-10\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <ui-core-button variant=\"tertiaryAlt\" [disabled]=\"formData.buttonTertiaryAlt.disabled\">\n            <span label>Tertiary Alt Button</span>\n          </ui-core-button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-24\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <ui-core-button variant=\"tertiaryAlt\" (click)=\"toggleDisabled(formData.buttonTertiaryAlt)\">\n            <span label>Toggle</span>\n          </ui-core-button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col col-24 col-md-12 col-lg-10\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <ui-core-button variant=\"link\" [disabled]=\"formData.buttonLink.disabled\">\n            <span label>Link Button</span>\n          </ui-core-button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col col-24 col-md-12 col-lg-10\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <ui-core-button variant=\"dropdown\" [disabled]=\"formData.buttonDropdown.disabled\">\n            <span label>Dropdown Button</span>\n            <ui-core-svg-icon iconAfter icon=\"arrow_down\" width=\"18\"></ui-core-svg-icon>\n          </ui-core-button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col col-48\">\n      <div class=\"box-group\">\n        <div class=\"box bg-primary box-w-1-2\">\n          <ui-core-button variant=\"primaryInverse\">\n            <span label>Primary Inversed Button</span>\n            <ui-core-svg-icon iconAfter icon=\"clock\" width=\"18\"></ui-core-svg-icon>\n          </ui-core-button>\n        </div>\n        <div class=\"box bg-primary box-w-1-2\">\n          <ui-core-button variant=\"primaryInverse\" disabled=\"true\">\n            <span label>Primary Inversed Button (Disabled)</span>\n            <ui-core-svg-icon iconAfter icon=\"clock\" width=\"18\"></ui-core-svg-icon>\n          </ui-core-button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- CONTAINER STYLES -->\n<div class=\"container-fluid\">\n  <h3 class=\"heading-sm text-uppercase text-red\">Containers</h3>\n  <div class=\"panel\">\n    a panel, no special styles attached, yet.\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col col-48 col-sm-24 col-md-16 col-lg-12\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <h2 class=\"heading-lg\">Headline large</h2>\n          <p>\n            box within a box group\n            <br />\n            &lt;div class=\"box\"&gt; &lt;p&gt; ... &lt;/div&gt; &lt;/div&gt;\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-48 col-sm-24 col-md-16 col-lg-12\">\n      <div class=\"box-group\">\n        <div class=\"box bg-primary text-light\">\n          <p>\n            box within a box group with a primary (red) background:\n            <br />\n            &lt;div class=\"box bg-primary\"&gt; &lt;p&gt; ... &lt;/div&gt; &lt;/div&gt;\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-48 col-sm-24 col-md-16 col-lg-12\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <p>\n            box within a box group\n            <br />\n            &lt;div class=\"box\"&gt; &lt;p&gt; ... &lt;/div&gt; &lt;/div&gt;\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-48 col-sm-24 col-md-16 col-lg-12\">\n      <div class=\"box-group\">\n        <div class=\"box border border-red\">\n          <p>\n            box within a box group and a red border:\n            <br />\n            &lt;div class=\"box border border-color-red\"&gt; &lt;p&gt; ... &lt;/div&gt; &lt;/div&gt;\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col col-48\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <p>col-48</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-48 col-md-16 col-lg-8\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <p>col-48 col-md-16 col-lg-8</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-48 col-md-16 col-lg-8\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <p>col-48 col-md-16 col-lg-8</p>\n          <p>\n            Something in another &lt;p&gt;\n            <br />\n            some linewrap\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-48 col-md-16 col-lg-8\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <p>col-48 col-md-16 col-lg-8</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col col-48 col-md-24 col-lg-12\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <p>col-48 col-md-24 col-lg-12</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-48 col-md-24 col-lg-12\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <p>col-48 col-md-24 col-lg-12</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-48 col-md-24 col-lg-12\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <p>col-48 col-md-24 col-lg-12</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-48 col-md-24 col-lg-12\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <p>col-48 col-md-24 col-lg-12</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col col-48\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel sagittis ligula. Suspendisse ut eros\n            et leo tempus commodo. Donec gravida nulla ultrices, porta neque ac, varius mi. Vestibulum id libero tempus,\n            sagittis nisi id, tempus massa. Suspendisse pulvinar, nisl ac porta laoreet, tellus neque placerat sem,\n            luctus tempus magna sem eget ante. Nullam sit amet nisi id mauris ultrices congue at at tortor. Orci varius\n            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas non porttitor sapien.\n            Phasellus semsem, lobortis eget ante sit amet, posuere pharetra metus. Aenean eleifend enim sem, a faucibus\n            quam semper ut. Etiam faucibus vestibulum metus gravida condimentum. Curabitur ultricies, justo at dictum\n            euismod, lectus est placerat arcu, eget pretium orci purus in lectus. Ut et dui augue. Praesent congue\n            pharetra felis. Aenean sednisl\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-48\">\n      <!--The content below is only a placeholder and can be replaced.-->\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <h1 class=\"heading-lg\">Welcome to {{ title }}!</h1>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-48\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel sagittis ligula. Suspendisse ut eros\n            et leo tempus commodo. Donec gravida nulla ultrices, porta neque ac, varius mi. Vestibulum id libero tempus,\n            sagittis nisi id, tempus massa. Suspendisse pulvinar, nisl ac porta laoreet, tellus neque placerat sem,\n            luctus tempus magna sem eget ante. Nullam sit amet nisi id mauris ultrices congue at at tortor. Orci varius\n            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas non porttitor sapien.\n            Phasellus semsem, lobortis eget ante sit amet, posuere pharetra metus. Aenean eleifend enim sem, a faucibus\n            quam semper ut. Etiam faucibus vestibulum metus gravida condimentum. Curabitur ultricies, justo at dictum\n            euismod, lectus est placerat arcu, eget pretium orci purus in lectus. Ut et dui augue. Praesent congue\n            pharetra felis. Aenean sednisl\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-48\">\n      <!-- NG Bootstrap test -->\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <ngb-alert [dismissible]=\"false\" type=\"success\">\n            <p>\n              <strong>Warning!</strong>\n              Better check yourself, you're not looking too good.\n            </p>\n          </ngb-alert>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col col-48\">\n      <!-- NG Bootstrap grid test -->\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <h3 class=\"mb-2 heading-sm\">Grid system</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col col-16\">\n      <div class=\"box-group\">\n        <div class=\"box bl-h-15 bg-primary text-light\">\n          <h2 class=\"heading-md\">Headline 2</h2>\n          <p>\n            box 1\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-16\">\n      <div class=\"box-group\">\n        <div class=\"box bl-h-15 bg-neutral-light\">\n          <h3 class=\"heading-sm\">Headline 3</h3>\n          <p>\n            box 2\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-8\">\n      <div class=\"box-group\">\n        <div class=\"box bl-h-15 bg-neutral-light\">\n          <p>\n            box 3\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-8\">\n      <div class=\"box-group\">\n        <div class=\"box bl-h-15 bg-neutral-light\">\n          <p>\n            box 4\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid bg-primary text-light py-1 mb-2\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"box-group\">\n        <div class=\"box bg-secondary\">\n          <p>box 1</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <p>box 2</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <p>box 3</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"box-group\">\n        <div class=\"box\">\n          <p>box 4</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid bg-primary text-light py-1 mb-2\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"box-group\">\n        <div class=\"box py-1\">\n          <p>box 1 - Lorem ipsum dolor sit amet</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-36\">\n      <div class=\"box-group\">\n        <div class=\"box bg-secondary py-1 mb-1\">\n          <p>box 2.1</p>\n        </div>\n        <div class=\"box bg-secondary text-light py-1\">\n          <p>\n            box 2.2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sapiente.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid bg-primary text-light py-1 mb-2\">\n  <div class=\"row\">\n    <div class=\"col-12 mb-2\">\n      <div class=\"box-group\">\n        <div class=\"box py-1\">\n          <p>box 1 - Lorem ipsum dolor sit amet</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-24 mb-2\">\n      <div class=\"box-group\">\n        <div class=\"box bg-secondary py-1\">\n          <p>box 2.1</p>\n        </div>\n        <div class=\"box bg-secondary py-1\">\n          <p>\n            box 2.2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sapiente.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 mb-2\">\n      <div class=\"box-group\">\n        <div class=\"box py-1\">\n          <p>box 1 - Lorem ipsum dolor sit amet</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svg4everybody */ "../../node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'styleguide';
        // sample form data object to test ngModel bindings
        this.formData = {
            input1: {
                value: '',
                disabled: false
            },
            input2: {
                value: '',
                disabled: true
            },
            textarea1: {
                value: '',
                disabled: false
            },
            checkbox1: {
                value: false,
                disabled: false
            },
            checkbox2: {
                value: false,
                disabled: false
            },
            radio1: {
                value: '',
                disabled: false
            },
            buttonPrimary: {
                disabled: false
            },
            buttonSecondary: {
                disabled: false
            },
            buttonTertiary: {
                disabled: false
            },
            buttonTertiaryAlt: {
                disabled: false
            },
            buttonLink: {
                disabled: false
            },
            buttonDropdown: {
                disabled: false
            }
        };
        this.fData = {
            labelTop: '',
            labelLeft: '',
            postcode: '',
            city: '',
            message: '',
            counter: '',
            check0: false,
            check1: false,
            check2: false
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        svg4everybody__WEBPACK_IMPORTED_MODULE_2___default()();
    };
    AppComponent.prototype.onSubmit = function (form) {
        console.log(form.value);
    };
    AppComponent.prototype.onSearch = function (form) {
        console.log('Search callback', form.value);
    };
    AppComponent.prototype.toggleDisabled = function (model) {
        model.disabled = !model.disabled;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'styleguide-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _hdms_shared_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hdms/shared/ui-core */ "../../libs/shared/ui-core/src/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _hdms_shared_ui_core__WEBPACK_IMPORTED_MODULE_4__["SvgIconModule"], _hdms_shared_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormModule"], _hdms_shared_ui_core__WEBPACK_IMPORTED_MODULE_4__["SearchFieldModule"], _hdms_shared_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextModule"], _hdms_shared_ui_core__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mel/holng/dev/layout/hdms/apps/styleguide/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map