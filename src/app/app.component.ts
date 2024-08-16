import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { FormComponent } from './components/form/form.component';
// import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';

  // Новое свойство
  message = 'Angular — это здорово!';

}
