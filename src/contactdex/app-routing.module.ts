import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Use RouterModule, Routes for activating routing in angular
import { RouterModule, Routes } from '@angular/router';

// Include components for in which router service to be used
import { AddContactComponent } from '@contactdex/features/components/add-contact/add-contact.component';
import { EditContactComponent } from '@contactdex/features/components/edit-contact/edit-contact.component';
import { ContactsListComponent } from '@contactdex/features/components/contacts-list/contacts-list.component';

// Routes array define component along with the path name for url
const routes: Routes = [
  { path: '', redirectTo: '/view-contacts', pathMatch: 'full' },
  { path: 'register-contact', component: AddContactComponent },
  { path: 'view-contacts', component: ContactsListComponent },
  { path: 'edit-contact/:id', component: EditContactComponent },
  { path: '**', redirectTo: '/view-contacts'}
];

// Import RouterModule and inject routes array in it and dont forget to export the RouterModule
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
