import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption } from './radio-option.model';
import {NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[]

  value: any
  onChange: any

  /*Metodo chamado pelas diretivas quando elas 
    querem passar um valor para o componente */
  writeValue(obj: any): void {
    this.value = obj
  }

  /* Passa uma funcao e deve ser chamada sempre que o valor interno mudar */
  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  /* Registra quando o usuario entra no component, nao sera implementado */
  registerOnTouched(fn: any): void {}
  //Nao sera implementado
  setDisabledState?(isDisabled: boolean): void {}

  constructor() { }

  ngOnInit() {
  }

  setValue(value:any){
    this.value = value
    this.onChange(this.value)
  }

}
