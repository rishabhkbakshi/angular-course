import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbcComponent } from './abc/abc.component';
import { AbcInputComponent } from './abc-input/abc-input.component';
import { AbcNgInputComponent } from './abc-ng-model/abc-ng-model.component';
import { ContentAndContainerComponent } from './content-and-container-and-template/content-and-container-and-template.component';
import { InputCompoComponent } from './input-compo/input-compo.component';
import { MatInputComponent } from './mat-input/mat-input.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatModuleModule } from 'src/app/mat-module/mat-module.module';

@NgModule({
  declarations: [
    AbcComponent,
    AbcInputComponent,
    AbcNgInputComponent,
    InputCompoComponent,
    MatInputComponent,
    ContentAndContainerComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatModuleModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule
   ],
  exports: [
    AbcComponent,
    AbcInputComponent,
    AbcNgInputComponent,
    InputCompoComponent,
    MatInputComponent,
    ContentAndContainerComponent,
  ],
  providers: [],
})
export class LearningConceptsModule {}
