import { Component, OnInit } from '@angular/core';

interface ComponentItem {
  icon: string;
  title: string;
  routerLink: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  components: ComponentItem[] = [
    {
      icon: 'american-football-outline',
      title: 'Action Sheet',
      routerLink: '/action-sheet',
    },
    {
      icon: 'logo-apple-appstore',
      title: 'Alert',
      routerLink: '/alert',
    },
    {
      icon: 'beaker-outline',
      title: 'Avatar',
      routerLink: '/avatar',
    },
    {
      icon: 'radio-button-off-outline',
      title: 'Buttons',
      routerLink: '/buttons',
    },
    {
      icon: 'card-outline',
      title: 'Cards',
      routerLink: '/cards',
    },
    {
      icon: 'checkmark-circle-outline',
      title: 'Checkbox',
      routerLink: '/checkbox',
    },
    {
      icon: 'calendar-outline',
      title: 'DateTime',
      routerLink: '/date-time',
    },
    {
      icon: 'car-outline',
      title: 'Fab',
      routerLink: '/fab',
    },
    {
      icon: 'grid-outline',
      title: 'Grid System',
      routerLink: '/grid',
    },
    {
      icon: 'infinite-outline',
      title: 'Infinite Scroll',
      routerLink: '/infinite-scroll',
    },
    {
      icon: 'hammer-outline',
      title: 'Input Forms',
      routerLink: '/inputs',
    },
    {
      icon: 'list-outline',
      title: 'List',
      routerLink: '/list',
    },
    {
      icon: 'reorder-three-outline',
      title: 'List - Reorder',
      routerLink: '/list-reorder',
    },
    {
      icon: 'refresh-circle-outline',
      title: 'Loading',
      routerLink: '/loading',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
