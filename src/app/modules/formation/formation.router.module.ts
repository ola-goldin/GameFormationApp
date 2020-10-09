import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormationMainComponent } from './components/formation-main/formation-main.component';


const routes: Routes = [
  {
    path: '',
   component: FormationMainComponent,
    children: [
       { path: '', component: FormationMainComponent },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule {}
