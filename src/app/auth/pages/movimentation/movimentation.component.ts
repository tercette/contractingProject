import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-movimentation',
  templateUrl: './movimentation.component.html',
  styleUrls: ['./movimentation.component.scss']
})
export class MovimentationComponent implements ErrorStateMatcher {
  value = 1;
  operationType : string = 'Credit';
  types: string[] = ['Credit', 'Debit']
  inputValue = null

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  getValue(inputValue:number){
    let operation = {value: inputValue, operation: this.operationType}
    console.log(inputValue, this.operationType)
    this.inputValue = null
    this.operationType = 'Credit'
  }

}
