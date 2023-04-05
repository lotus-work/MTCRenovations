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
   
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-04.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-08.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-09.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-10.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-13.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-15.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-20.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-26.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-28.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-30.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-31.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-32.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-34.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-41.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-43.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-44.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-50.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-51.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-62.jpg', caption: 'Image 31' },
   
    { url: '../../../assets/img/painting/our-work/screenshot-1.png', caption: 'Image 14' },
    { url: '../../../assets/img/painting/our-work/screenshot-2.png', caption: 'Image 15' },

    { url: '../../../assets/img/painting/our-work/virtual-tour-318929-mls-high-res-image-43.jpg', caption: 'Image 25' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-320787-01.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-320787-22.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-320787-24.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-320787-48.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-320787-54.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-28.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-43.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-327738-55.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-333305-mls-high-res-image-21.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/virtual-tour-333305-mls-high-res-image-31.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/painting/our-work/IMG_2334.jpg', caption: 'Image 2' },
    { url: '../../../assets/img/painting/our-work/IMG_2337.jpg', caption: 'Image 3' },
    { url: '../../../assets/img/painting/our-work/IMG_2354.jpg', caption: 'Image 4' },
    { url: '../../../assets/img/painting/our-work/IMG_2358.jpg', caption: 'Image 5' },
    { url: '../../../assets/img/painting/our-work/IMG_2360.jpg', caption: 'Image 6' },
    { url: '../../../assets/img/painting/our-work/IMG_2362.jpg', caption: 'Image 2' },
    { url: '../../../assets/img/painting/our-work/IMG_2365.jpg', caption: 'Image 3' },
    { url: '../../../assets/img/painting/our-work/IMG_2368.jpg', caption: 'Image 4' },
    { url: '../../../assets/img/painting/our-work/IMG_2369.jpg', caption: 'Image 5' },
    { url: '../../../assets/img/painting/our-work/IMG_2373.jpg', caption: 'Image 6' },
    { url: '../../../assets/img/painting/our-work/IMG_2378.jpg', caption: 'Image 2' },
    { url: '../../../assets/img/painting/our-work/IMG_2381.jpg', caption: 'Image 3' },
    { url: '../../../assets/img/painting/our-work/IMG_2387.jpg', caption: 'Image 4' },
    { url: '../../../assets/img/painting/our-work/IMG_5269.png', caption: 'Image 5' },
    { url: '../../../assets/img/painting/our-work/IMG_5271.png', caption: 'Image 6' },
    { url: '../../../assets/img/painting/our-work/IMG_5272.png', caption: 'Image 2' },
    { url: '../../../assets/img/painting/our-work/IMG_5273.png', caption: 'Image 3' },
    { url: '../../../assets/img/painting/our-work/IMG_5275.png', caption: 'Image 4' },
    { url: '../../../assets/img/painting/our-work/IMG_5276.png', caption: 'Image 5' },
    { url: '../../../assets/img/painting/our-work/IMG_5277.png', caption: 'Image 6' },
    { url: '../../../assets/img/painting/our-work/IMG_5279.png', caption: 'Image 2' },
    { url: '../../../assets/img/painting/our-work/IMG_5280.png', caption: 'Image 3' },
    { url: '../../../assets/img/painting/our-work/IMG_5281.png', caption: 'Image 4' },
    { url: '../../../assets/img/painting/our-work/IMG_5282.png', caption: 'Image 5' },
    { url: '../../../assets/img/painting/our-work/IMG_5284.png', caption: 'Image 6' },
    { url: '../../../assets/img/painting/our-work/IMG_6477.jpg', caption: 'Image 6' },
    { url: '../../../assets/img/painting/our-work/IMG_6479_2.jpg', caption: 'Image 6' },

    { url: '../../../assets/img/painting/our-work/IMG_0808.jpg', caption: 'Image 2' },
    { url: '../../../assets/img/painting/our-work/IMG_0811.jpg', caption: 'Image 3' },
    { url: '../../../assets/img/painting/our-work/IMG_1365.jpg', caption: 'Image 4' },
    { url: '../../../assets/img/painting/our-work/IMG_7307.jpg', caption: 'Image 5' },
    { url: '../../../assets/img/painting/our-work/IMG_7320.jpg', caption: 'Image 6' }
    
  ];

  selectedImage!: any;

  openModal(image: any): void {
    this.selectedImage = image;
  }

}
