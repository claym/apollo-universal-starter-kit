import { Component, Input } from '@angular/core';
import { FormGroupState } from 'ngrx-forms';
import { ItemType } from './FormItem';

export interface FormInput {
  id: string;
  name: string;
  value: string;
  type?: string;
  placeholder?: string;
  inputType: ItemType;
  options?: any[];
  minLength?: number;
  required?: boolean;
}

@Component({
  selector: 'ausk-form',
  template: `
    <div *ngIf="loading">Loading...</div>
    <form *ngIf="!loading" name="{{formName}}" (ngSubmit)="onSubmit(formState[formName].value)" [ngrxFormState]="formState">
      <div [ngClass]="{'form-group': fi.inputType !== 2, 'form-check': fi.inputType === 2}" *ngFor="let fi of form">

        <form-item [itemType]="fi.inputType"
                   [formInput]="fi"
                   [form]="formState[formName]">
        </form-item>

      </div>
      <button type="submit" id="register-submit-btn" class="btn btn-primary" [disabled]="formState[formName].isInvalid || submitting">{{btnName}}</button>
    </form>
  `
})
export default class {
  @Input() public btnName: string;
  @Input() public onSubmit: any;
  @Input() public loading: boolean;
  @Input() public submitting: boolean;
  @Input() public formName: string;
  @Input() public formState: FormGroupState<any>;
  @Input() public form: FormInput[];

  constructor() {}

  public setChanges(data: any) {}
}