import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAndContainerComponent } from './content-and-container-and-template.component';

describe('ContentAndContainerComponent', () => {
  let component: ContentAndContainerComponent;
  let fixture: ComponentFixture<ContentAndContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentAndContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAndContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
