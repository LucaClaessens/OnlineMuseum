import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionAboutComponent } from './exhibition-about.component';

describe('ExhibitionAboutComponent', () => {
  let component: ExhibitionAboutComponent;
  let fixture: ComponentFixture<ExhibitionAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitionAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
