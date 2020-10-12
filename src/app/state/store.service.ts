import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import {cloneDeep} from 'lodash';
import { Store } from './store.store';
import {StoreQuery} from './store.query';
import { MatchData } from './store.model';
import { map, take, tap } from 'rxjs/operators';
import { from, Observable, of, Subscription } from 'rxjs';
import { FormationType } from '../models/formation-type';
import { Player } from '../models/player';
import { Match } from '../models/match-data';

@Injectable({ providedIn: 'root' })
export class StoreService {

  constructor(private formationStore: Store,
              private storeQuery:StoreQuery,
            ) {}
 
  
  init(){
    const  data = {
      matchMetadata: {
          rivelName: null,
          rivelLogoImage: null,
          score:{myTeam: 0, rival: 0},
          matchLocation: null
      },
      selectedFormation: null,
      players: {
          allPlayers:[],
           lineup: null,
           bench: null
      }
    }

   this.formationStore.set([data])
  }

  getFormation():Observable<FormationType>{ 
    return this.storeQuery.selectEntity(1,"selectedFormation");
  }
  getPlayers():Observable<any>{ 
    return this.storeQuery.selectEntity(1,"players");
  }
  setPlayers(allPlayers:Player[]){
    this.storeQuery.selectEntity(1).pipe(
      map(({matchMetadata,selectedFormation,players})=>{
        const clone = cloneDeep(players); 
        clone.allPlayers = allPlayers.sort((a, b) => (a.positionCategory > b.positionCategory) ? 1 : -1);
        clone.bench=allPlayers.map(function(item) { return item["id"]; })
        return {matchMetadata,selectedFormation,players:clone};
      }),
      take(1),
    ).subscribe(t=>{
      this.formationStore.update(state=>({
        ...state, 
        entities:{1:t}
      }))
      
    });

  }

  placePlayer(player:Player){
    this.storeQuery.selectEntity(1).pipe(
      map(({matchMetadata,selectedFormation,players})=>{
        const clone = cloneDeep(players); 
        if(clone.bench.indexOf(player.id)>-1){
          clone.bench = clone.bench.filter(x=>x!=player.id);
          clone.lineup.push(player.id)
        }
        else{
          clone.lineup = clone.lineup.filter(x=>x!=player.id);
          clone.bench.push(player.id)
        }
        return {matchMetadata,selectedFormation,players:clone};
      }),
      take(1),
    ).subscribe(t=>{
      this.formationStore.update(state=>({
        ...state, 
        autoFormationOff:true,
        entities:{1:t}
      }))
    });
    console.log(this.formationStore["storeValue"])
  }

  updateFormation(selectedFormation: FormationType) {

     this.storeQuery.selectEntity(1).pipe(
      map(({matchMetadata,players})=>{
        return {matchMetadata,selectedFormation,players};
      }),
      take(1),
    ).subscribe(t=>{
      this.formationStore.update(state=>({
        ...state, 
        autoFormationOff:true,
        entities:{1:t}
      }))
    });
  
  }

 
  add(formation: MatchData) {
    this.formationStore.add(formation);
    console.log(this.formationStore["storeValue"]["entities"])
  }

 
  remove(id: any) {
    this.formationStore.remove(parseInt(id));
    console.log(this.formationStore["storeValue"]["entities"])
  }
}
