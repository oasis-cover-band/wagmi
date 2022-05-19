import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStatsPanelComponent } from './profile-stats-panel.component';

describe('ProfileStatsPanelComponent', () => {
  let component: ProfileStatsPanelComponent;
  let fixture: ComponentFixture<ProfileStatsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileStatsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileStatsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
