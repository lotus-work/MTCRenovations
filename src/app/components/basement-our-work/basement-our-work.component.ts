import { Component } from '@angular/core';


interface Image {
  url: string;
  caption?: string;
}

@Component({
  selector: 'app-basement-our-work',
  templateUrl: './basement-our-work.component.html',
  styleUrls: ['./basement-our-work.component.css']
})
export class BasementOurWorkComponent {
  images: Image[] = [
    { url: '../../../assets/img/basement/our-work/screenshot-1.png', caption: 'Image 1' },
    { url: '../../../assets/img/basement/our-work/screenshot-2.png', caption: 'Image 2' },
    { url: '../../../assets/img/basement/our-work/screenshot-3.png', caption: 'Image 3' },
    { url: '../../../assets/img/basement/our-work/screenshot-4.png', caption: 'Image 4' },
    { url: '../../../assets/img/basement/our-work/screenshot-5.png', caption: 'Image 5' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-318929-mls-high-res-image-6.jpg', caption: 'Image 6' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-318929-mls-high-res-image-39.jpg', caption: 'Image 7' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-318929-mls-high-res-image-41.jpg', caption: 'Image 8' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-318929-mls-high-res-image-42.jpg', caption: 'Image 9' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-318929-mls-high-res-image-43.jpg', caption: 'Image 10' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-318929-mls-high-res-image-44.jpg', caption: 'Image 11' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-320787-37.jpg', caption: 'Image 12' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-320787-48.jpg', caption: 'Image 14' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-320787-50.jpg', caption: 'Image 15' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-320787-51.jpg', caption: 'Image 16' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-320787-54.jpg', caption: 'Image 17' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-320787-56.jpg', caption: 'Image 18' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-327738-08.jpg', caption: 'Image 19' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-327738-43.jpg', caption: 'Image 20' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-327738-44.jpg', caption: 'Image 21' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-327738-47.jpg', caption: 'Image 22' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-327738-49.jpg', caption: 'Image 23' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-327738-50.jpg', caption: 'Image 24' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-333305-mls-high-res-image-9.jpg', caption: 'Image 25' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-333305-mls-high-res-image-14.jpg', caption: 'Image 26' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-333305-mls-high-res-image-37.jpg', caption: 'Image 27' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-333305-mls-high-res-image-38.jpg', caption: 'Image 28' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-333305-mls-high-res-image-40.jpg', caption: 'Image 29' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-333305-mls-high-res-image-42.jpg', caption: 'Image 30' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-333305-mls-high-res-image-45.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-333305-mls-high-res-image-46.jpg', caption: 'Image 32' },
   
  ];

  selectedImage!: any;

  openModal(image: any): void {
    this.selectedImage = image;
  }

}