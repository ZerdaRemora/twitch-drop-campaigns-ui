import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropCampaignsComponent } from './drops/drop-campaigns/drop-campaigns.component';

const routes: Routes = [
  { path: '', component: DropCampaignsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
