import {
  Component,
  OnInit
} from '@angular/core';
import {
  DocenteServiceService
} from '../../../services/docente.service';
import {
  Docente
} from '../../../models/docente';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms'

@Component({
  selector: 'app-agregar-docentes',
  templateUrl: './agregar-docentes.component.html',
  styleUrls: ['./agregar-docentes.component.css']
})
export class AgregarDocentesComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private docenteservice: DocenteServiceService, private formBuilder: FormBuilder) {}
  docente: Docente;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      identificacion: ['', Validators.required],
      primerNombre: ['', Validators.required],
      segundoNombre: [''],
      primerApellido: ['', Validators.required],
      segundoApellido: [''],
      genero: ['', Validators.required],
      //fechaNacimiento:  ['', Validators.required], 
      correo: ['', Validators.required],
      estado: [''],
      //telefono:  ['', Validators.required],
      cargo: ['', Validators.required],
      programa: ['', Validators.required],
      facultad: ['', Validators.required],
    });

    this.docente = new Docente();
  }

  add() {

    this.docenteservice.add(this.docente)
      .subscribe();
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.add();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
