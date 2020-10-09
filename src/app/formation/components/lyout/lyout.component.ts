import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

import {Player} from '../../../models/player'

@Component({
  selector: 'app-formation-lyout',
  templateUrl: './lyout.component.html',
  styleUrls: ['./lyout.component.scss']
})
export class LyoutComponent implements OnInit, AfterViewInit {
  players :Player[];
  constructor(private cd :ChangeDetectorRef, private mo : MediaObserver) { }
  ngAfterViewInit(): void {
   
  }
  
  ngOnInit(): void {
  
  }

 

}
