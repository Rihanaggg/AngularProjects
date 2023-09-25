import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../notice.service';

@Component({
  selector: 'app-list-notices',
  templateUrl: './list-notices.component.html',
  styleUrls: ['./list-notices.component.css']
})
export class ListNoticesComponent implements OnInit {
  notices: any[] = [];

  constructor(private noticeService: NoticeService) { }

  ngOnInit() {
    this.notices = this.noticeService.getNotices();
  }
}
