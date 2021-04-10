import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropBenefit } from '../models/drop-benefit';

@Component({
  selector: 'app-benefit-card',
  templateUrl: './benefit-card.component.html',
  styleUrls: ['./benefit-card.component.scss']
})
export class BenefitCardComponent implements OnInit {

  @Input() benefit: DropBenefit;
  @Output() highlightEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  triggerHighlight(id: string) {
    this.highlightEvent.emit(id);
  }

}
