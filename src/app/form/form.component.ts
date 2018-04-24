import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { TrabajosService } from '../trabajos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private trabajosService: TrabajosService, private router: Router) {

   }

  ngOnInit() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl(''),
      imgUrl: new FormControl('', Validators.required),
      salario: new FormControl(''),
      ciudad: new FormControl('', Validators.required),
      skills: new FormArray([]),
    });
  }

  onSubmit(){
    let form = this.formulario.controls;
    this.trabajosService.saveTrabajo(form.nombre.value,
    form.descripcion.value,
  form.imgUrl.value,
  form.salario.value,
  form.ciudad.value, 
  []).subscribe((resp)=>
  console.log('Trabajo guardado...'));
  this.router.navigate(['/trabajos']);
  }

}
