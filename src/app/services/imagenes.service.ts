import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  img1 = `${URL}/upload/Federica2/1.jpg`;
  img2 = `${URL}/upload/Federica2/4a.jpg`;
  img3 = `${URL}/upload/Federica2/5a.jpg`;
  img4 = `${URL}/upload/Federica2/8a.jpg`;

  constructor() { }
}
