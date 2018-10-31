import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDetailsComponent } from './artist-details.component';
import { Component } from '@angular/core';

@Component({
  selector: 'tab-group-basic-example',
  templateUrl: 'tab-group-basic-example.html',
  styleUrls: ['tab-group-basic-example.css'],
})
export class TabGroupBasicExample {}


describe('ArtistDetailsComponent', () => {
  let component: ArtistDetailsComponent;
  let fixture: ComponentFixture<ArtistDetailsComponent>;
  let artist: string;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
