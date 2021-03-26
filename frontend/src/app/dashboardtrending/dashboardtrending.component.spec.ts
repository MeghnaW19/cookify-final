import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardtrendingComponent } from './dashboardtrending.component';

describe('DashboardtrendingComponent', () => {
  let component: DashboardtrendingComponent;
  let fixture: ComponentFixture<DashboardtrendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardtrendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardtrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
