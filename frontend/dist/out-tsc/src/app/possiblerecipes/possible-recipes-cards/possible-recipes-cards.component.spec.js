import { async, TestBed } from '@angular/core/testing';
import { PossibleRecipesCardsComponent } from './possible-recipes-cards.component';
describe('PossibleRecipesCardsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PossibleRecipesCardsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PossibleRecipesCardsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=possible-recipes-cards.component.spec.js.map