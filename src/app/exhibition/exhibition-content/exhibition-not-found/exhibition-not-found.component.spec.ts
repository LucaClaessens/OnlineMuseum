import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionNotFoundComponent } from './exhibition-not-found.component';

describe('ExhibitionNotFoundComponent', () => {
  let component: ExhibitionNotFoundComponent;
  let fixture: ComponentFixture<ExhibitionNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitionNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
