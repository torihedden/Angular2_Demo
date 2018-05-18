import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{name}}</h1>
    <div><a href="{{docLink}}">Documentation</a></div>
    <div><h2>{{title}}</h2></div>
    <div *ngFor="let employee of employees" class="employee-card" (click)="onselect(employee)">
      <div>id: {{employee.id}}</div>
      <label>First name:</label>
      <input [(ngModel)]="employee.firstName" placeholder="{{employee.firstName}}">
      <label>Last name:</label>
      <input [(ngModel)]="employee.lastName" placeholder="{{employee.lastName}}">
    </div>
    `,
  styles: [`
    .employee-card {
      border: solid 1px lightgray;
      padding: 15px 5px;
      margin-bottom: 15px;
    }

    .employee-card:hover {
      background-color: gray;
    }
    `]
})
export class AppComponent { name     = 'Angular 2.4.10';
                            docLink  = 'https://v2.angular.io/docs/ts/latest/guide/learning-angular.html';
                            title    = 'Employee List';
                            employees = EMPLOYEES;
                          }

export class Employee {
                      id: number;
                      firstName: string;
                      lastName : string;
                    };

const EMPLOYEES: Employee[] = [
  {id: 1, firstName: 'Tori', lastName: 'Hedden'},
  {id: 2, firstName: 'Marcus', lastName: 'Estremera'},
  {id: 3, firstName: 'Jasmine', lastName: 'Baik'}
];

// Defines the AppComponent
// It is the root component of what will become a tree of nested components as the application is expanded
