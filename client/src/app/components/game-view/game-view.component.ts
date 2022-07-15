import { Component, HostBinding, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {

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

}
