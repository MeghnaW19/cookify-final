import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectinterestsComponent } from './selectinterests.component';

describe('SelectinterestsComponent', () => {
  let component: SelectinterestsComponent;
  let fixture: ComponentFixture<SelectinterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectinterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectinterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
