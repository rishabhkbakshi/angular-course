import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeNameComponentComponent } from './resume-name-component.component';

describe('ResumeNameComponentComponent', () => {
  let component: ResumeNameComponentComponent;
  let fixture: ComponentFixture<ResumeNameComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeNameComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeNameComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
