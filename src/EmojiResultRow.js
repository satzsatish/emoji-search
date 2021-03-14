import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./EmojiResultRow.css";
//import emojiList from "./emojiList.json";

export default class EmojiResultsRow extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string,
   // emojiArray : PropTypes.array
  };

  removeItemHandler = (value) => {
   this.props.removeItem(value);
  }
  render() {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    //console.log(this.props.title);
    return (
      //console.log(emojiArray)
      <div
        className="component-emoji-result-row copy-to-clipboard"
        data-clipboard-text={this.props.symbol}
      >
        <img alt={this.props.title} src={src} />
        <span className="title">{this.props.title}</span>
        <span className="info">Click to copy emoji</span>
        
      </div>
    );
  }
}
