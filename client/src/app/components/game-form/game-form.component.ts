
import { Component, HostBinding, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import {Game} from '../../models/Game';
import { GamesService } from '../../services/games.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})


export class GameFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';
 
     game: any = {
       id:0,
       title: '',
       precio: 0,
       description:'',
       image:'',
       created_at: new Date()

    };

    edit: boolean = false;
    
  constructor(private gameService: GamesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.gameService.getGame(params['id'])
        .subscribe(
          res => {
            console.log(res);
            this.game=res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewGame(){
    delete this.game.created_at;
    delete this.game.id;

    this.gameService.saveGame(this.game)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/games']);
      },
      err => console.error(err)
    )
  }

  updateGame(){
    delete this.game.created_at;
    this.gameService.updateGame(this.game.id, this.game)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/games']);
      },
      err => console.error(err)
    )
  }   
}
