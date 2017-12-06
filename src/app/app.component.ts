import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    quotes: object[];
    quote: object;
    constructor() {
        this.quotes = [];
        this.quote = {votes: 0};
    }

    compare(a, b) {
        if (a.votes > b.votes) {
            return -1;
        } else if (b.votes > a.votes) {
            return 1;
        } else {
            return 0;
        }
    }

    createQuote() {
        this.quotes.push(this.quote);
        this.quotes.sort(this.compare);
        this.quote = {votes: 0};
        console.log(this.quotes);
    }

    upvote(quote) {
        quote.votes += 1;
        this.quotes.sort(this.compare);
    }

    downvote(quote) {
        quote.votes -= 1;
        this.quotes.sort(this.compare);
    }

    deleteQuote(idx: number) {
        this.quotes.splice(idx, 1);
    }
}
