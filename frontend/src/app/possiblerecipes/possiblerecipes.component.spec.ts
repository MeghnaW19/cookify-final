import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PossiblerecipesComponent } from './possiblerecipes.component';

describe('PossiblerecipesComponent', () => {
  let component: PossiblerecipesComponent;
  let fixture: ComponentFixture<PossiblerecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossiblerecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PossiblerecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
