
// import { Http } from '@angular/http';

export class AuthorService {

    getAuthors() {
        return [
                    {
                        "id": 1,
                        "name": "Jonathan Murphy",
                        "email": "Tristin83@gmail.com",
                        "phone": "001-904-3992",
                        "city": "Ericland",
                        "country": "Saint Barthelemy",
                        "title": "Global Directives Consultant"
                    }
                ]
        
    }

    // getData(http: Http) {
        // this.http.get("http://jsonplaceholder.typicode.com/users").map(
        //    (response) ⇒ response.json()
        // ).subscribe(
        //    (data) ⇒ {this.displaydata(data);}
        // )
   
    // }
}