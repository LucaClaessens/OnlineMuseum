import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionObjectListComponent } from './exhibition-object-list.component';

describe('ExhibitionObjectListComponent', () => {
  let component: ExhibitionObjectListComponent;
  let fixture: ComponentFixture<ExhibitionObjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitionObjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionObjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
