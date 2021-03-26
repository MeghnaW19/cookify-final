import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedbyactivitiesComponent } from './recommendedbyactivities.component';

describe('RecommendedbyactivitiesComponent', () => {
  let component: RecommendedbyactivitiesComponent;
  let fixture: ComponentFixture<RecommendedbyactivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedbyactivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedbyactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
