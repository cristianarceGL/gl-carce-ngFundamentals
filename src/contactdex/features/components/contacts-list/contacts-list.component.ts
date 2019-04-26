import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ContactService } from '@contactdex/core/services/contact.service';
import { Contact } from '@contactdex/core/models/contact.interface';
import { ToastrService } from 'ngx-toastr';      // Alert message using NGX toastr

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})

export class ContactsListComponent implements OnInit {
  p = 1;                      // Fix for AOT compilation error for NGX pagination
  Contact: Contact[];                 // Save contacts data in contact's array.
  hideWhenNoContacts = false; // Hide contacts data table when no contact.
  noData = false;            // Showing No contact Message, when no contact in database.
  preLoader = true;          // Showing Preloader to show user data is coming for you from thre server(A tiny UX Shit)

  constructor(
    public contactService: ContactService, // Inject contact CRUD services in constructor.
    public toastr: ToastrService // Toastr service for alert message
    ) { }


  ngOnInit() {
    this.dataState(); // Initialize contact's list, when component is ready
    const s = this.contactService.GetContactsList();
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.Contact = [];
      data.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Contact.push(a as Contact);
      });
    });
  }

  // Using valueChanges() method to fetch simple list of contacts data. It updates the state of hideWhenNoContacts,
  // noData & preLoader variables when any changes occurs in contact data list in real-time.
  dataState() {
    this.contactService.GetContactsList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if (data.length <= 0) {
        this.hideWhenNoContacts = false;
        this.noData = true;
      } else {
        this.hideWhenNoContacts = true;
        this.noData = false;
      }
    });
  }

  // Method to delete contact object
  deleteContact(contact) {
    if (window.confirm('Are sure you want to delete this contact ?')) { // Asking from user before Deleting contact data.
      this.contactService.DeleteContact(contact.$key); // Using Delete contact API to delete contact.
      this.toastr.success(contact.firstName + ' successfully deleted!'); // Alert message will show up when contact successfully deleted.
    }
  }

}
