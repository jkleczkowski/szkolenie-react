import { Component, Inject } from '@angular/core';
import { IAppState, AppStore } from '../app.store';
import { Store } from 'redux';
import * as a from '../app.actions';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  
  constructor(@Inject(AppStore) private store: Store<IAppState>) {
    store.subscribe(() => this.readState());
    this.readState();
  }
  

  readState() {
    const state: IAppState = this.store.getState() as IAppState;
    this.currentCount = state.counter;
  }
 
  increment() {
    this.store.dispatch(a.incrementBy(5));
  }
 
  decrement() {
    this.store.dispatch(a.decrement());
  }
}
