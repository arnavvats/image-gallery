# ImageGallery

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Description

This is a sample project which is an image gallery of different images.
You can browse through different albums or search for an image title.
The sample images are fetched from https://jsonplaceholder.typicode.com/photos.

## Code


The shared folder contains
1)image.service.ts file which fetches the images from api.
2) The header, image grid and image-modal components used throughout the application.
3)The image.model.ts file which is a class containing attributes for the image, the response from api is mapped to create a new object of this class.
4) animations.ts which contains the ease-in and ease-out animations for components.

The grid folders renders on root level of application showing all images from all albums, images are loaded 100 at a time with a load more button so that the browser does not crash.

The album-list folder is for /albums route which shows list of all individual albums by mapping them from the api response.

The album folder is for '/albums/{id}' route and shows all the images contained in the album corresponding to that route.

## Dependencies

The clarity design system has been used for UI and Styling.

