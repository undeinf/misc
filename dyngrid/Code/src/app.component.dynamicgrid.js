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
var DynamicGridComponent = (function () {
    function DynamicGridComponent() {
        this._source = new Array();
        this.columns = new Array();
    }
    DynamicGridComponent.prototype.ngOnInit = function () {
        if (this.columns == null || this.columns == undefined) {
            alert("Column Definition of grid not provided.");
            return;
        }
    };
    DynamicGridComponent.prototype.bindData = function (data) {
        if (data != null && data != undefined) {
            this._source = data;
        }
    };
    DynamicGridComponent.prototype.clearGrid = function () {
        this._source = [];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DynamicGridComponent.prototype, "columns", void 0);
    DynamicGridComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dynamic-grid',
            templateUrl: 'app.component.dynamicgrid.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DynamicGridComponent);
    return DynamicGridComponent;
}());
exports.DynamicGridComponent = DynamicGridComponent;
var columnDef = (function () {
    function columnDef() {
        this.display = true;
    }
    return columnDef;
}());
exports.columnDef = columnDef;
(function (columnDataType) {
    columnDataType[columnDataType["Text"] = 0] = "Text";
    columnDataType[columnDataType["Number"] = 1] = "Number";
    columnDataType[columnDataType["Datetime"] = 2] = "Datetime";
    columnDataType[columnDataType["Integer"] = 3] = "Integer";
})(exports.columnDataType || (exports.columnDataType = {}));
var columnDataType = exports.columnDataType;
//# sourceMappingURL=app.component.dynamicgrid.js.map