import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardrecipecardComponent } from './dashboardrecipecard.component';

describe('DashboardrecipecardComponent', () => {
  let component: DashboardrecipecardComponent;
  let fixture: ComponentFixture<DashboardrecipecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardrecipecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardrecipecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
