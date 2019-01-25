import { Injectable } from '@angular/core';
import { Teman } from './teman.model';
@Injectable({
  providedIn: 'root'
})
export class TemanserviceService {

  constructor() { }
    converTeman(temanInfo: Teman): Teman {
      temanInfo.nama = temanInfo.nama.toUpperCase();
      return temanInfo;
  }
}
