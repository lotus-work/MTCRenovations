import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


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

  constructor(
    private route: ActivatedRoute
  ) { }
  images: Image[] = [
    { url: '../../../assets/img/basement/our-work/screenshot-1.png', caption: 'Image 1' },
    { url: '../../../assets/img/basement/our-work/screenshot-3.png', caption: 'Image 3' },
    { url: '../../../assets/img/basement/our-work/screenshot-4.png', caption: 'Image 4' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-318929-mls-high-res-image-41.jpg', caption: 'Image 8' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-318929-mls-high-res-image-42.jpg', caption: 'Image 9' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-318929-mls-high-res-image-43.jpg', caption: 'Image 10' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-318929-mls-high-res-image-44.jpg', caption: 'Image 11' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-320787-37.jpg', caption: 'Image 12' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-320787-48.jpg', caption: 'Image 14' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-320787-50.jpg', caption: 'Image 15' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-320787-51.jpg', caption: 'Image 16' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-320787-54.jpg', caption: 'Image 17' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-327738-43.jpg', caption: 'Image 20' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-327738-49.jpg', caption: 'Image 23' },
    { url: '../../../assets/img/basement/our-work/virtual-tour-327738-50.jpg', caption: 'Image 24' },
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

  ngOnInit() {
    const filter = this.route.snapshot.queryParamMap.get('filter');
    if (filter == 'recreation-offices') {
      this.images = [
        { url: '../../../assets/img/basement/our-work/screenshot-3.png', caption: 'Image 3' },
        { url: '../../../assets/img/basement/our-work/screenshot-4.png', caption: 'Image 4' },
        { url: '../../../assets/img/basement/our-work/virtual-tour-318929-mls-high-res-image-41.jpg', caption: 'Image 8' },
        { url: '../../../assets/img/basement/our-work/virtual-tour-318929-mls-high-res-image-42.jpg', caption: 'Image 9' },
        { url: '../../../assets/img/basement/our-work/virtual-tour-318929-mls-high-res-image-43.jpg', caption: 'Image 10' },
        { url: '../../../assets/img/basement/our-work/virtual-tour-318929-mls-high-res-image-44.jpg', caption: 'Image 11' },
        { url: '../../../assets/img/basement/our-work/virtual-tour-320787-37.jpg', caption: 'Image 12' },
        { url: '../../../assets/img/basement/our-work/virtual-tour-320787-48.jpg', caption: 'Image 14' },
        { url: '../../../assets/img/basement/our-work/virtual-tour-320787-50.jpg', caption: 'Image 15' },
        { url: '../../../assets/img/basement/our-work/virtual-tour-320787-51.jpg', caption: 'Image 16' },
        { url: '../../../assets/img/basement/our-work/virtual-tour-320787-54.jpg', caption: 'Image 17' },
        { url: '../../../assets/img/basement/our-work/virtual-tour-327738-43.jpg', caption: 'Image 20' },
        { url: '../../../assets/img/basement/our-work/virtual-tour-327738-49.jpg', caption: 'Image 23' },
        { url: '../../../assets/img/basement/our-work/virtual-tour-327738-50.jpg', caption: 'Image 24' },
{ url: '../../../assets/img/basement/our-work/virtual-tour-333305-mls-high-res-image-38.jpg', caption: 'Image 28' },
        { url: '../../../assets/img/basement/our-work/virtual-tour-333305-mls-high-res-image-40.jpg', caption: 'Image 29' },
        { url: '../../../assets/img/basement/our-work/virtual-tour-333305-mls-high-res-image-42.jpg', caption: 'Image 30' },
        { url: '../../../assets/img/basement/our-work/virtual-tour-333305-mls-high-res-image-45.jpg', caption: 'Image 31' },
        { url: '../../../assets/img/basement/our-work/virtual-tour-333305-mls-high-res-image-46.jpg', caption: 'Image 32' },
        { url: '../../../assets/img/basement/our-work/IMG_2338.jpg', caption: 'Image 32' },
        { url: '../../../assets/img/basement/our-work/IMG_2337.jpg', caption: 'Image 32' },
        { url: '../../../assets/img/basement/our-work/IMG_1374.jpg', caption: 'Image 32' },
        { url: '../../../assets/img/basement/our-work/IMG_1362.jpg', caption: 'Image 32' },
     
      ];
    }
    if (filter == 'living-space') {
      this.images = [
        { url: '../../../assets/img/basement/our-work/screenshot-1.png', caption: 'Image 1' },
        { url: '../../../assets/img/basement/our-work/screenshot-3.png', caption: 'Image 3' },
        { url: '../../../assets/img/basement/our-work/virtual-tour-327738-49.jpg', caption: 'Image 23' },
        { url: '../../../assets/img/basement/our-work/virtual-tour-327738-50.jpg', caption: 'Image 24' },
        { url: '../../../assets/img/basement/our-work/virtual-tour-333305-mls-high-res-image-46.jpg', caption: 'Image 32' },
        { url: '../../../assets/img/basement/our-work/IMG_1374.jpg', caption: 'Image 32' },
       
        
      ];
    }

  }

}