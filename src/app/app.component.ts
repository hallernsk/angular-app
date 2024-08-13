import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';

  // Новые свойства
  message = 'Angular — это здорово!';
  isSpecial = false;

  // Метод для обработки клика
  sayHello() {
    this.message = 'Вы нажали на кнопку!';
  }

  toggleSpecial() {
    this.isSpecial = !this.isSpecial;
  }
}
