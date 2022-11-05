import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  registerContact: FormGroup;

  

  constructor(public formBuilder: FormBuilder) { 
   this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.registerContact = this.formBuilder.group({
      nameClient: ['',  [Validators.required]],
      emailClient: ['',  [Validators.required]],
      thelephoneClient: [null, Validators.required],
      NotesClient: ['',  [Validators.required]],
    });
  }

}
