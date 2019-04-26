import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CapitalPipe } from '@contactdex/shared/pipes/capital.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CapitalPipe],
  exports: [CapitalPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule]
})
export class SharedModule {}
