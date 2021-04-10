import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropBenefitsComponent } from './drop-benefits.component';

describe('DropBenefitsComponent', () => {
  let component: DropBenefitsComponent;
  let fixture: ComponentFixture<DropBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropBenefitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
