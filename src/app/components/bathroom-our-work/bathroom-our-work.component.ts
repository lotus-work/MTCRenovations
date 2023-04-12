import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Image {
  url: string;
  caption?: string;
}
@Component({
  selector: 'app-bathroom-our-work',
  templateUrl: './bathroom-our-work.component.html',
  styleUrls: ['./bathroom-our-work.component.css']
})
export class BathroomOurWorkComponent {

  constructor(
    private route: ActivatedRoute
  ) { }



  images: Image[] = [
    { url: '../../../assets/img/bathroom/our-work/virtual-tour-318929-mls-high-res-image-27.jpg', caption: 'Image 25' },
    { url: '../../../assets/img/bathroom/our-work/virtual-tour-318929-mls-high-res-image-28.jpg', caption: 'Image 26' },
    { url: '../../../assets/img/bathroom/our-work/virtual-tour-318929-mls-high-res-image-29.jpg', caption: 'Image 27' },
    { url: '../../../assets/img/bathroom/our-work/virtual-tour-318929-mls-high-res-image-33.jpg', caption: 'Image 28' },
    { url: '../../../assets/img/bathroom/our-work/virtual-tour-318929-mls-high-res-image-34.jpg', caption: 'Image 29' },
    { url: '../../../assets/img/bathroom/our-work/virtual-tour-318929-mls-high-res-image-39.jpg', caption: 'Image 30' },
    { url: '../../../assets/img/bathroom/our-work/virtual-tour-318929-mls-high-res-image-45.jpg', caption: 'Image 30' },
    { url: '../../../assets/img/bathroom/our-work/virtual-tour-318929-mls-high-res-image-46.jpg', caption: 'Image 30' },

    { url: '../../../assets/img/bathroom/our-work/virtual-tour-320787-31.jpg', caption: 'Image 31' },
    { url: '../../../assets/img/bathroom/our-work/virtual-tour-320787-32.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/bathroom/our-work/virtual-tour-320787-33.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/bathroom/our-work/virtual-tour-327738-35.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/bathroom/our-work/virtual-tour-327738-36.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/bathroom/our-work/virtual-tour-327738-37.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/bathroom/our-work/virtual-tour-327738-39.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/bathroom/our-work/virtual-tour-327738-45.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/bathroom/our-work/virtual-tour-327738-46.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/bathroom/our-work/virtual-tour-327738-47.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/bathroom/our-work/virtual-tour-333305-mls-high-res-image-23.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/bathroom/our-work/virtual-tour-333305-mls-high-res-image-27.jpg', caption: 'Image 32' },
    { url: '../../../assets/img/bathroom/our-work/virtual-tour-333305-mls-high-res-image-28.jpg', caption: 'Image 32' },

    { url: '../../../assets/img/bathroom/our-work/IMG_1366.jpg', caption: 'Image 1' },
    { url: '../../../assets/img/bathroom/our-work/IMG_1367.jpg', caption: 'Image 2' },
    { url: '../../../assets/img/bathroom/our-work/IMG_2350.jpg', caption: 'Image 3' },
    { url: '../../../assets/img/bathroom/our-work/IMG_7316.jpg', caption: 'Image 5' },
    { url: '../../../assets/img/bathroom/our-work/IMG_7332.jpg', caption: 'Image 6' },
    { url: '../../../assets/img/bathroom/our-work/IMG_7334.jpg', caption: 'Image 7' },
    { url: '../../../assets/img/bathroom/our-work/screenshot-1.png', caption: 'Image 14' },
    { url: '../../../assets/img/bathroom/our-work/screenshot-2.png', caption: 'Image 15' },
    { url: '../../../assets/img/bathroom/our-work/screenshot-3.png', caption: 'Image 16' },
    { url: '../../../assets/img/bathroom/our-work/screenshot-4.png', caption: 'Image 16' },
    { url: '../../../assets/img/bathroom/our-work/screenshot-5.png', caption: 'Image 16' },

  ];

  selectedImage!: any;

  openModal(image: any): void {
    this.selectedImage = image;
  }

