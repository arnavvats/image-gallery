import { Injectable } from '@angular/core';
import { Image } from './image.model';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  configUrl: string;

  // This behavior subject is being observed by the pages in home and `/albums`, which
  // react to change as soon as the value of the variable changes
  searchTerm: BehaviorSubject<string>;
  constructor(private http: HttpClient) {
    this.configUrl = 'https://jsonplaceholder.typicode.com/photos';
    this.searchTerm = new BehaviorSubject('');
  }

  // sends request to server
  getImages(): Observable<any> {
     return this.http.get(this.configUrl);
    }

    // returns a promise containing all albums id from response
    getAlbums() {
      return this.getImages().pipe(
        map((res: Array<JSON>) => {
          const albums: Array<Number> = [];
          res.forEach(obj => {
            if (!albums.includes(obj['albumId'])) {
              albums.push(obj['albumId']);
            }
          });
          return albums;
      })).toPromise();
    }

    // returns promise which reolves to all images contained in album

    getAlbumItems(albumId: Number) {
      return this.getImages().pipe(
        map((res: Array<JSON>) => {
          return res.filter(((obj) => {
            return obj['albumId'] == albumId;
          }));
        })
      ).toPromise();
    }
}
