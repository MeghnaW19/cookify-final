import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderpreviewComponent } from './orderpreview.component';

describe('OrderpreviewComponent', () => {
  let component: OrderpreviewComponent;
  let fixture: ComponentFixture<OrderpreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderpreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
