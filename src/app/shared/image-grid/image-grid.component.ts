import { Component, OnInit, ComponentRef, ViewContainerRef,
  ComponentFactoryResolver, ViewChild, ComponentFactory, Input } from '@angular/core';
import { Image } from '../image.model';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { ImageService } from '../images.service';
import { fadeInAndOutAnimation } from '../animations';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.css'],
  animations: [fadeInAndOutAnimation]
})
export class ImageGridComponent implements OnInit {
  @Input('images')images: Array<Image>;
  albumId: Number;
  componentRef: ComponentRef<ImageModalComponent>;
  @ViewChild('modalContainer', { read: ViewContainerRef }) container;
  constructor(private imageService: ImageService, private resolver: ComponentFactoryResolver) {
   }

   // creates a modal dynamically loading it with image data
   showImage(image: Image) {
    this.container.clear();
    const factory: ComponentFactory<ImageModalComponent> = this.resolver.resolveComponentFactory(ImageModalComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.image = image;
  }

  ngOnInit() {
  }

}
