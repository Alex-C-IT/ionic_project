export class Game {
    
    id?: string;
    title: string;
    pictureLink: string;
    developer: string;
    publisher: string;
    designer: string;
    programmer: string;
    artist: string;
    writer: string;
    composer: string;
    platform: string;
    releaseDate: string;
    genre: string;
    mode: string;
    synopsis: string;
    possessed: boolean;

    constructor() {
        this.id = '';
        this.pictureLink = '';
        this.title = '';
        this.developer = '';
        this.publisher = '';
        this.designer = '';
        this.programmer = '';
        this.artist = '';
        this.writer = '';
        this.composer = '';
        this.platform = '';
        this.releaseDate = '';
        this.genre = '';
        this.mode = '';
        this.synopsis = '';
        this.possessed = false;
    }
}
