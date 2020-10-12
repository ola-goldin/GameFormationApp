import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropDownComponent implements   OnInit{

  constructor(private cdr: ChangeDetectorRef) {

   }
  ngOnInit(): void {
    if(this.currentList!=undefined)
    this.defaultSelect = this.currentList[0];
    this.cdr.detectChanges();
  }

  options = new FormControl();
  defaultSelect :any = null;
  @Input() currentList: Observable<string[]>;
  @Input() placeholder: string;
  @Input() display: string;
  @Input() disableSelect:boolean=false;
  @Output() selectedOutput = new EventEmitter();
  @Output() stateOpen = new EventEmitter();
  
  public sendOutput  ($event) {
    this.selectedOutput.emit($event.value);
}

public isOpen  ($event) {
  this.stateOpen.emit($event);
}

}
