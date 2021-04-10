import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropCampaignsComponent } from './drops/drop-campaigns/drop-campaigns.component';
import { DropCampaignService } from './drops/services/drop-campaign-service.service';
import { CampaignCardComponent } from './drops/campaign-card/campaign-card.component';
import { DropBenefitsComponent } from './benefits/drop-benefits/drop-benefits.component';
import { DropBenefitService } from './benefits/services/drop-benefit.service';
import { BenefitCardComponent } from './benefits/benefit-card/benefit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DropCampaignsComponent,
    CampaignCardComponent,
    DropBenefitsComponent,
    BenefitCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DropCampaignService, DropBenefitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
