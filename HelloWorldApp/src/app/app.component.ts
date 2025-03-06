import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorldApp';
  imgUrl = "../assets/images/BL_logo_square_jpg.jpg";
  url = "https://www.bridgelabz.com";
  
  ngOnInit(): void {
    this.title = "HELLO FROM BRIDGELABZ";
  }

  onClick(event: Event): void {
    console.log("Save Button is clicked!", event);
    window.open(this.url, "_blank");
  }
}

