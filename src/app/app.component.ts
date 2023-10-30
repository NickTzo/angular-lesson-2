import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInputComponent } from './user-input/user-input.component';
import { Word } from './interfaces/word';
import { EvenWordsComponent } from './even-words/even-words.component';
import { OddWordsComponent } from './odd-words/odd-words.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserInputComponent, EvenWordsComponent, OddWordsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  @Output() sendOdd = new EventEmitter<Word>();
  @Output() sendEven = new EventEmitter<Word>();
  usersText: Word | undefined;

  onSubmit(text: Word) {
    console.log(text.userText);
    this.usersText = text;
    if ((this.usersText.userText!.length % 2) == 0) {
      console.log(text, "odd")
      this.sendEven.emit(this.usersText);
    } else {
      console.log(text, "even")
      this.sendOdd.emit(this.usersText);
    }
  }
}

