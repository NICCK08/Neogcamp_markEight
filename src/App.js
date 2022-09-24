import React from "react";
import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "😊": "Smiling",
  "😌": "Relieved Face",
  "😘": "Face Blowing a Kiss",
  "❤️": "Red Heart",
  "✨": "Sparkles",
  "😎": "Smiling Face with Sunglasses"
};
var emojiweknow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    //console.log(meaning);
    if (meaning == undefined) {
      meaning = " we don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Inside out!!</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>emojis we know </h3>
      {emojiweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem 1rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
