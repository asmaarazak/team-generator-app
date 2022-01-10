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
  teams: string[][] = [];

  //ErrorHandling State
  errorMessage = '';

  //Logic Generate State
  numberOfTeams: number | "" = "";

  addMember() {
    if (!this.newMember) {
      this.errorMessage = 'Name cannot be empty. Please enter name';
      return;
    }
    this.members.push(this.newMember);
    this.newMember = '';
    this.errorMessage = '';
  }

  onInput(member: string) {
    this.newMember = member;
  }

  onNumberOfTeams(teams: string) {
    this.numberOfTeams = Number(teams);
  }

  generateTeams() {

    this.teams = [];
    if (this.members.length < this.numberOfTeams) {
      this.errorMessage = 'Not enough members';
      return;
    }

    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = 'Invalid number of teams';
      return;
    }

    const allMembers = [...this.members];

    this.errorMessage = '';

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];

        if (!member) { break; }

        if (this.teams[i]) {
          this.teams[i].push(member);
        }
        else {
          this.teams[i] = [member];
        }
      }
    }
    this.members = [];
    this.numberOfTeams = "";
  }
}
