import { Component, Input, OnInit } from '@angular/core';
import { DropCampaign } from '../models/drop-campaign';

@Component({
  selector: 'app-campaign-card',
  templateUrl: './campaign-card.component.html',
  styleUrls: ['./campaign-card.component.scss']
})
export class CampaignCardComponent implements OnInit {

  @Input() drop: DropCampaign;

  constructor() { }

  ngOnInit(): void {
  }

}
