import { async, TestBed } from '@angular/core/testing';
import { RecommendedbyhistoryComponent } from './recommendedbyhistory.component';
describe('RecommendedbyhistoryComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RecommendedbyhistoryComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(RecommendedbyhistoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=recommendedbyhistory.component.spec.js.map