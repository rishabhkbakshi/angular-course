import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCompoComponent } from './input-compo.component';

describe('InputCompoComponent', () => {
  let component: InputCompoComponent;
  let fixture: ComponentFixture<InputCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
