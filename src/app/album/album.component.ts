import { Component, OnInit} from '@angular/core';
import { ImageService } from '../shared/images.service';
import { Image } from '../shared/image.model';
import { ActivatedRoute } from '@angular/router';
import { ImageModalComponent } from '../shared/image-modal/image-modal.component';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  images: Array<Image>;
  albumId: Number;
  constructor(private imageService: ImageService, private route: ActivatedRoute) {
    this.images = [];
    this.albumId = route.snapshot.params.id;
   }

   // loadImages method loades images from a specific album from server
   loadImages() {
     return   this.imageService.getAlbumItems(this.albumId).then(res => {
      res.forEach(obj => {
        this.images.push(new Image(obj));
      });
    });
   }

  ngOnInit() {
    this.loadImages();
    this.imageService.searchTerm.subscribe(res => {
      if (res != '') {
        this.images = this.images.filter(img => {
          return img.title.startsWith(res);
        });
      } else {
        this.loadImages();
        }
    });
  }

}
