import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.page.html',
  styleUrls: ['./games-list.page.scss'],
})
export class GamesListPage implements OnInit {
  games!: Array<Game>;

  constructor(
    private Game: GameService
  ) { }

  ngOnInit() {
    this.Game.getAll().subscribe((data: any) => {
      this.games = data;
      console.log(this.games);
    });
  }

}
