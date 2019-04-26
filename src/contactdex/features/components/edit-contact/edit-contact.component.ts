import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Contact } from '@contactdex/core/models/contact.interface';
// import { CrudService } from '../shared/crud.service';
import { ContactService } from '@contactdex/core/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router'; // ActivatedRoue is used to get the current associated components information.
import { Location } from '@angular/common';  // Location service is used to go back to previous component
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})

export class EditContactComponent implements OnInit {
  editForm: FormGroup;  // Define FormGroup to contact's edit form

  constructor(
    private contactService: ContactService,       // Inject CRUD API in constructor
    private fb: FormBuilder,            // Inject Form Builder service for Reactive forms
    private location: Location,         // Location service to go back to previous component
    private actRoute: ActivatedRoute,   // Activated route to get the current component's inforamation
    private router: Router,             // Router service to navigate to specific component
    private toastr: ToastrService       // Toastr service for alert message
  ) { }

  ngOnInit() {
    this.updateContactData();   // Call updateContactData() as soon as the component is ready
    const id = this.actRoute.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service
    this.contactService.GetContact(id).valueChanges().subscribe(data => {
      this.editForm.setValue(data); // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive form
    });
  }

  // Accessing form control using getters
  get firstName() {
    return this.editForm.get('firstName');
  }

  get lastName() {
    return this.editForm.get('lastName');
  }

  get email() {
    return this.editForm.get('email');
  }

  get phone() {
    return this.editForm.get('phone');
  }

  // Contains Reactive Form logic
  updateContactData() {
    this.editForm = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: [''],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  // Go back to previous component
  goBack() {
    this.location.back();
  }

  // Below methods fire when somebody click on submit button
  updateForm() {
    this.contactService.UpdateContact(this.editForm.value);       // Update contact data using CRUD API
    this.toastr.success(this.editForm.controls['firstName'].value + ' updated successfully');   // Show succes message
    this.router.navigate(['view-contacts']);               // Navigate to student's list page when student data is updated
  }

}
