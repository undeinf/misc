import { UpdateIngredient, StopEdit } from './../store/shopping-list.actions';
import { Ingredient } from './../../shared/ingredient.model';
import { Store } from '@ngrx/store';
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import * as shoppingListAction from '../store/shopping-list.actions';
import * as shoppingListReducer from '../store/shoping-list.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem: Ingredient;

  constructor(private store:Store<shoppingListReducer.AppState>) { }

  ngOnInit() {
    this.store.select('shoppingList')
      .subscribe(
        data => {
          if(data.editedIngredientIndex > -1){
            this.editedItem = data.editedIngredient;
            this.editMode = true;
            this.slForm.setValue({
              name: this.editedItem.name,
              amount: this.editedItem.amount
            })
          }else{
            this.editMode = false;
          }
        }
      )
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      //this.slService.updateIngredient(this.editedItemIndex, newIngredient);
      this.store.dispatch(new shoppingListAction.UpdateIngredient({ingredient: newIngredient}))
    } else {
      //this.slService.addIngredient(newIngredient);
      console.log('adding', newIngredient)
      this.store.dispatch(new shoppingListAction.AddIngredient(newIngredient));
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.store.dispatch(new shoppingListAction.DeleteIngredient());
    this.onClear();
  }

  ngOnDestroy() {
    this.store.dispatch(new shoppingListAction.StopEdit())
  }

}
