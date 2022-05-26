import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBrandBioPanelComponent } from './service-brand-bio-panel.component';

describe('ServiceBrandBioPanelComponent', () => {
  let component: ServiceBrandBioPanelComponent;
  let fixture: ComponentFixture<ServiceBrandBioPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceBrandBioPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBrandBioPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
