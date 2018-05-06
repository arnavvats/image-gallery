import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/images.service';
import { Router } from '@angular/router';
import { fadeInAndOutAnimation } from '../shared/animations';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
  animations: [fadeInAndOutAnimation]
})
export class AlbumListComponent implements OnInit {
  albums: Array<Number>;
  constructor(private imageService: ImageService, private router: Router) { }

  // this method re-routes to new page showing the contents of an album
  showAlbum(albumId: Number) {
    this.router.navigate(['albums', albumId]);
  }
  ngOnInit() {
    this.imageService.getAlbums().then(res => {
      this.albums = res;
    });
  }

}
