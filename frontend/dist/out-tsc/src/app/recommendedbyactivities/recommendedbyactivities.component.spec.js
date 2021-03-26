import { async, TestBed } from '@angular/core/testing';
import { RecommendedbyactivitiesComponent } from './recommendedbyactivities.component';
describe('RecommendedbyactivitiesComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RecommendedbyactivitiesComponent]
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
//# sourceMappingURL=recommendedbyactivities.component.spec.js.map