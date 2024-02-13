import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-Login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
