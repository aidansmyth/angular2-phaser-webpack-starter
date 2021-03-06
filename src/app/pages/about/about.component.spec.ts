import { ActivatedRoute, Data } from '@angular/router';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, inject, TestBed, ComponentFixture } from '@angular/core/testing';

// Load the implementations that should be tested
import { AboutComponent } from './about.component';
import { AppStateService } from '../../services/app-state';

describe('About', () => {
  let comp: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [AppStateService]
    })
    .compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    comp = fixture.componentInstance;

    fixture.detectChanges(); // trigger initial data binding
  });

  it('should instantiate', () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });

});
