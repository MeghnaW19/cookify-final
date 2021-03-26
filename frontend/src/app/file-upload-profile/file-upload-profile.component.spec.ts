import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadProfileComponent } from './file-upload-profile.component';

describe('FileUploadProfileComponent', () => {
  let component: FileUploadProfileComponent;
  let fixture: ComponentFixture<FileUploadProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
