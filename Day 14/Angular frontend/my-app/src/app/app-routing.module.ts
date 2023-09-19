import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcycleComponent } from './addcycle/addcycle.component';
import { CycleComponent } from './cycle/cycle.component';

const routes: Routes = [
{ path: 'cycle', component: CycleComponent },
{ path: 'addcycle', component: AddcycleComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
