import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-herder',
  templateUrl: './herder.component.html',
  styleUrls: ['./herder.component.css']
})
export class HerderComponent implements OnInit {

  constructor( public infoPaginaService: InfoPaginaService,
              private router: Router) { }

  ngOnInit() {
  }

   buscarProducto( termino: string){
     if(termino.length < 1){
      return;
     }
     this.router.navigate(['/search', termino]);
    //console.log(termino);
   }
  
}
