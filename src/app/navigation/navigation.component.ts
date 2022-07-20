import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationItem } from 'src/type';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  listNavigation: NavigationItem[];

  constructor(
    private _router: Router,
    private _navigationService: NavigationService,
    
  )
    {
      this.listNavigation = this._navigationService.listNavigation;
    }
  ngOnInit(): void {
    
  }

  handleNavigate(path: string) {
    this._router.navigate([path])
    
  }
}
