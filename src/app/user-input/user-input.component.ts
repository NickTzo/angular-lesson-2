import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Word } from '../interfaces/word';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  @Output() sendUserText = new EventEmitter<Word>();


  onSubmit(form: any) {
    console.log(form.value)
    this.sendUserText.emit(form.value as Word);
    form.reset();
  }
}
