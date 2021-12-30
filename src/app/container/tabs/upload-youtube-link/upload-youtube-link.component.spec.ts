import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadYoutubeLinkComponent } from './upload-youtube-link.component';

describe('UploadYoutubeLinkComponent', () => {
  let component: UploadYoutubeLinkComponent;
  let fixture: ComponentFixture<UploadYoutubeLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadYoutubeLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadYoutubeLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
