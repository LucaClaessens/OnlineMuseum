import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownLoaderComponent } from './markdown-loader.component';

describe('MarkdownLoaderComponent', () => {
  let component: MarkdownLoaderComponent;
  let fixture: ComponentFixture<MarkdownLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
