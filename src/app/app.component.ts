import { Component } from '@angular/core';
import { ExampleService } from './example.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ExampleService]
})
export class AppComponent {
  //title = 'My First Angular project!';
  title: string;

  constructor(private_exampleService: ExampleService) {

  }
  ngOnInit(){
    
  }
}
