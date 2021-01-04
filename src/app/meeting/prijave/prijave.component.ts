import { Component, OnInit } from '@angular/core';
import { Prijava } from '../models/prijava';
import { Termin } from '../models/termin';
import { MeetupService } from '../services/meetup.service';

@Component({
  selector: 'app-prijave',
  templateUrl: './prijave.component.html',
  styleUrls: ['./prijave.component.css']
})
export class PrijaveComponent implements OnInit {

  public termini: Termin[];
  public prijave: Prijava[];
  public msg: string;

  constructor(private serv: MeetupService) { }

  ngOnInit(): void {
    this.serv.getTermini().then(data => this.termini = data).catch(()=>{});
    this.serv.getPrijave().then(data => this.prijave = data).catch(()=>{});
  }

  public filterPrijave(tid: number): Prijava[] {
    var ret: Prijava[] = [];
    for(var p of this.prijave) {
      if(p.termin.id == tid) ret.push(p);
    }
    return ret;
  }

  public confirm(p: Prijava): void {
    this.serv.putPrijava(p).then(data => {
      for(var i=0; i<this.prijave.length; i++) if(this.prijave[i].id == data.id) {
        this.prijave[i] = data;
        break;
      }
      this.msg = "Done!";
    }).catch(()=>this.msg = "Error!");
  }

}
