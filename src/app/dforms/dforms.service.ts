import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DformsService {
  private isPopupOpen = false;

  // tslint:disable-next-line:typedef
  openPopup() {
    this.isPopupOpen = true;
  }

  // tslint:disable-next-line:typedef
  closePopup() {
    this.isPopupOpen = false;
  }

  // tslint:disable-next-line:typedef
  isPopupVisible() {
    return this.isPopupOpen;
  }
}
