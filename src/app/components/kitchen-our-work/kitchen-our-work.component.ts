import { Component } from '@angular/core';

interface Image {
  url: string;
  caption?: string;
}

@Component({
  selector: 'app-kitchen-our-work',
  templateUrl: './kitchen-our-work.component.html',
  styleUrls: ['./kitchen-our-work.component.css']
})
export class KitchenOurWorkComponent {
  images: Image[] = [
    { url: '../../../assets/img/kitchen/our-work/IMG_9453.jpg', caption: 'Image 1' },
    { url: '../../../assets/img/kitchen/our-work/IMG_9454.jpg', caption: 'Image 3' },
    { url: '../../../assets/img/kitchen/our-work/IMG_9455.jpg', caption: 'Image 4' },
    { url: '../../../assets/img/kitchen/our-work/IMG_9456.jpg', caption: 'Image 1' },
    { url: '../../../assets/img/kitchen/our-work/IMG_9460.jpg', caption: 'Image 3' },
    { url: '../../../assets/img/kitchen/our-work/IMG_9461.jpg', caption: 'Image 4' },
    { url: '../../../assets/img/kitchen/our-work/IMG_9462.jpg', caption: 'Image 1' },
    { url: '../../../assets/img/kitchen/our-work/IMG_9463.jpg', caption: 'Image 3' },
    { url: '../../../assets/img/kitchen/our-work/IMG_9464.jpg', caption: 'Image 4' },
    { url: '../../../assets/img/kitchen/our-work/IMG_9465.jpg', caption: 'Image 1' },

    { url: '../../../assets/img/kitchen/our-work/screenshot-4.png', caption: 'Image 17' },
    { url: '../../../assets/img/kitchen/our-work/screenshot-5.png', caption: 'Image 18' },
    { url: '../../../assets/img/kitchen/our-work/screenshot-6.png', caption: 'Image 19' },
    { url: '../../../assets/img/kitchen/our-work/screenshot-7.png', caption: 'Image 20' },
    { url: '../../../assets/img/kitchen/our-work/screenshot-8.png', caption: 'Image 21' },
    { url: '../../../assets/img/kitchen/our-work/screenshot-9.png', caption: 'Image 22' },
    { url: '../../../assets/img/kitchen/our-work/screenshot-10.png', caption: 'Image 23' },
    { url: '../../../assets/img/kitchen/our-work/screenshot-11.png', caption: 'Image 24' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-318929-mls-high-res-image-11.jpg', caption: 'Image 25' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-318929-mls-high-res-image-18.jpg', caption: 'Image 26' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-318929-mls-high-res-image-19.jpg', caption: 'Image 27' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-318929-mls-high-res-image-20.jpg', caption: 'Image 28' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-318929-mls-high-res-image-22.jpg', caption: 'Image 29' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-318929-mls-high-res-image-23.jpg', caption: 'Image 30' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-320787-08.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-320787-09.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-320787-11.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-320787-12.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-320787-13.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-320787-14.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-320787-15.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-320787-39.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-320787-41.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-320787-42.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-320787-43.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-320787-44.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-327738-15.jpg', caption: 'Image 32' },

    { url: '../../../assets/img/kitchen/our-work/virtual-tour-327738-19.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-327738-20.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-327738-21.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-327738-22.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-327738-23.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-327738-25.jpg', caption: 'Image 32' },
  
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-333305-mls-high-res-image-3.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-333305-mls-high-res-image-6.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-333305-mls-high-res-image-7.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-333305-mls-high-res-image-10.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/kitchen/our-work/virtual-tour-333305-mls-high-res-image-11.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/kitchen/our-work/IMG_2358.jpg', caption: 'Image 1' },
    { url: '../../../assets/img/kitchen/our-work/IMG_7304.jpg', caption: 'Image 2' },
    { url: '../../../assets/img/kitchen/our-work/IMG_7310.jpg', caption: 'Image 3' },
    { url: '../../../assets/img/kitchen/our-work/IMG_7311.jpg', caption: 'Image 4' },
    { url: '../../../assets/img/kitchen/our-work/IMG_7312.jpg', caption: 'Image 5' },
    { url: '../../../assets/img/kitchen/our-work/IMG_7313.jpg', caption: 'Image 6' },
    { url: '../../../assets/img/kitchen/our-work/IMG_0296.jpg', caption: 'Image 7' },
    { url: '../../../assets/img/kitchen/our-work/IMG_0795.jpg', caption: 'Image 8' },
    { url: '../../../assets/img/kitchen/our-work/IMG_0796.jpg', caption: 'Image 9' },
    { url: '../../../assets/img/kitchen/our-work/IMG_0801.jpg', caption: 'Image 10' },
    { url: '../../../assets/img/kitchen/our-work/IMG_1241.jpg', caption: 'Image 11' },
    { url: '../../../assets/img/kitchen/our-work/IMG_1370.jpg', caption: 'Image 12' },
    { url: '../../../assets/img/kitchen/our-work/screenshot-1.png', caption: 'Image 14' },
    { url: '../../../assets/img/kitchen/our-work/screenshot-2.png', caption: 'Image 15' },
    { url: '../../../assets/img/kitchen/our-work/screenshot-3.png', caption: 'Image 16' },
  ];

  selectedImage!: any;

  openModal(image: any): void {
    this.selectedImage = image;
  }

}