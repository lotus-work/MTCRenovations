import { Component } from '@angular/core';
interface Image {
  url: string;
  caption?: string;
}
@Component({
  selector: 'app-painting-our-work',
  templateUrl: './painting-our-work.component.html',
  styleUrls: ['./painting-our-work.component.css']
})
export class PaintingOurWorkComponent {
  images: Image[] = [
    { url: '../../../assets/img/painting/our-work/virtual-tour-318929-mls-high-res-image-43.jpg', caption: 'Image 25' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-320787-01.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-320787-05.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-320787-22.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-320787-24.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-320787-48.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-320787-54.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-28.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-43.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-53.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-55.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-333305-mls-high-res-image-21.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-333305-mls-high-res-image-31.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/IMG_0286.jpg', caption: 'Image 1' },
    { url: '../../../assets/img/painting/our-work/IMG_0808.jpg', caption: 'Image 2' },
    { url: '../../../assets/img/painting/our-work/IMG_0811.jpg', caption: 'Image 3' },
    { url: '../../../assets/img/painting/our-work/IMG_1365.jpg', caption: 'Image 4' },
    { url: '../../../assets/img/painting/our-work/IMG_7307.jpg', caption: 'Image 5' },
    { url: '../../../assets/img/painting/our-work/IMG_7320.jpg', caption: 'Image 6' },
    { url: '../../../assets/img/painting/our-work/screenshot-1.png', caption: 'Image 14' },
    { url: '../../../assets/img/painting/our-work/screenshot-2.png', caption: 'Image 15' }
  ];

  selectedImage!: any;

  openModal(image: any): void {
    this.selectedImage = image;
  }

}
