import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishRecipeComponent } from './publish-recipe.component';

describe('PublishRecipeComponent', () => {
  let component: PublishRecipeComponent;
  let fixture: ComponentFixture<PublishRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
