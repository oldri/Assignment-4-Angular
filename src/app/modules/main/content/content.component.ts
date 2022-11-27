import { Component, OnInit, Input } from '@angular/core';
import { ContentMovie } from 'src/app/myClasses/ContentMovie';

export interface contentMovieDetailsScreening {
  name: string;
  showTime: string;
}

const screenOne: contentMovieDetailsScreening[] = [
  {name: "Avatar", showTime: "1:15 PM"},
  {name: "Nope", showTime: "6:35 PM"},
]

const screenTwo: contentMovieDetailsScreening[] = [
  {name: "SpiderHead", showTime: "9:45 PM"},
  {name: "Avatar", showTime: "10:45 PM"},
]

const screenThree: contentMovieDetailsScreening[] = [
  {name: "Ticket To Paradise", showTime: "5:45 PM"},
  {name: "Batman", showTime: "9:45 PM"},
]

const screenFour: contentMovieDetailsScreening[] = [
  {name: "Black Adam", showTime: "8:25 PM"},
  {name: "Nope", showTime: "3:35 PM"},
]

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() contentMovieDetails!: ContentMovie[];
  screenOne = screenOne;
  screenTwo = screenTwo;
  screenThree = screenThree;
  screenFour = screenFour;

  displayedColumns: string[] = ['name', 'genre', 'runningTime', 'dateOfRelease', 'rating', 'ageRestriction'];
  displayedColumnsScreeningOne: string[] = ['name', 'showTime'];

  constructor(){}

  ngOnInit(): void {

  }

}



