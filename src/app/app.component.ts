import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  numero: number
  escolher(){
    this.numero =  Math.floor(Math.random() * 6) + 1
  }



  // nome;
  // idade = 20
  // esconderCaixa = false
  
  // alterarNome(evento){
  //   //console.log(nome)
  //   console.log(evento.target.value)
  //   this.nome = evento.target.value
  // }

  // adicionar(nomeInput){
  //   console.log("Adicionando...")
  //   console.log(nomeInput.value)
  //   this.nome = nomeInput.value
  // }

}
