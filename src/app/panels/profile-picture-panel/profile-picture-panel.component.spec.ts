import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePicturePanelComponent } from './profile-picture-panel.component';

describe('ProfilePicturePanelComponent', () => {
  let component: ProfilePicturePanelComponent;
  let fixture: ComponentFixture<ProfilePicturePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePicturePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePicturePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
