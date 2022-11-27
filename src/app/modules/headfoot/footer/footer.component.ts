import { Component, OnInit, Input } from '@angular/core';
import { FooterMovie } from 'src/app/myClasses/FooterMovie';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() footerMovieDetails!: FooterMovie;

  currentDate: number = Date.now();

  constructor(){}

  ngOnInit(): void {

  }

}
