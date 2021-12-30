import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatIconModule } from "@angular/material/icon";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule
  ]
})
export class MatModuleModule { }
