import { Component, OnInit } from '@angular/core';
import { ImageService } from '../images.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor( private imageService: ImageService) {
  }

  // assigns a new value to searchterm which when changed triggers searching in page
  search(term: string) {
    this.imageService.searchTerm.next(term);
  }

  ngOnInit() {
  }

}
