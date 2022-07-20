import { Injectable } from '@angular/core';
import { NavigationItem } from 'src/type';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  listNavigation: NavigationItem[] = [
    {
        path: 'overview',
        label: 'Overview'
    },
    {
        path: 'allwance',
        label: 'Allwance'
    },
    {
        path: 'contract',
        label: 'Contract'
    },
    {
        path: 'welface',
        label: 'Welface'
    },
    {
      path: 'employees',
      label: 'Employees'
  },
]
  constructor() { }
}
