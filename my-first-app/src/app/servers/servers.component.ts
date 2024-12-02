import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  standalone: false,

  templateUrl: `<app-server></app-server><app-server></app-server>`,
  // templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {}
