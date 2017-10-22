import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { GridSettingComponent } from './src/app.component.gridsetting';
import { DynamicGridComponent } from './src/app.component.dynamicgrid';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [GridSettingComponent, DynamicGridComponent],
    bootstrap: [GridSettingComponent]
})
export class AppModule { }