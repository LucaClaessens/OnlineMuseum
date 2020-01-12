import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockholmFontPageComponent } from './stockholm-font-page.component';

describe('StockholmFontPageComponent', () => {
  let component: StockholmFontPageComponent;
  let fixture: ComponentFixture<StockholmFontPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockholmFontPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockholmFontPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
