import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBrandPanelComponent } from './service-brand-panel.component';

describe('ServiceBrandPanelComponent', () => {
  let component: ServiceBrandPanelComponent;
  let fixture: ComponentFixture<ServiceBrandPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceBrandPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBrandPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
