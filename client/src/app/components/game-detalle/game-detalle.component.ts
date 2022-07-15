import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-game-detalle',
  templateUrl: './game-detalle.component.html',
  styleUrls: ['./game-detalle.component.css']
})
export class GameDetalleComponent implements OnInit {

  identificador: any;
  contador = 1;

  @HostBinding('class') clases = 'row';
  

  game: any = {
    id: 0,
    title: '',
    precio: 0,
    description: '',
    image: '',
    created_at: new Date()
  };

  constructor(private gameService: GamesService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {

    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.gameService.getGame(params['id'])
        .subscribe(
          res => {
            console.log(res);
            this.game = res;
            const totalinput = document.getElementById('PagoTotal')?.setAttribute('value', this.game.precio);
          },
          err => console.log(err)
        )
    }
  }

  public sumaInput() {
    this.contador++;
    var precios = this.game.precio * this.contador;
    var detalle = precios.toString();
    var contadorF = this.contador.toString();
    const precioinput = document.getElementById('cantidad')?.setAttribute('value', contadorF);
    const totalinput = document.getElementById('PagoTotal')?.setAttribute('value', detalle);
  }

  public restaInput(cantidad: string) {
    var cantidadProductos = parseInt(cantidad);
    if (cantidadProductos === 1) {
      this.contador = 1;
    } else {
      this.contador--;
      var element = document.getElementById('totalPagar');
      var precios = this.game.precio * this.contador;
      var detalle = precios.toString();
      var contadorF = this.contador.toString();
      const precioinput = document.getElementById('cantidad')?.setAttribute('value', contadorF);
      const totalinput = document.getElementById('PagoTotal')?.setAttribute('value', detalle);
    }
  }

  showModal(){
    Swal.fire('Done','Compra Realizada','success')      
  }

}