import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable, of, Subscription } from 'rxjs';
import { StoreService } from 'src/app/state/store.service';

import {Player} from '../../../../models/player'

@Component({
  selector: 'app-formation-lyout',
  templateUrl: './lyout.component.html',
  styleUrls: ['./lyout.component.scss']
})
export class LyoutComponent implements OnInit, AfterViewInit, OnDestroy {

  currentFormation : Observable<number[]>;
  players :Player[];
  sub :Subscription;
  constructor(private cd :ChangeDetectorRef, private mo : MediaObserver,
    private store:StoreService) { }

  ngAfterViewInit(): void {
   
  }
  
  ngOnInit(): void {
   this.sub =  this.store.getFormation().subscribe(x=>{
     if(x!=undefined)
    this.currentFormation = of(x.name.split('-').reverse().map(Number)) ;
   })
    
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
   }

}
