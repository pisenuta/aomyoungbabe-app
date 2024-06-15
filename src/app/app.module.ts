import { NgModule } from '@angular/core'
import { BrowserModule, provideClientHydration } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ReactiveFormsModule } from '@angular/forms' // Import this
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' // Required for ng-zorro-antd

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
  UserOutline,
} from '@ant-design/icons-angular/icons'
import { IconDefinition } from '@ant-design/icons-angular'

const icons: IconDefinition[] = [
  StepBackwardOutline,
  CaretLeftOutline,
  SettingOutline,
  LockOutline,
  UserOutline,
]

@NgModule({
  declarations: [AppComponent],
  imports: [
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
