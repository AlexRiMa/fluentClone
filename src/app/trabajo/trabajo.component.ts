import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.css']
})
export class TrabajoComponent implements OnInit {

  @Input() nombre: string;
  @Input() salario: number;
  @Input() imgUrl: string;
  @Input() skills: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
