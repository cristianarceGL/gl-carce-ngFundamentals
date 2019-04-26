import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Contact, Contactdex } from '@contactdex/core/models/contact.interface';
import { ApiService } from './api/api.service';
import { catchError, map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactsRef: AngularFireList<any>;    // Reference to contact data list, its an Observable
  contactRef: AngularFireObject<any>;   // Reference to contact object, its an Observable too

  constructor(private apiService: ApiService,
              private db: AngularFireDatabase) {}

  private handleError(error: any): Observable<any> {
    return throwError(console.error('Some error occured', error));
  }

  // Create contact
  AddContact(contact: Contact) {
    this.contactsRef.push({
      id: Math.floor(Math.random() * 10000) + 1000,
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      phone: contact.phone
    });
  }

  // Fetch Single contact Object
  GetContact(id: string) {
    this.contactRef = this.db.object('contacts-list/' + id);
    return this.contactRef;
  }

  // Fetch contacts List
  GetContactsList() {
    this.contactsRef = this.db.list('contacts-list');
    return this.contactsRef;
  }

  // Update contact Object
  UpdateContact(contact: Contact) {
    this.contactRef.update({
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      phone: contact.phone
    });
  }

  // Delete contact Object
  DeleteContact(id: string) {
    this.contactRef = this.db.object('contacts-list/' + id);
    this.contactRef.remove();
  }

}
