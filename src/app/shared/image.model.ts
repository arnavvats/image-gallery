export class Image {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  constructor(data: JSON) {
    Object.assign(this, data);
  }
}
