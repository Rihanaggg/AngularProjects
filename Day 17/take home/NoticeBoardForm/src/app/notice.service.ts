import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  private notices: any[] = [];

  addNotice(notice: any) {
    if (this.notices.length >= 6) {

      this.notices.shift();
    }
    this.notices.push({ ...notice });
  }

  getNotices() {
    return this.notices;
  }
}
