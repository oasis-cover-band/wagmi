import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBioPanelComponent } from './item-bio-panel.component';

describe('ItemBioPanelComponent', () => {
  let component: ItemBioPanelComponent;
  let fixture: ComponentFixture<ItemBioPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemBioPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBioPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
