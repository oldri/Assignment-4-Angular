import { Component } from '@angular/core';
import { FooterMovie } from './myClasses/FooterMovie';
import { HeaderMovie } from './myClasses/HeaderMovie';
import { headerMovieDetails } from './myClasses/HeaderMovieDetails';
import { footerMovieDetails } from './myClasses/FooterMovieDetails';
import { ContentMovie } from './myClasses/ContentMovie';
import { contentMovieDetails } from 'src/assets/data/myMovies';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment4-oldrikecaj';
  headerMovieDetails: HeaderMovie = headerMovieDetails;
  footerMovieDetails: FooterMovie = footerMovieDetails;
  contentMovieDetails: ContentMovie[] = contentMovieDetails;
}
