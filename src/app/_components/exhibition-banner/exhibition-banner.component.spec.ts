import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionBannerComponent } from './exhibition-banner.component';

describe('ExhibitionBannerComponent', () => {
  let component: ExhibitionBannerComponent;
  let fixture: ComponentFixture<ExhibitionBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitionBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
