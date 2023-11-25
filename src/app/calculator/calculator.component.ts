import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DateResult, calculateAge } from '../date-result';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})

export class CalculatorComponent {
  placeholderDD: String = 'DD';
  placeholderMM: String = 'MM';
  placeholderYYYY: String = 'YYYY';
  messageYYYY: string = 'years';
  messageMM: string = 'months';
  messageDD: string = 'days';
  spanMessageYYYY: string = '--';
  spanMessageMM: string = '--';
  spanMessageDD: string = '--';
  btnClick:boolean = false;

  inputDD = new FormControl('', [
    Validators.required,Validators.pattern("^[0-9]*$"),
    Validators.max(31),
    Validators.min(1),
  ]);
  inputMM = new FormControl('', [
    Validators.required,Validators.pattern("^[0-9]*$"),
    Validators.max(12),
    Validators.min(1),
  ]);
  inputYYYY = new FormControl('', [
    Validators.required,Validators.pattern("^[0-9]*$"),
    Validators.max(new Date().getFullYear()),
    Validators.min(1000),
  ]);

  constructor() {}

  public calculate() {
    this.btnClick = true;
    const result = calculateAge(new Date(this.inputYYYY.value+"/"+this.inputMM.value+"/"+this.inputDD.value+"/"));
    if(this.inputDD.valid && this.inputMM.valid && this.inputYYYY.valid){
      this.spanMessageYYYY = result.yyyy.toString();
      this.spanMessageMM = result.mm.toString();
      this.spanMessageDD = Math.round(result.dd).toString();
    }else{
      this.spanMessageYYYY = '--';
      this.spanMessageMM = '--';
      this.spanMessageDD = '--';
    }
  }
}
