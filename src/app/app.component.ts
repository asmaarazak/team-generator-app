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

  //ErrorHandling State
  errorMessage = '';

  addMember() {
    if (!this.newMember) {
      this.errorMessage = 'Name cannot be empty. Please enter name';
      return;
    }
    this.members.push(this.newMember);
    this.newMember = '';
  }

  onInput(member: string) {
    this.newMember = member;
  }
}
