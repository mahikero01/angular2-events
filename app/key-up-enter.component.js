"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var KeyUpEnterComponent = (function () {
    function KeyUpEnterComponent() {
    }
    KeyUpEnterComponent = __decorate([
        core_1.Component({
            selector: 'key-up-enter',
            template: "\n        <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">Angular 2 Event Binding Demo - Start typing here:</div>\n            <div class=\"panel-body\">\n                <div>\n                    <input #a (keyup.enter)=\"onKey(a.value)\">\n                </div>\n                <hr />\n                <div>\n                    <h5>\n                        Resulting keyup events:\n                        <button class=\"btn btn-sm btn-primary pull-right\" (click)=\"reset()\">\n                            Reset\n                        </button>\n                    </h5>\n                    <div>{{values}}</div>\n                </div>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], KeyUpEnterComponent);
    return KeyUpEnterComponent;
}());
exports.KeyUpEnterComponent = KeyUpEnterComponent;
//# sourceMappingURL=key-up-enter.component.js.map