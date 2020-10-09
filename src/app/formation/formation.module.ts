import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormationMainComponent } from './components/formation-main/formation-main.component';
import { FormationRoutingModule } from './formation.router.module';
import { BenchComponent } from 'src/app/formation/components/bench/bench/bench.component';
import { LyoutComponent } from './components/lyout/lyout.component';
import { DropDownComponent } from './components/shared/drop-down/drop-down.component';
import { TeamPlayerComponent } from './components/lyout/team-player/team-player.component';


@NgModule({
  declarations: [FormationMainComponent, BenchComponent,
    LyoutComponent, DropDownComponent, TeamPlayerComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormationRoutingModule,
    MatSelectModule
  ]
})
export class FormationModule { }
