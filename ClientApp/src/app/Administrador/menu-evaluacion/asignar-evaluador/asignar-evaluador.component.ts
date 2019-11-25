import { Component, OnInit } from '@angular/core';
import { Docente } from '../../../models/docente';
import { DocenteServiceService } from '../../../services/docente.service';

@Component({
  selector: 'app-asignar-evaluador',
  templateUrl: './asignar-evaluador.component.html',
  styleUrls: ['./asignar-evaluador.component.css']
})
export class AsignarEvaluadorComponent implements OnInit {

  docentes : Docente[];
  constructor(private docenteservice:DocenteServiceService)
  { }
  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.docenteservice.getActivosAdministrativos().subscribe(docentes=>this.docentes=docentes);
  }

}
