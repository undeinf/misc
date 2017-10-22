import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dynamic-grid',
    templateUrl: 'app.component.dynamicgrid.html'
})

export class DynamicGridComponent implements OnInit {

    private _source: Array<any> = new Array<any>();

    @Input() private columns: Array<columnDef> = new Array<columnDef>();

    constructor() { }

    ngOnInit(): void {
        if (this.columns == null || this.columns == undefined) {
            alert("Column Definition of grid not provided.");
            return;
        }
    }

    public bindData(data: Array<any>): void {
        if (data != null && data != undefined) {
            this._source = data;
        }
    }

    public clearGrid(): void {
        this._source = [];
    }
}

export class columnDef {
    caption: string;
    dataField: string;
    dataType: columnDataType;
    width: string;
    display: boolean = true;
}

export enum columnDataType {
    Text,
    Number,
    Datetime,
    Integer,
}