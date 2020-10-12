import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchDetailsComponent } from './components/match-details/match-details.component';



const routes: Routes = [
  {
    path: '',
  component: MatchDetailsComponent,
    children: [
      { path: '', component: MatchDetailsComponent },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule {}
