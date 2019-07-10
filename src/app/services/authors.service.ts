
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {

    constructor(http: Http) {
        http.get("http://jsonplaceholder.typicode.com/users")
        .pipe(map(res => res.json()))
        .subscribe((res:Response) => res);

    }

    displaydata(data) {
        console.log("hello sharath:", data);
        return data;
    }

    // getAuthors() {
    //     return [
    //                 {
    //                     "id": 1,
    //                     "name": "Jonathan Murphy",
    //                     "email": "Tristin83@gmail.com",
    //                     "phone": "001-904-3992",
    //                     "city": "Ericland",
    //                     "country": "Saint Barthelemy",
    //                     "title": "Global Directives Consultant"
    //                 }
    //             ]
    // }

}