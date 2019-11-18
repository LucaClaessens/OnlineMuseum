import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionNavigationComponent } from './exhibition-navigation.component';

describe('ExhibitionNavigationComponent', () => {
  let component: ExhibitionNavigationComponent;
  let fixture: ComponentFixture<ExhibitionNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitionNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
