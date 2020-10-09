import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchDataComponent } from './components/match-data/match-data.component';



const routes: Routes = [
  {
    path: '',
  component: MatchDataComponent,
    children: [
      { path: '', component: MatchDataComponent },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule {}
