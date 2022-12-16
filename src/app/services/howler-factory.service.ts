import { Injectable } from '@angular/core';
import { Howl, HowlOptions } from 'howler';


@Injectable({
  providedIn: 'root'
})
export class HowlerFactoryService {

  constructor() { }

  public createHowl(options: HowlOptions): Howl {
    return new Howl(options);
}
}
