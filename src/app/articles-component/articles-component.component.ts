import { Component, OnInit } from '@angular/core';
import { article } from '../core/model/article';

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent implements OnInit {

  titre:string='Les articles du jour';
  listeArticles!:article[];
  c:number=0;
  

  constructor() { }

  ngOnInit(): void {
    this.listeArticles=[
      { titre : "le championnat du monde", contenu:"le champion du monde de cette année", auteur:"Med Taher" , date:"12/12/2005", categorie : "Sport"},
      { titre : "les nouveaux parents", contenu:"les nouveaux parents", auteur:"Ahmed Said" , date:"11/11/2018", categorie : "Education"},
      { titre : "Comment écrire votre CV", contenu:"Pour réussir à décraucher un emploi", auteur:"Marie Elsa" , date:"02/04/2017", categorie : "Travail"},
   
    ]
  }

  count(){
   this.listeArticles.some;
  
  
}

}
