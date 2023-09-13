import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario!: string ; // Inicialize as propriedades
  senha!: string ;

  constructor() {}

  ngOnInit(): void {}

  // Função para lidar com o clique no botão de login
  fazerLogin(): void {
    console.log('Usuário: ', this.usuario);
    console.log('Senha: ', this.senha);
    // Aqui você pode realizar a lógica de autenticação
  }
  putDataBase(){

  }
}
