import { Component, OnInit } from '@angular/core';
import { DropCampaign } from '../models/drop-campaign';
import { DropCampaignService } from '../services/drop-campaign-service.service';

@Component({
  selector: 'app-drop-campaigns',
  templateUrl: './drop-campaigns.component.html',
  styleUrls: ['./drop-campaigns.component.scss']
})
export class DropCampaignsComponent implements OnInit {

  drops: DropCampaign[];

  constructor(private dropCampaignService: DropCampaignService) { }

  ngOnInit(): void {
    this.dropCampaignService.getActive().subscribe(data => {
      this.drops = data;
    });
  }

}
