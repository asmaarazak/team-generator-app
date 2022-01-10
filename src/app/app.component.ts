import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team-app';
  newMember = '';
  members: string[] = [];

  addMember() {
    this.members.push(this.newMember);
    console.log(this.members)
    this.newMember = '';
  }

  onInput(member: string) {
    this.newMember = member;
    console.log(this.newMember);
  }
}
