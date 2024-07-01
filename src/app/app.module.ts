import { NgModule } from '@angular/core'
import { BrowserModule, provideClientHydration } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms' // Import this
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' // Required for ng-zorro-antd
import { RouterModule } from '@angular/router'

import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzTabsModule } from 'ng-zorro-antd/tabs'

import {
  StepBackwardOutline,
  CaretLeftOutline,
  SettingOutline,
  LockOutline,
  MailOutline,
  EyeOutline,
  EyeInvisibleOutline,
} from '@ant-design/icons-angular/icons'
import { IconDefinition } from '@ant-design/icons-angular'
import { SignInComponent } from './sign-in/sign-in.component'
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './sign-in/child/child.component';
import { SignUpComponent } from './sign-up/sign-up.component'

const icons: IconDefinition[] = [
  StepBackwardOutline,
  CaretLeftOutline,
  SettingOutline,
  LockOutline,
  MailOutline,
  EyeOutline,
  EyeInvisibleOutline,
]

@NgModule({
  declarations: [AppComponent, SignInComponent, HomeComponent, ChildComponent, SignUpComponent],
  imports: [
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule.forChild(icons),
    NzInputModule,
    NzFormModule,
    NzCheckboxModule,
    NzCardModule,
    NzTabsModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
