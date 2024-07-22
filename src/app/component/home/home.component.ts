import { Component, OnInit } from '@angular/core';
import { AzureAdDemoService } from 'src/app/azure-ad-demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  constructor(private AzureDemoService: AzureAdDemoService) {}
  ngOnInit(): void {
    this.AzureDemoService.isUserLoggedIn.subscribe((x) => {
      this.isUserLoggedIn = x;
    });
  }
}
