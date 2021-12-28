import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiServices } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit, AfterViewInit {
  @ViewChild('inputFileControl') inputFileControl: ElementRef;
  @ViewChild('previewImage') previewImage: ElementRef;

  isUploaded = false;
  isSelected = false;
  loading = false;
  selectLabel = 'add';
  file: File;
  MAX_IMAGE_SIZE = 2 * 1000 * 1000;
  url = '';

  @Input() resume: any;

  constructor(
    private toastr: ToastrService,
    private apiService: ApiServices
  ) {

  }
  ngAfterViewInit(): void {
    this.init();
  }

  init() {
    if (this.resume) {
      this.isUploaded = !!this.resume.image_url;
      if (this.isUploaded) {
        this.isSelected = true;
        this.url = this.resume.image_url;
      }
    }
  }

  ngOnInit(): void {
  }

  onImageSelect(value: any) {
    this.file = value.target.files[0];
    if (this.file) {
      if (this.file.size > this.MAX_IMAGE_SIZE) {
        return this.toastr.error("File should be less than 1mb");
      }
      if (this.file.type === ('image/jpeg' || 'image/jpg' || 'image/png' || 'image/JPG')) {
        this.isSelected = true;
        this.selectLabel = 'cached';
        this.previewImage.nativeElement.src = window.URL.createObjectURL(this.file);
      } else {
        this.toastr.error("Image must be of type of jpeg, jpg, png and JPG");
      }
    }
  }

  onBtnClick() {
    this.inputFileControl.nativeElement.click();
  }

  onSave() {
    this.loading = true;
    this.apiService.saveOrDelete(this.file, this.resume._id).subscribe((data: any) => {
      this.isUploaded = true;
      this.toastr.success('Image uploaded successfully');
      this.url = data.image_url;
      this.loading = false;
    }, (error) => {
      this.loading = false;
    })
  }

  onDelete() {
    this.loading = true;
    this.apiService.deleteImage(this.resume._id).subscribe((data: any) => {
      this.toastr.success('Image deleted successfully');
      this.isUploaded = false;
      this.isSelected = false;
      this.url = '';
      this.selectLabel = 'add';
      this.loading = false;
    },(error) =>{
      this.loading = false;
    })
  }

}
