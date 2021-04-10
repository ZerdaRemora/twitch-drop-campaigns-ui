import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropBenefitsComponent } from './benefits/drop-benefits/drop-benefits.component';
import { DropCampaignsComponent } from './drops/drop-campaigns/drop-campaigns.component';

const routes: Routes = [
  { path: '', component: DropCampaignsComponent },
  { path: 'benefits/:id', component: DropBenefitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
