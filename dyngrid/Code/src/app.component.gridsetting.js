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
var app_component_dynamicgrid_1 = require('./app.component.dynamicgrid');
var GridSettingComponent = (function () {
    function GridSettingComponent() {
        this._modelData = {};
        this._gridData = new Array();
        this._columnDetails = [
            { caption: 'Srl No', dataField: 'srlNo', dataType: app_component_dynamicgrid_1.columnDataType.Integer, width: '10%', display: true },
            { caption: 'Employee Name', dataField: 'employeeName', dataType: app_component_dynamicgrid_1.columnDataType.Text, width: '30%', display: true },
            { caption: 'Departmentr', dataField: 'department', dataType: app_component_dynamicgrid_1.columnDataType.Text, width: '15%', display: true },
            { caption: 'Designation', dataField: 'designation', dataType: app_component_dynamicgrid_1.columnDataType.Text, width: '15%', display: true },
            { caption: 'Date Of Join', dataField: 'doj', dataType: app_component_dynamicgrid_1.columnDataType.Datetime, width: '15%', display: true },
            { caption: 'Salary', dataField: 'salary', dataType: app_component_dynamicgrid_1.columnDataType.Number, width: '15%', display: true }];
    }
    GridSettingComponent.prototype.ngOnInit = function () {
        this._srlNo = 1;
    };
    GridSettingComponent.prototype.addData = function () {
        if (this.validateData()) {
            this._modelData.srlNo = this._srlNo;
            this._srlNo += 1;
            this._modelData.doj = new Date(this._modelData.doj);
            this._gridData.push(this._modelData);
            this.clearData();
            this._gridComponent.bindData(this._gridData);
        }
    };
    GridSettingComponent.prototype.clearData = function () {
        this._modelData = {};
    };
    GridSettingComponent.prototype.validateData = function () {
        var status = true;
        if (this.isUndefined(this._modelData.employeeName)) {
            alert('Employee Name never blank');
            status = false;
        }
        else if (this.isUndefined(this._modelData.department)) {
            alert('Department never blank');
            status = false;
        }
        else if (this.isUndefined(this._modelData.designation)) {
            alert('Designation never blank');
            status = false;
        }
        else if (this.isUndefined(this._modelData.salary)) {
            alert('Salary never blank');
            status = false;
        }
        else if (this.isUndefined(this._modelData.doj)) {
            alert('Date of Join never blank');
            status = false;
        }
        return status;
    };
    GridSettingComponent.prototype.isUndefined = function (data) {
        return typeof (data) === "undefined";
    };
    GridSettingComponent.prototype.resetGrid = function () {
        this._gridData = [];
        this._modelData = {};
        this._gridComponent.clearGrid();
    };
    __decorate([
        core_1.ViewChild('grid'), 
        __metadata('design:type', app_component_dynamicgrid_1.DynamicGridComponent)
    ], GridSettingComponent.prototype, "_gridComponent", void 0);
    GridSettingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'grid-setting',
            templateUrl: 'app.component.gridsetting.html'
        }), 
        __metadata('design:paramtypes', [])
    ], GridSettingComponent);
    return GridSettingComponent;
}());
exports.GridSettingComponent = GridSettingComponent;
//# sourceMappingURL=app.component.gridsetting.js.map