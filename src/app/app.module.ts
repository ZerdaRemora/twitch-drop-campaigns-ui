import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropCampaignsComponent } from './drops/drop-campaigns/drop-campaigns.component';
import { DropCampaignService } from './drops/services/drop-campaign-service.service';
import { CampaignCardComponent } from './drops/campaign-card/campaign-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DropCampaignsComponent,
    CampaignCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DropCampaignService],
  bootstrap: [AppComponent]
})
export class AppModule { }
