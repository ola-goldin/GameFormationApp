import { Injectable } from '@angular/core';
import { MatchData } from './store.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { FormationType } from '../models/formation-type';

export interface StoreState extends EntityState<MatchData> {
  autoFormationOff:boolean,
   changePlayerModeOn:boolean,


}

export function initState():StoreState{
   return {
    autoFormationOff:false,
    changePlayerModeOn:false,

    }
   
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'store' })
export class Store extends EntityStore<StoreState> {

  constructor() {
    super(initState());
    this.init();
  }

  init(){
    const data:MatchData = {
      matchMetadata: {
          rivelName: null,
          rivelLogoImage: null,
          score:{myTeam: 0, rival: 0},
          matchLocation: null
      },
      selectedFormation: null,
      players: {
          allPlayers:[],
           lineup: [],
           bench: []
      }
    }
    this.set({1:data}); this.update(state=>({
      ...state,
      autoFormationOff:false,

    }))
  }
  
}

