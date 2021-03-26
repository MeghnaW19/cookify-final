import { async, TestBed } from '@angular/core/testing';
import { PossiblerecipesComponent } from './possiblerecipes.component';
describe('PossiblerecipesComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PossiblerecipesComponent]
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
//# sourceMappingURL=possiblerecipes.component.spec.js.map