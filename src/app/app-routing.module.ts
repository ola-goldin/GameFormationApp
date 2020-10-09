import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/formation', pathMatch: 'full' },
  { path: 'formation', loadChildren: ()=> import('./formation/formation.module').then(m=>m.FormationModule) },
  { path: 'match', loadChildren: ()=> import('./match/match.module').then(m=>m.MatchModule) },
  {
		path: "**",
		redirectTo: "/formation"	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
