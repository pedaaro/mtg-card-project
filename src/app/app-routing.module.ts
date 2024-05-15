import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDisplayComponent } from './card-display/card-display.component';

const routes: Routes = [
  { path: 'collection-details/:block', component: CardDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
