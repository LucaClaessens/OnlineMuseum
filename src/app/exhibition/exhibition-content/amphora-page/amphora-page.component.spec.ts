import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmphoraPageComponent } from './amphora-page.component';

describe('AmphoraPageComponent', () => {
  let component: AmphoraPageComponent;
  let fixture: ComponentFixture<AmphoraPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmphoraPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmphoraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
