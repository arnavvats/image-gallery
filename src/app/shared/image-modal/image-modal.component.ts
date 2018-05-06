import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../image.model';
import { fadeInAndOutAnimation } from '../animations';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css'],
  animations: [fadeInAndOutAnimation]
})
export class ImageModalComponent implements OnInit {
  open: Boolean;
  @Input('image')image: Image;
  constructor() {
    // this opens up the modal upon construction
    this.open = true;
   }

  ngOnInit() {
  }

}
