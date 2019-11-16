import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationLeafletComponent } from './information-leaflet.component';

describe('InformationLeafletComponent', () => {
  let component: InformationLeafletComponent;
  let fixture: ComponentFixture<InformationLeafletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationLeafletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationLeafletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
