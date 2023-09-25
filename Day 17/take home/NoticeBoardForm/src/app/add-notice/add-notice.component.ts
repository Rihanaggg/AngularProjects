import { Component } from '@angular/core';
import { NoticeService } from '../notice.service';


@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.css']
})
export class AddNoticeComponent {
  notice = {
    title: '',
    content: '',
    name: '',
    phone: ''
  };

  notices: any[] = [];

  constructor(private noticeService: NoticeService) { }

  addNotice() {
    this.noticeService.addNotice(this.notice);
    this.clearForm();
  }

  private clearForm() {
    this.notice = { title: '', content: '', name: '', phone: '' };
  }
}
