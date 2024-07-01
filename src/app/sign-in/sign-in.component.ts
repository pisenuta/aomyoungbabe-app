import { Component, ViewChild } from '@angular/core'
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms'
import { ChildComponent } from './child/child.component'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  title = 'signin'
  form: FormGroup<{
    email: FormControl<string>
    password: FormControl<string>
  }> = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })

  getErrorEmailMsg(): string | undefined {
    const emailControl = this.form.get('email')

    if (emailControl!.hasError('required')) {
      return 'Please fill out this field.'
    }

    if (emailControl!.hasError('email')) {
      return 'This is not a valid email format.'
    }

    return undefined
  }

  submitForm(): void {
    if (this.form.valid) {
      console.log('submit', this.form.value)
    } else {
      Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty()
          control.updateValueAndValidity({ onlySelf: true })
        }
      })
    }
  }

  constructor(private fb: NonNullableFormBuilder, private http: HttpClient) {}

  passwordVisible = false

  //sirisoft
  name: string = ''
  condition: boolean = true
  text: string = 'Hello, Angular!'

  onClick() {
    this.text = 'already click ka'
  }

  // ngif with Else Condition / ngStyle /ngClass /ngFor /ngSwitch
  isAvailable = true
  bgColor = 'yellow'
  isActive = true
  items = ['Apple', 'Banana', 'Cherry']
  currentView = 'view1'

  //child
  ///ViewChild
  @ViewChild(ChildComponent)
  childComponent!: ChildComponent

  showString() {
    this.childComponent.myString = 'Pleng'
  }

  birthday = new Date(1988, 3, 15)

  posts!: any[]

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data: any) => {
      this.posts = data
    })
  }
}
