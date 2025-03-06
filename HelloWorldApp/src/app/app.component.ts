import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello from BridgeLabz.';
  imgUrl = "assets/images/BL_logo_square_jpg.jpg"; 
  url = "https://www.bridgelabz.com/experienced-engineers";
  userName: string = "";

  ngOnInit(): void {
    this.title = "HELLO FROM BRIDGELABZ";
  }

  onClick($event: Event) { 
    console.log("Save button is clicked", $event);
    window.open(this.url, "_blank");
  }
}
