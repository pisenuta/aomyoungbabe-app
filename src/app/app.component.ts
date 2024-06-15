import { Component } from '@angular/core'
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'old-todo'
  validateForm: FormGroup<{
    email: FormControl<string>
    password: FormControl<string>
    remember: FormControl<boolean>
  }> = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true],
  })

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

  index1 = 0
  index2 = 1
}
