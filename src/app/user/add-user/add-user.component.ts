import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TestService } from 'src/app/test.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit, OnDestroy {

  urlId = 0;
  userForm: FormGroup;
  formValue: any;
  @Output() messageEvent = new EventEmitter<any>();
  constructor(private fb: FormBuilder,
    private _service: TestService,
    private routes: Router,
    private rout: ActivatedRoute) { }

  ngOnInit() {
    this.rout.paramMap.subscribe((res: any) => {
      this.urlId = +res.params.id;
    });
    this.userForm = this.fb.group({
      name: [''],
      lastName: [''],
      id: [Math.floor(Math.random() * new Date().getTime())],
    });

    if (this.urlId !== 0) {
      const value = this._service.getOne(this.urlId);
      this.onLoadData(value);
    }
  }

  onLoadData(value): void {
    // set value and patch value

    // this.userForm.get('fName').setValue('Usman');
    // this.userForm.get('lName').setValue('Saleh');

    this.userForm.patchValue({
      // name: value.name,
      // lastName: value.lastName,
      // id: value.id
      ...value
    });

  }

  ngOnDestroy(): void {
    this.userForm.reset();

  }


  onSubmit(): void {
    this.formValue = this.userForm.value;
    this.messageEvent.emit(this.formValue);
    // if (this.urlId === 0) {
    //   this._service.save(this.userForm.value);
    // } else {
    //   this._service.edit(this.userForm.value);
    // }
    // this.routes.navigate(['user']);
  }

}
