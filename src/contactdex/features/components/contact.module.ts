import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AddContactComponent } from '@contactdex/features/components/add-contact/add-contact.component';
import { EditContactComponent } from '@contactdex/features/components/edit-contact/edit-contact.component';
import { ContactsListComponent } from '@contactdex/features/components/contacts-list/contacts-list.component';

import { SharedModule } from '@contactdex/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AddContactComponent, EditContactComponent, ContactsListComponent],
  exports: [AddContactComponent, EditContactComponent, ContactsListComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxPaginationModule, RouterModule, SharedModule]
})
export class ContactModule {}
