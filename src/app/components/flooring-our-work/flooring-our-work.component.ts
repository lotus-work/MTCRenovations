import { Component } from '@angular/core';

interface Image {
  url: string;
  caption?: string;
}

@Component({
  selector: 'app-flooring-our-work',
  templateUrl: './flooring-our-work.component.html',
  styleUrls: ['./flooring-our-work.component.css']
})
export class FlooringOurWorkComponent {
  images: Image[] = [
    { url: '../../../assets/img/flooring/our-work/IMG_9448.jpg', caption: 'Image 1' },
    { url: '../../../assets/img/flooring/our-work/IMG_9449.jpg', caption: 'Image 3' },
    { url: '../../../assets/img/flooring/our-work/IMG_9450.jpg', caption: 'Image 4' },
    { url: '../../../assets/img/flooring/our-work/IMG_9451.jpg', caption: 'Image 1' },
    { url: '../../../assets/img/flooring/our-work/IMG_9469.jpg', caption: 'Image 3' },
    { url: '../../../assets/img/flooring/our-work/IMG_9473.jpg', caption: 'Image 4' },
    { url: '../../../assets/img/flooring/our-work/IMG_9476.jpg', caption: 'Image 1' },
    { url: '../../../assets/img/flooring/our-work/IMG_9477.jpg', caption: 'Image 3' },
    { url: '../../../assets/img/flooring/our-work/IMG_9483.jpg', caption: 'Image 4' },
    { url: '../../../assets/img/flooring/our-work/IMG_9494.jpg', caption: 'Image 1' },
    { url: '../../../assets/img/flooring/our-work/IMG_9497.jpg', caption: 'Image 1' },

    { url: '../../../assets/img/flooring/our-work/screenshot-4.png', caption: 'Image 17' },
    { url: '../../../assets/img/flooring/our-work/screenshot-5.png', caption: 'Image 18' },
    { url: '../../../assets/img/flooring/our-work/screenshot-6.png', caption: 'Image 19' },
   { url: '../../../assets/img/flooring/our-work/virtual-tour-318929-mls-high-res-image-4.jpg', caption: 'Image 25' },
    { url: '../../../assets/img/flooring/our-work/virtual-tour-318929-mls-high-res-image-40.jpg', caption: 'Image 26' },
    { url: '../../../assets/img/flooring/our-work/virtual-tour-318929-mls-high-res-image-41.jpg', caption: 'Image 27' },
    { url: '../../../assets/img/flooring/our-work/virtual-tour-320787-19.jpg', caption: 'Image 28' },
    { url: '../../../assets/img/flooring/our-work/virtual-tour-320787-22.jpg', caption: 'Image 29' },
    { url: '../../../assets/img/flooring/our-work/virtual-tour-320787-50.jpg', caption: 'Image 30' },
    { url: '../../../assets/img/flooring/our-work/virtual-tour-327738-27.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/flooring/our-work/virtual-tour-327738-28.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/flooring/our-work/virtual-tour-327738-43.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/flooring/our-work/virtual-tour-327738-55.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/flooring/our-work/virtual-tour-333305-mls-high-res-image-19.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/flooring/our-work/virtual-tour-333305-mls-high-res-image-40.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/flooring/our-work/virtual-tour-333305-mls-high-res-image-42.jpg', caption: 'Image 32' },

    { url: '../../../assets/img/flooring/our-work/IMG_0808.jpg', caption: 'Image 1' },
    { url: '../../../assets/img/flooring/our-work/IMG_0810.jpg', caption: 'Image 2' },
    { url: '../../../assets/img/flooring/our-work/IMG_0811.jpg', caption: 'Image 3' },
    { url: '../../../assets/img/flooring/our-work/IMG_0969.jpg', caption: 'Image 4' },
    { url: '../../../assets/img/flooring/our-work/IMG_1362.jpg', caption: 'Image 5' },
    { url: '../../../assets/img/flooring/our-work/IMG_1365.jpg', caption: 'Image 6' },
    { url: '../../../assets/img/flooring/our-work/IMG_1374.jpg', caption: 'Image 7' },
    { url: '../../../assets/img/flooring/our-work/IMG_2369.jpg', caption: 'Image 8' },
    { url: '../../../assets/img/flooring/our-work/IMG_7319.jpg', caption: 'Image 9' },
    { url: '../../../assets/img/flooring/our-work/screenshot-1.png', caption: 'Image 14' },
    { url: '../../../assets/img/flooring/our-work/screenshot-2.png', caption: 'Image 15' },
    { url: '../../../assets/img/flooring/our-work/screenshot-3.png', caption: 'Image 16' },
  ];

  selectedImage!: any;

  openModal(image: any): void {
    this.selectedImage = image;
  }

}