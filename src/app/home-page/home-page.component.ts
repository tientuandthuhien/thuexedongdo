import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../enviroment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  private apiUrl :string ='';
  constructor(
    private http: HttpClient,
    ) {
      this.apiUrl = environment.backendUrl.toString();
    }
    ngOnInit(){
      debugger;
      let x = this.getCarsFromServer();
      console.log(x);
    }
 
  getCarsFromServer() {
    // const url = 'http://localhost:3000/getCars'; // Replace with the appropriate backend server URL
    const url  = this.apiUrl + '/cars'
    this.http.get(url).subscribe(
      (response) => {
        console.log(response); // Handle the response from the server
      },
      (error) => {
        console.error('Error calling getCars API:', error);
      }
    );
  }
  
}
