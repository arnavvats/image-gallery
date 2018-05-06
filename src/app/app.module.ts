import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridComponent } from './grid/grid.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageModalComponent } from './shared/image-modal/image-modal.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumComponent } from './album/album.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { ImageGridComponent } from './shared/image-grid/image-grid.component';
const routes: Routes = [
  {path: '', component: GridComponent},
  {path: 'albums', component: AlbumListComponent},
  {path: 'albums/:id', component: AlbumComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ImageModalComponent,
    AlbumListComponent,
    AlbumComponent,
    HeaderComponent,
    ImageGridComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ImageModalComponent]
})
export class AppModule { }
