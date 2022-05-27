import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLandingPanelComponent } from './item-landing-panel.component';

describe('ItemLandingPanelComponent', () => {
  let component: ItemLandingPanelComponent;
  let fixture: ComponentFixture<ItemLandingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemLandingPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemLandingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
