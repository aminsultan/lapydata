import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactivefrm',
  templateUrl: './reactivefrm.component.html',
  styleUrls: ['./reactivefrm.component.css']
})
export class ReactivefrmComponent implements OnInit {
  fname = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }
  updatefun(){
    this.fname.setValue("hey we changed the code");
    console.log(this.profileForm.value)
  }
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
}
