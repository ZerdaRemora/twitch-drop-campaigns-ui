import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropCampaignsComponent } from './drop-campaigns.component';

describe('DropCampaignsComponent', () => {
  let component: DropCampaignsComponent;
  let fixture: ComponentFixture<DropCampaignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropCampaignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
