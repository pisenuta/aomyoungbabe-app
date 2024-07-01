import { Component } from '@angular/core'
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'login'
  validateForm: FormGroup<{
    email: FormControl<string>
    password: FormControl<string>
  }> = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })

  getErrorEmailMsg(): string | undefined {
    const emailControl = this.validateForm.get('email')

    if (emailControl!.hasError('required')) {
      return 'Please fill out this field.'
    }

    if (emailControl!.hasError('email')) {
      return 'This is not a valid email format.'
    }

    return undefined
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value)
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty()
          control.updateValueAndValidity({ onlySelf: true })
        }
      })
    }
  }

  constructor(private fb: NonNullableFormBuilder) {}

  passwordVisible = false
}
