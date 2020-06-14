import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  username: string = '';
  inputStatus: boolean = false;

  onMatchingInput(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
    this.inputStatus = this.username !== '';
  }

  onResetInput() {
    this.username = '';
    this.inputStatus = false;
  }
}
