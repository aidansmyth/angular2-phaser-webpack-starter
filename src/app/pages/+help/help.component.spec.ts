import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { inject, async, TestBed, ComponentFixture } from '@angular/core/testing';
import { BaseRequestOptions, ConnectionBackend, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import { AppStateService } from '../../services/app-state';
import { HelpComponent } from './help.component';

describe(`Help`, () => {
  let comp: HelpComponent;
  let fixture: ComponentFixture<HelpComponent>;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelpComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [AppStateService]
    })
    .compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(HelpComponent);
    comp = fixture.componentInstance;

    fixture.detectChanges(); // trigger initial data binding
  });

  it('should instantiate', () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });

});
