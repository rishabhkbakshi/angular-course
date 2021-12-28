import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiServices } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-upload-youtube-link',
  templateUrl: './upload-youtube-link.component.html',
  styleUrls: ['./upload-youtube-link.component.scss']
})
export class UploadYoutubeLinkComponent implements OnInit, AfterViewInit {
  youtubeForm: FormGroup;
  YoutubeURLRegex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
  @Input() resume: any;
  loading = false;

  isVideoUploaded = false;
  uploadAgain = false;

  constructor(
    private apiService: ApiServices,
    private toastr: ToastrService
  ) {
    this.youtubeForm = new FormGroup({
      video_url: new FormControl('', [Validators.required, Validators.pattern(this.YoutubeURLRegex)])
    })
  }
  ngAfterViewInit(): void {
    this.isVideoUploaded = !!this.resume.video_url;
  }

  ngOnInit(): void {
  }

  uploadVideo() {
    this.loading = true;
    if (this.youtubeForm.valid) {
      this.apiService.addVideo(this.resume._id, this.youtubeForm.value).subscribe((data) => {
        this.loading = false;
        const message = this.isVideoUploaded ? 'Video updated successfully' :'Video added successfully'
        this.toastr.success(message);
        this.isVideoUploaded = true;
        // this.uploadAgain = false;
      }, (error) => {
        this.loading = false;
        console.log(error);
      })
    } else {
      this.toastr.error('Form is not valid');
    }

  }

}
