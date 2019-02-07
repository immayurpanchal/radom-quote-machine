import React, { Component } from "react";
import "./quote.css";

class Quote extends Component {
  state = {
    quotes: [
      "People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily.",
      "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
      "Life shrinks or expands in proportion to one’s courage.",
      "Either you run the day, or the day runs you.",
      "You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.",
      "A truly rich man is one whose children run into his arms when his hands are empty",
      "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live."
    ],
    authors: [
      "Mayur",
      "Michael Jordan",
      "Anais Nin",
      "Jim Rohn",
      "Unknown",
      "Unknown",
      "Mae Jemison"
    ],
    index: 0
  };

  getNewQuote() {
    const index = Math.round(Math.random() * 10) % this.state.quotes.length;
    this.setState({
      index
    });
  }

  render() {
    return (
      <div id="quote-box" className="card shadow-lg p-3 w-50 mx-auto mt-5 border-round-15 align-middle">
        <div className="card-body">
          <div id="text" className="h2">{this.state.quotes[this.state.index]}</div>
          <div id="author" className="text-right lead">- {this.state.authors[this.state.index]}</div>
          <div className="mt-3">
            
            <a id="tweet-quote" href="twitter.com/intent/tweet" className="float-left">
              <i className="fa fa-twitter-square font-size-40px"></i>
            </a>

            <button id="new-quote" onClick={this.getNewQuote.bind(this)} className="btn btn-danger text-right float-right">
              New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Quote;
