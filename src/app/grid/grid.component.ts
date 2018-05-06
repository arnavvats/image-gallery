import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/images.service';
import { Image } from '../shared/image.model';
import { Subscription } from 'rxjs';
import { ImageModalComponent } from '../shared/image-modal/image-modal.component';
import { fadeInAndOutAnimation } from '../shared/animations';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  animations: [fadeInAndOutAnimation]
})
export class GridComponent implements OnInit {
  images: Array<Image>;
  imageResults: Array<Image>;
  canSearch: Boolean;

  constructor(private imageService: ImageService) {
    this.images = new Array<Image>();
    this.imageResults = new Array<Image>();
  }

  ngOnInit() {

    // response from server is mapped to image array
    this.imageService.getImages().toPromise().then((res: Array<any> ) => {
      res.forEach(obj => this.images.push(new Image(obj)));
      this.imageResults = this.images.slice(0, 100);
    });

    // In this subscription, whenever the search term changes the array is filtered
    this.imageService.searchTerm.subscribe(res => {
      if (res != '') {
        this.imageResults = this.images.filter(img => {
          return img.title.startsWith(res);
        });
      } else {
        this.canSearch = true;
        this.imageResults = this.images.slice(0, 100);
      }
    });
  }

  // clicking the floating button loads  more images in the browser
  loadMore() {
    if (this.imageResults.length < this.images.length && this.imageService.searchTerm.getValue() == '') {
      this.imageResults.push(...this.images.slice(
        this.imageResults.length,  Math.min(this.imageResults.length + 100, this.images.length))
      );
    }
  }

}
