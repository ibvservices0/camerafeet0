import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Screen01Component } from './screen01/screen01.component';
import { Screen02Component } from './screen02/screen02.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'screen01', component: Screen01Component },
  { path: 'screen02', component: Screen02Component },
  { path: '',   redirectTo: '/screen01', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
