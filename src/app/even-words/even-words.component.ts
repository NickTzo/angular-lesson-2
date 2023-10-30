import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Word } from '../interfaces/word';



@Component({
  selector: 'app-even-words',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './even-words.component.html',
  styleUrls: ['./even-words.component.css']
})
export class EvenWordsComponent {
  @Input() answer: Word | undefined = {
    userText: ""
  }
}
