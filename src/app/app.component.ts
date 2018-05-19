import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h2>{{name}}</h2>
    <div>
      <button>New</button>
    </div>
    <br>
    <div>
      <input type="text" placeholder="search">
      <button>Search</button>
    </div>
    <br>

    <form action="" method="" id="new-form">
      <label>Date</label>
      <input type="date">
      <br>
      <label>Time</label>
      <input type="time">
      <br>
      <label>Description</label>
      <input type="text">
      <br>
      <button>Add appointment</button>
      <button id="cancel">Cancel</button>
    </form>

    <br>
    <div *ngFor="let appointment of appointments" class="appointment-card" (click)="onselect(appointment)">
      <div>id: {{appointment.id}}</div>
      <label>Date:</label>
      <input [(ngModel)]="appointment.date" placeholder="{{appointment.date}}">
      <label>Description:</label>
      <input [(ngModel)]="appointment.description" placeholder="{{appointment.description}}">
    </div>
    <div id="error-message"></div>
    `,
  styles: [`
    .appointment-card {
      border: solid 1px lightgray;
      padding: 15px 5px;
      margin-bottom: 15px;
    }

    .appointment-card:hover {
      background-color: gray;
    }
    `]
})
export class AppComponent { name     = 'Appointment App';
                            appointments = APPOINTMENTS;
                          }

export class Employee {
                      id: number;
                      date: string;
                      description : string;
                    };

const APPOINTMENTS: Appointment[] = [
  {id: 1, date: '2018-07-20 12:00:00.000', description: '1st appointment'},
  {id: 2, date: '2018-07-20 12:00:00.000', description: 'another'},
  {id: 3, date: '2018-07-20 12:00:00.000', description: 'more things to do'}
];

// Defines the AppComponent
// It is the root component of what will become a tree of nested components as the application is expanded
