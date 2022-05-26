import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenPanelComponent } from './token-panel.component';

describe('TokenPanelComponent', () => {
  let component: TokenPanelComponent;
  let fixture: ComponentFixture<TokenPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
