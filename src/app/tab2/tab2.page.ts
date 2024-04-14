import { Component } from '@angular/core';
import { Cliente } from './entities/cliente';
import { Guiches } from './entities/Guiches';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  filaAtendimento: Guiches[] = [];
  filaUltimosChamados: Guiches[] = [];
  filaTodosAtendimentosConcluidos: Guiches[] = [];

  tipoAtendimento = ''; //Atributo que puxa o tipo de atendimento solicitado
  
  constructor() {}

  addToServiceQueue(){

  }
}
