
import {Component} from '@angular/core';
import { AuthorService } from '../../services/authors.service';

@Component({
    selector: 'likes-comp',
    templateUrl: './likes.component.html',
    styles: ['./likes.component.css']
})

export class LikesComponent {
    public isButtonHighlighted: boolean;
    public numOfLikes: number;
authors;
list = "list of Authors";
constructor(authors: AuthorService) {
    this.authors = authors.getAuthors();
    console.log(this.authors);
}

increaseOrDecrease() {
    this.numOfLikes++;
}



}