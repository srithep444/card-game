import React, { Component } from "react";
import CharacterCard from "./CharacterCard";
export default class WordCard extends Component {
  activate = c => {
    console.log(`${c} has been activated.`);
  };

  activateHandler = c => {
    console.log(`${c} has been activate`);
  };
  render() {
    return (
      <div>
        {Array.from(this.props.value).map((c, i) => (
          <CharacterCard
            value={c}
            key={i}
            activationHandler={this.activateHandler}
          />
        ))}
        ))}
      </div>
    );
  }
}
