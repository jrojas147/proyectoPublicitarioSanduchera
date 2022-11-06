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

  get nameNoValid() {
    return this.registerContact.get('nameClient').invalid && this.registerContact.get('nameClient').touched;
  }

  get emailNoValid() {
    return this.registerContact.get('emailClient').invalid && this.registerContact.get('emailClient').touched;
  }

  get thelephoneNoValid() {
    return this.registerContact.get('thelephoneClient').invalid && this.registerContact.get('thelephoneClient').touched;
  }

  get notesNoValid() {
    return this.registerContact.get('NotesClient').invalid && this.registerContact.get('NotesClient').touched;
  }



  procesForm(){
    alert("Proceso Registrado")
  }

}
