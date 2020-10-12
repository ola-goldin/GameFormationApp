import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchRoutingModule } from './match.router.module';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatchDetailsComponent } from './components/match-details/match-details.component';

@NgModule({
  declarations: [MatchDetailsComponent],
  imports: [
    CommonModule,
    MatchRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatRadioModule,
    ReactiveFormsModule
  ]
})
export class MatchModule { }
