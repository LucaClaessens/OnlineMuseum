import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmphoraCardComponent } from './amphora-card.component';

describe('AmphoraCardComponent', () => {
  let component: AmphoraCardComponent;
  let fixture: ComponentFixture<AmphoraCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmphoraCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmphoraCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
