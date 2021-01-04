import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Prijava } from '../models/prijava';
import { Student } from '../models/student';
import { MeetupService } from '../services/meetup.service';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

  private termin: number;
  private method: string;
  public studenti: Student[];
  public prijave: Prijava[];
  public msg: string;

  constructor(private route: ActivatedRoute, private serv: MeetupService, private r: Router) { }

  ngOnInit(): void {
    this.termin = parseInt(this.route.snapshot.paramMap.get("termin"));
    this.method = this.route.snapshot.paramMap.get("method");
    this.serv.getStudenti().then((data) => this.studenti = data).catch(()=>{});
    this.serv.getPrijave().then((data) => this.prijave = data).catch(()=>{});
  }

  public send(s: Student): void {
    this.serv.getTerminById(this.termin).then((data) => {
      const p: Prijava = {
        email: s.email,
        termin: data,
        student: s
      }
      switch(this.method) {
        case "post":
          for(var pr of this.prijave) if(pr.student.id == s.id && pr.termin.id == this.termin) {
            this.msg = "Na ta termin ste ze prijavljeni."
            return;
          }
          this.serv.postPrijava(p).then((data2) => {
            this.prijave.push(data2);
            this.r.navigateByUrl("/termini");
          }).catch(()=>{});
          break;
        case "delete":
          for(var pr of this.prijave) if(pr.student.id == s.id && pr.termin.id == this.termin) {
            this.serv.removePrijava(pr.id).then(() => this.r.navigateByUrl("/termini")).catch(()=>{});
            break;
          }
          break;
        default:
          console.error("Error in method parameter!");
          break;
      }
    }).catch(()=>{});
  }

}
