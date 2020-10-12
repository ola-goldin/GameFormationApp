import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Store, StoreState } from './store.store';


@Injectable({ providedIn: 'root' })
export class StoreQuery extends QueryEntity<StoreState> {

  matchData = this.select(state=>{
    return state.data
  })

  constructor(protected store: Store) {
    super(store);
  }

}
