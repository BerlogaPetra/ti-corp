import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@ti-corp/api-interfaces';

@Component({
  selector: 'ti-corp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
