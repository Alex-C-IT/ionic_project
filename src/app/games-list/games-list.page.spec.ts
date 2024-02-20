import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GamesListPage } from './games-list.page';

describe('GamesListPage', () => {
  let component: GamesListPage;
  let fixture: ComponentFixture<GamesListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GamesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