  ngOnInit() {
    const filter = this.route.snapshot.queryParamMap.get('filter');
    if (filter == 'vanities') {
      this.images = [
        { url: '../../../assets/img/bathroom/our-work/virtual-tour-318929-mls-high-res-image-27.jpg', caption: 'Image 25' },
        { url: '../../../assets/img/bathroom/our-work/virtual-tour-318929-mls-high-res-image-28.jpg', caption: 'Image 26' },
        { url: '../../../assets/img/bathroom/our-work/virtual-tour-318929-mls-high-res-image-33.jpg', caption: 'Image 28' },
        { url: '../../../assets/img/bathroom/our-work/virtual-tour-318929-mls-high-res-image-34.jpg', caption: 'Image 29' },
        { url: '../../../assets/img/bathroom/our-work/virtual-tour-318929-mls-high-res-image-39.jpg', caption: 'Image 30' },
        { url: '../../../assets/img/bathroom/our-work/virtual-tour-318929-mls-high-res-image-45.jpg', caption: 'Image 30' },
        { url: '../../../assets/img/bathroom/our-work/virtual-tour-327738-35.jpg', caption: 'Image 32' },
        { url: '../../../assets/img/bathroom/our-work/virtual-tour-327738-39.jpg', caption: 'Image 32' },
        { url: '../../../assets/img/bathroom/our-work/virtual-tour-327738-45.jpg', caption: 'Image 32' },
        { url: '../../../assets/img/bathroom/our-work/virtual-tour-327738-46.jpg', caption: 'Image 32' },
        { url: '../../../assets/img/bathroom/our-work/virtual-tour-327738-47.jpg', caption: 'Image 32' },
        { url: '../../../assets/img/bathroom/our-work/virtual-tour-333305-mls-high-res-image-23.jpg', caption: 'Image 32' },
        { url: '../../../assets/img/bathroom/our-work/virtual-tour-333305-mls-high-res-image-27.jpg', caption: 'Image 32' },

        { url: '../../../assets/img/bathroom/our-work/IMG_1366.jpg', caption: 'Image 1' },
        { url: '../../../assets/img/bathroom/our-work/IMG_2350.jpg', caption: 'Image 3' },
        { url: '../../../assets/img/bathroom/our-work/screenshot-1.png', caption: 'Image 14' },
        { url: '../../../assets/img/bathroom/our-work/screenshot-2.png', caption: 'Image 15' },
        { url: '../../../assets/img/bathroom/our-work/screenshot-3.png', caption: 'Image 16' },
        { url: '../../../assets/img/bathroom/our-work/screenshot-4.png', caption: 'Image 16' },
        { url: '../../../assets/img/bathroom/our-work/screenshot-5.png', caption: 'Image 16' },

      ];
    }
    if (filter == 'showers-fixtures') {
      this.images = [
        { url: '../../../assets/img/bathroom/our-work/virtual-tour-318929-mls-high-res-image-29.jpg', caption: 'Image 27' },
        { url: '../../../assets/img/bathroom/our-work/virtual-tour-327738-47.jpg', caption: 'Image 32' },

        { url: '../../../assets/img/bathroom/our-work/screenshot-4.png', caption: 'Image 16' },
        { url: '../../../assets/img/bathroom/our-work/screenshot-4.png', caption: 'Image 16' },
       
        { url: '../../../assets/img/bathroom/our-work/virtual-tour-318929-mls-high-res-image-29.jpg', caption: 'Image 27' },
        { url: '../../../assets/img/bathroom/our-work/virtual-tour-327738-47.jpg', caption: 'Image 32' },

        { url: '../../../assets/img/bathroom/our-work/virtual-tour-327738-35.jpg', caption: 'Image 32' },
        { url: '../../../assets/img/bathroom/our-work/virtual-tour-333305-mls-high-res-image-28.jpg', caption: 'Image 32' },

        { url: '../../../assets/img/bathroom/our-work/IMG_7316.jpg', caption: 'Image 5' },
        { url: '../../../assets/img/bathroom/our-work/IMG_1367.jpg', caption: 'Image 2' },
       
        { url: '../../../assets/img/bathroom/our-work/IMG_1367.jpg', caption: 'Image 2' },
        { url: '../../../assets/img/bathroom/our-work/IMG_7514.jpg', caption: 'Image 2' },

      ];
    }

  }

}
