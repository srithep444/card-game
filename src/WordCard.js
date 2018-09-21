import React, { Component } from "react";
import CharacterCard from "./CharacterCard";
import _ from "lodash";

const prepareStateFromWord = given_word => {
  let word = given_word.toUpperCase();
  let chars = _.shuffle(Array.from(word));
  return {
    word,
    chars,
    attempt: 1,
    guess: [],
    completed: false
  };
};

export default class WordCard extends Component {
  constructor(props){
    super(props)
    this.state = prepareStateFromWord(this.props.value)
  }

  activateHandler = c => {
    let guess = this.state.guess + c;

    console.log("guess : " + guess.length);
    console.log("word : " + this.state.word.length);

    this.setState({ guess });
    if (guess.length == this.state.word.length) {
      if (guess == this.state.word) {
        this.setState({ guess: "", complete: true });
      } else {
        this.setState({ guess: "", attempt: this.state.attempt + 1 });
      }
    }
  };

  render() {
    return (
      <div className="App">
        <h2>Hint: Spiderman,Ironman,Thanos,Captian America. </h2>
        {Array.from(this.state.chars).map((c, i) => (
          <CharacterCard
            value={c}
            key={i}
            attempt={this.state.attempt}
            activateHandler={this.activateHandler}
          />
        ))}
        <h2>{this.state.complete? "You Win!!!" : "Select word here."}</h2> 
        <iframe width="560" height="315" src="https://www.youtube.com/embed/FlI4D59nH7I?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    );
  }
}
