import { Component, OnInit } from '@angular/core';
import { Termin } from '../models/termin';
import { MeetupService } from '../services/meetup.service';

@Component({
  selector: 'app-termini',
  templateUrl: './termini.component.html',
  styleUrls: ['./termini.component.css']
})
export class TerminiComponent implements OnInit {

  public ts: Termin[]; 
  public term: Termin = undefined;

  constructor(private serv: MeetupService) { }

  ngOnInit(): void {
    this.serv.getTermini().then(data => this.ts = data).catch(()=>{});
  }

  public getDetails(t: Termin): void {
    this.term = t;
  } 

}
