import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectThumbnailComponent } from './object-thumbnail.component';

describe('ObjectThumbnailComponent', () => {
  let component: ObjectThumbnailComponent;
  let fixture: ComponentFixture<ObjectThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
