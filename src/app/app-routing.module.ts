import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { USERTABLEComponent } from './user-table/user-table.component';

const routes: Routes = [{
  path: 'user/user-table', component: USERTABLEComponent
}, 
{path: '', component: USERTABLEComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
