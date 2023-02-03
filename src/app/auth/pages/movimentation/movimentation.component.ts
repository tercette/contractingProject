import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-movimentation',
  templateUrl: './movimentation.component.html',
  styleUrls: ['./movimentation.component.scss']
})
export class MovimentationComponent implements ErrorStateMatcher {
  value = 'Clear me';
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);



}
