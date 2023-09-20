import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students = [
    { Sid: 1, Sname: 'Rucha Chavan', dob: '1990-05-15', course: 'Politics', fees: 1000 },
    { Sid: 2, Sname: 'Maya Bhosale', dob: '1992-09-20', course: 'Current Affairs', fees: 2000 },
    { Sid: 3, Sname: 'Tejal shaha', dob: '1995-02-10', course: 'International Relations', fees: 500 },
    { Sid: 4, Sname: 'Nidhi Gayu', dob: '1988-11-30', course: 'History', fees: 900 }
  ];
}
