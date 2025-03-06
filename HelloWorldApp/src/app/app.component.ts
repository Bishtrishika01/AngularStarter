import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports:[RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HelloWorldApp';
  imgUrl = "../assets/images/BL_logo_square_jpg.jpg";
  
  ngOnInit(): void{
    this.title = "HELLO FROM BRIDGELABZ";
  }
}
