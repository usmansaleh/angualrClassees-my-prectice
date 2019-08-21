import { Component, OnInit, Input } from '@angular/core';
import { TestService } from 'src/app/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: any;

  formValue: any;
  constructor(private _service: TestService,
    private router: Router) { }

  ngOnInit() {
    this.userList = this._service.getList();
  }

  reciveMessage($event) {
    this.formValue = $event;
    console.log(this.formValue);
    this._service.save(this.formValue);
  }
  delete(id) {
    this._service.delete(id);
  }

  edit(value) {
    this.router.navigate(['edit', value.id]);
  }
}
