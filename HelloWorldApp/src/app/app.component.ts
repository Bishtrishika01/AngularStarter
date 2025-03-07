import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello from BridgeLabz.';
  imgUrl = "assets/images/BL_logo_square_jpg.jpg"; 
  url = "https://www.bridgelabz.com/experienced-engineers";
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void {
    this.title = "HELLO FROM BRIDGELABZ";
  }

  onClick(event: Event) { 
    console.log("Save button clicked!", event);
    window.open(this.url, "_blank");
  }

  onInput():void {
    const nameRegex = RegExp(`^[A-Z]{1}[a-zA-Z\s]{2,}$`);
    if (nameRegex.test(this.userName)) {
      this.nameError = "Name is Correct!";
      return;
    } else {
      this.nameError = "Name is Incorrect!";
    }
  }
}
