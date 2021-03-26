import { async, TestBed } from '@angular/core/testing';
import { DashboardrecipecardComponent } from './dashboardrecipecard.component';
describe('DashboardrecipecardComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardrecipecardComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardrecipecardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=dashboardrecipecard.component.spec.js.map