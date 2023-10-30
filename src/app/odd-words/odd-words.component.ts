import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Word } from '../interfaces/word';


@Component({
  selector: 'app-odd-words',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './odd-words.component.html',
  styleUrls: ['./odd-words.component.css']
})
export class OddWordsComponent {
  @Input() answer: Word | undefined = {
    userText: ""
  };
}
