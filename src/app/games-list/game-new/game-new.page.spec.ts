import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameNewPage } from './game-new.page';

describe('FilmNewPage', () => {
  let component: GameNewPage;
  let fixture: ComponentFixture<GameNewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GameNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
