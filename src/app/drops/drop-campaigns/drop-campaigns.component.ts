import { Component, OnInit } from '@angular/core';
import { DropCampaign } from '../models/drop-campaign';
import { DropCampaignService } from '../services/drop-campaign-service.service';

@Component({
  selector: 'app-drop-campaigns',
  templateUrl: './drop-campaigns.component.html',
  styleUrls: ['./drop-campaigns.component.scss']
})
export class DropCampaignsComponent implements OnInit {

  activeDrops: DropCampaign[];
  upcomingDrops: DropCampaign[];
  expiredDrops: DropCampaign[];

  constructor(private dropCampaignService: DropCampaignService) { }

  ngOnInit(): void {
    this.dropCampaignService.getActive().subscribe(data => {
      this.activeDrops = data;
    });

    this.dropCampaignService.getUpcoming().subscribe(data => {
      this.upcomingDrops = data;
    });

    this.dropCampaignService.getExpired().subscribe(data => {
      this.expiredDrops = data;
    });
  }

}
