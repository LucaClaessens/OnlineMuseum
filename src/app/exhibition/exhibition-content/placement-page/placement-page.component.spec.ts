import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementPageComponent } from './placement-page.component';

describe('PlacementPageComponent', () => {
  let component: PlacementPageComponent;
  let fixture: ComponentFixture<PlacementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
