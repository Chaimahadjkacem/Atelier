import { Component, OnInit } from '@angular/core';
import * as internal from 'stream';
import { Emploi } from '../core/model/emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {

  listEmploi!:Emploi[];
  c:number=0;
  message!:number;
  e!:Emploi;
  

  constructor() { }

  ngOnInit(): void {
    this.listEmploi=[
      {reference: "1", titre: "Responsable", entreprise: "CAT", etat: true},
      {reference: "2", titre: "Ouvrier", entreprise: "SOTUFAB", etat: false },
      {reference: "3", titre: "Responsable", entreprise: "ACTIA", etat: true } ]
  }

  count(i:number){
    if (this.listEmploi[i].etat == true){
      this.c++;
    }
    this.message = this.c
  }

  Search(search: string){
    if (search) {
      for (let index = 0; index < this.listEmploi.length; index++) {
        if(this.listEmploi[index].entreprise==search){
          this.e=this.listEmploi[index];
          this.listEmploi.length=0;
          this.listEmploi[0]=this.e;
        }     
      }
    }
  }
 
}

