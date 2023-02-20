import { Component, OnInit } from '@angular/core';
import { Atelier } from '../core/model/atelier';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  atelier!:Atelier;
  isDisabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.atelier=new Atelier;
  }

}
