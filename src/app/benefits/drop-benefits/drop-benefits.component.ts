import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DropBenefit } from '../models/drop-benefit';
import { DropBenefitService } from '../services/drop-benefit.service';

@Component({
  selector: 'app-drop-benefits',
  templateUrl: './drop-benefits.component.html',
  styleUrls: ['./drop-benefits.component.scss']
})
export class DropBenefitsComponent implements OnInit {

  benefits: DropBenefit[];

  constructor(private route: ActivatedRoute, private dropBenefitService: DropBenefitService) { }

  ngOnInit(): void {
    this.dropBenefitService.getBenefits(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.benefits = data;
    });
  }

  highlightPrerequisite(id: string) {
    let el = document.getElementById(id);
    el.classList.remove("animate");
    el.scrollTo(0, 0);
    el.classList.add("animate");
  }

}
