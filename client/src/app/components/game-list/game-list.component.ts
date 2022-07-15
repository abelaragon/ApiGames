
import { Component, HostBinding, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

@HostBinding('class') classes = 'row';
   games: any = [];

  constructor(private gamesServices: GamesService) { }

  ngOnInit(): void {
    
    this.getGames();
    
  }

  getGames(){
    this.gamesServices.getGames().subscribe(
      res => {
       this.games = res;
      },
      err => console.error(err) 
      );
  }

  deleteGame(id:string){
     this.gamesServices.deleteGame(id).subscribe(
       res => {
         console.log(res)
         this.getGames();
       },
       err => console.log(err)
     )
  }
}
