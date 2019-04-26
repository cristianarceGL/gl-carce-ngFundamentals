import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '@contactdex/core/services/contact.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})

export class AddContactComponent implements OnInit {
  public contactForm: FormGroup;  // Define FormGroup to student's form

  constructor(private router: Router,
              private contactService: ContactService,  // CRUD API services
              public fb: FormBuilder,       // Form Builder service for Reactive forms
              public toastr: ToastrService  // Toastr service for alert message
  ) { }

  ngOnInit() {
    this.contactService.GetContactsList();  // Call GetStudentsList() before main form is being called
    this.studenForm();              // Call student form when component is ready
  }

  // Reactive student form
  studenForm() {
    this.contactForm = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: [''],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  // Accessing form control using getters
  get firstId() {
    return this.contactForm.get('id');
  }

  get firstName() {
    return this.contactForm.get('firstName');
  }

  get lastName() {
    return this.contactForm.get('lastName');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  // Reset student form's values
  ResetForm() {
    this.contactForm.reset();
  }

  submitContactData() {
    this.contactService.AddContact(this.contactForm.value); // Submit student data using CRUD API
    this.toastr.success(this.contactForm.controls['firstName'].value + ' successfully added!'); // Show success message
    this.ResetForm();  // Reset form when clicked on reset button
    this.router.navigate(['view-students']); // Go to contatcs list
   }

}
