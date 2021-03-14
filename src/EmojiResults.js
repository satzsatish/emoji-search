import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";
import "./EmojiResultRow.css";
//import EmojiResultRow from "./EmojiResultRow";
import "./EmojiResults.css";

export default class EmojiResults extends PureComponent {
  static propTypes = {
    emojiData: PropTypes.array,
  };

  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }
  
  render() {
    return (

      <div className="component-emoji-results">
        { this.props.emojiData.map(emojiData => (
          /*<EmojiResultRow
            key={emojiData.title}
            symbol={emojiData.symbol}
            title={emojiData.title}
            removeEmoji={}
          />*/
          
          <div className="component-emoji-result-row copy-to-clipboard" data-clipboard-text={this.props.symbol}>
          <img alt={emojiData.title} src={`//cdn.jsdelivr.net/emojione/assets/png/${emojiData.symbol.codePointAt(0).toString(16)}.png`} />
          <span className="title">{emojiData.title}</span>
          <span className="info">Click to copy emoji</span>
          <button className="info" onClick={() => this.props.removeItem(emojiData.title)}>Remove</button>
          </div>
        ))}
        </div>
    );
  }
}
