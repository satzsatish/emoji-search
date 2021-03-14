import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
//import filterEmoji from "./filterEmoji";

export default class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			search : "",
			searchedFilter :[],
			filteredEmoji: [{
				"title": "Grinning",
				"symbol": "😀",
				"keywords": "grinning face happy smiley emotion emotion"
			},
			{
				"title": "Grimacing",
				"symbol": "😬",
				"keywords": "grimacing face silly smiley emotion emotion selfie selfie"
			},
			{
				"title": "Grin",
				"symbol": "😁",
				"keywords":
				"grinning face with smiling eyes happy silly smiley emotion emotion good good selfie selfie"
			},
			{
				"title": "Joy",
				"symbol": "😂",
				"keywords":
				"face with tears of joy happy silly smiley cry laugh laugh emotion emotion sarcastic sarcastic"
			},
			{
				"title": "Smiley",
				"symbol": "😃",
				"keywords":
				"smiling face with open mouth happy smiley emotion emotion good good"
			},
			{
				"title": "Smile",
				"symbol": "😄",
				"keywords":
				"smiling face with open mouth and smiling eyes happy smiley emotion emotion"
			}]/*filterEmoji("", 20)*/
		};
	}

	handleSearchChange = event => {
		var array = [...this.state.filteredEmoji];
		if(event.target.value !== ""){
			var sta=array.filter(emoji => {
		      if (emoji.title.toLowerCase().includes(event.target.value.toLowerCase())) {
		        return true;
		      }
		      /*if (emoji.keywords.includes(event.target.value)) {
		        return true;
		      }*/
		      //return false;
		    }).slice(0, 3);
		  	console.log(sta);
			this.setState({
				searchedFilter: sta,
				search :'Y'
				 //filterEmoji(event.target.value, 20)
			});
		}else{
			this.setState({
				search:''
				 //filterEmoji(event.target.value, 20)
			});
		}
	};
removeItemHandler = (va) => {
    //var sta=[];
    let array=[...this.state.filteredEmoji];
    let index = array.findIndex((element, index) => {
      if (element.title === va) {
        return true
      }
    })
    console.log(index);
   	let sta=array.splice(index, 1);
    console.log(array);
     this.setState({
        filteredEmoji: array,
        search :''
      });
  }
	render() {
		console.log("he");
		let emojiResut1;
		if(this.state.search === 'Y'){
			emojiResut1=this.state.searchedFilter;
			console.log(emojiResut1);
		}else{
		 	emojiResut1=this.state.filteredEmoji;
		}
		return (
			<div>
			<Header />
			<SearchInput textChange={this.handleSearchChange} />
			<EmojiResults emojiData={emojiResut1} 
			 removeItem={this.removeItemHandler} />	
			</div>
			);
		}
	}
