import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { inject, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import { GameComponent } from './game.component';
import { AppStateService } from '../../services/app-state';
import { GameService, gameConfigProvider, gameStatesProvider } from '../../services/game';

describe(`Game`, () => {
  let comp: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [AppStateService, GameService, gameConfigProvider, gameStatesProvider]
    })
    .compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    comp = fixture.componentInstance;

    fixture.detectChanges(); // trigger initial data binding
  });

  it('should instantiate', () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });

});
