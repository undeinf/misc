import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicGridComponent, columnDef, columnDataType } from './app.component.dynamicgrid';

@Component({
    moduleId: module.id,
    selector: 'grid-setting',
    templateUrl: 'app.component.gridsetting.html'
})

export class GridSettingComponent implements OnInit {
    private _columnDetails: Array<columnDef>;
    private _modelData: any = {};
    private _gridData: Array<any> = new Array<any>();
    private _srlNo: number;

    @ViewChild('grid') private _gridComponent: DynamicGridComponent;

    constructor() {
        this._columnDetails = [
            { caption: 'Srl No', dataField: 'srlNo', dataType: columnDataType.Integer, width: '10%', display: true },
            { caption: 'Employee Name', dataField: 'employeeName', dataType: columnDataType.Text, width: '30%', display: true },
            { caption: 'Departmentr', dataField: 'department', dataType: columnDataType.Text, width: '15%', display: true },
            { caption: 'Designation', dataField: 'designation', dataType: columnDataType.Text, width: '15%', display: true },
            { caption: 'Date Of Join', dataField: 'doj', dataType: columnDataType.Datetime, width: '15%', display: true },
            { caption: 'Salary', dataField: 'salary', dataType: columnDataType.Number, width: '15%', display: true }];
    }

    ngOnInit(): void {
        this._srlNo = 1;
    }

    private addData(): void {
        if (this.validateData()) {
            this._modelData.srlNo = this._srlNo;
            this._srlNo += 1;
            this._modelData.doj = new Date(this._modelData.doj);
            this._gridData.push(this._modelData);
            this.clearData();
            this._gridComponent.bindData(this._gridData);
        }
    }

    private clearData(): void {
        this._modelData = {};
    }

    private validateData(): boolean {
        let status = true;
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
    }

    private isUndefined(data: any): boolean {
        return typeof (data) === "undefined";
    }

    private resetGrid(): void {
        this._gridData = [];
        this._modelData = {};
        this._gridComponent.clearGrid();
    }
}