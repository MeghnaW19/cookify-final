import { async, TestBed } from '@angular/core/testing';
import { PublishRecipeComponent } from './publish-recipe.component';
describe('PublishRecipeComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PublishRecipeComponent]
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
//# sourceMappingURL=publish-recipe.component.spec.js.map