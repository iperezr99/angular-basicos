import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes        : string[] = ['Spiderman','Batman','Hulk', 'Thor'];
  heroesBorrados: string = '';

  borrarHeroe () {
    this.heroesBorrados = this.heroes.shift() || '';
    console.log('Borrando a ... !', this.heroesBorrados); 
  }
    
}
