import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/match', pathMatch: 'full' },
  { path: 'formation', loadChildren: ()=> import('./modules/formation/formation.module').then(m=>m.FormationModule) },
  { path: 'match', loadChildren: ()=> import('./modules/match/match.module').then(m=>m.MatchModule) },
  {
		path: "**",
		redirectTo: "/match"	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
