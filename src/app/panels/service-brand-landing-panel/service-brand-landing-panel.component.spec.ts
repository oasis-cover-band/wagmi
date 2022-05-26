import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBrandLandingPanelComponent } from './service-brand-landing-panel.component';

describe('ServiceBrandLandingPanelComponent', () => {
  let component: ServiceBrandLandingPanelComponent;
  let fixture: ComponentFixture<ServiceBrandLandingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceBrandLandingPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBrandLandingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
