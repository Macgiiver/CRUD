import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../interface/user-interface';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
})
export class UserDialogComponent {
  userForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.userForm = this.formBuilder.group({
      Nombre: [data.Nombre, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      Edad: [data.Edad, [Validators.required, Validators.pattern('^[0-9]{1,2}$'), this.ageRangeValidator]],
      CorreoElectronico: [data.CorreoElectronico, [Validators.required, Validators.email]],
      Telefono: [data.Telefono, [Validators.pattern('^\\+?[0-9]*$')]],
      Ocupacion: [data.Ocupacion, [Validators.pattern('[a-zA-Z ]*')]]
    });
  }

  ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const age = parseInt(control.value, 10);
    if (isNaN(age) || age < 0 || age > 99) {
      return { 'invalidAge': true };
    }
    return null;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const formData = { ...this.userForm.value };

    if (this.data._id) {
      formData.new = false;
      formData.Id = this.data.Id;
      formData._id = this.data._id
    }
    this.dialogRef.close(formData);
  }



  send(formData: any): void {
    this.dialogRef.close(formData);
  }


  retrieveFormDataFromLocalStorage(): void {
    const formDataString = localStorage.getItem('formData');
    if (formDataString) {
      const formData = JSON.parse(formDataString);
    } else {
    }
  }


}
