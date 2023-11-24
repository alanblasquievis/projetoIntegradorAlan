import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Alan de Lara Blasquievis - Resumo');
  }
}
