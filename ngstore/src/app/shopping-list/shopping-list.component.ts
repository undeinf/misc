import { Ingredient } from './../shared/ingredient.model';
import { Store } from '@ngrx/store';
import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable} from 'rxjs/Observable'
import { ShoppingListService } from './shopping-list.service';
import * as shoppingListReducer from './store/shoping-list.reducer';
import * as shoppingListAction from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  private subscription: Subscription;

  constructor(private slService: ShoppingListService, private store:Store<shoppingListReducer.AppState>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList')
  }

  onEditItem(index: number) {
    this.store.dispatch(new shoppingListAction.StartEdit(index))
  }
}
