import { Component, OnInit, Input } from '@angular/core';
import { HeaderMovie } from 'src/app/myClasses/HeaderMovie';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() headerMovieDetails!: HeaderMovie;

  constructor(){}

  ngOnInit(): void {

  }

}
