import { Injectable } from '@angular/core';
import { Trabajo } from './trabajo';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class TrabajosService {

  private URL = 'https://fluentclone.firebaseio.com/trabajos';

  constructor(private http: HttpClient) {

   }

   getTrabajo(){

   }

   getTrabajos(){
     return this.http.get(this.URL+'.json').map((resp)=>{
       console.log(resp);
       let trabajos = [];
       for(let id in resp){
        let t = resp[id];
        trabajos.push(new Trabajo(id, t.nombre, t.descripcion, t.imgUrl, t.ciudad, t.skills, t.salario));
       }
       return trabajos;
     });

   }

   saveTrabajo(nombre, descripcion, imgUrl, salario, ciudad, skills){
    
    const nuevoTrabajo = {
      nombre: nombre,
      descripcion: descripcion,
      imgUrl: imgUrl,
      salario: salario,
      ciudad: ciudad,
      skills: skills
    };
    console.log('')
    return this.http.post(this.URL+'.json', nuevoTrabajo);
   }

   deleteTrabajo(){

   }

   updateTrabajo(){

   }

}
